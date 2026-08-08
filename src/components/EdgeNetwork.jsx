import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

const GLOBE_RADIUS = 1;
const NODE_COUNT = 9;
const PROBE_POOL = 4;

function useNodePositions(count, radius) {
  return useMemo(() => {
    const pts = [];
    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      pts.push(new THREE.Vector3(Math.cos(phi) * r * radius, y * radius, Math.sin(phi) * r * radius));
    }
    return pts;
  }, [count, radius]);
}

function Globe() {
  const ref = useRef();
  useFrame((_, delta) => { ref.current.rotation.y += delta * 0.035; });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 32, 32]} />
        <meshBasicMaterial color="#0A0E1A" transparent opacity={0.6} />
      </mesh>
      <mesh scale={1.001}>
        <icosahedronGeometry args={[GLOBE_RADIUS, 3]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

// Nodes fade in permanently once a probe docks — network only ever grows, never resets
function DeploymentNodes({ nodes, litRef }) {
  const meshRefs = useRef([]);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRefs.current.forEach((m, i) => {
      if (!m) return;
      const lit = litRef.current[i];
      const targetOpacity = lit ? 0.9 : 0.12;
      m.material.opacity += (targetOpacity - m.material.opacity) * 0.06;
      const pulse = lit ? 1 + Math.sin(t * 2 + i) * 0.15 : 1;
      m.scale.setScalar(pulse * 0.045);
    });
  });
  return (
    <group>
      {nodes.map((pos, i) => (
        <mesh key={i} ref={(el) => (meshRefs.current[i] = el)} position={pos}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={2} transparent opacity={0.12} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

// Permanent connecting lines accumulate between lit nodes — same visual grammar as the hero constellation
function GrowingEdges({ nodes, edgesRef }) {
  const maxEdges = nodes.length;
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxEdges * 2 * 3), 3));
    geo.setDrawRange(0, 0);
    return geo;
  }, [maxEdges]);

  useFrame(() => {
    const edges = edgesRef.current;
    const pos = geometry.attributes.position.array;
    edges.forEach(([a, b], i) => {
      pos.set([nodes[a].x, nodes[a].y, nodes[a].z], i * 6);
      pos.set([nodes[b].x, nodes[b].y, nodes[b].z], i * 6 + 3);
    });
    geometry.attributes.position.needsUpdate = true;
    geometry.setDrawRange(0, edges.length * 2);
  });

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#3B82F6" transparent opacity={0.3} />
    </lineSegments>
  );
}

// Probe arcs in on a curved path and docks at a node — a delivery, not a collision
function Probe({ nodes, litRef, onLand, delay = 0 }) {
  const meshRef = useRef();
  const [cycle, setCycle] = useState(0);
  const s = useRef({ phase: 'waiting', t: 0, wait: delay, curve: null, targetIndex: 0 });

  const pickTarget = () => {
    const unlit = nodes.map((_, i) => i).filter((i) => !litRef.current[i]);
    const pool = unlit.length ? unlit : nodes.map((_, i) => i);
    const targetIndex = pool[Math.floor(Math.random() * pool.length)];
    const target = nodes[targetIndex];
    const start = target.clone().normalize().multiplyScalar(3.4)
      .add(new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(1.4));
    const mid = target.clone().normalize().multiplyScalar(2.2)
      .add(new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.9));
    s.current.curve = new THREE.QuadraticBezierCurve3(start, mid, target);
    s.current.targetIndex = targetIndex;
  };

  useFrame((_, delta) => {
    const st = s.current;
    const m = meshRef.current;
    if (!m) return;

    if (st.phase === 'waiting') {
      st.wait -= delta;
      m.visible = false;
      if (st.wait <= 0) {
        pickTarget();
        st.t = 0;
        st.phase = 'traveling';
        setCycle((c) => c + 1);
      }
      return;
    }

    m.visible = true;
    st.t += delta / 1.8;
    if (st.t >= 1) {
      const idx = st.targetIndex;
      const wasUnlit = !litRef.current[idx];
      litRef.current[idx] = true;
      if (wasUnlit) onLand(idx);
      st.phase = 'waiting';
      st.wait = 1.5 + Math.random() * 3;
      setCycle((c) => c + 1);
      return;
    }
    m.position.copy(st.curve.getPoint(st.t));
  });

  return (
    <Trail key={cycle} width={2} length={4} color="#22D3EE" attenuation={(t) => t * t}>
      <mesh ref={meshRef} visible={false}>
        <sphereGeometry args={[0.028, 8, 8]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </Trail>
  );
}

export function EdgeNetwork() {
  const nodes = useNodePositions(NODE_COUNT, GLOBE_RADIUS);
  const litRef = useRef(null);
  const edgesRef = useRef([]);
  if (litRef.current === null) {
    litRef.current = new Array(NODE_COUNT).fill(false);
    litRef.current[0] = true; // seed node — first point the network builds from
  }

  const handleLand = (idx) => {
    let nearest = -1, nearestDist = Infinity;
    litRef.current.forEach((lit, i) => {
      if (!lit || i === idx) return;
      const d = nodes[i].distanceTo(nodes[idx]);
      if (d < nearestDist) { nearestDist = d; nearest = i; }
    });
    if (nearest !== -1) edgesRef.current.push([nearest, idx]);
  };

  return (
    <group>
      <Globe />
      <DeploymentNodes nodes={nodes} litRef={litRef} />
      <GrowingEdges nodes={nodes} edgesRef={edgesRef} />
      {Array.from({ length: PROBE_POOL }).map((_, i) => (
        <Probe key={i} nodes={nodes} litRef={litRef} onLand={handleLand} delay={i * 1.3} />
      ))}
    </group>
  );
}

export default EdgeNetwork;

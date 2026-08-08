import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 22;
const CONNECT_DISTANCE = 1.05;
const RADIUS = 1.5;

// Even, deliberate node placement — not scattered randomness
function useFibonacciSphere(count, radius) {
  return useMemo(() => {
    const pts = [];
    const offset = 2 / count;
    const increment = Math.PI * (3 - Math.sqrt(5)); // golden angle

    for (let i = 0; i < count; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      pts.push(new THREE.Vector3(Math.cos(phi) * r * radius, y * radius, Math.sin(phi) * r * radius));
    }
    return pts;
  }, [count, radius]);
}

// Connect nodes that sit close enough to read as a network, not noise
function useEdges(nodes, maxDist) {
  return useMemo(() => {
    const edges = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) edges.push([i, j]);
      }
    }
    return edges;
  }, [nodes, maxDist]);
}

function Nodes({ nodes, color = '#22D3EE' }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current?.children.forEach((mesh, i) => {
      const pulse = 1 + Math.sin(t * 1.6 + i * 0.7) * 0.25; // async breathing, offset per node
      mesh.scale.setScalar(pulse * 0.05);
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function Edges({ nodes, edges, color = '#3B82F6' }) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 2 * 3);
    edges.forEach(([a, b], i) => {
      positions.set([nodes[a].x, nodes[a].y, nodes[a].z], i * 6);
      positions.set([nodes[b].x, nodes[b].y, nodes[b].z], i * 6 + 3);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [nodes, edges]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.22} />
    </lineSegments>
  );
}

// A point of light that travels one edge at a time — like a data packet moving through the graph
function DataPulse({ nodes, edges, color = '#FFFFFF' }) {
  const ref = useRef();
  const s = useRef({ edgeIndex: 0, t: 0, wait: Math.random() });

  useFrame((_, delta) => {
    if (!ref.current || edges.length === 0) return;
    const st = s.current;

    if (st.wait > 0) {
      st.wait -= delta;
      ref.current.visible = false;
      return;
    }

    st.t += delta * 0.6;
    ref.current.visible = true;

    if (st.t >= 1) {
      st.t = 0;
      st.edgeIndex = Math.floor(Math.random() * edges.length);
      st.wait = 0.3 + Math.random() * 1.2;
    }

    const [a, b] = edges[st.edgeIndex];
    ref.current.position.lerpVectors(nodes[a], nodes[b], st.t);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.028, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} toneMapped={false} />
    </mesh>
  );
}

function Constellation() {
  const tiltRef = useRef();
  const spinRef = useRef();
  const nodes = useFibonacciSphere(NODE_COUNT, RADIUS);
  const edges = useEdges(nodes, CONNECT_DISTANCE);

  useFrame((state, delta) => {
    if (spinRef.current) {
      spinRef.current.rotation.y += delta * 0.08; // slow continuous drift
      spinRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.12;
    }
    if (tiltRef.current) {
      const targetY = state.mouse.x * 0.25;
      const targetX = -state.mouse.y * 0.15;
      tiltRef.current.rotation.y += (targetY - tiltRef.current.rotation.y) * 0.04;
      tiltRef.current.rotation.x += (targetX - tiltRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={tiltRef}>
      <group ref={spinRef}>
        <Edges nodes={nodes} edges={edges} color="#3B82F6" />
        <Nodes nodes={nodes} color="#22D3EE" />
        <DataPulse nodes={nodes} edges={edges} color="#FFFFFF" />
        <DataPulse nodes={nodes} edges={edges} color="#22D3EE" />
      </group>
    </group>
  );
}

const HeroConstellation = () => {
  return (
    <div className="relative w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#3B82F6" />
        <Constellation />
      </Canvas>
    </div>
  );
};

export default HeroConstellation;

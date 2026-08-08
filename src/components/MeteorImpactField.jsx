import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

const PLANET_RADIUS = 1;
const IMPACT_POOL_SIZE = 5;
const METEOR_COUNT = 3;

// ---------- Planet ----------
function Planet() {
  const coreRef = useRef();
  const wireRef = useRef();

  useFrame((_, delta) => {
    coreRef.current.rotation.y += delta * 0.03;
    wireRef.current.rotation.y += delta * 0.025;
  });

  return (
    <group>
      <mesh ref={coreRef}>
        <sphereGeometry args={[PLANET_RADIUS, 48, 48]} />
        <meshStandardMaterial color="#0A0E1A" roughness={0.7} metalness={0.3} />
      </mesh>
      {/* technical wireframe shell — "digital planet" read, ties to the rest of the theme */}
      <mesh ref={wireRef} scale={1.01}>
        <icosahedronGeometry args={[PLANET_RADIUS, 2]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.12} />
      </mesh>
      {/* soft atmosphere glow — cheap backside-additive trick, no custom shader */}
      <mesh scale={1.18}>
        <sphereGeometry args={[PLANET_RADIUS, 32, 32]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.12} side={THREE.BackSide} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

// ---------- Fixed-size impact pool (reused slots, no per-impact allocation/GC churn) ----------
function useImpactPool(size) {
  const slots = useRef(
    Array.from({ length: size }, () => ({
      active: false, t: 0,
      position: new THREE.Vector3(),
    }))
  );
  const spawn = (position) => {
    const free = slots.current.find((s) => !s.active);
    if (!free) return;
    free.active = true;
    free.t = 0;
    free.position.copy(position);
  };
  return { slots, spawn };
}

function ImpactPool({ slots }) {
  const ringRefs = useRef([]);
  const flashRefs = useRef([]);
  const DURATION = 1.1;

  useFrame((_, delta) => {
    slots.current.forEach((slot, i) => {
      const ring = ringRefs.current[i];
      const flash = flashRefs.current[i];
      if (!slot.active) {
        if (ring) ring.visible = false;
        if (flash) flash.visible = false;
        return;
      }
      slot.t += delta;
      const progress = slot.t / DURATION;
      if (progress >= 1) { slot.active = false; return; }

      if (ring) {
        ring.visible = true;
        ring.position.copy(slot.position).multiplyScalar(1.005);
        ring.lookAt(0, 0, 0); // flush against the surface, facing outward
        ring.scale.setScalar(0.05 + progress * 0.45);
        ring.material.opacity = 0.7 * (1 - progress);
      }
      if (flash) {
        flash.visible = true;
        flash.position.copy(slot.position).multiplyScalar(1.01);
        const fp = Math.min(progress / 0.25, 1);
        flash.scale.setScalar(0.12 * (1 - fp) + 0.02);
        flash.material.opacity = 1 - fp;
      }
    });
  });

  return (
    <group>
      {slots.current.map((_, i) => (
        <React.Fragment key={i}>
          <mesh ref={(el) => (flashRefs.current[i] = el)} visible={false}>
            <sphereGeometry args={[1, 12, 12]} />
            <meshBasicMaterial color="#FFFFFF" transparent depthWrite={false} />
          </mesh>
          <mesh ref={(el) => (ringRefs.current[i] = el)} visible={false}>
            <ringGeometry args={[0.7, 1, 32]} />
            <meshBasicMaterial color="#22D3EE" transparent side={THREE.DoubleSide} depthWrite={false} blending={THREE.AdditiveBlending} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
}

// ---------- Meteor: arcs in from off-screen, strikes a random point on the planet ----------
function Meteor({ onImpact, delay = 0 }) {
  const meteorRef = useRef();
  const [cycle, setCycle] = useState(0); // remount key — clears the Trail's stale points on each pass
  const s = useRef({ phase: 'waiting', t: 0, waitTime: delay, start: new THREE.Vector3(), target: new THREE.Vector3() });
  const TRAVEL_DURATION = 1.4;

  const resetPath = () => {
    const dir = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
    s.current.target.copy(dir).multiplyScalar(PLANET_RADIUS);
    s.current.start.copy(dir)
      .add(new THREE.Vector3(Math.random() * 0.6 - 0.3, Math.random() * 0.6 - 0.3, Math.random() * 0.6 - 0.3))
      .normalize().multiplyScalar(4.5);
  };

  useFrame((_, delta) => {
    const st = s.current;
    const m = meteorRef.current;
    if (!m) return;

    if (st.phase === 'waiting') {
      st.waitTime -= delta;
      m.visible = false;
      if (st.waitTime <= 0) {
        resetPath();
        st.t = 0;
        st.phase = 'traveling';
        setCycle((c) => c + 1);
      }
      return;
    }

    m.visible = true;
    st.t += delta / TRAVEL_DURATION;
    if (st.t >= 1) {
      m.position.copy(st.target);
      onImpact(st.target);
      st.phase = 'waiting';
      st.waitTime = 2.5 + Math.random() * 4;
      setCycle((c) => c + 1); // clear trail immediately on impact, no stale blob left behind
      return;
    }
    const eased = Math.pow(st.t, 2.2); // slow start, accelerates in — gravity feel
    m.position.lerpVectors(st.start, st.target, eased);
  });

  return (
    <Trail key={cycle} width={2.5} length={5} color="#22D3EE" attenuation={(t) => t * t}>
      <mesh ref={meteorRef} visible={false}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>
    </Trail>
  );
}

// ---------- Drop this whole group into your existing <Canvas> ----------
export function MeteorImpactField() {
  const { slots, spawn } = useImpactPool(IMPACT_POOL_SIZE);
  return (
    <group>
      <Planet />
      <ImpactPool slots={slots} />
      {Array.from({ length: METEOR_COUNT }).map((_, i) => (
        <Meteor key={i} delay={i * 1.6} onImpact={spawn} />
      ))}
    </group>
  );
}

export default MeteorImpactField;

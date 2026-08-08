import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import EdgeNetwork from './EdgeNetwork';

// Generates random star particles
function Starfield() {
  const ref = useRef();
  
  // 5000 stars in a sphere radius of 1.5
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    const sizes = new Float32Array(5000);
    for (let i = 0; i < 5000; i++) {
      const r = 1.5 + Math.random() * 2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      sizes[i] = Math.random();
    }
    return [positions, sizes];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#4D96FF" size={0.005} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  );
}

function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      {/* CSS Ambient Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[150px] mix-blend-screen opacity-50"></div>
      
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        {/* Dark ambient light to keep shadows deep */}
        <ambientLight intensity={0.2} />
        {/* Strong directional light acting as a sun */}
        <directionalLight position={[5, 3, 5]} intensity={2} color="#ffffff" />
        {/* Subtle rim light from the opposite side */}
        <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#3B82F6" />
        
        <Suspense fallback={null}>
          <Starfield />
          <group position={[2.2, -0.8, -1.5]} scale={0.9}>
            <EdgeNetwork />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default SpaceBackground;
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Ring, Stars } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
          emissive="#083344"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

function OrbitRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.4;
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.3;
      ring2Ref.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.8} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.8} />
      </mesh>
    </>
  );
}

function FloatingTechElements() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating cube 1 */}
      <mesh position={[-2.8, 1.8, -1]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#38bdf8" wireframe />
      </mesh>

      {/* Floating octahedron */}
      <mesh position={[2.6, -1.5, 0.5]}>
        <octahedronGeometry args={[0.5]} />
        <meshStandardMaterial color="#c084fc" wireframe />
      </mesh>

      {/* Floating tetrahedron */}
      <mesh position={[-2.2, -1.8, 0]}>
        <tetrahedronGeometry args={[0.4]} />
        <meshStandardMaterial color="#34d399" wireframe />
      </mesh>
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-[450px] lg:h-[550px] relative rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#c084fc" />
        
        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1.5} />
        
        <AnimatedSphere />
        <OrbitRings />
        <FloatingTechElements />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}

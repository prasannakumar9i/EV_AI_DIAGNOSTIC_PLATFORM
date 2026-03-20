import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function BatteryModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Battery Pack Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 1.5, 2.5]} />
        <meshStandardMaterial
          color="#001a33"
          metalness={0.9}
          roughness={0.1}
          emissive="#00aaff"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Internal Cells (Glowing) */}
      <group position={[0, 0, 0]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={i} position={[(i % 4) - 1.5, (Math.floor(i / 4) % 3) * 0.4 - 0.4, 0]}>
            <boxGeometry args={[0.6, 0.3, 2]} />
            <meshStandardMaterial
              color="#00ff88"
              emissive="#00ff88"
              emissiveIntensity={0.8}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      {/* Electric Particles */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[0.05, 16, 16]} position={[2.5, 0, 0]}>
          <MeshDistortMaterial
            color="#00aaff"
            speed={5}
            distort={0.6}
            emissive="#00aaff"
            emissiveIntensity={2}
          />
        </Sphere>
      </Float>
      
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[0.03, 16, 16]} position={[-2.5, 0.5, 0.5]}>
          <MeshWobbleMaterial
            color="#00ff88"
            speed={10}
            factor={0.8}
            emissive="#00ff88"
            emissiveIntensity={2}
          />
        </Sphere>
      </Float>
    </group>
  );
}

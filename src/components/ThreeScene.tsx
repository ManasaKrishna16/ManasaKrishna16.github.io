import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, RoundedBox, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Floating Phone/Device Component
const FloatingDevice = ({ 
  position = [0, 0, 0] as [number, number, number], 
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1,
  color = '#ff6b4a'
}) => {
  const mesh = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        rotation[1] + mouse.x * 0.3,
        0.05
      );
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        rotation[0] + mouse.y * 0.2,
        0.05
      );
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={mesh} position={position} scale={scale}>
        {/* Phone body */}
        <RoundedBox args={[1, 2, 0.1]} radius={0.1} smoothness={4}>
          <meshPhysicalMaterial
            color="#1a1a2e"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </RoundedBox>
        {/* Screen */}
        <RoundedBox args={[0.85, 1.75, 0.02]} radius={0.05} smoothness={4} position={[0, 0, 0.06]}>
          <meshPhysicalMaterial
            color={color}
            metalness={0.1}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        {/* UI Elements on screen */}
        <RoundedBox args={[0.6, 0.15, 0.01]} radius={0.02} position={[0, 0.6, 0.08]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
        </RoundedBox>
        <RoundedBox args={[0.7, 0.4, 0.01]} radius={0.02} position={[0, 0.1, 0.08]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </RoundedBox>
        <RoundedBox args={[0.3, 0.1, 0.01]} radius={0.02} position={[-0.15, -0.4, 0.08]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
        </RoundedBox>
        <RoundedBox args={[0.3, 0.1, 0.01]} radius={0.02} position={[0.2, -0.4, 0.08]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
        </RoundedBox>
      </group>
    </Float>
  );
};

// Floating Laptop Component
const FloatingLaptop = ({ 
  position = [0, 0, 0] as [number, number, number],
  scale = 1 
}) => {
  const mesh = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        -0.3 + mouse.x * 0.2,
        0.03
      );
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + 1) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={mesh} position={position} scale={scale} rotation={[-0.2, -0.3, 0]}>
        {/* Screen */}
        <group position={[0, 0.8, -0.4]} rotation={[-0.3, 0, 0]}>
          <RoundedBox args={[2.2, 1.4, 0.08]} radius={0.05} smoothness={4}>
            <meshPhysicalMaterial
              color="#1a1a2e"
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
            />
          </RoundedBox>
          {/* Display */}
          <RoundedBox args={[2, 1.2, 0.02]} radius={0.03} position={[0, 0, 0.05]}>
            <meshPhysicalMaterial
              color="#16213e"
              emissive="#ff6b4a"
              emissiveIntensity={0.15}
              metalness={0.1}
              roughness={0.3}
            />
          </RoundedBox>
          {/* Code lines on screen */}
          {[0.4, 0.2, 0, -0.2, -0.4].map((y, i) => (
            <RoundedBox 
              key={i} 
              args={[0.3 + Math.random() * 1.2, 0.06, 0.01]} 
              radius={0.01} 
              position={[-0.5 + i * 0.1, y, 0.07]}
            >
              <meshBasicMaterial 
                color={i % 2 === 0 ? '#ff6b4a' : '#4ecdc4'} 
                transparent 
                opacity={0.8} 
              />
            </RoundedBox>
          ))}
        </group>
        {/* Keyboard base */}
        <RoundedBox args={[2.4, 0.08, 1.6]} radius={0.03} smoothness={4} position={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
            clearcoat={0.5}
          />
        </RoundedBox>
        {/* Keyboard keys */}
        <RoundedBox args={[2, 0.02, 1.2]} radius={0.02} position={[0, 0.05, 0.1]}>
          <meshBasicMaterial color="#2d2d44" />
        </RoundedBox>
      </group>
    </Float>
  );
};

// Code Bracket Component
const CodeBracket = ({ 
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1,
  type = 'open' 
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.2;
    }
  });

  const shape = useMemo(() => {
    const s = new THREE.Shape();
    if (type === 'open') {
      s.moveTo(0.3, 0.8);
      s.lineTo(0, 0.6);
      s.lineTo(0, -0.6);
      s.lineTo(0.3, -0.8);
      s.lineTo(0.35, -0.7);
      s.lineTo(0.1, -0.5);
      s.lineTo(0.1, 0.5);
      s.lineTo(0.35, 0.7);
    } else {
      s.moveTo(-0.3, 0.8);
      s.lineTo(0, 0.6);
      s.lineTo(0, -0.6);
      s.lineTo(-0.3, -0.8);
      s.lineTo(-0.35, -0.7);
      s.lineTo(-0.1, -0.5);
      s.lineTo(-0.1, 0.5);
      s.lineTo(-0.35, 0.7);
    }
    return s;
  }, [type]);

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
        <extrudeGeometry args={[shape, { depth: 0.1, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02 }]} />
        <meshPhysicalMaterial
          color="#ff6b4a"
          metalness={0.7}
          roughness={0.2}
          emissive="#ff6b4a"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

// Floating UI Card Component
const UICard = ({ 
  position = [0, 0, 0] as [number, number, number],
  rotation = [0, 0, 0] as [number, number, number],
  scale = 1 
}) => {
  const mesh = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      mesh.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={mesh} position={position} rotation={rotation} scale={scale}>
        {/* Card background */}
        <RoundedBox args={[1.2, 0.8, 0.05]} radius={0.06} smoothness={4}>
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.1}
            roughness={0.3}
            transparent
            opacity={0.9}
            clearcoat={0.5}
          />
        </RoundedBox>
        {/* Header */}
        <RoundedBox args={[1, 0.12, 0.01]} radius={0.02} position={[0, 0.25, 0.03]}>
          <meshBasicMaterial color="#1a1a2e" />
        </RoundedBox>
        {/* Content lines */}
        <RoundedBox args={[0.8, 0.06, 0.01]} radius={0.01} position={[-0.1, 0.05, 0.03]}>
          <meshBasicMaterial color="#e0e0e0" />
        </RoundedBox>
        <RoundedBox args={[0.6, 0.06, 0.01]} radius={0.01} position={[-0.2, -0.08, 0.03]}>
          <meshBasicMaterial color="#e0e0e0" />
        </RoundedBox>
        {/* Button */}
        <RoundedBox args={[0.3, 0.1, 0.02]} radius={0.02} position={[0.35, -0.25, 0.03]}>
          <meshBasicMaterial color="#ff6b4a" />
        </RoundedBox>
      </group>
    </Float>
  );
};

// Particles
const Particles = () => {
  const points = useRef<THREE.Points>(null);
  
  const particlesCount = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);
  
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.015;
      points.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    }
  });
  
  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ff6b4a"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.4} color="#ff6b4a" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#4ecdc4" />
      
      {/* Main phone - center */}
      <FloatingDevice position={[0, 0.2, 0]} scale={1.2} color="#ff6b4a" />
      
      {/* Laptop - left side */}
      <FloatingLaptop position={[-2.5, -0.5, -1]} scale={0.7} />
      
      {/* Second phone - right */}
      <FloatingDevice position={[2.2, 0.5, -0.5]} rotation={[0.1, -0.4, 0.1]} scale={0.8} color="#4ecdc4" />
      
      {/* Code brackets */}
      <CodeBracket position={[-1.5, 1.2, 0.5]} scale={0.6} type="open" />
      <CodeBracket position={[1.8, 1.3, 0.3]} scale={0.5} type="close" />
      
      {/* UI Cards */}
      <UICard position={[2.8, -0.8, 0]} rotation={[0.1, -0.3, 0.05]} scale={0.6} />
      <UICard position={[-2.5, 1, 0.5]} rotation={[0, 0.4, -0.1]} scale={0.5} />
      
      <Particles />
    </>
  );
};

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;

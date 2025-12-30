import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Grid, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

interface DroneModelProps {
  stlPath: string;
  blueprintMode?: boolean;
}

function DroneModel({ stlPath, blueprintMode = false }: DroneModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    const loader = new STLLoader();
    loader.load(
      stlPath,
      (geometry) => {
        geometry.center();
        const scale = 0.01; // Scale from mm to better viewing size
        geometry.scale(scale, scale, scale);
        setGeometry(geometry);
      },
      undefined,
      (error) => console.error('Error loading STL:', error)
    );
  }, [stlPath]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (!geometry) return null;

  return (
    <mesh ref={meshRef} geometry={geometry}>
      {blueprintMode ? (
        <>
          <meshBasicMaterial color="#00d9ff" wireframe />
          <lineSegments>
            <edgesGeometry args={[geometry]} />
            <lineBasicMaterial color="#00ffaa" />
          </lineSegments>
        </>
      ) : (
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.2}
          emissive="#00d9ff"
          emissiveIntensity={0.2}
        />
      )}
    </mesh>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={points} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.02}
        color="#00d9ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

interface DroneViewerProps {
  blueprintMode?: boolean;
  showParticles?: boolean;
  className?: string;
}

export default function DroneViewer({ 
  blueprintMode = false, 
  showParticles = true,
  className = ''
}: DroneViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[3, 2, 3]} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate={false}
          minDistance={2}
          maxDistance={8}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffaa" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />

        {/* Grid */}
        {blueprintMode && (
          <Grid
            args={[20, 20]}
            cellSize={0.5}
            cellThickness={0.5}
            cellColor="#00d9ff"
            sectionSize={2}
            sectionThickness={1}
            sectionColor="#00ffaa"
            fadeDistance={25}
            fadeStrength={1}
            followCamera={false}
          />
        )}

        {/* Drone Model */}
        <DroneModel 
          stlPath="/hydroavia_drone_14inch.stl" 
          blueprintMode={blueprintMode}
        />

        {/* Particle Field */}
        {showParticles && <ParticleField />}

        {/* Environment */}
        {!blueprintMode && (
          <Environment preset="night" />
        )}
      </Canvas>

      {/* Blueprint overlay */}
      {blueprintMode && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 text-hydro-cyan font-body text-xs space-y-1">
            <div>HYDROAVIA DRONE FRAME v1.0</div>
            <div>WINGSPAN: 14" DIAGONAL</div>
            <div>GPS-DENIED AUTONOMY</div>
            <div className="text-hydro-accent">STEREO VISION ENABLED</div>
          </div>
          
          <div className="absolute bottom-4 right-4 text-hydro-cyan font-body text-xs text-right space-y-1">
            <div>PROP GUARDS: ACTIVE</div>
            <div>LED MOUNTS: 4x</div>
            <div>LANDING GEAR: DEPLOYED</div>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-hydro-cyan opacity-50"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-hydro-cyan opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-hydro-cyan opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-hydro-cyan opacity-50"></div>
        </div>
      )}
    </div>
  );
}

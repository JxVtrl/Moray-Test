import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const RotatingLogo: React.FC = () => {
  const logoRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/brand/models/logo.glb');

  // Ajustando a rotação inicial para corrigir a posição da logo
  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.rotation.x = Math.PI; // Gira 180° no eixo X para corrigir a inversão
      logoRef.current.rotation.y = Math.PI; // Gira 180° no eixo Y para corrigir a rotação de costas
      logoRef.current.rotation.z = 0; // Garante que o eixo Z esteja correto
    }
  }, []);

  useFrame(({ clock }) => {
    if (logoRef.current) {
      const elapsedTime = clock.getElapsedTime();
      logoRef.current.rotation.y += 0.005; // Rotação suave para incentivar a interação
    }
  });

  return <primitive object={scene} ref={logoRef} scale={0.05} position={[0, -0.5, 0]} />;
};



const Logo3D: React.FC = () => {
  return (
    <Canvas
      style={{ width: '100%', height: '100%', maxHeight: '300px' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <RotatingLogo />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default Logo3D;

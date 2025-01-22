import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import './Logo3D.scss';

export const RotatingLogo: React.FC = () => {
  const logoRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/brand/models/logo.glb');
  const { viewport } = useThree();

  useEffect(() => {
    if (logoRef.current) {
      // Adjust scale for different screen sizes
      const scaleFactor = viewport.width < 768 ? 0.012 : 0.05;
      logoRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Center the model based on bounding box
      const box = new THREE.Box3().setFromObject(scene);
      const center = new THREE.Vector3();
      box.getCenter(center);
      logoRef.current.position.set(-center.x, -center.y, -center.z);

      logoRef.current.rotation.x = Math.PI; // Fix orientation
      logoRef.current.rotation.y = Math.PI;
    }
  }, [scene, viewport.width]);

  useFrame(() => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.0025; // Continuous rotation
    }
  });

  return <primitive object={scene} ref={logoRef} />;
};

export const Logo3D: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [fov, setFov] = useState(window.innerWidth < 768 ? 20 : 15);

  // Function to update FOV based on screen size
  const handleResize = () => {
    if (canvasContainerRef.current) {
      setFov(window.innerWidth < 768 ? 20 : 15);

      const width = canvasContainerRef.current.clientWidth;
      const height = canvasContainerRef.current.clientHeight;
      const aspectRatio = width / height;

      canvasContainerRef.current.style.height = aspectRatio < 1 ? '150px' : '250px';
      canvasContainerRef.current.style.width = '100%';
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={canvasContainerRef} className="logo-3d-container">
      <Canvas
        camera={{ position: [0, 2, 5], fov }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingLogo />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
    </div>
  );
};

export default Logo3D;

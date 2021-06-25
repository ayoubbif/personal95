import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Stars } from '@react-three/drei';

const Earth = () => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.004;
  });
  const gltf = useLoader(GLTFLoader, 'models/Earth.glb');


    return (
      <>
        <primitive ref={mesh} object={gltf.scene} position={[0, 0, 0]} rotation={[0, 60, 0]} scale={0.005}/>
      </>
    );
  };


export default function World() {

    return(
        <Canvas style={{ background: '#071733' }}>
            <OrbitControls/>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade/>
            <ambientLight intensity={0.8} />
            <spotLight intensity={0.8} position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
        </Canvas>
    )
}
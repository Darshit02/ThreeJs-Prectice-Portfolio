import { useGLTF } from '@react-three/drei'
import React from 'react'
import SkyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(SkyScene);
  return (
    <mesh>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
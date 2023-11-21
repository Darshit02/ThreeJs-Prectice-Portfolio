import React from 'react'
import { useGLTF } from '@react-three/drei'
import PlanScene from '../assets/3d/plane.glb'

const Plan = ({isRotating, ...props}) => {
    const {scene , animations} = useGLTF(PlanScene);
  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plan
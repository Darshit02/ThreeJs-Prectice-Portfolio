import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import { Point } from '@react-three/drei'

{/* <div className='absolute top-0 right-0 left-0 z-10 flex items-center justify-center'>PopUp</div> */}
const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent' camera={{near :0.1 , far : 1000}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight/>
          <ambientLight/>
          <pointLight position={[0,0,0]} color='red'/>
          <hemisphereLight/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
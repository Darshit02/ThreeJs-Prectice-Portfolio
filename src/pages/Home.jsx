import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'

{/* <div className='absolute top-0 right-0 left-0 z-10 flex items-center justify-center'>PopUp</div> */}
const Home = () => {
  const adjestIslandForScreenSize = () => {
    let screenScale = null
    let screenPositionl = [0, -6.5, -43]
    let rotation = [0.1,4.7,0]

    if (Window.innerWidth < 768) {
      screenScale = [0.9,0.9,0.9]; 
    }
    else{
      screenScale = [1,1,1];
    }
    return [screenScale, screenPositionl , rotation]
  }
const [islandScale, islandPosition,islandRotation] = adjestIslandForScreenSize() 

  return (
    <section className='w-full h-screen relative'>
      <Canvas className='w-full h-screen bg-transparent' camera={{near :0.1 , far : 1000}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor = "#b1e1ff " groundColor="#00000" intensity={1}/>
         <Sky/>
         <Island 
          position = {islandPosition}
          scale = {islandScale}
          rotation = {islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
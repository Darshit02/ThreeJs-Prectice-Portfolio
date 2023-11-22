import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plan from "../models/Plan";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjestIslandForScreenSize = () => {
    let screenScale = null;
    let screenPositionl = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (Window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPositionl, rotation];
  };
  const adjestPlanForScreenSize = () => {
    let screenScale, screenPositionl;

    if (Window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPositionl = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPositionl = [0, -4, -4];
    }
    return [screenScale, screenPositionl];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjestIslandForScreenSize();
  const [planScale, planPosition] = adjestPlanForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 right-0 left-0 z-10 flex items-center justify-center">
       {
       currentStage && <HomeInfo currentStage={currentStage}/>
       }
      </div>
      
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff "
            groundColor="#00000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plan
            planScale={planScale}
            planPosition={planPosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

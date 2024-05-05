import Alley from "@/models/Alley";
import Beach from "@/models/Beach";
import Classroom from "@/models/Classroom";
import GirlCrying from "@/models/CryingGirl";
import Desk from "@/models/Desk";
import Detective from "@/models/Detective";
import Matilda from "@/models/Matilda";
import Trip from "@/models/Trip";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Loader from "../Loader";
import { Suspense } from "react";

const QuestionContainerTest = ({
  currentQuestion,
  nextQuestion,
  previousQuestion,
}) => {
  const cameras = [
    [1.85, 0.6, 0.04],
    [-0.61, 0.55, -1.4],
    [15.6, 81.4, 250],
    [19.42, 127, 250],
    [0.1, 0.05, 0.129],
    [-34, 104, 240],
    [0.5, 0.6, 5],
    [-21, 9.5, 14.5],
  ];

  const scenes = [
    <Trip
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[10, 10, 10]}
      position={[0.2, 0.2, 0.4]}
      backgroundColor="#EAEAEA" // Light Gray
    />,
    <Classroom
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[0.004, 0.004, 0.004]}
      position={[0, 0.05, -0.1]}
      backgroundColor="#F5F5F5" // Light Silver
    />,
    <GirlCrying
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[0.2, 0.2, 0.2]}
      position={[0, 2, -3]}
      backgroundColor="#D9D9D9" // Dark Gray
    />,
    <Desk
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[5, 0, 60]}
      backgroundColor="#CCCCCC" // Grey
    />,
    <Detective
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[2, 2, 2]}
      position={[0, -0.05, 0]}
      backgroundColor="#BFBFBF" // Light Grey
    />,
    <Matilda
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[0, -55, 10]}
      backgroundColor="#E0E0E0" // Lighter Grey
    />,
    <Alley
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1.5, 1.5, 1.5]}
      position={[0, -35, -147]}
      backgroundColor="#C0C0C0" // Silver
    />,
    <Beach
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[-60, -90, -120]}
      backgroundColor="#D6D6D6" // Light Silver
    />,
  ];

  return (
    <section className="w-screen h-screen">
      <Canvas className="w-screen h-screen">
        <Suspense fallback={<Loader/>}>
          <PerspectiveCamera
            fov={75}
            makeDefault
            position={cameras[currentQuestion]}
          />
          <OrbitControls
            enableDamping={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.5}
          />
          {scenes[currentQuestion]}
          <Environment
            files={"/bg_test.jpg"}
            environmentIntensity={0}
            ground={false}
            background
          />
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default QuestionContainerTest;

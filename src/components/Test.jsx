import { useState } from "react";
import Question from "./questions/Question";
import Trip from "@/models/Trip";
import Classroom from "@/models/Classroom";
import { useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import SeSi from "./questions/SeSi";
import TeTi from "./questions/TeTi";
import FeTe from "./questions/FeTe";
import Desk from "@/models/Desk";
import FeFi from "./questions/FeFi";
import GirlCrying from "@/models/CryingGirl";
import Alley from "@/models/Alley";
import Detective from "@/models/Detective";
import NeSe from "./questions/NeSe";

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const nextQuestion = () => {
    if (questions.length <= currentQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
    return null;
  };

  const questions = [<SeSi />, <TeTi />, <FeFi />, <FeTe />, <NeSe/>];
  const scenes = [
    <Trip
      // previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[10, 10, 10]}
      position={[0.2, 0.2, 0.3]}
    />,
    <Classroom
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[0.004, 0.004, 0.004]}
      position={[0, 0.05, -0.1]}
    />,
    <GirlCrying
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[0.5, 0.5, 0.5]}
      position={[2, -8, 1]}
    />,
    <Desk
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[5, 0, 0]}
    />,
    <Detective
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[2, 2, 2]}
      position={[0, -0.05, 0]}
    />,
    // <Alley
    //   previousQuestion={previousQuestion}
    //   nextQuestion={nextQuestion}
    //   scale={[1, 1, 1]}
    //   position={[0, 0, 0]}
    // />,
  ];

  return (
    <section className="prose h-screen w-screen">
      <div className=" join grid grid-cols-2 my-5">
        <button
          onClick={() => previousQuestion()}
          className={`join-item btn btn-active border-base-100 ${currentQuestion === 0 ? "btn-disabled" : "btn-active"}`}
        >
          {"previous".toUpperCase()}
        </button>
        <button
          onClick={() => nextQuestion()}
          className="join-item btn btn-active border-base-100"
        >
          {"next".toUpperCase()}
        </button>
      </div>
      <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        {questions[currentQuestion]}
      </Canvas>

      {/* <section className="w-screen h-screen">
        <Canvas
          className="w-screen h-screen bg-red-500 bg-opacity-30"
          camera={{
            near: 0.1,
            far: 2000,
            position: [-48, 49, -102],
          }}
        >
          <OrbitControls enableZoom={true} />
          <GirlCrying scale={[0.5,0.5,0.5]} position={[2,-6,1]}/>
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <ambientLight intensity={0.5} />
        </Canvas>
      </section> */}
      {scenes[currentQuestion]}
    </section>
  );
};

export default Test;

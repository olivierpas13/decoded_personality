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
import Matilda from "@/models/Matilda";
import FiTi from "./questions/FiTi";
import NiSi from "./questions/NiSi";
import Beach from "../models/Beach";
import NeNi from "./questions/NeNi";

const Test = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const addAnswer = (ans) => {
    answers[currentQuestion] = ans;
  };

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

  const questions = [
    <SeSi addAnswer={addAnswer} nextQuestion={nextQuestion} />,
    <TeTi />,
    <FeFi />,
    <FeTe />,
    <NeSe />,
    <FiTi />,
    <NiSi />,
    <NeNi />,
  ];
  const scenes = [
    <Trip
      previousQuestion={previousQuestion}
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
    <Matilda
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[0, -55, 0]}
    />,
    <Alley
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1.5, 1.5, 1.5]}
      position={[0, -35, -147]}
    />,
    <Beach
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[-60, -90, -120]}
    />,
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
      {questions[currentQuestion]}
      {/* <Canvas
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        {questions[currentQuestion]}
      </Canvas> */}
      {scenes[currentQuestion]}
    </section>
  );
};

export default Test;

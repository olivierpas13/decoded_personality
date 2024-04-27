import { useState } from "react";
import Question from "./questions/Question";
import Trip from "@/models/Trip";
import Classroom from "@/models/Classroom";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import SeSi from "./questions/SeSi";

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

  const questions = [<SeSi />, <SeSi />];
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
      {scenes[currentQuestion]}
    </section>
  );
};

export default Test;

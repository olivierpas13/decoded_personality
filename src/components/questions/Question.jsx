import { Children, cloneElement } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useState } from "react";
import { useEffect } from "react";
import Desk from "@/models/Desk";

const Question = ({
  children,
  cameraPosition,
  nextQuestion,
  previousQuestion,
  currentQuestion,
}) => {

  const [answers, setAnswers] = useState(Array);

  const addAnswer = (cognitive) => {
    answers[currentQuestion] = cognitive;
  };
  
  const [position, setPosition] = useState(cameraPosition)

  useEffect(()=>{
    console.log(cameraPosition);
    setPosition(cameraPosition)
  }, [cameraPosition])

  return (
    <section className="w-screen h-screen">
      <div className=" join grid grid-cols-2 my-5">
        <button
          onClick={() => {}}
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
        className="w-screen h-screen bg-transparent"
        // camera={{
        //   near: 0.1,
        //   far: 1000,
        //   position: position,
        // }}
      >
        <OrbitControls/>
        <Desk></Desk>
        <directionalLight position={[1, 1, 1]} intensity={3} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </section>
  );
};

export default Question;

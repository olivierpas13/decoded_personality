import { Children, cloneElement } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
const QuestionContainer = ({
  children,
  cameraPosition,
  nextQuestion,
  previousQuestion,
  currentQuestion,
}) => {
  const addAnswer = () => {
    console.log("answer");
  };


  return (
    <section className="w-screen h-screen">
      <Canvas
        className="w-screen h-screen bg-transparent"
        camera={{
          near: 0.1,
          far: 2000,
          position: cameraPosition,
        }}
      >
        {/* <OrbitControls
        enableZoom={true}
        /> */}
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.5}
        />
        {
        Children.map(children, (child) => {
          return cloneElement(child, { addAnswer });
          
        })}
        <directionalLight position={[1, 1, 1]} intensity={3} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </section>
  );
};

export default QuestionContainer;

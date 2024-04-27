import { OrbitControls, useGLTF } from "@react-three/drei";
import alleyScene from "../assets/alley.glb";
import { useRef } from "react";
import QuestionTest from "@/components/questions/QuestionTest";
import Logger from "@/utils/Logger";
import { Canvas } from "@react-three/fiber";

const Alley = ({ nextQuestion, previousQuestion, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(alleyScene);

  return (
    <Canvas
      className="w-screen h-screen bg-transparent"
      camera={{
        near: 0.1,
        far: 2000,
        position: [-10, 1, 1],
      }}
    >
      <mesh {...props} ref={ref}>
        <primitive object={scene} />
        <OrbitControls enableDamping={true} />
        <Logger />
      </mesh>
    </Canvas>
  );
};

export default Alley;

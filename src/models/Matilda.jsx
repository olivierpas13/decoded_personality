import { useGLTF } from "@react-three/drei";
import matildaScene from "../assets/matilda.glb";
import { useRef } from "react";
import QuestionTest from "@/components/questions/QuestionTest";
import Logger from "@/utils/Logger";

const Matilda = ({ nextQuestion, previousQuestion, ...props }) => {
  const ref = useRef();
  const { scene } = useGLTF(matildaScene);

  return (
    <QuestionTest
      cameraPosition={[-34, 104, 240]}
      currentQuestion={7}
      nextQuestion={nextQuestion}
      previousQuestion={previousQuestion}
    >
      <mesh {...props} ref={ref}>
        <primitive object={scene} />
      </mesh>
      <Logger/>
    </QuestionTest>
  );
};

export default Matilda;

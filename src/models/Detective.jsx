import { useGLTF } from "@react-three/drei";
import detectiveScene from "../assets/detective.glb";
import { useRef } from "react";
import QuestionTest from "@/components/questions/QuestionTest";

const Detective = ({ nextQuestion, previousQuestion, ...props }) => {
  const ref = useRef();
  const { scene } = useGLTF(detectiveScene);

  return (
    <QuestionTest
      cameraPosition={[0.1, 0.05, 0.129]}
      currentQuestion={6}
      nextQuestion={nextQuestion}
      previousQuestion={previousQuestion}
    >
      <mesh {...props} ref={ref}>
        <primitive object={scene} />
      </mesh>
    </QuestionTest>
  );
};

export default Detective;

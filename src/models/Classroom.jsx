import { useGLTF } from "@react-three/drei";
import classroomScene from "../assets/classroom.glb";
import { useRef } from "react";
import QuestionTest from "@/components/questions/QuestionTest";

const Classroom = ({ nextQuestion, previousQuestion, ...props }) => {
  const ref = useRef();
  const { scene } = useGLTF(classroomScene);

  return (
    <QuestionTest
      cameraPosition={[
        -0.43981995306588684, 0.567130480499833, -1.1869799606451417,
      ]}
      currentQuestion={1}
      nextQuestion={nextQuestion}
      previousQuestion={previousQuestion}
    >
      <mesh {...props} ref={ref}>
        <primitive object={scene} />
      </mesh>
    </QuestionTest>
  );
};

export default Classroom;

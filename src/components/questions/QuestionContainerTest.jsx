import { Children, cloneElement } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrthographicCamera,
  ArcballControls,
  View,
  Bounds,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import Matilda from "@/models/Matilda";
import { useRef } from "react";
import Rainbow from "@/models/Rainbow";
const QuestionContainerTest = ({
  children,
  cameraPosition,
  backgroundColor,
}) => {
  const container = useRef();

  return (
    <section className="w-screen h-screen" ref={container}>
      <View>
        <PerspectiveCamera makeDefault position={[0, 0, 0]} zoom={100} />

        <Bounds fit clip observe>
          <Rainbow />
        </Bounds>
        <ambientLight intensity={2.5} />
        <pointLight position={[20, 30, 10]} />
        <pointLight position={[-10, -10, -10]} color="red" />
        <OrbitControls />
      </View>
      <Canvas
        className="canvas"
        // camera={{
        //   near: 0.1,
        //   far: 2000,
        //   position: cameraPosition,
        // }}
        eventSource={container}
      >
        <View.Port />
      </Canvas>
    </section>
  );
};

export default QuestionContainerTest;

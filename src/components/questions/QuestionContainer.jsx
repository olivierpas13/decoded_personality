import { Children, cloneElement } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
const QuestionContainer = ({ children, cameraPosition, backgroundColor }) => {
  return (
    <section className="w-screen h-screen">
      <Canvas
        className="w-screen h-screen bg-transparent"
        camera={{
          near: 0.1,
          far: 1000,
          position: cameraPosition,
        }}
      >
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.5}
        />
        {Children.map(children, (child) => {
          return cloneElement(child);
        })}
        <Environment files={"/bg_test.hdr"}  environmentIntensity={0} ground={false} background />
        <color attach="background" args={[backgroundColor]} />
        <directionalLight position={[1, 1, 1]} intensity={3} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </section>
  );
};

export default QuestionContainer;

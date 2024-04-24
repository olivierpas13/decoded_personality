import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Question = ({ children }) => {
  return (
    <section className="w-full h-screen">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          near: 0.1,
          far: 1000,
          position: [14, 5, 0],
        }}
      >
        {children}
        <OrbitControls enabled={false} />
        <directionalLight position={[1, 1, 1]} intensity={3} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </section>
  );
};

export default Question;

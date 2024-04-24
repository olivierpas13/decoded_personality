import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ModelContainer = ({ children, cameraPosition }) => {
  return (
    <section className="w-full h-full">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          near: 0.1,
          far: 1000,
          position: cameraPosition,
        }}
      >
        {children}
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        <directionalLight position={[1, 1, 1]} intensity={3} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </section>
  );
};

export default ModelContainer;

import { useFrame } from "@react-three/fiber";

const Logger = () => {
  useFrame((state) => [console.log(state.camera.position)]);

  return <></>;
};

export default Logger;

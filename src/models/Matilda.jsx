import { useAnimations, useGLTF, Html } from "@react-three/drei";
import matildaScene from "../assets/matilda.glb";
import { useRef } from "react";
import TripQuestion from "@/components/questions/TripQuestion";

const Matilda = ({ selectedAnswer, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(matildaScene);
  
    // useFrame((state)=>[
  //     console.log(state.camera.position)
  // ])
  
  return (
      <mesh position={[0, 0, 0]} {...props} ref={ref}>
        <primitive object={scene} />
        <TripQuestion/>
        {/* <Html>
          <div className="top-0">hola</div>
        </Html> */}
      </mesh>
  );
};

export default Matilda;

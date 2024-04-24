import { useAnimations, useGLTF } from "@react-three/drei";
import matildaScene from "../assets/matilda.glb"
import { useRef } from "react";

const Matilda = (props) => {
    const ref = useRef();
    const {scene, animations} = useGLTF(matildaScene);
    return (
        <mesh position={[0,0,0]} {...props} ref={ref}>
            <primitive
            object={scene}
            />
        </mesh>
    );
}
 
export default Matilda;
/*
Meshes auto-generated by: https://github.com/pmndrs/gltfjsx
Author: VARRRG (https://sketchfab.com/VladislavFehu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/love-low-poly-dd3b881a34904991878dc6a5a05aa1f6
Title: Love Low Poly
*/

import { useGLTF } from "@react-three/drei";
import heartScene from "../assets/heart.glb";

const Heart = (props) => {
  const { nodes, materials } = useGLTF(heartScene);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 33.415]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Material_30}
            position={[0, 0, -33.415]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(heartScene);
export default Heart;

/*
Mehses auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Lefteris.Kafenzakis (https://sketchfab.com/Lefteris.Kafenzakis)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/psychology-v3-6bf8ac75e9e1417ebac5bad1deba2b7b
Title: Psychology V3
*/

import { useGLTF } from "@react-three/drei";
import psychologyScene from "../assets/psychology.glb";

const Psychology = (props) => {
  const { nodes, materials } = useGLTF(psychologyScene);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload(psychologyScene);
export default Psychology;

/*
Meshes auto-generated by: https://github.com/pmndrs/gltfjsx
Author: holgcool (https://sketchfab.com/holgcool)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/toolbox-9df47cc2d6174d2b86c22cdfa4b423aa
Title: Toolbox
*/

import { useGLTF } from "@react-three/drei";
import toolboxScene from "../assets/toolbox.glb";

const Toolbox = (props) => {
  const { nodes, materials } = useGLTF(toolboxScene);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_a_LP_box_a_0.geometry}
        material={materials.box_a}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload(toolboxScene);

export default Toolbox;

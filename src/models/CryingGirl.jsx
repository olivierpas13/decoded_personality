/*
Meshes auto-generated by: https://github.com/pmndrs/gltfjsx
Author: chung_the_artist (https://sketchfab.com/chung_the_artist)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/the-long-awaited-crying-female-sculptrue-bf13571314674b8f8951ca83841ef31c
Title: The Long-Awaited Crying - female sculptrue
*/

import { useGLTF } from "@react-three/drei";
import girlScene from "../assets/girlCrying.glb";
import QuestionContainer from "@/components/questions/QuestionContainer";

const GirlCrying = ({ nextQuestion, previousQuestion, ...props }) => {
  const { nodes, materials } = useGLTF(girlScene);
  return (
    <QuestionContainer
      cameraPosition={[-40, 51, -102]}
      currentQuestion={3}
      nextQuestion={nextQuestion}
      previousQuestion={previousQuestion}
    >
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor_floor_0.geometry}
          material={materials.floor}
          position={[0, 0, -51.173]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.edge_edge_0.geometry}
          material={materials.edge}
          position={[0, -3.889, 53.824]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_3_wood_0.geometry}
          material={materials.wood}
          position={[-37.942, 72.137, 16.47]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neckware_neckware_0.geometry}
          material={materials.PaletteMaterial003}
          position={[-12.886, 17.644, -19.491]}
          rotation={[0, -0.36, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.neckware_neckware_0.geometry}
          material={materials.PaletteMaterial001}
          position={[-12.886, 17.644, -19.491]}
          rotation={[0, -0.36, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tear_tear_0.geometry}
          material={materials.PaletteMaterial001}
          position={[-12.886, 17.644, -19.491]}
          rotation={[0, -0.36, 0]}
        />
      </group>
    </QuestionContainer>
  );
};

export default GirlCrying;

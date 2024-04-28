/*
Meshes auto-generated by: https://github.com/pmndrs/gltfjsx
Author: tl0615 (https://sketchfab.com/tl0615)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/alley-2a1f3ab8aec249b5b7505b0f735b8cb8
Title: Alley
*/

import { useGLTF } from "@react-three/drei";
import alleyScene from "../assets/alley.glb";
import QuestionTest from "@/components/questions/QuestionTest";
import Logger from "@/utils/Logger";

const Alley = ({ nextQuestion, previousQuestion, ...props }) => {
  const { nodes, materials } = useGLTF(alleyScene);
  return (
    <QuestionTest
      cameraPosition={[
        0.5,0.6,5
      ]}
      currentQuestion={8}
      nextQuestion={nextQuestion}
      previousQuestion={previousQuestion}
    >
      <group {...props} dispose={null}>
        <group
          position={[0, 18.836, 98.815]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.165}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Mat_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Mat_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Mat_10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Mat_11}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Mat_12}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.Mat_13}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.Mat_14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.Mat_15}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Mat_16}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.Mat_17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Mat_18}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.Mat_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.Mat_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.Mat_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.Mat_4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.Mat_5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.Mat_6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.Mat_7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.Mat_8}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.Mat_9}
          />
        </group>
      </group>
      <Logger/>
    </QuestionTest>
  );
};

export default Alley;

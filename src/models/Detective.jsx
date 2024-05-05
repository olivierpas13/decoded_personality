import { useGLTF } from "@react-three/drei";
import detectiveScene from "../assets/detective.glb";
import { useRef } from "react";
import QuestionTest from "@/components/questions/QuestionContainer";

const Detective = ({
  nextQuestion,
  previousQuestion,
  backgroundColor,
  ...props
}) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF(detectiveScene);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube31_Blinds_0.geometry}
        material={materials.Blinds}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Framed_Dark_Gray_0.geometry}
        material={materials.PaletteMaterial003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Paper_Documents_0.geometry}
        material={materials.Documents}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book_Office_Details_Stuff_0.geometry}
        material={materials.Office_Details_Stuff}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Book_certjournal_0.geometry}
        material={materials.certjournal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Magnet_Medium_Gray_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Folder_2_Documents_0.geometry}
        material={materials.Documents}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Postit8_Switches_and_PostIts_0.geometry}
        material={materials.Switches_and_PostIts}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder37_Pin_Back_0.geometry}
        material={materials.PaletteMaterial005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder19_Pin_Back_0.geometry}
        material={materials.PaletteMaterial005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder26_Pin_Back_0.geometry}
        material={materials.PaletteMaterial005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube107_Blinds_Cover_0.geometry}
        material={materials.Blinds_Cover}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor_fiber_insulation_0.geometry}
        material={materials.fiber_insulation}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor_Wood_Floor_Shiny_0.geometry}
        material={materials.Wood_Floor_Shiny}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor_Medium_Gray_0.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mousepad_Computer_Decorations_0.geometry}
        material={materials.Computer_Decorations}
        position={[0.02589315, 0.05398944, -0.01749898]}
        rotation={[0, -0.26179939, -Math.PI / 2]}
        scale={0.00252622}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Folder_1_Documents_0.geometry}
        material={materials.Documents}
        position={[-0.04195538, 0.03515369, 0.13302472]}
        rotation={[0.03627971, Math.PI / 2, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Postit_Switches_and_PostIts_0.geometry}
        material={materials.Switches_and_PostIts}
        position={[-0.07089516, 0.00464856, -0.00993698]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trashcan_Garbage_can_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.07139352, 0.00488758, -0.02665687]}
        rotation={[0, -0.16216936, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trashcan_Garbages_0.geometry}
        material={materials.Garbages}
        position={[-0.07139352, 0.00488758, -0.02665687]}
        rotation={[0, -0.16216936, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Marker_Office_Details_Stuff_0.geometry}
        material={materials.Office_Details_Stuff}
        position={[-0.07504216, 0.00492582, -0.02330945]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Framed_certjournal_0.geometry}
        material={materials.certjournal}
        position={[-0.1030353, 0.00763747, -0.00452361]}
        rotation={[0, 0, -0.00836193]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Switch_Plastic_OffWhite2_0.geometry}
        material={materials.PaletteMaterial004}
        position={[0.1298819, 0.05401209, -0.0531527]}
        rotation={[0, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup_CompTower_0.geometry}
        material={materials.CompTower}
        position={[0.02394876, 0.0341538, -0.04342092]}
        rotation={[0, -Math.PI / 6, 0]}
        scale={0.00192484}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cup_Dark_Gray_0.geometry}
        material={materials.PaletteMaterial003}
        position={[0.02394876, 0.0341538, -0.04342092]}
        rotation={[0, -Math.PI / 6, 0]}
        scale={0.00192484}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Marker1_Pin_Back_0.geometry}
        material={materials.PaletteMaterial005}
        position={[-0.07379077, 0.00492582, -0.02330945]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood_Chair_Desk_Wood_Chair_0.geometry}
        material={materials.Desk_Wood_Chair}
        position={[-0.06333686, 0.00486565, 0.01329438]}
        rotation={[0, 0.26179939, 0]}
        scale={0.00956699}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wood_Chair_CorkBoard_0.geometry}
        material={materials.CorkBoard}
        position={[-0.06333686, 0.00486565, 0.01329438]}
        rotation={[0, 0.26179939, 0]}
        scale={0.00956699}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube113_Baseboard_0.geometry}
        material={materials.Baseboard}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Light1_Desk_Gray_Metals_0.geometry}
        material={materials.Desk_Gray_Metals}
        position={[-0.08938556, 0.01327685, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Light1_More_Details_0.geometry}
        material={materials.More_Details}
        position={[-0.08938556, 0.01327685, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube74_Maps_0.geometry}
        material={materials.Maps}
        position={[-0.08250933, 0.00637953, 0.13152397]}
        rotation={[0, 1.4952514, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube76_Pics_0.geometry}
        material={materials.Pics}
        position={[-0.08250933, 0.00637953, 0.13152397]}
        rotation={[0, 1.4952514, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Postits4_Monitor_Screen_0.geometry}
        material={materials.Monitor_Screen}
        position={[-0.06986891, 0.00496784, -0.01572154]}
        rotation={[0, 0.04904347, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Computer_Plastic_OffWhite_0.geometry}
        material={materials.Plastic_OffWhite}
        position={[-0.06986891, 0.00496784, -0.01572154]}
        rotation={[0, 0.04904347, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Monitor_MonitorBack_0.geometry}
        material={materials.MonitorBack}
        position={[-0.06976218, 0.00485259, -0.01739006]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Whitewall2_0.geometry}
        material={materials.Whitewall2}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Big_Window_0.geometry}
        material={materials.Big_Window}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls_Whitewall_0.geometry}
        material={materials.Whitewall}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rug_Distressed_Rug_0.geometry}
        material={materials.Distressed_Rug}
        position={[0.01897581, 0.00512364, 0.02176608]}
        scale={0.05260069}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube104_Blinds_Cover_0.geometry}
        material={materials.Blinds_Cover}
        position={[0, 0.00172059, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clock2_Clock_Face_0.geometry}
        material={materials.Clock_Face}
        position={[0, -0.0010106, -0.00170781]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube116_Photos_Collection_0.geometry}
        material={materials.Photos_Collection}
        position={[-0.02421953, 0, 0.00656934]}
        rotation={[0, 0.35062098, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Framed2_Poster_of_Alaska_0.geometry}
        material={materials.Poster_of_Alaska}
        position={[0.00954854, -0.01787219, -0.01559705]}
        scale={0.01224617}
      />
    </group>
  );
};

export default Detective;

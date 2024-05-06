import { useGLTF } from "@react-three/drei";
import classroomScene from "../assets/classroom.glb";

const Classroom = ({ nextQuestion, previousQuestion, ...props }) => {
  const { nodes, materials } = useGLTF(classroomScene);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Window002|Wall_L_Windowblend|Dupli|_wallConcrete_0"].geometry
        }
        material={materials.wallConcrete}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Window002|Window_L_Windowblend|Dupli|1_PlasticGrey_0"].geometry
        }
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Window002|Glass_L_Windowblend|Dupli|2_glass_0"].geometry
        }
        material={materials.PaletteMaterial002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes[
            "Window002|WindowWoodPlate_L_Windowblend|Dupli|3_WindowWoodPlate_0"
          ].geometry
        }
        material={materials.WindowWoodPlate}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Window002|Plane_L_Windowblend|Dupli|4_Rideau_0"].geometry
        }
        material={materials.Rideau}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["casiers_low|casiers_L_casiersblend|Dupli|_casiers_0"].geometry
        }
        material={materials.casiers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["neon|neon_L_neonblend|Dupli|_neon_0"].geometry}
        material={materials.neon}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["radiateur|radiateur001_L_radiateurblend|Dupli|_radiateur_0"]
            .geometry
        }
        material={materials.radiateur}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["radiateur|radiateur_L_radiateurblend|Dupli|1_radiateur_0"]
            .geometry
        }
        material={materials.radiateur}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["chair|chair_L_chairblend|Dupli|_chair_0"].geometry}
        material={materials.chair}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ground_ground_0.geometry}
        material={materials.ground}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_wallConcrete_0.geometry}
        material={materials.wallConcrete}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ceilling_ceilling_0.geometry}
        material={materials.ceilling}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes[
            "GrandCasier001|GrandCasier_L_GrandCasierblend|Dupli|_GrandCasier_0"
          ].geometry
        }
        material={materials.GrandCasier}
        position={[281.173, 0.479, -501.295]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={50}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Desk_0.geometry}
        material={materials.Desk}
        position={[290.976, 0, -330.936]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["Collection|board_L_boardblend|Dupli|_board_0"].geometry
        }
        material={materials.board}
        position={[-31.238, 78.386, 502.521]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["clock001|clock_L_clockblend|Dupli|_clock_0"].geometry}
        material={materials.clock}
        position={[-31.238, 277.219, 501.525]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes[
            "teacherDesk001|teacherDesk_L_teacherDeskblend|Dupli|_teacherDesk_0"
          ].geometry
        }
        material={materials.teacherDesk}
        position={[2.438, -0.381, 343.395]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Door001|Door_L_doorblend|Dupli|_door_0"].geometry}
        material={materials.door}
        position={[-409.445, 0, 331.813]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Door001|handle_L_doorblend|Dupli|1_Chrome_0"].geometry}
        material={materials.PaletteMaterial001}
        position={[-395.215, 109.707, 368.45]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_godray_0.geometry}
        material={materials.godray}
        position={[394.049, 165.486, -66.482]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["etagere001|etagere_L_etagereblend|Dupli|_etagere_0"].geometry
        }
        material={materials.etagere}
        position={[-236.254, 0.215, -492.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes[
            "porteManteau|porteManteau_L_porteManteaublend|Dupli|_PlasticBlack_0"
          ].geometry
        }
        material={materials.PaletteMaterial003}
        position={[-401.973, 130.348, -244.859]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
    </group>
  );
};

useGLTF.preload(classroomScene);
export default Classroom;

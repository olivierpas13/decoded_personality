import React from "react";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  View,
  Bounds,
  OrthographicCamera,
  ArcballControls,
  Environment,
} from "@react-three/drei";

const MultipleModelsContainer = ({ models, addMiddleZone }) => {
  const container = useRef();

  const [activeViewIndex, setActiveViewIndex] = useState(0);

  return (
    <>
      {models.map((model, index) => (
        <dialog key={index} id={"modal" + index} className="modal">
          <div className="modal-box flex flex-col">
            <h3 className="font-bold text-lg">{model.title}</h3>
            <ul>
              {model.properties.map((property, index) => (
                <li key={index}>{property}</li>
              ))}
            </ul>
            <button
              className="btn btn-neutral mt-4"
              onClick={() => {
                addMiddleZone(model.title);
              }}
            >
              {"select".toUpperCase()}
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      ))}

      <div className="absolute grid  grid-cols-2 h-screen w-screen">
        {models.map((model, index) => (
          <h4
            key={index}
            className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2"
            onClick={() => setActiveViewIndex(index)}
          >
            {model.title}
          </h4>
        ))}
      </div>

      <main ref={container} className="mm-container">
        {models.map((model, index) => (
          <View
            key={model.id}
            index={index + 1}
            onClick={() => {
              console.log("modal" + index);
              document.getElementById("modal" + index).showModal();
            }}
            // onClick={() => console.log(model.title)}
            style={{ position: "relative", overflow: "hidden" }}
            className={`border-4 cursor-pointer ${index === activeViewIndex ? "active" : ""}`}
          >
            <color attach="background" args={[model.backgroundColor]} />
            <Lights controls={false} preset="city" />

            {/* Default camera setup, customize per model if needed */}
            <OrthographicCamera
              makeDefault
              position={model.cameraPosition}
              zoom={100}
            />

            <Bounds fit clip observe>
              {React.createElement(model.component, {
                scale: 3,
                position: [0, -0.75, 0],
              })}
            </Bounds>
            <ArcballControls enableZoom={false} makeDefault />
          </View>
        ))}
        <Canvas className="canvas" eventSource={container}>
          <View.Port />
        </Canvas>
      </main>
    </>
  );
};

function Lights({ preset }) {
  return (
    <>
      <ambientLight intensity={2.5} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color="red" />
      <Environment preset={preset} />
    </>
  );
}
export default MultipleModelsContainer;

// import { useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   View,
//   Bounds,
//   OrthographicCamera,
//   ArcballControls,
//   Environment,
//   Html,
// } from "@react-three/drei";
// import Rainbow from "./Rainbow";
// import Backpack from "./Backpack";
// import Knife from "./Knife";
// import Calendar from "./Calendar";
// import Bonsai from "./Bonsai";
// import Microphone from "./Microphone";
// import Toolbox from "./Toolbox";
// import Psychology from "./Psychology";

// const MultipleModelsContainer = ({ models }) => {
//   const container = useRef();
//   return (
//     <>
//       <div className="absolute grid  grid-cols-2 h-screen w-screen">
//         <h4 className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2">
//           Prudent Optimism
//         </h4>
//         <h4 className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2">
//           Overpersonalization
//         </h4>
//         <h4 className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2">
//           Principled utilitarian
//         </h4>
//         <h4 className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2">
//           Tangible Projection
//         </h4>
//         <h4 className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2">
//           Cautious Renovation
//         </h4>
//         <h4 className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2">
//           Eloquent charisma
//         </h4>
//         <h4 className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2">
//           Empathetic critic
//         </h4>
//         <h4 className="mt-0 z-20 text-center bg-black-500 text-white border bg-opacity-50 rounded h-fit p-2">
//           Selective functionality
//         </h4>
//       </div>
//       <main ref={container} className=" mm-container">
//         <View index={1} style={{ position: "relative", overflow: "hidden" }}>
//           <color attach="background" args={["#feabda"]} />
//           <Lights controls={false} preset="city" />
//           <OrthographicCamera makeDefault position={[25, 45, -70]} zoom={100} />
//           <Bounds fit clip observe>
//             <Rainbow scale={5} position={[0, -0.75, 0]} />
//           </Bounds>
//           <ArcballControls enableZoom={false} makeDefault />
//         </View>
//         <View index={2} style={{ position: "relative", overflow: "hidden" }}>
//           <color attach="background" args={["#feabda"]} />
//           <Lights controls={false} preset="city" />
//           <OrthographicCamera
//             makeDefault
//             position={[-30, 20, -30]}
//             zoom={100}
//           />
//           <Bounds fit clip observe>
//             <Backpack scale={3} position={[0, -0.75, 0]} />
//           </Bounds>
//           <ArcballControls enableZoom={false} makeDefault />
//         </View>
//         <View index={3} style={{ position: "relative", overflow: "hidden" }}>
//           <color attach="background" args={["#feabda"]} />
//           <Lights controls={false} preset="city" />
//           <OrthographicCamera
//             makeDefault
//             position={[0, 200, -100]}
//             zoom={100}
//           />
//           <Bounds fit clip observe>
//             <Knife scale={3} position={[0, -0.75, 0]} />
//           </Bounds>
//           <ArcballControls enableZoom={false} makeDefault />
//         </View>
//         <View index={4} style={{ position: "relative", overflow: "hidden" }}>
//           <color attach="background" args={["#feabda"]} />
//           <Lights controls={false} preset="city" />
//           <OrthographicCamera makeDefault position={[-10, 15, 18]} zoom={100} />
//           <Bounds fit clip observe>
//             <Calendar scale={3} position={[0, -0.75, 0]} />
//           </Bounds>
//           <ArcballControls enableZoom={false} makeDefault />
//         </View>
//         <View index={5} style={{ position: "relative", overflow: "hidden" }}>
//           <color attach="background" args={["#feabda"]} />
//           <Lights controls={false} preset="city" />
//           <OrthographicCamera makeDefault position={[10, 15, 15]} zoom={100} />
//           <Bounds fit clip observe>
//             <Bonsai scale={3} position={[0, -0.75, 0]} />
//           </Bounds>
//           <ArcballControls enableZoom={false} makeDefault />
//         </View>
//         <View index={6} style={{ position: "relative", overflow: "hidden" }}>
//           <color attach="background" args={["#feabda"]} />
//           <Lights controls={false} preset="city" />
//           <OrthographicCamera makeDefault position={[10, 10, 10]} zoom={100} />
//           <Bounds fit clip observe>
//             <Microphone scale={3} position={[0, -0.75, 0]} />
//           </Bounds>
//           <ArcballControls enableZoom={false} makeDefault />
//         </View>
//         <View index={7} style={{ position: "relative", overflow: "hidden" }}>
//           <color attach="background" args={["#feabda"]} />
//           <Lights controls={false} preset="city" />
//           <OrthographicCamera makeDefault position={[25, 150, 19]} zoom={100} />
//           <Bounds fit clip observe>
//             <Psychology scale={3} position={[0, -0.75, 0]} />
//           </Bounds>
//           <ArcballControls enableZoom={false} makeDefault />
//         </View>
//         <View index={8} style={{ position: "relative", overflow: "hidden" }}>
//           <color attach="background" args={["#feabda"]} />
//           <Lights controls={false} preset="city" />
//           <OrthographicCamera makeDefault position={[0, 20, 70]} zoom={100} />
//           <Bounds fit clip observe>
//             <Toolbox scale={3} position={[0, -0.75, 0]} />
//           </Bounds>
//           <ArcballControls enableZoom={false} makeDefault />
//         </View>
//         <Canvas className="canvas" eventSource={container}>
//           <View.Port />
//         </Canvas>
//       </main>
//     </>
//   );
// };

// function Lights({ preset }) {
//   return (
//     <>
//       <ambientLight intensity={2.5} />
//       <pointLight position={[20, 30, 10]} />
//       <pointLight position={[-10, -10, -10]} color="red" />
//       <Environment preset={preset} />
//     </>
//   );
// }

// export default MultipleModelsContainer;

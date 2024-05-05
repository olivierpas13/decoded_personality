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
import Loader from "@/components/Loader";
import { Suspense } from "react";
import { useEffect } from "react";

const MultipleModelsContainer = ({ models, addMiddleZone, scrollToButtons }) => {
  const container = useRef();

  const specificPartRef = useRef(null);

  const [activeViewIndex, setActiveViewIndex] = useState(0);

  const [selected, setSelected] = useState("");

  useEffect(() => {
    specificPartRef.current.scrollIntoView({ behavior: "smooth" });
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

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
            <form method="dialog">
              <button
                className="btn btn-neutral mt-4"
                onClick={() => {
                  setSelected(model.title);
                  addMiddleZone(model.title);
                  scrollToButtons();
                }}
              >
                {"select".toUpperCase()}
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      ))}
      <h2 ref={specificPartRef} className=" p-2 prose w-screen text-gray-600 ">
        Select one to display more information
      </h2>

      <div className="absolute grid grid-cols-2 md:grid-cols-4 h-3/4 w-screen p-2 ">
        {models.map((model, index) => (
          <h4
            key={index}
            className={`mt-0 z-20 text-center ${selected == model.title ? "bg-black-500 text-white" : "bg-slate-100 text-blue-950"} border bg-opacity-50 rounded h-fit p-2`}
            onClick={() => setActiveViewIndex(index)}
          >
            {model.title}
          </h4>
        ))}
      </div>

      <main
        ref={container}
        className="mm-container gap-1 p-2 grid-cols-2 md:grid-cols-4"
      >
        {models.map((model, index) => (
          <View
            key={model.id}
            index={index + 1}
            onClick={() => {
              document.getElementById("modal" + index).showModal();
            }}
            style={{ position: "relative", overflow: "hidden" }}
            className={`border-4 cursor-pointer ${index === activeViewIndex ? "active" : ""}`}
          >
            <color attach="background" args={[model.backgroundColor]} />
            <Lights controls={false} preset="city" />

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
          <Suspense fallback={<Loader />}>
            <View.Port />
          </Suspense>
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

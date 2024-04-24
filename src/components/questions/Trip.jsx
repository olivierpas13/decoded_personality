import { Canvas, useFrame } from "@react-three/fiber";
import Matilda from "../models/Matilda";
import { OrbitControls } from "@react-three/drei";
import Trip from "../models/Trip";
import { Html } from "@react-three/drei";

const Trip = () => {
  return (
    <>
      <Html position={[14, 5, 0]} zIndexRange={[10, 20]}>
        <section className="question-ui w-screen flex justify-center content-center">
          <div className="flex flex-col">
            <h1 className="text- text-3xl font-semibold text-indigo-1000 text-center">
              You are currently on a trip, what do you catch yourself doing
              more?
            </h1>
            <ul className="grid grid-cols-2 gap-12r">
              <li
                onClick={() => {
                  console.log("1");
                }}
                className="btn btn-active w-3/4 btn-secondary text-center font-semibold text-secondary-content"
              >
                Admiring nature, the climate and your present situation
              </li>
              <li
                onClick={() => {
                  console.log("2");
                }}
                className="btn btn-active w-3/4 btn-secondary text-center font-semibold text-secondary-content"
              >
                Remembering past trips to the place, thinking about what has
                changed since you visited it
              </li>
            </ul>
          </div>
        </section>
      </Html>

      <Trip scale={[130, 130, 130]} position={[0, 0, 5]} />
    </>
  );
};

export default Trip;

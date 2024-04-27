// Se vs Si Question

import { Html } from "@react-three/drei";

const SeSi = () => {
  return (
    <>
      <Html position={[-1.77, 4, 0.02]}>
        <div className="w-screen bg-slate-50 bg-opacity-40 ">
          <h3 className="w-fit p-5 ">
            You are currently on a trip, what do you catch yourself doing more?
          </h3>
        </div>
      </Html>
      <Html
        position={[-1.77, 0, 0]}
        className=" bg-opacity-40 w-screen"
      >
        <div className="flex flex-col w-full p-5">
          <button
            onClick={() => {
              setCurrent("se");
            }}
            className="btn btn-neutral bg-opacity-70"
          >
            Admiring nature, the climate and your present situation
          </button>
          <div className="divider divider-vertical text-white">OR</div>
          <button
            onClick={() => {
              setCurrent("si");
            }}
            className="btn btn-neutral bg-opacity-70 "
          >
            Remembering past trips to the place, thinking about what has changed
            since you visited it
          </button>
        </div>
      </Html>
    </>
  );
};

export default SeSi;

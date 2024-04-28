import { Html } from "@react-three/drei";

const QuestionText = ({ question, firstOpt, secondOpt }) => {
  return (
    <>
      <Html position={[-1.77, 4, 0.02]}>
        <div className="w-screen bg-black-500 bg-opacity-70 ">
          <h3 className="w-fit p-3 text-white">{question}</h3>
        </div>
      </Html>
      <Html position={[-1.77, 0, 0]} className=" bg-opacity-40 w-screen">
        <div className="flex flex-col w-full p-5">
          <button
            onClick={() => {
              setCurrent("se");
            }}
            className="btn btn-neutral leading-6 h-fit  bg-opacity-70"
          >
            {firstOpt}
          </button>
          <div className="divider divider-vertical text-white">OR</div>
          <button
            onClick={() => {
              setCurrent("si");
            }}
            className="btn btn-neutral leading-6 h-fit bg-opacity-70 "
          >
            {secondOpt}
          </button>
        </div>
      </Html>
    </>
  );
};

export default QuestionText;

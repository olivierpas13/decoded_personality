const QuestionText = ({
  question,
  firstOpt,
  secondOpt,
  addAnswer,
  nextQuestion,
}) => {
  return (
    <div className="z-20 prose">
      <div className="w-screen absolute z-20 left-0 top-25 h-fit ">
        <div className="w-screen bg-black-500 bg-opacity-70 ">
          <h4 className="text-center p-3 leading-8 text-white">{question}</h4>
        </div>
      </div>

      <div className="absolute z-20  bottom-16 flex flex-col w-full p-5">
        <button
          onClick={() => {
            addAnswer(firstOpt.value);
            nextQuestion();
          }}
          className="btn btn-neutral leading-6 h-fit  bg-opacity-80"
        >
          {firstOpt.text}
        </button>
        <div className="divider divider-vertical text-white">OR</div>
        <button
          onClick={() => {
            addAnswer(secondOpt.value);
            nextQuestion();
          }}
          className="btn btn-neutral leading-6 p-2 h-fit bg-opacity-80 "
        >
          {secondOpt.text}
        </button>
      </div>
    </div>
  );
};

export default QuestionText;

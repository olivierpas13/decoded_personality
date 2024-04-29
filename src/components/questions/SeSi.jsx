// Se vs Si Question

import QuestionText from "./QuestionText";

const SeSi = ({ addAnswer, nextQuestion }) => {
  return (
    <QuestionText
      question={
        "You are currently on a trip, what do you catch yourself doing more?"
      }
      firstOpt={{
        value: "se",
        text: "Admiring nature, the climate and your present situation",
      }}
      secondOpt={{
        value: "si",
        text: "Remembering past trips to the place, thinking about what has changed since you visited it",
      }}
      addAnswer={addAnswer}
      nextQuestion={nextQuestion}
    />
  );
};

export default SeSi;

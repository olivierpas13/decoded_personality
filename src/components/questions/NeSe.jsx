import QuestionText from "./QuestionText";

const NeSe = ({ addAnswer, nextQuestion }) => {
  return (
    <QuestionText
      question={
        "You are a detective, how would you usually handle the investigation of crimes? "
      }
      firstOpt={{
        value: "ne",
        text: "Imagining possibilities, interrelating crimes to generate ideas about how it all happened, you need to think a lot before acting",
      }}
      secondOpt={{
        value: "se",
        text: "Generate realistic theories using the tangible information about what you know and see, you need to act quickly",
      }}
      addAnswer={addAnswer}
      nextQuestion={nextQuestion}

    />
  );
};

export default NeSe;

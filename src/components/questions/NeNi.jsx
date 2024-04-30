import QuestionText from "./QuestionText";

const NeNi = ({ addAnswer, nextQuestion }) => {
  return (
    <QuestionText
      question={
        "You are going to vacations to the beach, what would you prefer?"
      }
      firstOpt={{
        value: "ni",
        text: "Plan ahead activities to do and places to go but thinking about what could go wrong or right, you like to have structure",
      }}
      secondOpt={{
        value: "ne",
        text: "Let things flow, you don't like to overstress planning, you like to brainstorm ideas about what to do and to have the freedom to choose",
      }}
      addAnswer={addAnswer}
      nextQuestion={nextQuestion}
    />
  );
};

export default NeNi;

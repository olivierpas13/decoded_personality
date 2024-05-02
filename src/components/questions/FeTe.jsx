import QuestionText from "./QuestionText";

const FeTe = ({ addAnswer, nextQuestion }) => {
  return (
    <QuestionText
      question={
        "A family member of an employee dies and you notice his performance has been really bad lately, what would you do?"
      }
      firstOpt={{
        value: "fe",
        text: "You try to empathize with him, he can have a few days to grief. ",
      }}
      secondOpt={{
        value: "te",
        text: "You feel sorry for him but you cant let the company get innecesary costs, you decide to fire him",
      }}
      addAnswer={addAnswer}
      nextQuestion={nextQuestion}
    />
  );
};

export default FeTe;

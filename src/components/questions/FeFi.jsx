import QuestionText from "./QuestionText";

const FeFi = ({ addAnswer, nextQuestion }) => {
  return (
    <QuestionText
      question={
        "A friend is expressing her feelings to you. What do you tend to do?"
      }
      firstOpt={{
        value: "fe",
        text: "Feel like you instantly connect with what your friend is feeling, even if you don't understand the exact reason behind it",
      }}
      secondOpt={{
        value: "fi",
        text: "Find yourself taking a moment to consider your friend's feelings, maybe relating them to your own similar experiences for a deeper understanding",
      }}
      addAnswer={addAnswer}
      nextQuestion={nextQuestion}
    />
  );
};

export default FeFi;

import QuestionText from "./QuestionText";

const FiTi = ({ addAnswer, nextQuestion }) => {
  return (
    <QuestionText
      question={
        "Someone asks you about why you like what you like, how do you usually respond?"
      }
      firstOpt={{
        value: "fi",
        text: "You explain it based on your personal identity, you don't need a logical reason behind it",
      }}
      secondOpt={{
        value: "ti",
        text: "You explain it based on your own logical conclusions, you don't need any personal identity reason behind it"
      }}
    />
  );
};

export default FiTi;

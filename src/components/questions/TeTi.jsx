// Te vs Ti Question

import QuestionText from "./QuestionText";

const TeTi = ({ addAnswer, nextQuestion })  => {
  return (
    <QuestionText
      question={
        "A teacher taught you a formula in class, what do you catch yourself doing more?"
      }
      firstOpt={{
        value: "ti",
        text: "Trying to understand where does it come from by asking the teacher or investigating by yourself",
      }}
      secondOpt={{
        value: "te",
        text: "Trying to think about ways to use it and how can you use it more efficiently",
      }}
      addAnswer={addAnswer}
      nextQuestion={nextQuestion}
    />
  );
};

export default TeTi;

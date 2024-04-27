// Te vs Ti Question

import { Html } from "@react-three/drei";
import QuestionText from "./QuestionText";

const TeTi = () => {
  return (
    <QuestionText
      question={
        "A teacher taught you a formula in class, what do you catch yourself doing more?"
      }
      firstOpt={
        "Trying to understand where does it come from by asking the teacher or investigating by yourself"
      }
      secondOpt={
        "Trying to think about ways to use it and how can you use it more efficiently"
      }
    />
  );
};

export default TeTi;

import QuestionText from "./QuestionText";

const FeFi = () => {
  return (
    <QuestionText
      question={
        "You are with a friend who is expressing a feeling. If you want to understand how she feels, in most cases do you:"
      }
      firstOpt={
        "Do you usually feel like you instantly connect with what your friend is feeling, even if you don't understand the exact reason behind it?"
      }
      secondOpt={
        "Do you find yourself taking a moment to consider your friend's feelings, maybe relating them to your own similar experiences for a deeper understanding?"
      }
    />
  );
};

export default FeFi;

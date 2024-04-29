import QuestionText from "./QuestionText";

const NiSi = () => {
  return (
    <QuestionText
      question={
        "You need to go to a new neighbourhood, somebody gives you directions about how to get there, what do you decide to do?"
      }
      firstOpt={{
        value: "ni",
        text: "You decide to follow the directions, you prefer to plan ahead how to get there",
      }}
      secondOpt={{
        value: "si",
        text: "You decide to get there walking through familiar streets, you prefer what you already know",
      }}
    />
  );
};

export default NiSi;

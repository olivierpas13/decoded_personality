import { useState } from "react";
import SeSi from "./questions/SeSi";
import TeTi from "./questions/TeTi";
import FeTe from "./questions/FeTe";
import FeFi from "./questions/FeFi";
import NeSe from "./questions/NeSe";
import FiTi from "./questions/FiTi";
import NiSi from "./questions/NiSi";
import NeNi from "./questions/NeNi";
import MultipleModelsContainer from "@/models/MultipleModelsContainer";
import Rainbow from "@/models/Rainbow";
import Backpack from "@/models/Backpack";
import Knife from "@/models/Knife";
import Calendar from "@/models/Calendar";
import Bonsai from "@/models/Bonsai";
import Microphone from "@/models/Microphone";
import Psychology from "@/models/Psychology";
import Toolbox from "@/models/Toolbox";
import { determineMBTI } from "@/utils/determineMBTI";
import { useNavigate } from "@tanstack/react-router";
import Compass from "@/models/Compass";
import Gramophone from "@/models/Gramophone";
import Families from "./questions/Families";
import Chess from "@/models/Chess";
import Heart from "@/models/Heart";
import QuestionContainerTest from "./questions/QuestionContainerTest";
import { Suspense } from "react";
const Test = () => {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    cognitives: [],
    middleZone: "",
    family: "",
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const addAnswer = (ans) => {
    answers.cognitives[currentQuestion] = ans;
  };

  const addMiddleZone = (zone) => {
    setAnswers({ ...answers, middleZone: zone });
  };

  const addFamily = (family) => {
    setAnswers({ ...answers, family: family });
  };

  const nextQuestion = () => {
    if (10 <= currentQuestion + 1) {
      if (determineMBTI(answers)) {
        navigate({
          to: `/results/${determineMBTI(answers)}`,
        });
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
    return null;
  };

  const questions = [
    <SeSi addAnswer={addAnswer} nextQuestion={nextQuestion} />,
    <TeTi addAnswer={addAnswer} nextQuestion={nextQuestion} />,
    <FeFi addAnswer={addAnswer} nextQuestion={nextQuestion} />,
    <FeTe addAnswer={addAnswer} nextQuestion={nextQuestion} />,
    <NeSe addAnswer={addAnswer} nextQuestion={nextQuestion} />,
    <FiTi addAnswer={addAnswer} nextQuestion={nextQuestion} />,
    <NiSi addAnswer={addAnswer} nextQuestion={nextQuestion} />,
    <NeNi addAnswer={addAnswer} nextQuestion={nextQuestion} />,
  ];

  const families = [
    {
      id: 1,
      component: Chess,
      title: "Analyst",
      cameraPosition: [115, 80, 88],
      backgroundColor: "#feabda",
      properties: [
        "Logical and analytical.",
        "Good at solving complex problems.",
        "Objective and impartial in your decision-making.",
      ],
    },
    {
      id: 2,
      component: Heart,
      title: "Idealist",
      cameraPosition: [405, 445, 1025],
      backgroundColor: "#e1ca96",
      properties: [
        "Creative and imaginative.",
        "Passionate about your beliefs.",
        "Empathetic and compassionate.",
        "Idealistic and optimistic.",
      ],
    },
    {
      id: 3,
      component: Compass,
      title: "Explorer",
      cameraPosition: [520, 1380, -370],
      backgroundColor: "#c4e3cb",
      properties: [
        "Adventurous and spontaneous, sometimes can be perceived as impulsive.",
        "Practical and down-to-earth.",
        "Good at adapting to new situations.",
        "Focused on the present and the tangible.",
        "You like new sensations and experiences.",
      ],
    },
    {
      id: 4,
      component: Gramophone,
      title: "Realist",
      cameraPosition: [25, 8, 9.5],
      backgroundColor: "#e6e2d3",
      properties: [
        "Loyal and committed to your values.",
        "Respectful of authority and tradition.",
        "Cautious and prefer stability.",
        "If it's not broken, don't fix it.",
      ],
    },
  ];

  const middleZones = [
    {
      id: 1,
      component: Rainbow,
      title: "Prudent Optimism",
      cameraPosition: [75, -100, -100],
      backgroundColor: "#feabda",
      properties: [
        "You see the potential for positive outcomes.",
        "You believe in your ability to overcome challenges.",
        "You view setbacks as temporary, not the end of the road.",
      ],
    },
    {
      id: 2,
      component: Backpack,
      title: "Overpersonalization",
      cameraPosition: [-30, 20, -30],
      backgroundColor: "#e1ca96",
      properties: [
        "You have a unique perspective on the world.",
        "You find creative solutions to everyday problems.",
        "You prefer your own methods, even if they seem unconventional.",
      ],
    },
    {
      id: 3,
      component: Knife,
      title: "Principled Utilitarian",
      cameraPosition: [0, 200, -100],
      backgroundColor: "#c4e3cb",
      properties: [
        "You prioritize solutions that are both effective and ethical.",
        "You believe the ends don't always justify the means.",
        "You value long-term consequences over immediate gains.",
      ],
    },
    {
      id: 4,
      component: Calendar,
      title: "Tangible Projection",
      cameraPosition: [-10, 15, 18],
      backgroundColor: "#e6e2d3",
      properties: [
        "You prefer plans with achievable goals and clear milestones.",
        "You are grounded in reality and avoid overly ambitious plans.",
        "You appreciate projects that show steady, tangible progress.",
      ],
    },
    {
      id: 5,
      component: Bonsai,
      title: "Cautious Renovation",
      cameraPosition: [10, 15, 15],
      backgroundColor: "#c4e3cb",
      properties: [
        "You enjoy experimenting with new ideas within familiar domains. ",
        "You seek gradual improvements to your routines and habits.",
        "You prefer controlled change over radical transformations.",
      ],
    },
    {
      id: 6,
      component: Microphone,
      title: "Eloquent Charisma",
      cameraPosition: [10, 10, 10],
      backgroundColor: "#bad7df",
      properties: [
        "You excel at explaining complex ideas clearly. ",
        "You are usually good at talking or debating people.",
        "People perceive you as articulate and quick-witted.",
      ],
    },
    {
      id: 7,
      component: Psychology,
      title: "Empathetic Critic",
      cameraPosition: [25, 150, 19],
      backgroundColor: "#424242",
      properties: [
        "You understand the motivations behind people's actions.",
        "You can analyze behaviors to determine their underlying causes.",
        "You gain insights into your own past behaviors with maturity.",
      ],
    },
    {
      id: 8,
      component: Toolbox,
      title: "Selective Functionality",
      cameraPosition: [0, 20, 70],
      backgroundColor: "#ffb4a2",
      properties: [
        "You are intensely focused on the tasks that interest you.",
        "You can achieve remarkable results in your chosen areas.",
        "You might surprise others with your dedication to specific skills.",
      ],
    },
  ];

  const scenes = [
    <QuestionContainerTest
      addMiddleZone={addMiddleZone}
      addFamily={addFamily}
      currentQuestion={currentQuestion}
      nextQuestion={nextQuestion}
    />,
    <Families
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      models={families}
      addFamily={addFamily}
    />,
    <MultipleModelsContainer
      addMiddleZone={addMiddleZone}
      models={middleZones}
    />,
  ];

  console.log(answers);

  return (
    <section className="prose h-screen w-screen">
      <div className=" join grid grid-cols-2 my-5 md:w-screen md:px-20">
        <button
          onClick={() => previousQuestion()}
          className={`join-item btn btn-active border-base-100 ${currentQuestion === 0 ? "btn-disabled" : "btn-active"}`}
        >
          {"previous".toUpperCase()}
        </button>
        <button
          onClick={() => nextQuestion()}
          className={`join-item btn btn-active border-base-100 ${(currentQuestion === 8 && answers.family.length === 0) || (currentQuestion === 9 && answers.middleZone.length === 0) ? "btn-disabled" : "btn-active"}`}
        >
          {"next".toUpperCase()}
        </button>
      </div>
      {questions[currentQuestion]}
      {currentQuestion < 8 && scenes[0]}
      {currentQuestion == 8 && scenes[1]}
      {currentQuestion == 9 && scenes[2]}
    </section>
  );
};

export default Test;

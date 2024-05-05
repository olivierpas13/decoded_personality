import { useState } from "react";
import Trip from "@/models/Trip";
import Classroom from "@/models/Classroom";
import SeSi from "./questions/SeSi";
import TeTi from "./questions/TeTi";
import FeTe from "./questions/FeTe";
import Desk from "@/models/Desk";
import FeFi from "./questions/FeFi";
import GirlCrying from "@/models/CryingGirl";
import Alley from "@/models/Alley";
import Detective from "@/models/Detective";
import NeSe from "./questions/NeSe";
import Matilda from "@/models/Matilda";
import FiTi from "./questions/FiTi";
import NiSi from "./questions/NiSi";
import Beach from "../models/Beach";
import NeNi from "./questions/NeNi";
import MultipleModelsContainer from "@/models/MultipleModelsContainer";
import Rainbow from "@/models/Rainbow";
import { useRef } from "react";
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
const Test = () => {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    cognitives: [],
    middleZone: "",
    family: "",
  });
  const ref = useRef();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const addAnswer = (ans) => {
    answers.cognitives[currentQuestion] = ans;
  };

  const addMiddleZone = (zone) => {
    answers.middleZone = zone;
  };

  const addFamily = (family) => {
    setAnswers({ ...answers, family: family });
  };

  const nextQuestion = () => {
    if (scenes.length <= currentQuestion + 1) {
      console.log(answers);

      console.log(determineMBTI(answers));

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
      title: "Realist",
      cameraPosition: [520, 1380, -370],
      backgroundColor: "#c4e3cb",
      properties: [
        "Practical and down-to-earth.",
        "Reliable and responsible.",
        "Focused on the present and the tangible.",
        "You like new sensations and experiences.",
      ],
    },
    {
      id: 4,
      component: Gramophone,
      title: "Tradionalist",
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
    <Trip
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[10, 10, 10]}
      position={[0.2, 0.2, 0.4]}
      backgroundColor="#EAEAEA" // Light Gray
    />,
    <Classroom
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[0.004, 0.004, 0.004]}
      position={[0, 0.05, -0.1]}
      backgroundColor="#F5F5F5" // Light Silver
    />,
    <GirlCrying
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[0.2,0.2,0.2]}
      position={[0, 2, -3]}
      backgroundColor="#D9D9D9" // Dark Gray
    />,
    <Desk
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[5, 0, 60]}
      backgroundColor="#CCCCCC" // Grey
    />,
    <Detective
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[2, 2, 2]}
      position={[0, -0.05, 0]}
      backgroundColor="#BFBFBF" // Light Grey
    />,
    <Matilda
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[0, -55, 10]}
      backgroundColor="#E0E0E0" // Lighter Grey
    />,
    <Alley
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1.5, 1.5, 1.5]}
      position={[0, -35, -147]}
      backgroundColor="#C0C0C0" // Silver
    />,
    <Beach
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      scale={[1, 1, 1]}
      position={[-60, -90, -120]}
      backgroundColor="#D6D6D6" // Light Silver
    />,
    <Families
      previousQuestion={previousQuestion}
      nextQuestion={nextQuestion}
      models={families}
      addFamily={addFamily}
      backgroundColor="#D1D1D1" // Greyish
    />,
    <MultipleModelsContainer
      addMiddleZone={addMiddleZone}
      reference={ref}
      models={middleZones}
      answers={answers}
      backgroundColor="#CCCCCC" // Grey
    />,
  ];

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
          className="join-item btn btn-active border-base-100"
        >
          {"next".toUpperCase()}
        </button>
      </div>
      {questions[currentQuestion]}
      {scenes[currentQuestion]}
    </section>
  );
};

export default Test;

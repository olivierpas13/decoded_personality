import { LuSwords, LuPartyPopper } from "react-icons/lu";
import { GiNotebook } from "react-icons/gi";
import {
  FaTools,
  FaPaintBrush,
  FaPencilRuler,
  FaMicrophone,
} from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import { BsSunglasses } from "react-icons/bs";
import { RiPsychotherapyFill } from "react-icons/ri";
import {
  FaPersonMilitaryPointing,
  FaLightbulb,
  FaCloud,
  FaUserGroup,
  FaHandHoldingMedical,
  FaTree,
} from "react-icons/fa6";

const Results = ({ mbti }) => {
  const stack = ["Dominant", "Auxiliary", "Tertiary", "Inferior"];

  const mbtiLogoMap = {
    ENFJ: <LuSwords size={25} className="ml-4" />,
    ENTJ: <FaPersonMilitaryPointing size={25} className="ml-4" />,
    INTP: <FaLightbulb size={25} className="ml-4" />,
    INFP: <FaCloud size={25} className="ml-4" />,
    ISTJ: <GiNotebook size={25} className="ml-4" />,
    INTJ: <CiRoute size={25} className="ml-4" />,
    ISTP: <FaTools size={25} className="ml-4" />,
    ISFP: <FaPaintBrush size={25} className="ml-4" />,
    ESTJ: <FaPencilRuler size={25} className="ml-4" />,
    ESFJ: <FaUserGroup size={25} className="ml-4" />,
    ENTP: <FaMicrophone size={25} className="ml-4" />,
    ESTP: <BsSunglasses size={25} className="ml-4" />,
    ISFJ: <FaHandHoldingMedical size={25} className="ml-4" />,
    INFJ: <RiPsychotherapyFill size={25} className="ml-4" />,
    ENFP: <FaTree size={25} className="ml-4" />,
    ESFP: <LuPartyPopper size={25} className="ml-4" />,
  };

  return (
    <div className="prose h-fit p-5">
      <div className="flex items-center">
        <h2 className="m-0 w-fit">{mbti.name}</h2>
        {mbtiLogoMap[`${mbti.alias}`]}
      </div>
      <h3 className="text-gray-500 my-1">{mbti.alias} </h3>
      <hr className="mb-8" />
      <h4>Cognitive Functions</h4>
      {mbti.cognitives.map((cog, index) => {
        return (
          <div key={index}>
            <div className="collapse bg-base-200 border">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-l ">
                <div className="badge badge-secondary badge-sm mr-3">
                  {stack[index]}
                </div>
                {cog.name}
                <span className="ml-4 badge badge-sm text-primary">
                  {cog.abbreviation}
                </span>
              </div>
              <div className="collapse-content ">
                <ul>
                  {cog.characteristics.map((char, index) => {
                    return <li key={index}>{char}</li>;
                  })}
                </ul>
                <span className="badge badge-info mr-4">{cog.mbtis[0]}</span>
                <span className="badge badge-info">{cog.mbtis[0]}</span>
              </div>
            </div>
          </div>
        );
      })}
      <h4>Characteristics</h4>
      <ul>
        {mbti.characteristics.map((char, index) => {
          return <li key={index}>{char}</li>;
        })}
      </ul>
    </div>
  );
};

export default Results;

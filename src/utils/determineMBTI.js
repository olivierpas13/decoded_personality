import { mbtiCognitives } from "@/theory/mbtis";

export function determineMBTI(answers) {
  const cognitiveFunctions = answers.cognitives;
  const middleZoneOptions = [
    { name: "Prudent Optimism", types: ["ENFJ", "ENTJ"] },
    { name: "Overpersonalization", types: ["INTP", "INFP"] },
    { name: "Principled Utilitarian", types: ["ISTJ", "INTJ"] },
    { name: "Tangible Projection", types: ["ISTP", "ISFP"] },
    { name: "Cautious Renovation", types: ["ESTJ", "ESFJ"] },
    { name: "Eloquent Charisma", types: ["ENTP", "ESTP"] },
    { name: "Empathetic Critic", types: ["ISFJ", "INFJ"] },
    { name: "Selective Functionality", types: ["ENFP", "ESFP"] },
  ];

  let maxScore = -1;
  let result = "";

  for (const [mbti, functions] of Object.entries(mbtiCognitives)) {
    let score = functions.filter((f) => cognitiveFunctions.includes(f)).length;
    if (score > maxScore) {
      maxScore = score;
      result = mbti;
    }
  }

  let finalResult = result;
  let middleZoneResult = "";

  const selectedMiddleZone = answers.middleZone;
  for (const option of middleZoneOptions) {
    if (option.name === selectedMiddleZone) {
      const types = option.types;
      if (types.includes(result)) {
        middleZoneResult = result;
      } else {
        middleZoneResult = types.find((type) => type !== result);
      }
      break;
    }
  }

  if (middleZoneResult !== "") {
    finalResult = middleZoneResult;
  }

  return finalResult;
}

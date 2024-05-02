import { mbtiCognitives, mbtiFamilyTypes } from "@/theory/mbtis";

export function determineMBTI(answers) {
  console.log(answers);
  const cognitiveFunctions = answers.cognitives;
  const middleZoneOptions = [
    { name: "Prudent Optimism", functions: ["fe", "te", "ni"] },
    { name: "Overpersonalization", functions: ["fi", "ti", "ne"] },
    { name: "Principled Utilitarian", functions: ["si", "ni", "te"] },
    { name: "Tangible Projection", functions: ["si", "fi", "ti"] },
    { name: "Cautious Renovation", functions: ["si", "fe", "te"] },
    { name: "Eloquent Charisma", functions: ["ne", "se", "ti"] },
    { name: "Empathetic Critic", functions: ["si", "ni", "fe"] },
    { name: "Selective Functionality", functions: ["ne", "se", "fi"] },
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
      const functions = option.functions;
      cognitiveFunctions.push(...functions);
      break;
    }
  }

  for (const [mbti, functions] of Object.entries(mbtiCognitives)) {
    let score = functions.filter((f) => cognitiveFunctions.includes(f)).length;
    if (score > maxScore) {
      maxScore = score;
      result = mbti;
    }
  }

  let familyResult = "";

  const selectedFamilyType = answers.familyType;
  for (const [mbti, familyTypes] of Object.entries(mbtiFamilyTypes)) {
    if (familyTypes.includes(selectedFamilyType)) {
      familyResult = mbti;
      break;
    }
  }

  if (familyResult !== "") {
    finalResult = familyResult;
  }

  console.log(finalResult);
  return finalResult;
}

import { mbtiCognitives, mbtiFamilies } from "../theory/mbtis.js";

export function determineMBTI(answers) {
  const selectedFamilyType = answers.family;

  const possibleMBTIs = mbtiFamilies[selectedFamilyType];

  let cognitiveFunctions = answers.cognitives;

  

  const middleZoneOptions = [
    {
      name: "Prudent Optimism",
      functions: ["fe", "te", "ni"],
      mbtis: ["ENFJ", "ENTJ"],
    },
    {
      name: "Overpersonalization",
      functions: ["fi", "ti", "ne"],
      mbtis: ["INFP", "INTP"],
    },
    {
      name: "Principled Utilitarian",
      functions: ["si", "ni", "te"],
      mbtis: ["ISTJ", "INTJ"],
    },
    {
      name: "Tangible Projection",
      functions: ["si", "fi", "ti"],
      mbtis: ["ISFP", "ISTP"],
    },
    {
      name: "Cautious Renovation",
      functions: ["si", "fe", "te"],
      mbtis: ["ESFJ", "ESTJ"],
    },
    {
      name: "Eloquent Charisma",
      functions: ["ne", "se", "ti"],
      mbtis: ["ENTP", "ESTP"],
    },
    {
      name: "Empathetic Critic",
      functions: ["si", "ni", "fe"],
      mbtis: ["INFJ", "ISFJ"],
    },
    {
      name: "Selective Functionality",
      functions: ["ne", "se", "fi"],
      mbtis: ["ENFP", "ESFP"],
    },
  ];

  const extraPoint =
    mbtiCognitives[
      middleZoneOptions
        .find((option) => option.name === answers.middleZone)
        ?.mbtis?.filter((mbti) => possibleMBTIs.includes(mbti))
    ];
  if (extraPoint !== undefined) cognitiveFunctions.push(extraPoint[0]);

  let maxScore = -1;
  let result = "";

  const selectedMiddleZone = answers.middleZone;
  const selectedMiddleZoneFunctions =
    middleZoneOptions.find((option) => option.name === selectedMiddleZone)
      ?.functions || [];

  cognitiveFunctions = [...cognitiveFunctions, ...selectedMiddleZoneFunctions];

  console.log(cognitiveFunctions);

  const cognitiveFunctionCounts = {};
  for (const func of cognitiveFunctions) {
    if (cognitiveFunctionCounts[func]) {
      cognitiveFunctionCounts[func]++;
    } else {
      cognitiveFunctionCounts[func] = 1;
    }
  }

  const sortedFunctions = Object.entries(cognitiveFunctionCounts).sort(
    (a, b) => b[1] - a[1]
  );

  const orderedFunctions = sortedFunctions
    .map((entry) => entry[0])
    .splice(0, 4);
  for (const mbti of possibleMBTIs) {
    let score = 0;
    for (let i = 0; i < orderedFunctions.length; i++) {
      if (mbtiCognitives[mbti][i] === orderedFunctions[i]) {
        score++;
      } else {
        break; // Break if the order doesn't match
      }
    }
    if (score > maxScore) {
      maxScore = score;
      result = mbti;
    }
  }

  return result;
}

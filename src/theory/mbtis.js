import { LuSwords } from "react-icons/lu";

export const mbtiCognitives = {
  ENFJ: ["fe", "ni", "se", "ti"],
  ENTJ: ["te", "ni", "se", "fi"],
  INTP: ["ti", "ne", "si", "fe"],
  INFP: ["fi", "ne", "si", "te"],
  ISTJ: ["si", "te", "fi", "ne"],
  INTJ: ["ni", "te", "fi", "se"],
  ISTP: ["ti", "se", "ni", "fe"],
  ISFP: ["fi", "se", "ni", "te"],
  ESTJ: ["te", "si", "ne", "fi"],
  ESFJ: ["fe", "si", "ne", "ti"],
  ENTP: ["ne", "ti", "fe", "si"],
  ESTP: ["se", "ti", "fe", "ni"],
  ISFJ: ["si", "fe", "ti", "ne"],
  INFJ: ["ni", "fe", "ti", "se"],
  ENFP: ["ne", "fi", "te", "si"],
  ESFP: ["se", "fi", "te", "ni"],
};

export const cognitiveFunctions = {
  fe: {
    abbreviation: "FE",
    name: "Extroverted Feeling",
    characteristics: [
      "Values harmony and social cohesion",
      "Sensitive to the emotional atmosphere",
      "Strives for consensus and cooperation",
    ],
    mbtis: ["ESFJ", "ENFJ"],
  },
  ni: {
    abbreviation: "NI",
    name: "Introverted Intuition",
    characteristics: [
      "Focuses on insights and possibilities",
      "Sees connections between disparate ideas",
      "Values imagination and vision",
    ],
    mbtis: ["INFJ", "INTJ"],
  },
  se: {
    abbreviation: "SE",
    name: "Extroverted Sensing",
    characteristics: [
      "Lives in the present moment",
      "Values concrete experiences and sensations",
      "Seeks excitement and new experiences",
    ],
    mbtis: ["ESFP", "ESTP"],
  },
  ti: {
    abbreviation: "TI",
    name: "Introverted Thinking",
    characteristics: [
      "Analyzes and categorizes information",
      "Values logic and objective reasoning",
      "Prefers independent and systematic thinking",
    ],
    mbtis: ["ISTP", "INTP"],
  },
  fi: {
    abbreviation: "FI",
    name: "Introverted Feeling",
    characteristics: [
      "Values personal beliefs and ethics",
      "Sensitive to inner feelings and emotions",
      "Seeks authenticity and personal meaning",
    ],
    mbtis: ["ISFP", "INFP"],
  },
  ne: {
    abbreviation: "NE",
    name: "Extroverted Intuition",
    characteristics: [
      "Generates ideas and possibilities",
      "Sees patterns and trends in data",
      "Values innovation and creativity",
    ],
    mbtis: ["ENFP", "ENTP"],
  },
  si: {
    abbreviation: "SI",
    name: "Introverted Sensing",
    characteristics: [
      "Relies on past experiences and memories",
      "Values tradition and personal history",
      "Prefers familiar and predictable environments",
    ],
    mbtis: ["ISFJ", "ISTJ"],
  },
  te: {
    abbreviation: "TE",
    name: "Extroverted Thinking",
    characteristics: [
      "Focuses on efficiency and organization",
      "Values objective and results-oriented thinking",
      "Prefers clear and logical systems",
    ],
    mbtis: ["ESTJ", "ENTJ"],
  },
};

const { fe, ni, se, ti, fi, ne, si, te } = cognitiveFunctions;

export const mbtis = {
  ENFJ: {
    cognitives: [fe, ni, se, ti],
    alias: "ENFJ",
    name: "The Protagonist",
    characteristics: [
      "Good at socializing and empathizing with people.",
      "The protagonist of their social groups",
      "Tend to be very good at convincing people and they always have a plan to do so",
      "They usually have a very accurate 'first impression' of people",
    ],
  },
  ENTJ: {
    cognitives: [te, ni, se, fi],
    alias: "ENTJ",
    name: "The Commander",
    characteristics: [
      "Natural leaders who embody the gifts of charisma and confidence.",
      "Excelling at making difficult decisions",
      "They are usually very rational and always find logical solutions to problems",
      "They are not very empathetic with people's feelings",
    ],
  },
  INTP: {
    cognitives: [ti, ne, si, fe],
    alias: "INTP",
    name: "The Thinker",
    characteristics: [
      "They love to analyze and solve complex problems.",
      "Usually quiet and reserved",
      "They have a great ability to find innovative solutions to problems",
      "They are not very good at dealing with emotions",
    ],
  },
  INFP: {
    cognitives: [fi, ne, si, te],
    alias: "INFP",
    name: "The Dreamer",
    characteristics: [
      "Loyal to their values and to people who are important to them.",
      "Seeking meaning and purpose in everything.",
      "Creative and inspirational",
      "They are usually very introverted and reserved",
    ],
  },
  ISTJ: {
    cognitives: [si, te, fi, ne],
    alias: "ISTJ",
    name: "The Inspector",
    characteristics: [
      "Practical and fact-minded individuals, whose reliability cannot be doubted.",
      "Orderly and meticulous",
      "They tend to follow traditions and rules",
      "They are not very good at dealing with change",
    ],
  },
  INTJ: {
    cognitives: [ni, te, fi, se],
    alias: "INTJ",
    name: "The Architect",
    characteristics: [
      "Imaginative and strategic thinkers, with a plan for everything.",
      "They excel at developing long-term strategies",
      "Independent and decisive",
      "They are usually very private and reserved",
    ],
  },
  ISTP: {
    cognitives: [ti, se, ni, fe],
    alias: "ISTP",
    name: "The Crafter",
    characteristics: [
      "Practical and realistic, they excel at making things work.",
      "They are usually very independent and adaptable",
      "They are usually very curious about how things work",
      "They are not very good at dealing with emotions",
    ],
  },
  ISFP: {
    cognitives: [fi, se, ni, te],
    alias: "ISFP",
    name: "The Composer",
    characteristics: [
      "Gentle and compassionate, they seek beauty and harmony.",
      "They are usually very artistic and creative",
      "They are usually very reserved and quiet",
      "They are not very good at dealing with conflicts",
    ],
  },
  ESTJ: {
    cognitives: [te, si, ne, fi],
    alias: "ESTJ",
    name: "The Executive",
    characteristics: [
      "Excellent administrators, unsurpassed at managing things or people.",
      "They are usually very organized and responsible",
      "They are usually very direct and straightforward",
      "They are not very good at dealing with emotions",
    ],
  },
  ESFJ: {
    cognitives: [fe, si, ne, ti],
    alias: "ESFJ",
    name: "The Caregiver",
    characteristics: [
      "Warm-hearted, popular, and conscientious.",
      "They are usually very generous and loving",
      "They are usually very sociable and outgoing",
      "They are not very good at dealing with criticism",
    ],
  },
  ENTP: {
    cognitives: [ne, ti, fe, si],
    alias: "ENTP",
    name: "The Visionary",
    characteristics: [
      "Smart, curious thinkers who cannot resist an intellectual challenge.",
      "They are usually very enthusiastic and innovative",
      "They are usually very argumentative and enjoy debating",
      "They are not very good at following through with their plans",
    ],
  },
  ESTP: {
    cognitives: [se, ti, fe, ni],
    alias: "ESTP",
    name: "The Entrepreneur",
    characteristics: [
      "Smart, energetic, and very perceptive people, who truly enjoy living on the edge.",
      "They are usually very active and adventurous",
      "They are usually very charming and confident",
      "They are not very good at planning for the future",
    ],
  },
  ISFJ: {
    cognitives: [si, fe, ti, ne],
    alias: "ISFJ",
    name: "The Protector",
    characteristics: [
      "Quiet, kind, and conscientious, they are extremely thorough and take their responsibilities seriously.",
      "They are usually very loyal and hardworking",
      "They are usually very modest and humble",
      "They are not very good at dealing with criticism",
    ],
  },
  INFJ: {
    cognitives: [ni, fe, ti, se],
    alias: "INFJ",
    name: "The Advocate",
    characteristics: [
      "Quiet and mystical, yet very inspiring and tireless idealists.",
      "They are usually very insightful and visionary",
      "They are usually very passionate and dedicated",
      "They are not very good at dealing with conflicts",
    ],
  },
  ENFP: {
    cognitives: [ne, fi, te, si],
    alias: "ENFP",
    name: "The Champion",
    characteristics: [
      "Enthusiastic, creative, and sociable free spirits, who can always find a reason to smile.",
      "They are usually very imaginative and empathetic",
      "They are usually very spontaneous and unpredictable",
      "They are not very good at following through with their plans",
    ],
  },
  ESFP: {
    cognitives: [se, fi, te, ni],
    alias: "ESFP",
    name: "The Performer",
    characteristics: [
      "Spontaneous, energetic, and enthusiastic people - life is never boring around them.",
      "They are usually very outgoing and fun-loving",
      "They are usually very practical and realistic",
      "They are not very good at planning for the future",
    ],
  },
};

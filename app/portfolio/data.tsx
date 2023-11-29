import { Award, Experience, Prize, SkillCategory } from "@/app/lib/definitions";

export const subjectToColor: { [key: string]: string } = {
  math: "bg-red-600",
  phys: "bg-indigo-500",
  astro: "bg-blue-700",
  cs: "bg-cyan-600",
  chem: "bg-green-600",
  robot: "bg-slate-600",
};

export const locationToColor: { [key: string]: string } = {
  world: "text-cyan-300",
  nat: "text-green-400",
  state: "text-orange-400",
  reg: "text-yellow-400",
};

export const prizeToColor = (choice: Prize) => {
  switch (choice) {
    case "gold":
      return "bg-yellow-500 text-black";
    case 1:
      return "bg-yellow-500 text-black";
    case "silver":
      return "bg-gray-300 text-black";
    case 2:
      return "bg-gray-300 text-black";
    case "bronze":
      return "bg-yellow-600 text-black";
    case 3:
      return "bg-yellow-600 text-black";
    case "hm":
      return "bg-indigo-300 text-black";
    case 4:
      return "bg-indigo-300 text-black";
    default:
      return "bg-gray-700 text-white";
  }
};

export const experiences: Experience[] = [
  {
    title: "CMO at Dupla",
    company: "Dupla",
    description:
      "Brazilian recruiter company. Helps companies hire qualified women in tech.",

    date: "April - July 2021",
  },
  {
    title: "Co-Founder of Nery",
    company: "Nery",
    description:
      "Medical startup. Devised an app that uses AI to interact with the elderly.",
    date: "January - March 2020",
  },
  {
    title: "Vice President of NOIC",
    company: "NOIC",
    description:
      "Largest Brazilian education NGO made by students with courses for science Olympiads.",
    date: "May 2019 - March 2020",
  },
  {
    title: "Math Tutoring",
    company: "Self-employed",
    description:
      "Tutored students in Brazil and the US in advanced Olympiad math content.",
    date: "2018 - Current",
  },
  {
    title: "Web Developer at Big Data Big Impact",
    company: "Big Data Big Impact",
    description:
      "Developed a web app that predicts Parkinson using data analysis and ML.",
    date: "September - December 2022",
  },
  {
    title: "Game Developer for Good Luck Collective",
    company: "Good Luck Collective",
    description:
      "Developed multiple games for the Good Luck Collective, a group of indie artists and game developers.",
    date: "2020 - Current",
  },
];

export const groupedSkills: SkillCategory[] = [
  {
    name: "programming",
    skills: [
      {
        name: "javascript",
        level: 3,
      },
      {
        name: "typescript",
        level: 3,
      },
      {
        name: "python",
        level: 3,
      },
      {
        name: "c#",
        level: 3,
      },
      {
        name: "java",
        level: 3,
      },
      {
        name: "html/css",
        level: 3,
      },
      {
        name: "c/c++",
        level: 1,
      },
      {
        name: "sql",
        level: 2,
      },
      {
        name: "php",
        level: 2,
      },
      {
        name: "ruby",
        level: 2,
      },
      {
        name: "go",
        level: 1,
      },
      {
        name: "haskell",
        level: 1,
      },
    ],
  },
  {
    name: "libraries",
    skills: [
      {
        name: "react",
        level: 3,
      },
      {
        name: "next.js",
        level: 3,
      },
      {
        name: "node.js",
        level: 3,
      },
      {
        name: "express",
        level: 1,
      },
      {
        name: "WordPress.js",
        level: 2,
      },
      {
        name: "three.js",
        level: 2,
      },
      {
        name: "gatsby",
        level: 2,
      },
      {
        name: "gohugo",
        level: 1,
      },
      {
        name: "d3.js",
        level: 1,
      },
      {
        name: "svelte/sveltekit",
        level: 2,
      },
    ],
  },
  {
    name: "software",
    skills: [
      {
        name: "git",
        level: 3,
      },
      {
        name: "notion",
        level: 3,
      },
      {
        name: "obs studio",
        level: 3,
      },
      {
        name: "obsidian",
        level: 3,
      },
      {
        name: "vscode",
        level: 3,
      },
      {
        name: "figma",
        level: 3,
      },
      {
        name: "blender",
        level: 1,
      },
      {
        name: "unity",
        level: 3,
      },
      {
        name: "audacity",
        level: 2,
      },
      {
        name: "procreate",
        level: 3,
      },
      {
        name: "resolve studio",
        level: 2,
      },
      {
        name: "android studio",
        level: 1,
      },
      {
        name: "excel",
        level: 1,
      },
      {
        name: "photoshop",
        level: 1,
      },
    ],
  },
  {
    name: "languages",
    skills: [
      {
        name: "english",
        level: 3,
      },
      {
        name: "portuguese",
        level: 3,
      },
      {
        name: "japanese",
        level: 1,
      },
      {
        name: "spanish",
        level: 2,
      },
      {
        name: "french",
        level: 1,
      },
    ],
  },
];

export const awards: Award[] = [
  {
    title: "GMTK Game Jam 2023",
    location: "world",
    subject: "cs",
    prize: 68,
    year: 2023,
  },
  {
    title: "GMTK Game Jam 2021",
    location: "world",
    subject: "cs",
    prize: 325,
    year: 2021,
  },
  {
    title: "Brackeys Game Jam 2021.1",
    location: "world",
    subject: "cs",
    prize: 36,
    year: 2021,
  },
  {
    title: "HackGT X",
    location: "state",
    subject: "cs",
    prize: "hm",
    year: 2023,
  },
  {
    title: "HackGT 9",
    location: "state",
    subject: "cs",
    prize: "hm",
    year: 2022,
  },
  {
    title: "Hackathon MIT Hackmed",
    location: "nat",
    subject: "cs",
    prize: 2,
    year: 2020,
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2019,
  },
  {
    title: "Brazilian Math Olympiad of Public Schools",
    location: "nat",
    subject: "math",
    prize: "bronze",
    year: 2019,
  },
  {
    title: "Brazilian Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "hm",
    year: 2019,
  },
  {
    title: "Sao Paulo Math Olympiad",
    location: "state",
    subject: "math",
    prize: "silver",
    year: 2018,
  },
  {
    title: "Ceara Math Olympiad",
    location: "state",
    subject: "math",
    prize: "bronze",
    year: 2018,
  },
  {
    title: "Brazilian Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "bronze",
    year: 2018,
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2018,
  },
  {
    title: "Brazilian Olympiad of Astronomy",
    location: "nat",
    subject: "astro",
    prize: "silver",
    year: 2018,
  },
  {
    title: "Brazilian Olympiad of Physics",
    location: "nat",
    subject: "phys",
    prize: "hm",
    year: 2018,
  },
  {
    title: "Brazilian Math Olympiad of Public Schools",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2017,
  },
  {
    title: "Poliedro Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: 2017,
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2017,
  },
  {
    title: "National No Frontiers Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2017,
  },
  {
    title: "Regional No Frontiers Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: 2017,
  },
  {
    title: "Sao Paulo Math Olympiad",
    location: "state",
    subject: "math",
    prize: "gold",
    year: 2017,
  },
  {
    title: "Unicamp Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: 2017,
  },
  {
    title: "Brazilian Olympiad of Robotics",
    location: "nat",
    subject: "robot",
    prize: "silver",
    year: 2017,
  },
  {
    title: "Brazilian Olympiad of Physics",
    location: "nat",
    subject: "phys",
    prize: "silver",
    year: 2017,
  },
  {
    title: "Sao Paulo Olympiad of Physics",
    location: "state",
    subject: "phys",
    prize: "silver",
    year: 2017,
  },
  {
    title: "Lusophony International Math Olympiad",
    location: "world",
    subject: "math",
    prize: "silver",
    year: 2017,
  },
  {
    title: "Rioplatense International Math Olympiad",
    location: "world",
    subject: "math",
    prize: "bronze",
    year: 2017,
  },
  {
    title: "Poliedro Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: 2016,
  },
  {
    title: "National No Frontiers Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2016,
  },
  {
    title: "Regional No Frontiers Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: 2016,
  },
  {
    title: "Unicamp Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: 2016,
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2016,
  },
  {
    title: "Brazilian Olympiad of CS",
    location: "nat",
    subject: "cs",
    prize: "gold",
    year: 2016,
  },
  {
    title: "Brazilian Olympiad of Physics",
    location: "nat",
    subject: "phys",
    prize: "gold",
    year: 2016,
  },
  {
    title: "Brazilian Olympiad of Robotics",
    location: "nat",
    subject: "robot",
    prize: "silver",
    year: 2016,
  },
  {
    title: "Brazilian Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "bronze",
    year: 2016,
  },
  {
    title: "Brazilian Olympiad of Astronomy",
    location: "nat",
    subject: "astro",
    prize: "bronze",
    year: 2016,
  },
  {
    title: "Brazilian Olympiad of Chemistry Jr.",
    location: "nat",
    subject: "chem",
    prize: "bronze",
    year: 2016,
  },
  {
    title: "Sao Paulo Math Olympiad",
    location: "state",
    subject: "math",
    prize: "gold",
    year: 2015,
  },
  {
    title: "Sao Paulo Olympiad of Physics",
    location: "state",
    subject: "phys",
    prize: "gold",
    year: 2015,
  },
  {
    title: "Rioplatense International Math Olympiad",
    location: "world",
    subject: "math",
    prize: "gold",
    year: 2015,
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2015,
  },
  {
    title: "No Frontiers Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "silver",
    year: 2015,
  },
  {
    title: "Poliedro Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: 2015,
  },
  {
    title: "Brazilian Olympiad of Astronomy",
    location: "nat",
    subject: "astro",
    prize: "bronze",
    year: 2015,
  },
  {
    title: "Brazilian Olympiad of CS",
    location: "nat",
    subject: "cs",
    prize: "hm",
    year: 2015,
  },
  {
    title: "No Frontiers Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2014,
  },
  {
    title: "Sao Paulo Olympiad of Physics",
    location: "state",
    subject: "phys",
    prize: "gold",
    year: 2014,
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: 2014,
  },
  {
    title: "Poliedro Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: 2014,
  },
  {
    title: "Brazilian Olympiad of CS",
    location: "nat",
    subject: "cs",
    prize: "silver",
    year: 2014,
  },
];

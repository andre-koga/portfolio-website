import {
  AwardCategory,
  Experience,
  SkillCategory,
} from "@/app/portfolio/definitions";

export const experiences: Experience[] = [
  {
    title: "CMO at Dupla",
    description:
      "Brazilian recruiter company. Helps companies hire qualified women in tech.",

    date: "April - July 2021",
    tech: ["figma", "wordpress", "html/css", "javascript"],
  },
  {
    title: "Co-Founder of Nery",
    description:
      "Medical startup. Devised an app that uses AI to interact with the elderly.",
    date: "January - March 2020",
    tech: ["figma", "javascript", "html/css", "node.js", "express"],
  },
  {
    title: "Vice President of NOIC",
    description:
      "Largest Brazilian education NGO made by students with courses for science Olympiads.",
    date: "May 2019 - March 2020",
    tech: ["figma", "wordpress", "html/css", "javascript"],
  },
  {
    title: "Math Tutoring",
    description:
      "Tutored students in Brazil and the US in advanced Olympiad math content.",
    date: "2018 - Current",
    tech: ["zoom", "obs studio", "excel", "latex"],
  },
  {
    title: "Web Developer at Big Data Big Impact",
    description:
      "Developed a web app that predicts Parkinson using data analysis and ML.",
    date: "September - December 2022",
    tech: ["D3.js", "js/ts", "html/css", "node.js", "express"],
  },
  {
    title: "Game Developer for Good Luck Collective",
    description:
      "Developed multiple games for the Good Luck Collective, a group of indie artists and game developers.",
    date: "2020 - Current",
    tech: ["figma", "unity", "c#", "procreate", "aseprite"],
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
        level: 2,
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
        name: "apl",
        level: 1,
      },
      {
        name: "haskell",
        level: 2,
      },
      {
        name: "scss",
        level: 2,
      },
      {
        name: "assembly",
        level: 2,
      },
    ],
  },
  {
    name: "libraries/frameworks",
    skills: [
      {
        name: "sanity.io",
        level: 3,
      },
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
        name: "anime.js",
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
      {
        name: "vue",
        level: 1,
      },
      {
        name: "sqlite",
        level: 1,
      },
      {
        name: "mongoDB",
        level: 1,
      },
      {
        name: "firebase",
        level: 1,
      },
      {
        name: "postgresql",
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
        level: 2,
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

export const awards: AwardCategory[] = [
  {
    year: 2023,
    awards: [
      {
        title: "GMTK Game Jam 2023",
        location: "world",
        subject: "cs",
        prize: 68,
      },
      {
        title: "HackGT X",
        location: "state",
        subject: "cs",
        prize: "hm",
      },
    ],
  },
  {
    year: 2022,
    awards: [
      {
        title: "HackGT 9",
        location: "state",
        subject: "cs",
        prize: "hm",
      },
    ],
  },
  {
    year: 2021,
    awards: [
      {
        title: "GMTK Game Jam 2021",
        location: "world",
        subject: "cs",
        prize: 325,
      },
      {
        title: "Brackeys Game Jam 2021.1",
        location: "world",
        subject: "cs",
        prize: 36,
      },
    ],
  },
  {
    year: 2020,
    awards: [
      {
        title: "Hackathon MIT Hackmed",
        location: "nat",
        subject: "cs",
        prize: 2,
      },
    ],
  },
  {
    year: 2019,
    awards: [
      {
        title: "Canguru Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Brazilian Math Olympiad of Public Schools",
        location: "nat",
        subject: "math",
        prize: "bronze",
      },
      {
        title: "Brazilian Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "hm",
      },
    ],
  },
  {
    year: 2018,
    awards: [
      {
        title: "Canguru Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Sao Paulo Math Olympiad",
        location: "state",
        subject: "math",
        prize: "silver",
      },
      {
        title: "Brazilian Olympiad of Astronomy",
        location: "nat",
        subject: "astro",
        prize: "silver",
      },
      {
        title: "Ceara Math Olympiad",
        location: "state",
        subject: "math",
        prize: "bronze",
      },
      {
        title: "Brazilian Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "bronze",
      },
      {
        title: "Brazilian Olympiad of Physics",
        location: "nat",
        subject: "phys",
        prize: "hm",
      },
    ],
  },
  {
    year: 2017,
    awards: [
      {
        title: "Brazilian Math Olympiad of Public Schools",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Poliedro Math Olympiad",
        location: "reg",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Canguru Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "National No Frontiers Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Regional No Frontiers Math Olympiad",
        location: "reg",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Sao Paulo Math Olympiad",
        location: "state",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Unicamp Math Olympiad",
        location: "reg",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Brazilian Olympiad of Robotics",
        location: "nat",
        subject: "robot",
        prize: "silver",
      },
      {
        title: "Brazilian Olympiad of Physics",
        location: "nat",
        subject: "phys",
        prize: "silver",
      },
      {
        title: "Sao Paulo Olympiad of Physics",
        location: "state",
        subject: "phys",
        prize: "silver",
      },
      {
        title: "Lusophony International Math Olympiad",
        location: "world",
        subject: "math",
        prize: "silver",
      },
      {
        title: "Rioplatense International Math Olympiad",
        location: "world",
        subject: "math",
        prize: "bronze",
      },
    ],
  },
  {
    year: 2016,
    awards: [
      {
        title: "Brazilian Math Olympiad of Public Schools",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Poliedro Math Olympiad",
        location: "reg",
        subject: "math",
        prize: "gold",
      },
      {
        title: "National No Frontiers Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Regional No Frontiers Math Olympiad",
        location: "reg",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Unicamp Math Olympiad",
        location: "reg",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Canguru Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Brazilian Olympiad of Physics",
        location: "nat",
        subject: "phys",
        prize: "gold",
      },
      {
        title: "Brazilian Olympiad of Astronomy",
        location: "nat",
        subject: "astro",
        prize: "gold",
      },
      {
        title: "Brazilian Olympiad of Robotics",
        location: "nat",
        subject: "robot",
        prize: "silver",
      },
      {
        title: "Brazilian Olympiad of CS",
        location: "nat",
        subject: "cs",
        prize: "bronze",
      },
      {
        title: "Brazilian Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "bronze",
      },
      {
        title: "Brazilian Olympiad of Chemistry Jr.",
        location: "nat",
        subject: "chem",
        prize: "bronze",
      },
    ],
  },
  {
    year: 2015,
    awards: [
      {
        title: "Sao Paulo Math Olympiad",
        location: "state",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Sao Paulo Olympiad of Physics",
        location: "state",
        subject: "phys",
        prize: "gold",
      },
      {
        title: "Rioplatense International Math Olympiad",
        location: "world",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Canguru Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Poliedro Math Olympiad",
        location: "reg",
        subject: "math",
        prize: "gold",
      },
      {
        title: "No Frontiers Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "silver",
      },
      {
        title: "Brazilian Olympiad of Astronomy",
        location: "nat",
        subject: "astro",
        prize: "bronze",
      },
      {
        title: "Brazilian Olympiad of CS",
        location: "nat",
        subject: "cs",
        prize: "hm",
      },
    ],
  },
  {
    year: 2014,
    awards: [
      {
        title: "No Frontiers Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Sao Paulo Olympiad of Physics",
        location: "state",
        subject: "phys",
        prize: "gold",
      },
      {
        title: "Canguru Math Olympiad",
        location: "nat",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Poliedro Math Olympiad",
        location: "reg",
        subject: "math",
        prize: "gold",
      },
      {
        title: "Brazilian Olympiad of CS",
        location: "nat",
        subject: "cs",
        prize: "silver",
      },
    ],
  },
];

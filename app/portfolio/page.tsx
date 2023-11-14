"use client";

import { useState } from "react";

interface Experience {
  title: string;
  company: string;
  description: string;
  date: string;
}

interface Grouped {
  [key: string]: Award[];
}

let experiences: Experience[] = [
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
      "Tutored students in Brazil and the US in advanced math for Olympiads.",
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

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: 1 | 2 | 3;
}

let skills: SkillCategory[] = [
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

let skillNumberToText = (level: 1 | 2 | 3) => {
  switch (level) {
    case 1:
      return (
        <span className="rounded bg-yellow-500 px-1 text-sm text-black">
          novice
        </span>
      );
    case 2:
      return (
        <span className="rounded bg-orange-500 px-1 text-sm text-black">
          proficient
        </span>
      );
    case 3:
      return (
        <span className="rounded bg-red-500 px-1 text-sm text-white">
          expert
        </span>
      );
  }
};

let skillNumberToWeight = (level: 1 | 2 | 3) => {
  switch (level) {
    case 1:
      return "order-3";
    case 2:
      return "order-2";
    case 3:
      return "order-1";
  }
};

type Location = "world" | "nat" | "state" | "reg";
type Subject = "math" | "phys" | "astro" | "cs" | "chem" | "robot";
type Prize = "gold" | "silver" | "bronze" | "hm" | "2nd" | any;
type Year =
  | "2023"
  | "2022"
  | "2021"
  | "2020"
  | "2019"
  | "2018"
  | "2017"
  | "2016"
  | "2015"
  | "2014";

interface Award {
  title: string;
  location: Location;
  subject: Subject;
  prize: Prize;
  year: Year;
}

let awards: Award[] = [
  {
    title: "GMTK Game Jam 2023",
    location: "world",
    subject: "cs",
    prize: "68th",
    year: "2023",
  },
  {
    title: "GMTK Game Jam 2021",
    location: "world",
    subject: "cs",
    prize: "325th",
    year: "2021",
  },
  {
    title: "Brackeys Game Jam 2021.1",
    location: "world",
    subject: "cs",
    prize: "36th",
    year: "2021",
  },
  {
    title: "HackGT X",
    location: "state",
    subject: "cs",
    prize: "hm",
    year: "2023",
  },
  {
    title: "HackGT 9",
    location: "state",
    subject: "cs",
    prize: "hm",
    year: "2022",
  },
  {
    title: "Hackathon MIT Hackmed",
    location: "nat",
    subject: "cs",
    prize: "2nd",
    year: "2020",
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2019",
  },
  {
    title: "Brazilian Math Olympiad of Public Schools",
    location: "nat",
    subject: "math",
    prize: "bronze",
    year: "2019",
  },
  {
    title: "Brazilian Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "hm",
    year: "2019",
  },
  {
    title: "Sao Paulo Math Olympiad",
    location: "state",
    subject: "math",
    prize: "silver",
    year: "2018",
  },
  {
    title: "Ceara Math Olympiad",
    location: "state",
    subject: "math",
    prize: "bronze",
    year: "2018",
  },
  {
    title: "Brazilian Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "bronze",
    year: "2018",
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2018",
  },
  {
    title: "Brazilian Olympiad of Astronomy",
    location: "nat",
    subject: "astro",
    prize: "silver",
    year: "2018",
  },
  {
    title: "Brazilian Olympiad of Physics",
    location: "nat",
    subject: "phys",
    prize: "hm",
    year: "2018",
  },
  {
    title: "Brazilian Math Olympiad of Public Schools",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2017",
  },
  {
    title: "Poliedro Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: "2017",
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2017",
  },
  {
    title: "National No Frontiers Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2017",
  },
  {
    title: "Regional No Frontiers Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: "2017",
  },
  {
    title: "Sao Paulo Math Olympiad",
    location: "state",
    subject: "math",
    prize: "gold",
    year: "2017",
  },
  {
    title: "Unicamp Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: "2017",
  },
  {
    title: "Brazilian Olympiad of Robotics",
    location: "nat",
    subject: "robot",
    prize: "silver",
    year: "2017",
  },
  {
    title: "Brazilian Olympiad of Physics",
    location: "nat",
    subject: "phys",
    prize: "silver",
    year: "2017",
  },
  {
    title: "Sao Paulo Olympiad of Physics",
    location: "state",
    subject: "phys",
    prize: "silver",
    year: "2017",
  },
  {
    title: "Lusophony International Math Olympiad",
    location: "world",
    subject: "math",
    prize: "silver",
    year: "2017",
  },
  {
    title: "Rioplatense International Math Olympiad",
    location: "world",
    subject: "math",
    prize: "bronze",
    year: "2017",
  },
  {
    title: "Poliedro Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: "2016",
  },
  {
    title: "National No Frontiers Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2016",
  },
  {
    title: "Regional No Frontiers Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: "2016",
  },
  {
    title: "Unicamp Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: "2016",
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2016",
  },
  {
    title: "Brazilian Olympiad of CS",
    location: "nat",
    subject: "cs",
    prize: "gold",
    year: "2016",
  },
  {
    title: "Brazilian Olympiad of Physics",
    location: "nat",
    subject: "phys",
    prize: "gold",
    year: "2016",
  },
  {
    title: "Brazilian Olympiad of Robotics",
    location: "nat",
    subject: "robot",
    prize: "silver",
    year: "2016",
  },
  {
    title: "Brazilian Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "bronze",
    year: "2016",
  },
  {
    title: "Brazilian Olympiad of Astronomy",
    location: "nat",
    subject: "astro",
    prize: "bronze",
    year: "2016",
  },
  {
    title: "Brazilian Olympiad of Chemistry Jr.",
    location: "nat",
    subject: "chem",
    prize: "bronze",
    year: "2016",
  },
  {
    title: "Sao Paulo Math Olympiad",
    location: "state",
    subject: "math",
    prize: "gold",
    year: "2015",
  },
  {
    title: "Sao Paulo Olympiad of Physics",
    location: "state",
    subject: "phys",
    prize: "gold",
    year: "2015",
  },
  {
    title: "Rioplatense International Math Olympiad",
    location: "world",
    subject: "math",
    prize: "gold",
    year: "2015",
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2015",
  },
  {
    title: "No Frontiers Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "silver",
    year: "2015",
  },
  {
    title: "Poliedro Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: "2015",
  },
  {
    title: "Brazilian Olympiad of Astronomy",
    location: "nat",
    subject: "astro",
    prize: "bronze",
    year: "2015",
  },
  {
    title: "Brazilian Olympiad of CS",
    location: "nat",
    subject: "cs",
    prize: "hm",
    year: "2015",
  },
  {
    title: "No Frontiers Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2014",
  },
  {
    title: "Sao Paulo Olympiad of Physics",
    location: "state",
    subject: "phys",
    prize: "gold",
    year: "2014",
  },
  {
    title: "Canguru Math Olympiad",
    location: "nat",
    subject: "math",
    prize: "gold",
    year: "2014",
  },
  {
    title: "Poliedro Math Olympiad",
    location: "reg",
    subject: "math",
    prize: "gold",
    year: "2014",
  },
  {
    title: "Brazilian Olympiad of CS",
    location: "nat",
    subject: "cs",
    prize: "silver",
    year: "2014",
  },
];

export default function Portfolio() {
  const [sortOption, setSortOption] = useState<
    "location" | "subject" | "prize" | "year"
  >("year");

  const changeDropdown = (choice: string) => {
    switch (choice) {
      case "location":
        setSortOption("location");
        break;
      case "subject":
        setSortOption("subject");
        break;
      case "prize":
        setSortOption("prize");
        break;
      case "year":
        setSortOption("year");
        break;
    }
  };

  const locationClass = (choice: Location) => {
    switch (choice) {
      case "world":
        return "rounded bg-black border border-neutral-700 text-cyan-300 px-1 text-sm";
      case "nat":
        return "rounded bg-black border border-neutral-700 text-green-400 px-1 text-sm";
      case "state":
        return "rounded bg-black border border-neutral-700 text-orange-400 px-1 text-sm";
      case "reg":
        return "rounded bg-black border border-neutral-700 text-yellow-400 px-1 text-sm";
    }
  };

  const subjectClass = (choice: Subject) => {
    switch (choice) {
      case "math":
        return "rounded bg-red-600 px-1 text-sm";
      case "phys":
        return "rounded bg-indigo-500 px-1 text-sm";
      case "astro":
        return "rounded bg-blue-700 px-1 text-sm";
      case "cs":
        return "rounded bg-cyan-600 px-1 text-sm";
      case "chem":
        return "rounded bg-green-600 px-1 text-sm";
      case "robot":
        return "rounded bg-slate-600 px-1 text-sm";
    }
  };

  const prizeClass = (choice: Prize) => {
    switch (choice) {
      case "gold":
        return "rounded bg-yellow-500 text-black px-1 text-sm";
      case "silver":
        return "rounded bg-gray-300 text-black px-1 text-sm";
      case "bronze":
        return "rounded bg-yellow-600 text-black px-1 text-sm";
      case "hm":
        return "rounded bg-black bg-indigo-300 text-black px-1 text-sm";
      case "2nd":
        return "rounded bg-black bg-gray-300 text-black px-1 text-sm";
      default:
        return "rounded bg-black bg-gray-700 text-white px-1 text-sm";
    }
  };

  let sortingOrder = {
    ["location"]: ["world", "nat", "state", "reg"],
    ["subject"]: ["math", "phys", "astro", "cs", "chem", "robot"],
    ["prize"]: [
      "gold",
      "silver",
      "bronze",
      "hm",
      "2nd",
      "36th",
      "68th",
      "325th",
    ],
    ["year"]: [
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
    ],
  };

  const groupAwardsBy = (key: keyof Award) => {
    return awards.reduce((grouped: Grouped, award: Award) => {
      const value = award[key];

      grouped[value] = grouped[value] || [];
      grouped[value].push(award);

      grouped[value].sort((a, b) => {
        if (
          sortingOrder["location"].indexOf(a["location"]) <
          sortingOrder["location"].indexOf(b["location"])
        ) {
          return -1;
        }
        if (
          sortingOrder["location"].indexOf(a["location"]) >
          sortingOrder["location"].indexOf(b["location"])
        ) {
          return 1;
        }
        if (
          sortingOrder["prize"].indexOf(a["prize"]) <
          sortingOrder["prize"].indexOf(b["prize"])
        ) {
          return -1;
        }
        if (
          sortingOrder["prize"].indexOf(a["prize"]) >
          sortingOrder["prize"].indexOf(b["prize"])
        ) {
          return 1;
        }
        if (
          sortingOrder["subject"].indexOf(a["subject"]) <
          sortingOrder["subject"].indexOf(b["subject"])
        ) {
          return -1;
        }
        if (
          sortingOrder["subject"].indexOf(a["subject"]) >
          sortingOrder["subject"].indexOf(b["subject"])
        ) {
          return 1;
        }
        if (
          sortingOrder["year"].indexOf(a["year"]) <
          sortingOrder["year"].indexOf(b["year"])
        ) {
          return -1;
        }
        if (
          sortingOrder["year"].indexOf(a["year"]) >
          sortingOrder["year"].indexOf(b["year"])
        ) {
          return 1;
        }
        return 0;
      });

      return grouped;
    }, {});
  };

  let groupedAwards = groupAwardsBy(sortOption);

  return (
    <main className="grid gap-2">
      <section id="experience" className="m-2 lg:m-8">
        <h2 className="text-3xl font-bold uppercase">Experience</h2>
        <ul className="my-2 grid gap-2 lg:grid-cols-2">
          {experiences.map((experience, i) => {
            return (
              <li
                key={i}
                className="grid gap-1 rounded bg-black p-2 text-white md:p-3"
              >
                <h3 className="text-xl uppercase">{experience.title}</h3>
                <p className="text-sm text-neutral-400">{experience.date}</p>
                {/* <h4>{experience.company}</h4> */}
                <p>{experience.description}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section id="skills" className="m-2 lg:m-8">
        <h2 className="text-3xl font-bold uppercase">Skills</h2>
        <ul className="my-2 grid gap-4 lg:grid-cols-2">
          {skills.map((category, i) => {
            return (
              <li key={i}>
                <h3 className="text-2xl font-bold uppercase">
                  {category.name}
                </h3>
                <ul className="flex flex-wrap gap-1">
                  {category.skills.map((skill, j) => {
                    return (
                      <li className={skillNumberToWeight(skill.level)} key={j}>
                        <p className="flex items-center rounded-md bg-black px-1 py-0.5 uppercase text-white">
                          <span className="whitespace-nowrap pr-1">
                            {skill.name}
                          </span>
                          {skillNumberToText(skill.level)}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
      <section id="awards" className="m-2 grid gap-2 lg:m-8">
        <h2 className="text-3xl font-bold uppercase">
          Awards ({awards.length})
        </h2>
        <div className="mr-auto flex items-center gap-2 rounded">
          <p className="text-sm">Sort by</p>
          <select
            className="rounded border-2 border-black bg-black text-white"
            onChange={(e) => changeDropdown(e.target.value)}
          >
            <option value="year">Year</option>
            <option value="subject">Subject</option>
            <option value="location">Location</option>
            <option value="prize">Prize</option>
          </select>
        </div>
        {sortingOrder[sortOption].map((option) => (
          <section key={option}>
            <h2 className="text-2xl font-bold uppercase">
              {option} ({groupedAwards[option].length})
            </h2>
            <ul className="my-2 grid gap-1">
              {groupedAwards[option].map((award, i) => (
                <li
                  className="grid grid-cols-6 items-stretch gap-1 rounded-md bg-black py-1 pl-1.5 pr-1 text-center uppercase text-white sm:grid-cols-8 md:grid-cols-9 lg:grid-cols-10"
                  key={i}
                >
                  <h3 className="col-span-3 text-left text-sm sm:col-span-5 sm:text-base md:col-span-6 lg:col-span-7">
                    {award.title}
                  </h3>
                  {sortOption !== "year" && (
                    <p className="rounded bg-neutral-400 px-1 text-sm text-black">
                      {award.year}
                    </p>
                  )}
                  {sortOption !== "subject" && (
                    <p className={subjectClass(award.subject)}>
                      {award.subject}
                    </p>
                  )}
                  {sortOption !== "prize" && (
                    <p className={prizeClass(award.prize)}>{award.prize}</p>
                  )}
                  {sortOption !== "location" && (
                    <h4 className={locationClass(award.location)}>
                      {award.location}
                    </h4>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </main>
  );
}

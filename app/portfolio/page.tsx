interface Experience {
  title: string;
  company: string;
  description: string;
  date: string;
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

interface Award {
  title: string;
  location: "world" | "nat." | "state" | "reg.";
  subject: "math" | "phys" | "chem" | "bio" | "cs" | "astro" | "robot";
  prize: "gold" | "silver" | "bronze" | "HM" | "1st" | "2nd" | "3rd";
  year: 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021;
}

let awards: Award[] = [];

export default function Portfolio() {
  return (
    <main className="grid gap-2">
      <section id="experience" className="m-2">
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
      <section id="skills" className="m-2">
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
      <section id="awards" className="m-2">
        <h2 className="text-3xl font-bold uppercase">Awards</h2>
        <p>Sort by</p>
        <ul className="flex gap-2">
          <li>
            <button className="rounded border-2 border-black px-2">
              <p>year</p>
            </button>
          </li>
          <li>
            <button>
              <p>subject</p>
            </button>
          </li>
          <li>
            <button>
              <p>location</p>
            </button>
          </li>
          <li>
            <button>
              <p>prize</p>
            </button>
          </li>
        </ul>
        <ul>
          {awards.map((award, i) => {
            return (
              <li key={i}>
                <h3>{award.title}</h3>
                <h4>{award.location}</h4>
                <p>{award.subject}</p>
                <p>{award.prize}</p>
                <p>{award.year}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

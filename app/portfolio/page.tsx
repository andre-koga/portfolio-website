interface Experience {
  title: string;
  company: string;
  description: string;
  date: string;
}

let experiences: Experience[] = [];

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
        level: 1,
      },
      {
        name: "go",
        level: 1,
      },
      {
        name: "haskell",
        level: 2,
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
    <main>
      <section id="experience">
        <h2>Experience</h2>
        <ul>
          {experiences.map((experience, i) => {
            return (
              <li key={i}>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.description}</p>
                <p>{experience.date}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <section id="skills" className="m-2">
        <h2>Skills</h2>
        <ul className="grid gap-4 lg:grid-cols-2">
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
      <section id="awards">
        <h2>Awards</h2>
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

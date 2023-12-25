import clsx from "clsx";

export type Experience = {
  title: string;
  description: string;
  date: string;
  tech: string[];
};

export type Skill = {
  name: string;
  level: 1 | 2 | 3;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Award = {
  title: string;
  location: Location;
  subject: Subject;
  prize: Prize;
};

export type AwardCategory = {
  year: number;
  awards: Award[];
};

export type Location = "world" | "nat" | "state" | "reg";
export type Subject = "math" | "phys" | "astro" | "cs" | "chem" | "robot";
export const subjectOrder = ["cs", "math", "phys", "astro", "chem", "robot"];
export type Prize = "gold" | "silver" | "bronze" | "hm" | number;

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

export const filterSkills = (skills: Skill[], level: number) => {
  return skills
    .filter((skill) => skill.level === level)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((skill, j) => {
      return (
        <li
          key={j}
          className={clsx(
            { "order-3": skill.level === 1 },
            { "order-2": skill.level === 2 },
            { "order-1": skill.level === 3 },
          )}
        >
          <p className="flex items-center rounded-md border border-mid bg-darky px-1 py-0.5 uppercase text-light">
            {skill.name}
          </p>
        </li>
      );
    });
};

export const prizeSuffix = (prize: Prize) => {
  if (typeof prize === "number") {
    if (prize > 3 && prize < 21) return "th";
    switch (prize.toString().slice(-1)) {
      case "1":
        return "st";
      case "2":
        return "nd";
      case "3":
        return "rd";
      default:
        return "th";
    }
  }
  return "";
};

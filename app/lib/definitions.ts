// Header

export type NavLink = {
  text: string;
  href: string;
};

// Footer

export type SocialLink = {
  href: string;
  icon: any;
  color: string;
};

export type FactRaw = {
  fact: string;
};

// Portfolio

export type Experience = {
  title: string;
  company: string;
  description: string;
  date: string;
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
  year: number;
};

export type Location = "world" | "nat" | "state" | "reg";
export type Subject = "math" | "phys" | "astro" | "cs" | "chem" | "robot";
export type Prize = "gold" | "silver" | "bronze" | "hm" | number;

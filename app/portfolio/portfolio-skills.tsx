import { groupedSkills } from "@/app/portfolio/data";
import clsx from "clsx";
import { filterSkills } from "./definitions";

const labels: string[] = ["Novice", "Proficient", "Expert"];

export default function PortfolioSkills() {
  return (
    <>
      <div className="flex items-center gap-2">
        <h2 className="text-3xl font-bold uppercase">Skills</h2>
      </div>
      <ul className="my-2 grid gap-4 lg:grid-cols-2">
        {groupedSkills.map((category, i) => {
          return (
            <li
              key={i}
              className="grid gap-1 rounded border border-mid bg-darky p-2"
            >
              <h3 className="text-xl uppercase text-light">{category.name}</h3>
              <ul className="flex flex-wrap gap-1">
                <div className="flex self-stretch rounded border border-mid bg-red-500 px-0.5" />
                <div className="flex self-stretch rounded border border-mid bg-red-500 px-0.5" />
                <div className="flex self-stretch rounded border border-mid bg-red-500 px-0.5" />
                {filterSkills(category.skills, 3)}
              </ul>
              <ul className="flex flex-wrap gap-1">
                {filterSkills(category.skills, 2)}
                <div className="flex self-stretch rounded border border-mid bg-orange-500 px-0.5" />
                <div className="flex self-stretch rounded border border-mid bg-orange-500 px-0.5" />
              </ul>
              <ul className="flex flex-wrap gap-1">
                {filterSkills(category.skills, 1)}
                <div className="flex self-stretch rounded border border-mid bg-yellow-500 px-0.5" />
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}

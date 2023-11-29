import { groupedSkills } from "@/app/portfolio/data";
import clsx from "clsx";

const labels: string[] = ["Novice", "Proficient", "Expert"];

export default function PortfolioSkills() {
  return (
    <>
      <h2 className="text-3xl font-bold uppercase">Skills</h2>
      <ul className="my-2 grid gap-4 lg:grid-cols-2">
        {groupedSkills.map((category, i) => {
          return (
            <li key={i}>
              <h3 className="text-2xl font-bold uppercase">{category.name}</h3>
              <ul className="flex flex-wrap gap-1">
                {category.skills.map((skill, j) => {
                  return (
                    <li
                      key={j}
                      className={clsx(
                        { "order-3": skill.level === 1 },
                        { "order-2": skill.level === 2 },
                        { "order-1": skill.level === 3 },
                      )}
                    >
                      <p className="bg-light text-dark flex items-center rounded-md px-1 py-0.5 uppercase">
                        <span className="whitespace-nowrap pr-1">
                          {skill.name}
                        </span>
                        <span
                          className={clsx(
                            "rounded px-0.5 text-sm text-black",
                            { "bg-yellow-500": skill.level === 1 },
                            { "bg-orange-500": skill.level === 2 },
                            { "bg-red-600 text-white": skill.level === 3 },
                          )}
                        >
                          {labels[skill.level - 1]}
                        </span>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}

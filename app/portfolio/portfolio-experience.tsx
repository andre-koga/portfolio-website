import { experiences } from "@/app/portfolio/data";

// expand experience

export default function PortfolioExperience() {
  return (
    <>
      <h2 className="text-3xl font-bold uppercase">Experience</h2>
      <ul className="my-2 grid gap-4 lg:grid-cols-2">
        {experiences.map((experience, i) => {
          return (
            <li
              key={i}
              className="grid items-start gap-1 rounded border border-mid bg-darky p-1.5 text-light"
            >
              <div className="flex flex-col items-start sm:flex-row sm:items-center">
                <h3 className="flex-grow text-xl uppercase">
                  {experience.title}
                </h3>
                <p className="text-xs text-lighty sm:px-1">{experience.date}</p>
              </div>
              <ul className="flex flex-wrap gap-1 text-xs uppercase text-lighty sm:text-sm">
                {experience.tech.sort().map((tech, i) => {
                  return (
                    <li key={i} className="rounded border border-mid px-1">
                      {tech}
                    </li>
                  );
                })}
              </ul>
              <p>{experience.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

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
              className="grid items-start gap-2 rounded border border-mid bg-darky p-1.5 text-light"
            >
              <div className="-mb-1 flex items-center">
                <h3 className="flex-grow text-xl uppercase">
                  {experience.title}
                </h3>
                <p className="px-1 text-xs text-lighty">{experience.date}</p>
              </div>
              <p>{experience.description}</p>
              <ul className="flex gap-2 text-sm uppercase text-lighty">
                {experience.tech.sort().map((tech) => {
                  return (
                    <li className="rounded border border-mid px-1">{tech}</li>
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

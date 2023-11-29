import { experiences } from "@/app/portfolio/data";

// expand experience

export default function PortfolioExperience() {
  return (
    <>
      <h2 className="text-3xl font-bold uppercase">Experience</h2>
      <ul className="my-2 grid gap-1 lg:grid-cols-2">
        {experiences.map((experience, i) => {
          return (
            <li
              key={i}
              className="bg-light text-dark grid items-start rounded p-1.5"
            >
              <h3 className="text-xl uppercase">{experience.title}</h3>
              <p className="text-mid text-sm">{experience.date}</p>
              <p>{experience.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

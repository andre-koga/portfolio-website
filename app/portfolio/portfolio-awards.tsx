import { awards } from "@/app/portfolio/data";
import {
  locationToColor,
  prizeSuffix,
  prizeToColor,
  subjectOrder,
  subjectToColor,
} from "@/app/portfolio/definitions";

// improve the awards on big and small screens

export default function PortfolioAwards() {
  const length = () => {
    let length = 0;
    awards.forEach((year) => {
      length += year.awards.length;
    });
    return length;
  };

  return (
    <>
      <h2 className="text-3xl font-bold uppercase">Awards ({length()})</h2>
      <ul className="grid gap-4 lg:grid-cols-2">
        {awards.map((year, i) => (
          <li key={i} className="rounded border border-mid bg-darky p-2">
            <h3 className="text-xl">{year.year}</h3>
            <ul className="grid gap-1">
              {year.awards
                .sort(
                  (a, b) =>
                    subjectOrder.indexOf(a.subject) -
                    subjectOrder.indexOf(b.subject),
                )
                .map((award, j) => (
                  <li
                    key={j}
                    className="grid grid-cols-7 items-center gap-1 rounded-md border border-mid bg-darky px-1 py-0.5 text-center uppercase text-light sm:grid-cols-9 md:grid-cols-10 lg:grid-cols-11"
                  >
                    <h3 className="col-span-4 mr-0.5 overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-sm sm:col-span-6 sm:text-base md:col-span-7 lg:col-span-8">
                      {award.title}
                    </h3>
                    <span
                      className={`overflow-hidden rounded text-xs text-white sm:px-1 sm:text-sm ${
                        subjectToColor[award.subject]
                      }`}
                    >
                      {award.subject}
                    </span>
                    <span
                      className={`overflow-hidden rounded text-xs sm:px-1 sm:text-sm ${prizeToColor(
                        award.prize,
                      )}`}
                    >
                      {award.prize}
                      {prizeSuffix(award.prize)}
                    </span>
                    <span
                      className={`overflow-hidden rounded bg-black text-xs sm:px-1 sm:text-sm ${
                        locationToColor[award.location]
                      }`}
                    >
                      {award.location}
                    </span>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

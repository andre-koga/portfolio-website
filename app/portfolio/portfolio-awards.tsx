import {
  awards,
  locationToColor,
  prizeToColor,
  subjectToColor,
} from "@/app/portfolio/data";

// improve the awards on big and small screens

export default function PortfolioAwards() {
  return (
    <>
      <h2 className="-mb-2 text-3xl font-bold uppercase">
        Awards ({awards.length})
      </h2>
      <ul className="my-2 grid gap-1">
        {awards
          .sort((a, b) => b.year - a.year)
          .map((award, i, awards) => (
            <>
              {(i === 0 || awards[i - 1].year !== award.year) && (
                <h3 className="mt-2 text-2xl font-bold">{award.year}</h3>
              )}
              <div>
                <li
                  key={i}
                  className="bg-light text-dark grid grid-cols-7 items-center gap-1 rounded-md px-1 py-0.5 text-center uppercase sm:grid-cols-9 md:grid-cols-10 lg:grid-cols-11"
                >
                  <h3 className="col-span-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-left text-sm sm:col-span-5 sm:text-base md:col-span-6 lg:col-span-7">
                    {award.title}
                  </h3>
                  <span
                    className={`rounded px-1 text-sm text-white ${
                      subjectToColor[award.subject]
                    }`}
                  >
                    {award.subject}
                  </span>
                  <span
                    className={`rounded px-1 text-sm ${prizeToColor(
                      award.prize,
                    )}`}
                  >
                    {award.prize}
                  </span>
                  <span
                    className={`rounded bg-black px-1 text-sm ${
                      locationToColor[award.location]
                    }`}
                  >
                    {award.location}
                  </span>
                  <span className="rounded bg-black text-sm text-white">
                    {award.year}
                  </span>
                </li>
              </div>
            </>
          ))}
      </ul>
    </>
  );
}

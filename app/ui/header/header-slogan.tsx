import { NavLink } from "@/app/lib/definitions";

export default function HeaderSlogan({
  slogan,
  color,
}: {
  slogan: string[];
  color: string;
}) {
  return (
    <div className="mx-2 my-4 text-5xl font-light uppercase sm:text-7xl md:m-4 md:mx-4 md:my-6 md:text-8xl md:font-thin lg:text-9xl">
      {slogan.map((line: string, i: number) => {
        let total = 0;
        for (let t = 0; t < i; t++) {
          total += slogan[t].length;
        }
        return (
          <p className="no-ligature text-center" key={i}>
            {line.split("").map((char: string, j: number) => {
              return (
                <span className={`anim-${total + j + 1}-${color}`} key={j}>
                  {char}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

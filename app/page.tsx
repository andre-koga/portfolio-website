import Header from "@/components/Header";
import NavProject from "@/components/NavProject";
import Link from "next/link";

interface NavOption {
  text: string;
  href: string;
  highlight: boolean;
}

let navOptions: NavOption[] = [
  { text: "Who's Koga?", href: "/whois", highlight: false },
  { text: "Portfolio", href: "/portfolio", highlight: false },
  { text: "Future Projects", href: "/ideas", highlight: true },
];

let lines: string[] = ["everything", "koga has", "done so far..."];

export default function Home() {
  return (
    <main>
      <div className="m-2 text-6xl font-light uppercase md:m-4 md:text-8xl md:font-thin lg:text-9xl">
        {lines.map((line: string, i: number) => {
          let total = 0;
          for (let t = 0; t < i; t++) {
            total += lines[t].length;
          }
          return (
            <p className="no-ligature">
              {line.split("").map((char: string, j: number) => {
                return (
                  <span className={"anim-" + (total + j + 1)}>{char}</span>
                );
              })}
            </p>
          );
        })}
      </div>
      <nav className="m-2 flex flex-wrap gap-3 whitespace-nowrap md:m-4 md:gap-6 md:text-xl">
        {navOptions.map((option: NavOption, i: number) => {
          return (
            <Link
              className={
                option.highlight ? "nav-highlight" : "nav-no-highlight"
              }
              href={option.href}
              key={i}
            >
              {option.text}
            </Link>
          );
        })}
      </nav>
      <nav className="m-2 mt-4 grid gap-4 md:m-4 md:mt-8 md:grid-cols-2">
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
      </nav>
    </main>
  );
}

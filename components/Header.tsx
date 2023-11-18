"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavOption {
  text: string;
  href: string;
}

let navOptions: NavOption[] = [
  { text: "Projects", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Who's Koga?", href: "/whois" },
];

let lines: string[] = ["everything", "koga has", "done so far"];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="m-2 flex items-center gap-2 md:m-4">
        <div className="h-1 flex-grow rounded-full bg-black" />
        {navOptions.map((option: NavOption, i: number) => {
          return (
            <Link
              className={
                pathname === option.href ? "nav-active" : "nav-inactive"
              }
              href={option.href}
              key={i}
            >
              {option.text}
            </Link>
          );
        })}
        <div className="h-1 flex-grow rounded-full bg-black" />
      </div>
      <div className="mx-2 my-4 text-5xl font-light uppercase sm:text-7xl md:m-4 md:mx-4 md:my-6 md:text-8xl md:font-thin lg:text-9xl">
        {lines.map((line: string, i: number) => {
          let total = 0;
          for (let t = 0; t < i; t++) {
            total += lines[t].length;
          }
          return (
            <p className="no-ligature text-center" key={i}>
              {line.split("").map((char: string, j: number) => {
                return (
                  <span className={"anim-" + (total + j + 1)} key={j}>
                    {char}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
    </header>
  );
}

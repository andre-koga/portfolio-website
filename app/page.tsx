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

export default function Home() {
  return (
    <main>
      <Header />
      <div className="m-2 text-6xl font-light uppercase md:m-4 md:text-8xl md:font-thin lg:text-9xl">
        <p>everything</p>
        <p>Koga has</p>
        <p>
          done <span className="italic">so far...</span>
        </p>
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

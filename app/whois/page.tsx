interface SocialLink {
  text: string;
  href: string;
}

let links: SocialLink[] = [
  {
    text: "linkedin",
    href: "https://www.linkedin.com/in/andrehkoga/",
  },
  {
    text: "github",
    href: "https://github.com/andre-koga",
  },
  {
    text: "art",
    href: "https://www.instagram.com/kogadraws/",
  },
  {
    text: "games",
    href: "https://andrekoga.itch.io/",
  },
];

interface Title {
  text: string;
}

let titles: Title[] = [
  {
    text: "web-designer",
  },
  {
    text: "full-stack dev.",
  },
  {
    text: "game developer",
  },
  {
    text: "digital artist",
  },
  {
    text: "animal lover",
  },
];

export default function Whois() {
  return (
    <main>
      <div className="m-2 text-4xl font-thin uppercase md:m-4 md:text-7xl md:font-thin lg:text-8xl">
        <p>koga is a...</p>
        <div className="h-[1.2em] overflow-hidden whitespace-nowrap">
          <div className="writing-wrapper">
            {titles.map((title, i) => {
              return (
                <p className="font-medium text-red-700" key={i}>
                  {title.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-8 my-2 flex flex-col gap-2">
        {links.map((link, i) => {
          return (
            <a href={link.href} key={i}>
              <p className="underline">
                /{i + 1}. {link.text}
              </p>
            </a>
          );
        })}
      </div>
    </main>
  );
}

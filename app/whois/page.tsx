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
    text: "web-designer🌐",
  },
  {
    text: "full-stack dev⚙️",
  },
  {
    text: "game developer🎮",
  },
  {
    text: "digital artist🎨",
  },
  {
    text: "animal lover🐶",
  },
];

export default function Whois() {
  return (
    <main>
      <div className="mx-2 my-16 text-center text-4xl font-thin uppercase md:mx-4 md:text-7xl md:font-thin lg:text-8xl">
        <p>koga is a...</p>
        <div className="h-[1.2em] overflow-hidden whitespace-nowrap">
          <div className="writing-wrapper">
            {titles.map((title, i) => {
              return (
                <p className="mx-auto font-medium text-red-700" key={i}>
                  {title.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <p className="mx-2 text-justify text-2xl sm:mx-8 md:text-3xl lg:text-4xl">
          always strives to do his best in any task - based in atlanta,
          brazilian at heart and japanese by blood. hmu! 🤙
        </p>
      </div>
      <div className="mx-8 my-8 flex flex-col gap-2">
        {links.map((link, i) => {
          return (
            <a
              className="nav-no-highlight mx-auto w-1/2 text-center"
              href={link.href}
              key={i}
            >
              {link.text}
            </a>
          );
        })}
      </div>
    </main>
  );
}

import { SocialLink } from "@/app/lib/definitions";
import { FaLinkedin, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";

let links: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/andrehkoga/",
    icon: FaLinkedin,
    color: "#0e76a8",
  },
  {
    href: "https://github.com/andre-koga",
    icon: FaGithub,
    color: "#333",
  },
  {
    href: "https://www.instagram.com/kogadraws/",
    icon: FaInstagram,
    color: "#C13584",
  },
  {
    href: "https://andrekoga.itch.io/",
    icon: FaItchIo,
    color: "#fa5b5b",
  },
];

export default function HoverSocials() {
  return (
    <div className="pointer-events-none sticky bottom-0">
      <div className="flex justify-center gap-2 py-2">
        {links.map((link, i) => {
          const Icon = link.icon;
          return (
            <a
              className="nav-no-highlight text-light pointer-events-auto flex items-center gap-2 rounded border-2 p-0.5 px-4 text-center text-xl font-bold transition-transform hover:scale-90"
              href={link.href}
              key={i}
              style={{
                borderColor: link.color,
                backgroundColor: link.color,
              }}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}

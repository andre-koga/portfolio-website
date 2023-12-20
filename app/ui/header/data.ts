import { NavLink } from "@/app/lib/definitions";

export const links: { [key: string]: NavLink } = {
  projects: {
    text: "Projects",
    href: "/projects",
  },
  portfolio: {
    text: "Portfolio",
    href: "/portfolio",
  },
  blog: {
    text: "Blog",
    href: "/blog",
  },
};

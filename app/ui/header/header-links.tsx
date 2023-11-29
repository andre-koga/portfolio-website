"use client";

import { NavLink } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

let links: NavLink[] = [
  { text: "Projects", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Who's Koga?", href: "/whois" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link: NavLink) => {
        return (
          <Link
            key={link.text}
            href={link.href}
            className={clsx(
              "border-mid hover:bg-light hover:text-dark rounded border px-2 text-sm transition-colors sm:text-base",
              {
                "bg-light text-dark": pathname === link.href,
              },
            )}
          >
            {link.text}
          </Link>
        );
      })}
    </>
  );
}

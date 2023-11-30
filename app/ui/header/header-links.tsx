"use client";

import { NavLink } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { links } from "@/app/ui/header/data";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {Object.entries(links).map(([key, link]: [string, NavLink]) => {
        return (
          <Link
            key={link.text}
            href={link.href}
            className={clsx(
              "rounded border border-mid px-2 text-sm transition-colors hover:bg-light hover:text-dark sm:text-base",
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

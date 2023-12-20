"use client";

import NavLinks from "@/app/ui/header/header-links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="m-2 flex items-center gap-2 md:m-4">
        {pathname === "/" && (
          <Link className="rounded-full border border-white" href="/">
            <Image src="/icon-white.png" alt="Icon" width={25} height={25} />
          </Link>
        )}
        {pathname !== "/" && (
          <Link
            className="rounded-full border border-mid transition-colors hover:border-white"
            href="/"
          >
            <Image src="/icon.png" alt="Icon" width={25} height={25} />
          </Link>
        )}
        <NavLinks />
        <div className="h-0.5 flex-grow bg-mid" />
      </div>
    </header>
  );
}

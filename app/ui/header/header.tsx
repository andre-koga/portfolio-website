import NavLinks from "@/app/ui/header/header-links";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="m-2 flex items-center gap-2 md:m-4">
        <Image
          src="/icon.png"
          alt="Icon"
          width={25}
          height={25}
          className="rounded-full"
        />
        <NavLinks />
        <div className="h-0.5 flex-grow rounded-full bg-mid" />
      </div>
    </header>
  );
}

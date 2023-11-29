import NavLinks from "@/app/ui/header/header-links";
import HeaderSlogan from "@/app/ui/header/header-slogan";

export default function Header() {
  return (
    <header>
      <div className="m-2 flex items-center gap-2 md:m-4">
        <div className="bg-mid h-0.5 flex-grow rounded-full" />
        <NavLinks />
        <div className="bg-mid h-0.5 flex-grow rounded-full" />
      </div>
      <div className="mx-2 my-4 text-5xl font-light uppercase sm:text-7xl md:m-4 md:mx-4 md:my-6 md:text-8xl md:font-thin lg:text-9xl">
        <HeaderSlogan />
      </div>
    </header>
  );
}

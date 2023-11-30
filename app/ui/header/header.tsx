import NavLinks from "@/app/ui/header/header-links";

export default function Header() {
  return (
    <header>
      <div className="m-2 flex items-center gap-2 md:m-4">
        <div className="h-0.5 flex-grow rounded-full bg-mid" />
        <NavLinks />
        <div className="h-0.5 flex-grow rounded-full bg-mid" />
      </div>
    </header>
  );
}

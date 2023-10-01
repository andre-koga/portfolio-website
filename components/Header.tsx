import Link from "next/link";

export default function Header() {
  return (
    <header className="m-2 flex items-center md:m-4">
      <Link className="mr-2 rounded-full text-xl" href="/">
        KOGA
      </Link>
      <div className="h-1 flex-grow rounded-full bg-black" />
    </header>
  );
}

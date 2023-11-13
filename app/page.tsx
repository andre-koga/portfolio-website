import NavProject from "@/components/NavProject";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="m-2 mt-4 grid gap-4 md:m-4 md:mt-8 md:grid-cols-2">
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
        <NavProject></NavProject>
      </nav>
    </main>
  );
}

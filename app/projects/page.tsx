import ProjectCard from "@/app/ui/cards/project-card";
import HeaderSlogan from "@/app/ui/header/header-slogan";
import Link from "next/link";

export default function Page() {
  return (
    <main className="grid gap-4">
      <HeaderSlogan
        slogan={["crafting ideas", "into reality"]}
        color="forestgreen"
      />
      <Link
        href="/projects/ideas"
        className="mx-auto rounded border border-mid px-2 text-sm text-light transition-colors hover:border-light"
      >
        Future project ideas here!
      </Link>
      <nav className="m-2 mt-4 grid gap-4 md:m-4 md:mt-8 md:grid-cols-2">
        <ProjectCard></ProjectCard>
      </nav>
    </main>
  );
}

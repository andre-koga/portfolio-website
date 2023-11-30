import ProjectCard from "@/app/ui/cards/project-card";
import HeaderSlogan from "@/app/ui/header/header-slogan";

export default function Page() {
  return (
    <main className="grid">
      <HeaderSlogan
        slogan={["crafting ideas", "into reality"]}
        color="forestgreen"
      />
      <a
        href=""
        className="mx-auto rounded border border-mid px-2 text-sm text-light transition-colors hover:border-light"
      >
        Future project ideas
      </a>
      <nav className="m-2 mt-4 grid gap-4 md:m-4 md:mt-8 md:grid-cols-2">
        <ProjectCard></ProjectCard>
      </nav>
    </main>
  );
}

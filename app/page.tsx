import ProjectCard from "@/app/ui/cards/project-card";

export default function Page() {
  return (
    <main>
      <nav className="m-2 mt-4 grid gap-4 md:m-4 md:mt-8 md:grid-cols-2">
        <ProjectCard></ProjectCard>
      </nav>
    </main>
  );
}

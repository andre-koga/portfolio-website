import ProjectCard from "@/app/ui/cards/project-card";
import HeaderSlogan from "@/app/ui/header/header-slogan";
import Link from "next/link";

export default function Page() {
  return (
    <main className="grid gap-4">
      <HeaderSlogan
        slogan={["crafting ideas into reality"]}
        color="forestgreen"
      />
      <Link
        href="/projects/ideas"
        className="mx-auto rounded border border-mid px-2 text-sm text-light transition-colors hover:border-light"
      >
        Future project ideas here!
      </Link>
      <nav className="m-2 mt-4 grid gap-4 md:m-4 md:mt-8 md:grid-cols-2">
        <ProjectCard
          title="Thoughts by Koga"
          description="Poem collection with dynamic visuals and backend"
          link="https://th.andrekoga.com"
          image1="/images/th.png"
          image2="/images/th2.png"
          techs={[
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "Sanity.io",
            "Vercel",
            "GitHub",
            "Figma",
          ]}
        />
        <ProjectCard
          title="Numerus"
          description="Calculator capable of more advanced operations"
          link="https://nu.andrekoga.com"
          image1="/images/nu.png"
          image2="/images/nu2.png"
          techs={[
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "WebWorkers",
            "Vercel",
            "GitHub",
            "Figma",
          ]}
        />
        <div className="flex min-h-[200px] flex-col place-content-around items-center gap-2 rounded bg-darky p-2">
          <h2 className="text-xl uppercase text-lighty">
            More projects to come...
          </h2>
        </div>
      </nav>
    </main>
  );
}

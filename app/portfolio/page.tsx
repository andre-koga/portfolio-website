import PortfolioExperience from "@/app/portfolio/portfolio-experience";
import PortfolioSkills from "@/app/portfolio/portfolio-skills";
import PortfolioAwards from "@/app/portfolio/portfolio-awards";
import HeaderSlogan from "../ui/header/header-slogan";

export default function Portfolio() {
  return (
    <main className="grid gap-4">
      <HeaderSlogan
        slogan={["experience, skills, and awards"]}
        color="dodgerblue"
      />
      <a
        href="/resume.pdf"
        target="_blank"
        className="mx-auto rounded border border-mid px-2 text-sm text-light transition-colors hover:border-light"
      >
        Check my resume one-pager here!
      </a>
      <section id="experience" className="m-2 lg:m-8">
        <PortfolioExperience />
      </section>
      <section id="skills" className="m-2 lg:m-8">
        <PortfolioSkills />
      </section>
      <section id="awards" className="m-2 grid gap-2 lg:m-8">
        <PortfolioAwards />
      </section>
    </main>
  );
}

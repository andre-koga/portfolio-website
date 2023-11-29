import PortfolioExperience from "@/app/portfolio/portfolio-experience";
import PortfolioSkills from "@/app/portfolio/portfolio-skills";
import PortfolioAwards from "@/app/portfolio/portfolio-awards";

export default function Portfolio() {
  return (
    <main className="grid gap-2">
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

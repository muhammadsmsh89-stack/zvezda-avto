import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const rows: { type: "single" | "pair" | "full-bleed"; items: typeof projects }[] = [];
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    if (project.layout === "pair" && projects[i + 1]?.layout === "pair") {
      rows.push({ type: "pair", items: [project, projects[i + 1]] });
      i++;
    } else if (project.layout === "full-bleed") {
      rows.push({ type: "full-bleed", items: [project] });
    } else {
      rows.push({ type: "single", items: [project] });
    }
  }

  let singleCount = 0;

  return (
    <section id="projects" className="bg-paper py-20 sm:py-28">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            index="§04"
            eyebrow="Подход"
            title="Проектируем под сложные пространства"
            lead="Ниже — типовые сценарии помещений, с которыми работает Альтаир, и логика решения для каждого: с чем столкнулись и что сделали в чертеже."
            className="mb-16"
          />
        </Reveal>
      </Container>

      <div className="flex flex-col gap-16 sm:gap-20">
        {rows.map((row, i) => {
          if (row.type === "pair") {
            return (
              <Container size="wide" key={row.items[0].id}>
                <Reveal delay={i * 0.05}>
                  <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
                    {row.items.map((project) => (
                      <ProjectCard key={project.id} project={project} compact />
                    ))}
                  </div>
                </Reveal>
              </Container>
            );
          }

          if (row.type === "full-bleed") {
            const project = row.items[0];
            return (
              <Reveal key={project.id} delay={i * 0.05}>
                <div className="border-y border-border bg-stone py-14 sm:py-16">
                  <Container size="wide">
                    <ProjectCard project={project} reverse />
                  </Container>
                </div>
              </Reveal>
            );
          }

          const project = row.items[0];
          const reverse = singleCount % 2 === 1;
          singleCount++;
          return (
            <Container size="wide" key={project.id}>
              <Reveal delay={i * 0.05}>
                <ProjectCard project={project} reverse={reverse} />
              </Reveal>
            </Container>
          );
        })}
      </div>
    </section>
  );
}

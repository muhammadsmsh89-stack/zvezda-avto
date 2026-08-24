import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink, Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { whatsappLink } from "@/lib/contacts";

export function ProjectsSection({ full = false }: { full?: boolean }) {
  const list = full ? projects : projects.slice(0, 6);

  return (
    <section className="bg-surface-2/50 py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Реальные проекты</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-lg text-pretty text-display font-medium text-foreground">
                Машины говорят за нас
              </h2>
            </Reveal>
          </div>
          {!full && (
            <Reveal delay={0.1}>
              <TextLink href="/portfolio">Все работы</TextLink>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.1} className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {list.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </Reveal>

        {!full && (
          <Reveal delay={0.2} className="mt-4 flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              href={whatsappLink("Здравствуйте! Понравились ваши работы — хочу обсудить оклейку своего автомобиля.")}
              dataEvent="project_cta_click"
            >
              Хочу такой результат
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

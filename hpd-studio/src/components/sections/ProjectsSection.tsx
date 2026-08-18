import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPanel } from "@/components/ui/PhotoPanel";
import { TextLink, Button } from "@/components/ui/Button";
import { projects } from "@/lib/projects";
import { whatsappLink } from "@/lib/contacts";

const panelVariants = ["project-a", "project-b", "project-c"] as const;

export function ProjectsSection({ full = false }: { full?: boolean }) {
  return (
    <section className="bg-surface-2/50 py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Результаты клиентов</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-lg text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
                Что отмечают владельцы автомобилей
              </h2>
            </Reveal>
            <Reveal delay={0.09}>
              <p className="mt-3 max-w-lg text-sm text-muted">По подтверждённым отзывам клиентов на Яндекс Картах.</p>
            </Reveal>
          </div>
          {!full && (
            <Reveal delay={0.1}>
              <TextLink href="/works">Все работы</TextLink>
            </Reveal>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <PhotoPanel
                    variant={panelVariants[i % panelVariants.length]}
                    label={`${project.vehicle} — ${project.task}`}
                    sweepFrom={i % 2 === 0 ? "left" : "right"}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">{project.vehicle}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{project.task}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.work.map((w) => (
                      <span key={w} className="rounded-full border border-border-strong px-3 py-1 text-xs text-muted">
                        {w}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">{project.result}</p>
                  <p className="mt-4 text-xs text-muted">{project.sourceNote}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Button variant="secondary" size="lg" href={whatsappLink("Здравствуйте! Хочу привести автомобиль в порядок в HPD Studio — как у ваших клиентов.")} dataEvent="project_cta_click">
            Хочу такой результат
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

import clsx from "clsx";
import type { Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SceneFrame } from "@/components/media/SceneFrame";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowUpRight } from "@/components/icons";

export function ProjectFeature({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  return (
    <Reveal>
      <div className="border-t border-line-dark py-14 sm:py-20" id={`project-${project.id}`}>
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className={clsx("lg:col-span-8", reversed && "lg:order-2")}>
              {project.layout === "large" ? (
                <SceneFrame
                  media={project.media[0]}
                  caption={`${project.make} ${project.model}`}
                  index={project.index}
                  aspect="aspect-[16/10]"
                  priority
                />
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
                  <SceneFrame
                    media={project.media[0]}
                    caption={`${project.make} ${project.model}`}
                    index={project.index}
                    aspect="aspect-[4/3]"
                    className="sm:col-span-3"
                  />
                  {project.media[1] ? (
                    <SceneFrame
                      media={project.media[1]}
                      caption="Деталь"
                      aspect="aspect-[4/5]"
                      className="sm:col-span-2"
                    />
                  ) : null}
                </div>
              )}
              {project.layout === "large" && project.media.length > 1 ? (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {project.media.slice(1).map((m, i) => (
                    <SceneFrame key={i} media={m} caption="Деталь" aspect="aspect-[4/3]" />
                  ))}
                </div>
              ) : null}
            </div>

            <div className={clsx("lg:col-span-4", reversed && "lg:order-1")}>
              <span className="font-mono-tag text-sm text-accent">{project.index}</span>
              <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-tight text-paper">
                {project.make} {project.model}
              </h3>
              <p className="font-mono-tag mt-2 text-xs uppercase tracking-[0.12em] text-paper/45">{project.tag}</p>
              <p className="text-pretty mt-5 text-[15px] leading-relaxed text-paper/65">{project.summary}</p>

              {project.works ? (
                <ul className="mt-6 flex flex-col gap-2">
                  {project.works.map((work) => (
                    <li key={work} className="flex items-center gap-2 text-sm text-paper/55">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {work}
                    </li>
                  ))}
                </ul>
              ) : null}

              <p className="mt-6 text-xs text-paper/35">Источник: {project.source}</p>

              <WhatsAppLink
                context={`похожий проект — ${project.make} ${project.model}`}
                source={`project_${project.id}`}
                className="group mt-6 inline-flex items-center gap-1.5 text-sm text-paper transition-colors hover:text-accent-soft"
              >
                Обсудить похожий проект
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </WhatsAppLink>
            </div>
          </div>
        </Container>
      </div>
    </Reveal>
  );
}

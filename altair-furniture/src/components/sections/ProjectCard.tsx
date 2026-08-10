import clsx from "clsx";
import type { Project } from "@/data/projects";
import { SceneFrame } from "@/components/media/SceneFrame";
import { NumberTag } from "@/components/ui/NumberTag";

export function ProjectCard({
  project,
  compact = false,
  reverse = false,
}: {
  project: Project;
  compact?: boolean;
  reverse?: boolean;
}) {
  const meta = [project.location, project.year ? String(project.year) : null, project.area, project.materials].filter(
    Boolean,
  );
  const primaryMedia = project.media[0];

  return (
    <article
      className={clsx(
        "grid grid-cols-1 gap-8",
        !compact && "lg:grid-cols-12 lg:items-start lg:gap-12",
      )}
    >
      <div className={clsx(!compact && (reverse ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"))}>
        <SceneFrame media={primaryMedia} label={project.categoryLabel} sheet={`0${project.index}/06`} />
      </div>

      <div className={clsx(!compact && (reverse ? "lg:order-1 lg:col-span-5 lg:pt-4" : "lg:col-span-5 lg:pt-4"))}>
        <div className="flex items-baseline gap-3">
          <NumberTag value={project.index} />
          <span className="font-mono-tag text-xs uppercase tracking-[0.1em] text-muted">
            {project.visualType === "technical-study" ? "Сценарий помещения" : project.categoryLabel}
          </span>
        </div>
        <h3 className={compact ? "font-display mt-2 text-xl font-medium text-ink" : "font-display mt-3 text-2xl font-medium text-ink sm:text-3xl"}>
          {project.title}
        </h3>
        <p className="text-pretty mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>

        {(project.challenge || project.solution) && (
          <dl className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
            {project.challenge && (
              <div>
                <dt className="font-mono-tag text-[11px] uppercase tracking-[0.1em] text-accent">Проблема</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink">{project.challenge}</dd>
              </div>
            )}
            {project.solution && (
              <div>
                <dt className="font-mono-tag text-[11px] uppercase tracking-[0.1em] text-accent">Решение</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink">{project.solution}</dd>
              </div>
            )}
          </dl>
        )}

        {meta.length > 0 && <p className="font-mono-tag mt-5 text-xs text-muted">{meta.join(" · ")}</p>}
      </div>
    </article>
  );
}

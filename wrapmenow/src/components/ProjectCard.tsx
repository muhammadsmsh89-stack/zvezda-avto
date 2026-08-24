import clsx from "clsx";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { TextLink } from "@/components/ui/Button";
import { categoryLabels, type Project } from "@/lib/projects";

const aspects = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[1/1]", "aspect-[3/4]"] as const;

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const aspect = aspects[index % aspects.length];
  return (
    <article className="group mb-6 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-border bg-surface">
      <div className={clsx("relative w-full overflow-hidden", aspect)}>
        <RealPhoto
          image={project.images[0]}
          sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 92vw"
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/75 via-deep/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-deep/55 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground backdrop-blur-sm">
          {categoryLabels[project.category]}
        </span>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-medium text-foreground">{project.vehicle}</p>
          {project.material && <p className="text-xs text-foreground/70">{project.material}</p>}
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">{project.vehicle}</p>
        <h3 className="mt-1.5 text-base font-medium leading-snug text-foreground">{project.title}</h3>
        <div className="mt-3">
          <TextLink href={`/portfolio/${project.slug}`}>Смотреть проект</TextLink>
        </div>
      </div>
    </article>
  );
}

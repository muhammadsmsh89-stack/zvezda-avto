import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { TextLink } from "@/components/ui/Button";
import { featuredProject } from "@/lib/projects";

const facts = [
  { label: "Автомобиль", value: featuredProject.vehicle },
  { label: "Материал", value: featuredProject.material ?? "Полиуретановая защитная плёнка" },
  { label: "Работы", value: featuredProject.work.join(", ") },
  { label: "Результат", value: "Матовая фактура кузова сохранена, добавлена защита от сколов и царапин" },
] as const;

export function FeaturedCase() {
  return (
    <section className="border-y border-border bg-surface-2/40 py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FrameReveal className="aspect-[4/3] w-full rounded-[1.75rem] border border-border lg:aspect-[3/4]">
          <RealPhoto image={featuredProject.images[0]} sizes="(min-width: 1024px) 45vw, 92vw" className="h-full w-full" priority={false} />
        </FrameReveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Разбор проекта</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-pretty text-display font-medium text-foreground">{featuredProject.vehicle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-base text-muted">{featuredProject.title}</p>
          </Reveal>

          <dl className="mt-8 space-y-5">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={0.12 + i * 0.04} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{f.label}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-foreground/90">{f.value}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.3} className="mt-8">
            <TextLink href={`/portfolio/${featuredProject.slug}`}>Смотреть проект целиком</TextLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

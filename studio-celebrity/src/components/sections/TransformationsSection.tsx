import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { portfolio } from "@/lib/portfolio";
import { getMasterBySlug } from "@/lib/masters";

export function TransformationsSection() {
  return (
    <section id="works" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <h2 className="text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Трансформации
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-2 text-base text-muted">Результат говорит лучше обещаний.</p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <TextLink href="/works">Смотреть все работы</TextLink>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {portfolio.map((item, i) => {
            const master = item.masterSlug ? getMasterBySlug(item.masterSlug) : undefined;
            return (
              <Reveal key={item.slug} delay={i * 0.08}>
                <div className="relative grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl">
                  <PhotoPlaceholder
                    shotNumber="До"
                    label={`${item.task} · до`}
                    description="Фото «до» для трансформации"
                    tone="ivory"
                    aspectClassName="aspect-[3/4]"
                  />
                  <PhotoPlaceholder
                    shotNumber="После"
                    label={`${item.task} · после`}
                    description="Фото «после» для трансформации"
                    tone="espresso"
                    aspectClassName="aspect-[3/4]"
                  />
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface text-foreground shadow-md"
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.6}>
                      <path d="M7 6 3 10l4 4M13 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    {item.category}
                  </p>
                  {item.priceFrom && (
                    <p className="text-xs text-muted/70">{item.priceFrom}</p>
                  )}
                </div>
                <h3 className="mt-1.5 text-lg font-semibold text-foreground">{item.task}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.result}</p>
                {master && (
                  <p className="mt-2 text-xs text-muted/70">
                    Мастер — {master.name}, {master.role.toLowerCase()}
                  </p>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

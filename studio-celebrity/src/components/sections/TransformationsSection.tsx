import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { portfolio } from "@/lib/portfolio";
import { getMasterBySlug } from "@/lib/masters";

function BeforeAfter({
  task,
  tone,
}: {
  task: string;
  tone: "ivory" | "espresso";
}) {
  return (
    <div className="relative grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl">
      <PhotoPlaceholder shotNumber="До" label="До" description={`${task} — до`} tone={tone} aspectClassName="aspect-[3/4]" />
      <PhotoPlaceholder
        shotNumber="После"
        label="После"
        description={`${task} — после`}
        tone={tone === "ivory" ? "espresso" : "ivory"}
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
  );
}

export function TransformationsSection() {
  const [featured, ...rest] = portfolio.slice(0, 3);
  const featuredMaster = featured.masterSlug ? getMasterBySlug(featured.masterSlug) : undefined;

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

        <Reveal delay={0.15} className="mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <BeforeAfter task={featured.task} tone="ivory" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{featured.category}</p>
            <h3 className="mt-3 text-pretty text-2xl leading-snug text-foreground sm:text-3xl">{featured.task}</h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">{featured.result}</p>
            {featuredMaster && (
              <p className="mt-4 text-sm text-foreground/70">
                Мастер — {featuredMaster.name}, {featuredMaster.role.toLowerCase()}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {rest.map((item, i) => {
            const master = item.masterSlug ? getMasterBySlug(item.masterSlug) : undefined;
            return (
              <Reveal key={item.slug} delay={0.1 + i * 0.08}>
                <BeforeAfter task={item.task} tone={i % 2 === 0 ? "espresso" : "ivory"} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{item.category}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-foreground">{item.task}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.result}</p>
                {master && (
                  <p className="mt-2 text-xs text-foreground/60">
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

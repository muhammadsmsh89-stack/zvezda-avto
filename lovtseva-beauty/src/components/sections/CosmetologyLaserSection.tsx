import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { getDirectionBySlug } from "@/lib/services";
import { directionIcons } from "@/components/ui/Icons";

export function CosmetologyLaserSection() {
  const cosmetology = getDirectionBySlug("cosmetology")!;
  const laser = getDirectionBySlug("laser")!;
  const blocks = [cosmetology, laser];

  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Уход и коррекция</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-xl text-pretty font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Косметология и лазерная эпиляция
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {blocks.map((d, i) => {
            const Icon = directionIcons[d.slug as keyof typeof directionIcons];
            return (
              <Reveal key={d.slug} delay={i * 0.08} className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
                <Icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 font-serif text-2xl text-foreground">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {d.items.slice(0, 5).map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-foreground">{item.name}</span>
                      {item.price && <span className="shrink-0 text-muted">{item.price}</span>}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <TextLink href={`/services/${d.slug}`}>Все услуги «{d.title}»</TextLink>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

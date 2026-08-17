import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { WorksGrid } from "@/components/WorksGrid";
import { Master } from "@/lib/masters";
import { getDirectionBySlug } from "@/lib/services";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export function MasterDetail({ master }: { master: Master }) {
  const direction = getDirectionBySlug(master.categorySlug);

  return (
    <section className="bg-background py-16 pt-28 lg:py-24 lg:pt-36">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <PhotoPlaceholder
              shotNumber={direction?.code ?? ""}
              label={master.name}
              description={`Портрет мастера — ${master.name}, ${master.role}`}
              tone="espresso"
              subject="portrait"
              aspectClassName="h-full"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{direction?.title ?? "Мастер"}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-3 text-pretty font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl">{master.name}</h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-3 text-lg text-foreground/75">{master.role}</p>
          </Reveal>

          {master.note && (
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{master.note}</p>
            </Reveal>
          )}

          {direction && (
            <Reveal delay={0.26} className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Услуги направления</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {direction.items.map((item) => (
                  <li key={item.name} className="rounded-full border border-border px-4 py-2 text-sm text-foreground">
                    {item.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={0.32} className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappBookingLink(direction?.title, master.name)}>
              Записаться к {master.nameDative}
            </Button>
            {direction && <TextLink href={`/services/${direction.slug}`}>Все услуги «{direction.title}»</TextLink>}
          </Reveal>
        </div>
      </Container>

      {direction && (
        <Container className="mt-16 border-t border-border pt-16 lg:mt-24 lg:pt-20">
          <Reveal>
            <h2 className="text-pretty font-serif text-2xl leading-[1.1] text-foreground sm:text-3xl">
              Работы направления «{direction.title}»
            </h2>
          </Reveal>
          <div className="mt-8">
            <WorksGrid initialFilter={direction.slug} hideFilters hideCta />
          </div>
          <Reveal delay={0.1} className="mt-8">
            <Button href={whatsappBookingLink(direction.title, master.name)}>{ctaLabels.primary}</Button>
          </Reveal>
        </Container>
      )}
    </section>
  );
}

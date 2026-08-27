import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Master } from "@/lib/masters";
import { whatsappBookingLink } from "@/lib/contacts";

export function MasterDetail({ master }: { master: Master }) {
  return (
    <section className="bg-background py-16 pt-28 lg:py-24 lg:pt-36">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <PhotoPlaceholder
              shotNumber="MASTER"
              label={master.name}
              description={`Портрет стилиста ${master.name}, ${master.role}`}
              tone="espresso"
              subject="portrait"
              aspectClassName="h-full"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Стилист</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-3 text-pretty font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">{master.name}</h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-3 text-lg text-foreground/75">{master.role}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{master.bio}</p>
          </Reveal>

          <Reveal delay={0.26} className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Специализация</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {master.specialties.map((item) => (
                <li key={item} className="rounded-full border border-border px-4 py-2 text-sm text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3} className="mt-5 text-sm text-muted">
            {master.priceNote}
          </Reveal>

          <Reveal delay={0.36} className="mt-8 flex flex-wrap gap-3">
            <Button href={whatsappBookingLink(undefined, master.name)}>Записаться к {master.nameDative}</Button>
            <TextLink href="/masters">Все стилисты</TextLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

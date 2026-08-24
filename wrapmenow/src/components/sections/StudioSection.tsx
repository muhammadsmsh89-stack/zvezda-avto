import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { Check } from "@/components/ui/Icons";
import { studioExteriorImage } from "@/lib/media";
import { contacts } from "@/lib/contacts";

const facts = [
  "Светлое помещение",
  "Вентиляция",
  "Закрытая охраняемая территория",
  "Можно увидеть процесс работы",
] as const;

export function StudioSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <FrameReveal className="aspect-[4/3] w-full rounded-[1.75rem] border border-border">
          <RealPhoto image={studioExteriorImage} sizes="(min-width: 1024px) 45vw, 92vw" className="h-full w-full" />
        </FrameReveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Студия</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 text-pretty text-display font-medium text-foreground">{contacts.city}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 text-base text-muted">{contacts.addressFull}</p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {facts.map((f, i) => (
              <Reveal key={f} delay={0.12 + i * 0.04}>
                <li className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

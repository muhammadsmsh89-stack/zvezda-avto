import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { masters } from "@/lib/masters";
import { ctaLabels } from "@/lib/site";

export function MastersSection() {
  const featured = masters.filter((m) => m.featured);

  return (
    <section id="masters" className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Стилисты</p>
            <h2 className="mt-4 text-pretty font-display text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
              Клиенты приезжают к конкретному мастеру — годами
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button variant="secondary" href="/masters">
              {ctaLabels.chooseMaster}
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((master, i) => (
            <Reveal key={master.slug} delay={i * 0.08}>
              <Link href={`/masters/${master.slug}`} className="group block">
                <FrameReveal className="rounded-2xl" delay={i * 0.05}>
                  <PhotoPlaceholder
                    shotNumber={String(i + 1).padStart(2, "0")}
                    label={master.name}
                    description={`Портрет стилиста ${master.name}`}
                    tone={i % 2 === 0 ? "espresso" : "charcoal"}
                    subject="portrait"
                    aspectClassName="aspect-[3/4]"
                    className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </FrameReveal>
                <h3 className="mt-4 font-display text-lg text-foreground">{master.name}</h3>
                <p className="mt-1 text-sm text-muted">{master.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

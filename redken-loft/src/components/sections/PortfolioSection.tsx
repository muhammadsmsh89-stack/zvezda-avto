import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { works } from "@/lib/works";
import { ctaLabels } from "@/lib/site";

const tones = ["copper", "espresso", "charcoal", "copper", "charcoal", "espresso", "copper", "espresso"] as const;

export function PortfolioSection() {
  const preview = works.slice(0, 6);

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Работы</p>
            <h2 className="mt-4 text-pretty font-display text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
              До / После — портфолио, а не обещания
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button variant="secondary" href="/works">
              {ctaLabels.allWorks}
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {preview.map((work, i) => (
            <FrameReveal key={work.id} delay={i * 0.06} className="rounded-2xl">
              <PhotoPlaceholder
                shotNumber={work.id}
                label={work.category}
                description={`${work.title} — ${work.master}`}
                tone={tones[i % tones.length]}
                subject={i % 3 === 1 ? "detail" : "portrait"}
                aspectClassName="aspect-[4/5]"
                className="rounded-2xl"
              />
            </FrameReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

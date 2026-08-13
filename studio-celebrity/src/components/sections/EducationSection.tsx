import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function EducationSection() {
  return (
    <section id="education" className="bg-background py-20 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Beauty School</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-pretty text-3xl leading-[1.12] text-foreground sm:text-4xl">
              Celebrity Education
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              Обучение и мастер-классы Studio Celebrity — для тех, кто хочет стать
              мастером, и для тех, кто хочет разобраться в макияже для себя.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-7">
            <Button href="/education">Узнать об обучении</Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <FrameReveal delay={0.1}>
            <PhotoPlaceholder
              shotNumber="School"
              label="Beauty School"
              description="Обучающий процесс или мастер-класс — рабочий момент, не постановочный кадр"
              tone="ivory"
              aspectClassName="aspect-[16/10]"
            />
          </FrameReveal>
        </Reveal>
      </Container>
    </section>
  );
}

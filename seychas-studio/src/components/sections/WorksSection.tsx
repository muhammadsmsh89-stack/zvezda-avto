import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { WorksGrid } from "@/components/WorksGrid";

export function WorksSection() {
  return (
    <section id="works" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Портфолио</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Работы SEYCHAS
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <TextLink href="/works">Смотреть все работы</TextLink>
          </Reveal>
        </div>

        <div className="mt-10">
          <WorksGrid limit={8} />
        </div>
      </Container>
    </section>
  );
}

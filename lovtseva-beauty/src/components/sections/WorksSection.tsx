import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { WorksGrid } from "@/components/WorksGrid";

export function WorksSection() {
  return (
    <section id="works" className="bg-deep py-20 text-background lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-background/60">Портфолио</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 max-w-lg text-pretty font-serif text-3xl leading-[1.1] text-background sm:text-4xl">
                Работы специалистов центра
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <TextLink href="/works" tone="dark">Смотреть все работы</TextLink>
          </Reveal>
        </div>

        <div className="mt-10">
          <WorksGrid limit={7} hideCta hideFilters />
        </div>
      </Container>
    </section>
  );
}

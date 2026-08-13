import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";

export function HairColorSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <FrameReveal>
            <PhotoPlaceholder
              shotNumber="ColorLab"
              label="Сложное окрашивание"
              description="Крупный кадр результата сложного окрашивания — выход из тёмного в мягкий блонд"
              tone="ivory"
              aspectClassName="aspect-[4/5]"
            />
          </FrameReveal>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Hair Color</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-pretty text-3xl leading-[1.12] text-foreground sm:text-4xl">
              Сложное окрашивание
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              От сложного выхода из тёмного до мягкого натурального блонда — колорист
              подбирает технику под структуру и историю окрашивания ваших волос.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-6 text-2xl font-bold text-foreground">Уточнить стоимость</p>
          </Reveal>
          <Reveal delay={0.32} className="mt-7">
            <TextLink href="/works">Посмотреть окрашивания</TextLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

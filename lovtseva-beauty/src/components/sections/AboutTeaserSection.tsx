import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { TextLink } from "@/components/ui/Button";

export function AboutTeaserSection() {
  return (
    <section className="bg-surface-2/60 py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <PhotoPlaceholder
              shotNumber="ABOUT"
              label="Наталья Ловцева"
              description="Портрет основательницы центра — Натальи Ловцевой"
              tone="ivory"
              subject="portrait"
              aspectClassName="h-full"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">О центре</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-pretty font-serif text-3xl leading-[1.14] text-foreground sm:text-4xl">
              Центр носит имя Натальи Ловцевой
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              На Быстрецкой, 20 собрана команда мастеров разных направлений — от стрижек и биозавивки
              до косметологии и лазерной эпиляции. Клиенты возвращаются к своим мастерам годами:
              «хожу уже не первый год», «много лет пользуюсь услугами этого центра» — так пишут в отзывах
              на Яндекс Картах.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8">
            <TextLink href="/about">Подробнее о центре</TextLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

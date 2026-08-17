import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { directions } from "@/lib/services";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "О центре",
  description: "Центр красоты Натальи Ловцевой в Рязани — девять направлений красоты под одной крышей на Быстрецкой, 20.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="О центре"
        title="Центр носит имя Натальи Ловцевой"
        description="Быстрецкая ул., 20 — центр, где под одной крышей собраны специалисты разных направлений красоты."
      />

      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <PhotoPlaceholder
                shotNumber="ABOUT · 01"
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
              <h2 className="font-serif text-2xl leading-[1.2] text-foreground sm:text-3xl">
                Девять направлений красоты — в одном месте на Быстрецкой, 20
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                Центр расположен в Советском районе Рязани, на цокольном этаже дома по Быстрецкой, 20.
                Здесь работает команда мастеров разных направлений — от стрижек и японской биозавивки
                до косметологии, лазерной эпиляции и перманентного макияжа — так, что для большинства
                бьюти-задач не нужно ехать в разные места города.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent" />
                ))}
              </div>
              <span className="text-sm text-foreground">
                {rating.value} · {rating.reviewsCount} отзывов на {rating.source} · «{rating.award}»
              </span>
            </Reveal>
            <Reveal delay={0.22} className="mt-6">
              <TextLink href={contacts.yandexUrl}>Профиль центра на Яндекс Картах</TextLink>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Направления центра</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {directions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.03}>
                <p className="font-serif text-lg text-foreground">{d.title}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{d.short}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-2/60 py-16 lg:py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">Команда центра</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-base leading-relaxed text-muted">
              В отзывах на Яндекс Картах клиенты регулярно называют специалистов по именам — мастеров
              по волосам, ногтевому сервису и косметологии.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-6">
            <TextLink href="/masters">Смотреть команду</TextLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

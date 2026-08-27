import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { serviceGroups, brands } from "@/lib/services";
import { rating, studio } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "О салоне",
  description: "Redken Loft — студия авторских стрижек и сложной колористики в центре Краснодара, более 10 лет на рынке.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="О салоне"
        title="Не салон полного цикла — команда стилистов с именем"
        description="Redken Loft на ул. Кубанская Набережная, 37 — студия, где сила не в широком списке процедур, а в авторской колористике и стрижках."
      />

      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <FrameReveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <PhotoPlaceholder
                shotNumber="ABOUT · 01"
                label="Redken Loft"
                description="Интерьер студии Redken Loft — лофт-пространство в центре Краснодара"
                tone="charcoal"
                subject="wide"
                aspectClassName="h-full"
              />
            </div>
          </FrameReveal>
          <div>
            <Reveal>
              <h2 className="font-display text-2xl leading-[1.2] text-foreground sm:text-3xl">
                {studio.yearsNote} — на ул. Кубанская Набережная, 37
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
                Redken Loft специализируется на сложном окрашивании — Airtouch, Shatush, Balayage, Ombre
                и работе с блондом — и на авторских стрижках. Прежде чем предложить процедуру, стилист
                изучает структуру волос, историю окрашивания и пожелания клиента.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent" />
                ))}
              </div>
              <span className="text-sm text-foreground">
                {rating.yandex.value} · {rating.yandex.reviewsCount} отзывов на {rating.yandex.source}
              </span>
            </Reveal>
            <Reveal delay={0.22} className="mt-6">
              <TextLink href={contacts.yandexUrl}>Профиль студии на Яндекс Картах</TextLink>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Направления студии</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {serviceGroups.map((g, i) => (
              <Reveal key={g.id} delay={i * 0.04}>
                <p className="font-display text-lg text-foreground">{g.title}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{g.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Работаем на профессиональных материалах</h2>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {brands.map((b, i) => (
              <Reveal key={b.name} delay={0.06 + i * 0.05}>
                <p className="font-display text-xl text-foreground">{b.name}</p>
                <p className="text-xs text-muted">{b.note}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-8">
            <TextLink href="/masters">Смотреть команду стилистов</TextLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

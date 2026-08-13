"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ctaLabels, ratingBreakdown } from "@/lib/studio";
import { useBooking } from "@/lib/booking";

const points = [
  {
    title: "Персональный подход",
    text: "Мастера обсуждают пожелания и референсы перед процедурой.",
    stat: ratingBreakdown[0],
  },
  {
    title: "Несколько услуг за визит",
    text: "Hair, makeup, brows и lashes — можно собрать образ полностью за один визит.",
  },
  {
    title: "Сильные мастера",
    text: "Клиенты регулярно возвращаются к конкретным специалистам студии.",
    stat: ratingBreakdown[3],
  },
  {
    title: "Атмосфера",
    text: "Уютный интерьер, кофе и сервис, за которые студию отмечают в отзывах.",
    stat: ratingBreakdown[1],
  },
];

export function WhyCelebritySection() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-surface-2/50 py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                Почему нас выбирают
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 text-pretty text-3xl leading-[1.12] text-foreground sm:text-4xl">
                Ваш комфорт и результат — наш приоритет
              </h2>
            </Reveal>
            <Reveal delay={0.16} className="mt-7">
              <Button onClick={() => openBooking()}>{ctaLabels.primary}</Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.07}>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  {p.stat && (
                    <span className="text-xs font-semibold text-muted/70">
                      {p.stat.percent}% · {p.stat.count} отзывов
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

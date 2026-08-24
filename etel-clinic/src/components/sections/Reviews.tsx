import { ArrowUpRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const categories = [
  { label: "О врачах", body: "Компетентность, внимательность, объяснение протокола." },
  { label: "О результате", body: "Соответствие ожиданиям, динамика курса процедур." },
  { label: "О сервисе", body: "Запись, приём администраторов, атмосфера клиники." },
  { label: "О клинике", body: "Чистота кабинетов, оснащение, удобство расположения." },
];

/**
 * Реальных текстов отзывов у нас нет — не выдумываем их. Показываем честный
 * агрегированный рейтинг источника со ссылкой на площадку, где отзывы можно
 * прочитать целиком.
 */
export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-shell py-24 sm:py-32">
      <Container wide>
        <h2 className="sr-only">Отзывы о клинике «Этель»</h2>
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeUp>
            <p className="eyebrow">Отзывы</p>
            <div className="mt-5 flex items-end gap-5">
              <span className="font-display text-[6.5rem] leading-[0.85] text-ink sm:text-[8rem]">
                <AnimatedNumber value={site.reviews.rating} decimals={1} />
              </span>
              <div className="pb-2">
                <div className="flex gap-1 text-accent" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={19} className="fill-accent" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-2 text-[0.9375rem] font-medium text-ink-mute">
                  {site.reviews.countLabel} отзывов на {site.reviews.source}
                </p>
              </div>
            </div>
            <p className="mt-7 max-w-[27rem] text-[1.0625rem] leading-[1.6] font-medium text-ink-soft">
              Мы не публикуем чужие отзывы без разрешения площадки — прочитайте
              их напрямую на {site.reviews.source}, там же можно оставить свой.
            </p>
            <div className="mt-7">
              <Button href={site.reviews.url} variant="secondary" size="lg">
                Читать отзывы
              </Button>
            </div>
            {site.reviews.needsVerification && (
              <p className="mt-4 text-[0.8125rem] text-ink-mute/70 italic">
                Рейтинг и число отзывов нужно сверить с площадкой перед публикацией на рабочем домене.
              </p>
            )}
          </FadeUp>

          <div className="grid grid-cols-2 gap-4">
            {categories.map((c, i) => (
              <FadeUp key={c.label} delay={i * 0.07}>
                <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-ink/8 bg-paper p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_24px_50px_-20px_rgba(34,26,23,0.25)]">
                  <span className="route-node" aria-hidden />
                  <h3 className="font-display mt-4 text-[1.1875rem] text-ink">{c.label}</h3>
                  <p className="mt-2 text-[0.875rem] leading-[1.55] text-ink-mute">{c.body}</p>
                  <ArrowUpRight
                    size={16}
                    className="absolute top-6 right-6 text-ink-mute/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

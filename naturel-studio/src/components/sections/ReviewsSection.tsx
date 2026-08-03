// Отзывы ниже — оригинальные примеры-плейсхолдеры, написанные по мотивам тем, которые
// реально встречаются в соцсетях Naturel Studio (маникюр+педикюр в 4 руки, уход за
// волосами, атмосфера, массажное кресло у раковины). Это НЕ цитаты реальных людей —
// перед публикацией замените на настоящие отзывы клиентов с их согласия.

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

const reviews = [
  {
    author: "Софья К.",
    salon: "Москва-Сити",
    text: "Записалась на окрашивание впервые и осталась под впечатлением — мастер подробно объяснила, какой оттенок подойдёт, и результат совпал с ожиданием день в день.",
  },
  {
    author: "Алина Р.",
    salon: "Раменки",
    text: "Маникюр и педикюр в четыре руки — экономия времени огромная, а качество не пострадало. Кофе принесли сразу, ждать вообще не пришлось.",
  },
  {
    author: "Марина Т.",
    salon: "Белорусская",
    text: "Хожу к одному и тому же мастеру по волосам уже полгода — впервые в жизни укладка держится больше двух дней. Атмосфера в зале очень располагающая.",
  },
  {
    author: "Екатерина В.",
    salon: "Тульская",
    text: "Массажное кресло во время мытья головы — маленькая деталь, а ощущение полностью премиальное. Записываюсь заранее, чтобы попасть к своему мастеру.",
  },
  {
    author: "Юлия Д.",
    salon: "Комсомольская",
    text: "Пришла на консультацию к косметологу без записи на процедуру — никто не давил, спокойно объяснили план на несколько визитов вперёд.",
  },
  {
    author: "Ольга М.",
    salon: "Академическая",
    text: "Записалась через сайт вечером, подтвердили в WhatsApp за 10 минут. Реально быстрее, чем звонить и ждать, пока освободится администратор.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-surface py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят наши клиенты"
          description="Больше отзывов — в Telegram-канале и на картах. Напишите нам в WhatsApp, если хотите увидеть работы конкретного мастера."
          align="center"
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem key={review.author}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-background p-7">
                <Stars />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  «{review.text}»
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="font-semibold text-foreground">{review.author}</span>
                  <span className="text-xs text-muted">м. {review.salon}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <a
            href={company.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Смотреть больше отзывов и работ в Telegram →
          </a>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.4 7 .7-5.2 4.8 1.5 6.9-6.2-3.6-6.2 3.6 1.5-6.9L2 9.6l7-.7L12 2.5Z" />
        </svg>
      ))}
    </div>
  );
}

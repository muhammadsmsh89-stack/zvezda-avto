"use client";

import { reviews } from "@/data/reviews";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowUpRight } from "@/components/icons";
import { track } from "@/lib/analytics";

export function Reviews() {
  const [featured, ...rest] = reviews;

  return (
    <section id="reviews" className="border-t border-line-dark bg-void py-24 sm:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="Что говорят клиенты"
            lead={`Рейтинг ${company.yandexMaps.rating.toFixed(1).replace(".", ",")} на Яндекс Картах и в 2ГИС — реальные тексты, без редактуры смысла.`}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="mt-14 max-w-3xl border-t border-line-dark-strong pt-8">
            <p className="text-balance font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-medium leading-snug text-paper">
              «{featured.text}»
            </p>
            <footer className="font-mono-tag mt-5 text-xs uppercase tracking-[0.1em] text-paper/45">
              {featured.author} · {featured.date} · {featured.source}
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 border-t border-line-dark pt-12 sm:grid-cols-2">
          {rest.map((review, i) => (
            <Reveal key={review.author + review.date} delay={i * 0.05}>
              <blockquote>
                <p className="text-pretty text-[15px] leading-relaxed text-paper/75">«{review.text}»</p>
                <footer className="font-mono-tag mt-4 text-xs uppercase tracking-[0.1em] text-paper/40">
                  {review.author} · {review.date} · {review.source}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href={company.yandexMaps.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("review_source_click", { source: "reviews_section" })}
            className="group mt-14 inline-flex items-center gap-1.5 text-sm text-paper/70 transition-colors hover:text-paper"
          >
            Все отзывы на Яндекс Картах
            <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

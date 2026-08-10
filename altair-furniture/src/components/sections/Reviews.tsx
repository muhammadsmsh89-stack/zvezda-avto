"use client";

import { reviews } from "@/data/reviews";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowUpRight, IconStar } from "@/components/icons";
import { track } from "@/lib/analytics";

export function Reviews() {
  return (
    <section id="reviews" className="bg-paper pb-14 pt-20 sm:pb-16 sm:pt-28">
      <Container size="wide">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              index="§06"
              eyebrow="Отзывы"
              title="Что говорят клиенты"
              className="mb-0"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={company.yandexMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("map_click", { source: "reviews_rating" })}
              className="group flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <IconStar className="h-5 w-5 text-accent" />
              <span className="font-mono-tag text-lg text-ink underline decoration-border underline-offset-4 group-hover:decoration-accent">
                {company.yandexMaps.rating.toString().replace(".", ",")}
              </span>
              <span className="text-sm text-muted">
                · {company.yandexMaps.ratingsCount} оценок · {company.yandexMaps.reviewsCount} отзывов
              </span>
            </a>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.author} delay={i * 0.08} as="li">
              <span className="font-mono-tag text-3xl leading-none text-accent">“</span>
              <p className="text-pretty mt-3 text-[15px] leading-relaxed text-ink">{review.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="font-mono-tag flex h-8 w-8 items-center justify-center border border-border text-xs text-muted">
                  {review.author.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{review.author}</p>
                  <p className="font-mono-tag text-xs text-muted">{review.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2} className="mt-10">
          <a
            href={company.yandexMaps.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("map_click", { source: "reviews" })}
            className="group inline-flex items-center gap-1.5 text-sm text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
          >
            Смотреть все отзывы на Яндекс Картах
            <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

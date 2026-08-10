"use client";

import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowUpRight } from "@/components/icons";
import { track } from "@/lib/analytics";

const stats = [
  { value: company.yandexMaps.rating.toFixed(1).replace(".", ","), label: "Яндекс Карты и 2ГИС" },
  { value: `${company.yandexMaps.ratingsCount}`, label: "оценок на Яндекс Картах" },
  { value: `${company.yandexMaps.reviewsCount}`, label: "отзывов на Яндекс Картах" },
  { value: company.instagram.followersDisplay, label: "подписчиков в Instagram" },
];

export function ReputationStrip() {
  return (
    <section className="border-b border-line-dark bg-void py-10 sm:py-14" aria-label="Репутация">
      <Container size="wide">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-x-10 sm:gap-y-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:flex sm:flex-1 sm:flex-wrap sm:gap-x-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-paper sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 max-w-[14ch] text-xs leading-snug text-paper/50 sm:max-w-[16ch]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={company.yandexMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("review_source_click", { source: "reputation_strip" })}
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm text-paper/70 transition-colors hover:text-paper"
            >
              Читать отзывы
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

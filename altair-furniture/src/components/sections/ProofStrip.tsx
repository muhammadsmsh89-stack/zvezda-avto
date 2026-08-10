"use client";

import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { IconArrowUpRight, IconStar } from "@/components/icons";
import { track } from "@/lib/analytics";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: company.yandexMaps.rating.toString().replace(".", ","), label: "рейтинг на Яндекс Картах" },
  { value: `${company.yandexMaps.ratingsCount}`, label: "оценок" },
  { value: `${company.yandexMaps.reviewsCount}`, label: "отзывов" },
];

export function ProofStrip() {
  return (
    <section className="border-y border-border bg-paper">
      <Container size="wide">
        <Reveal>
          <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  {stat.label.includes("рейтинг") && <IconStar className="h-4 w-4 text-accent" />}
                  <span className="font-mono-tag text-2xl text-ink">{stat.value}</span>
                  <span className="text-sm text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
            <a
              href={company.yandexMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("map_click", { source: "proof_strip" })}
              className="group inline-flex items-center gap-1.5 text-sm text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
            >
              Все отзывы на Яндекс Картах
              <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

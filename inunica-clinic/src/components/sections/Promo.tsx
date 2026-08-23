"use client";

import { promos } from "@/data/promos";
import { formatPrice } from "@/lib/format";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { useBooking } from "../BookingSheet";

/** Акции и абонементы. Цена показывается вместе со старой — без «звёздочек». */
export function Promo() {
  const { open } = useBooking();

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container wide>
        <SectionHeading
          index="06"
          eyebrow="Предложения"
          title={<>Первый визит и курсы — выгоднее</>}
          className="max-w-[46rem]"
        />

        <ul className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-2">
          {promos.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90} className="rule flex flex-col pt-6">
              <h3 className="font-display text-[1.75rem] text-ink sm:text-[2rem]">
                {p.title}
              </h3>

              <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-[1.65] text-ink-soft">
                {p.body}
              </p>

              {p.price && (
                <p className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-[2.25rem] text-accent tabular-nums">
                    {formatPrice(p.price)}
                  </span>
                  {p.oldPrice && (
                    <span className="text-[1.0625rem] text-ink-mute line-through tabular-nums">
                      {formatPrice(p.oldPrice)}
                    </span>
                  )}
                </p>
              )}

              <p className="mt-4 text-[0.9375rem] leading-[1.6] text-ink-mute">{p.note}</p>

              <button
                type="button"
                onClick={() => open(p.title)}
                className="mt-8 inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center self-start rounded-[2px] border border-ink/25 px-7 text-[1rem] font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink/[0.04] active:scale-[0.98] sm:w-auto"
              >
                Забронировать
              </button>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

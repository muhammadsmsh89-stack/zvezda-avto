"use client";

import { site } from "@/lib/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { useBooking } from "../BookingSheet";

/** Последний экран: один вопрос — как записаться — и три ответа на него. */
export function FinalCta() {
  const { open } = useBooking();

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <Container wide>
        <Reveal className="rule grid gap-12 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="eyebrow">Запись</p>
            <h2 className="font-display mt-6 max-w-[16ch] text-[2.25rem] text-ink sm:text-[3rem] lg:text-[3.75rem]">
              Начнём с консультации
            </h2>
            <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-[1.65] text-ink-soft">
              Врач осмотрит кожу, разберёт противопоказания и предложит план —
              с процедурами, количеством визитов и стоимостью. Приём —{" "}
              {site.consultationPrice.toLocaleString("ru-RU")} ₽.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => open("Консультация врача-косметолога")}
                className="inline-flex min-h-[58px] w-full cursor-pointer items-center justify-center rounded-[2px] bg-accent px-9 text-[1rem] font-medium text-paper transition-colors duration-200 hover:bg-accent-deep active:scale-[0.98] sm:w-auto"
              >
                Записаться
              </button>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[58px] w-full items-center justify-center rounded-[2px] border border-ink/25 px-9 text-[1rem] font-medium text-ink transition-colors duration-200 hover:border-ink hover:bg-ink/[0.04] active:scale-[0.98] sm:w-auto"
              >
                Написать в WhatsApp
              </a>
            </div>
          </div>

          <dl className="space-y-8 text-[1rem]">
            <div className="rule pt-4">
              <dt className="eyebrow">Адрес</dt>
              <dd className="mt-3 text-ink">{site.address.full}</dd>
              <dd className="mt-2">
                <a
                  href={site.address.routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-soft underline decoration-ink/25 underline-offset-4 hover:text-ink"
                >
                  Построить маршрут
                </a>
              </dd>
            </div>

            <div className="rule pt-4">
              <dt className="eyebrow">Время работы</dt>
              <dd className="mt-3 text-ink">{site.hours.long}</dd>
              <dd className="mt-1 text-ink-mute">{site.hours.note}</dd>
            </div>

            <div className="rule pt-4">
              <dt className="eyebrow">Телефон</dt>
              <dd className="mt-3">
                <a
                  href={site.phone.href}
                  className="text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                >
                  {site.phone.display}
                </a>
              </dd>
              <dd className="mt-1 text-ink-mute">{site.email}</dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

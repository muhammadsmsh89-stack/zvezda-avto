"use client";

import { Container } from "../ui/Container";
import { useBooking } from "../BookingSheet";
import { IconPhone, IconTelegram } from "../ui/Icons";
import { site, channels, MEDICAL_DISCLAIMER } from "@/lib/site";

export function FinalCta() {
  const { open } = useBooking();

  return (
    <section className="on-ink bg-ink py-14 text-milk sm:py-20">
      <Container>
        <div className="mx-auto max-w-[720px] text-center">
          <p className="eyebrow text-orchid-soft">Следующий шаг</p>
          <h2 className="mt-4 font-display text-[1.875rem] leading-[1.15] text-milk sm:text-[2.5rem]">
            Начните с бесплатной консультации
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-lilac">
            Врач посмотрит кожу и скажет, что нужно сейчас, а что можно отложить.
            Записываться на процедуру в этот же день не обязательно.
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex min-h-[54px] items-center justify-center rounded-[4px] bg-orchid px-7 text-[1rem] font-medium text-ink transition-colors hover:bg-orchid-soft cursor-pointer"
            >
              Записаться
            </button>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-[54px] items-center justify-center gap-2.5 rounded-[4px] border border-lilac/40 px-7 text-[1rem] font-medium text-milk transition-colors hover:border-orchid-soft hover:bg-white/[0.06]"
            >
              <IconPhone className="h-[18px] w-[18px]" />
              {site.phone}
            </a>
          </div>

          <a
            href={channels.bookingTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 text-[0.9375rem] text-lilac transition-colors hover:text-orchid-soft"
          >
            <IconTelegram className="h-[18px] w-[18px]" />
            Написать в Telegram — {channels.bookingTelegramHandle}
          </a>

          <p className="mt-8 text-[0.8125rem] leading-relaxed text-lilac/75">{MEDICAL_DISCLAIMER}</p>
        </div>
      </Container>
    </section>
  );
}

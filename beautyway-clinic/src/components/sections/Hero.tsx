"use client";

import Link from "next/link";
import { Media } from "../ui/Media";
import { useBooking } from "../BookingSheet";
import { IconShield, IconUser, IconClock, IconArrow, IconPin } from "../ui/Icons";
import { branches, site } from "@/lib/site";

const TRUST = [
  { icon: IconShield, label: "Медицинская лицензия", value: site.license },
  { icon: IconUser, label: "Врачи клиники", value: "средний стаж более 10 лет" },
  { icon: IconClock, label: "Приём", value: "ежедневно 10:00–22:00" },
];

export function Hero() {
  const { open } = useBooking();

  return (
    <section className="on-ink relative overflow-hidden bg-ink text-milk">
      <div
        className="clinical-grid pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      />
      <div className="relative mx-auto grid grid-cols-1 max-w-[1320px] gap-10 px-5 pt-11 pb-0 sm:px-8 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center lg:gap-14 lg:pb-16">
        <div className="rise">
          <p className="eyebrow text-orchid-soft">BeautyWay Clinic · Москва</p>

          <h1 className="mt-4 font-display text-[2.125rem] leading-[1.08] text-milk sm:text-[3rem] lg:text-[3.5rem]">
            Эстетическая медицина
            <br className="hidden sm:block" />{" "}
            <span className="text-orchid-soft">без эффекта «сделанности»</span>
          </h1>

          <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-lilac sm:text-[1.125rem]">
            Врачи с профильным медицинским образованием и оригинальное оборудование.
            Две клиники в центре Москвы.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <button
              type="button"
              onClick={() => open()}
              className="inline-flex min-h-[54px] items-center justify-center rounded-[4px] bg-orchid px-6 text-[1rem] font-medium text-ink transition-colors hover:bg-orchid-soft cursor-pointer"
            >
              Записаться на консультацию
            </button>
            <Link
              href="/problem"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[4px] border border-lilac/40 px-6 text-[1rem] font-medium text-milk transition-colors hover:border-orchid-soft hover:bg-white/[0.06]"
            >
              Подобрать процедуру
              <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-ink-line bg-ink-line sm:grid-cols-3">
            {TRUST.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-3 bg-ink px-4 py-4">
                <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-orchid-soft" />
                <span className="min-w-0">
                  <span className="block text-[0.75rem] uppercase tracking-[0.12em] text-lilac/75">
                    {label}
                  </span>
                  <span className="mt-1 block text-[0.875rem] leading-snug break-words text-milk">
                    {value}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="-mx-5 mt-2 sm:-mx-8 lg:mx-0 lg:mt-0">
          <Media
            name="interior/clinic-poster"
            widths={[720, 1440]}
            ratio="16 / 11"
            alt="Интерьер клиники BeautyWay Clinic"
            sizes="(min-width: 1024px) 46vw, 100vw"
            priority
            className="lg:rounded-[14px]"
            objectPosition="center 42%"
          />
        </div>
      </div>

      <div className="relative border-t border-ink-line">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <ul className="grid grid-cols-1 divide-y divide-ink-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {branches.map((b) => (
              <li key={b.slug} className="sm:first:pr-6 sm:last:pl-6">
                <Link
                  href={`/contacts/${b.slug}`}
                  className="group flex min-h-[76px] items-center gap-3 py-4 transition-colors"
                >
                  <IconPin className="h-[18px] w-[18px] shrink-0 text-orchid-soft" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.9375rem] text-milk group-hover:text-orchid-soft">
                      {b.addressShort}
                    </span>
                    <span className="mt-0.5 block truncate text-[0.8125rem] text-lilac/80">
                      м. {b.metro.join(" · ")}
                    </span>
                  </span>
                  <IconArrow className="h-4 w-4 shrink-0 text-lilac/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-orchid-soft" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

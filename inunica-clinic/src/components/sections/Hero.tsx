"use client";

import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { site } from "@/lib/site";
import { directions } from "@/data/directions";
import { Container } from "../ui/Container";
import { Typewriter } from "../ui/typewriter";
import { useBooking } from "../BookingSheet";

/*
  Первый экран: кадр клиники во всю высоту, крупный заголовок понизу,
  предложение и действие справа — композиция редакционного разворота.

  Почему кадр затемнён, а не показан как есть: фотографии сняты при обычном
  потолочном свете, и по светлой стене белый текст не читается. Три слоя
  затемнения работают адресно — верх под шапку, низ под текстовый блок,
  середина остаётся почти чистой, поэтому помещение всё ещё узнаётся.
  Цвет затемнения — не чёрный, а фирменный plum: кадр уходит в тёплый
  сливовый, а не в серый.
*/

const proof = [
  `Лицензия ${site.license.number}`,
  "In-Motion D2 · Sylfirm X · ClearLight",
  site.hours.short,
];

export function Hero() {
  const { open } = useBooking();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={withBase("/clinic/reception.webp")}
        alt="Зона ожидания INUNICA clinic на улице Белгородского полка"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[46%_38%]"
      />

      {/* Ровное подтемнение по всему кадру — база для двух градиентов ниже. */}
      <div aria-hidden="true" className="absolute inset-0 bg-plum/36" />
      {/* Верх: шапка набрана светлым и должна читаться поверх стены. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[38vh] bg-gradient-to-b from-plum/80 via-plum/35 to-transparent"
      />
      {/* Низ: под заголовком и текстом нужен почти сплошной фон. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-plum via-plum/85 to-transparent"
      />

      <Container
        wide
        className="relative flex min-h-[100svh] flex-col justify-end pt-32 pb-12 sm:pb-16 lg:pb-20"
      >
        <div className="hero-rise">
          <p className="eyebrow !text-shell/80">
            {site.tagline} · {site.city}
          </p>

          <div className="mt-7 grid gap-9 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
            {/*
              Переносы расставлены руками: строка не должна заканчиваться
              предлогом, поэтому «по» уезжает вниз вместе с «медицинским».
            */}
            <h1 className="font-display text-[clamp(2.5rem,11vw,3.25rem)] text-shell sm:text-[clamp(3.25rem,8.5vw,4.5rem)] lg:text-[clamp(3.75rem,5.6vw,5.5rem)]">
              Красота —
              <br />
              по медицинским
              <br />
              стандартам.
            </h1>

            <div className="lg:pb-3">
              <p className="font-golos flex flex-wrap items-baseline gap-x-2 text-[1rem] text-shell/75">
                <span>Направления:</span>
                <Typewriter
                  words={directions.map((d) => d.title)}
                  speed={55}
                  delayBetweenWords={1400}
                  cursorChar="_"
                  className="text-accent-lift"
                />
              </p>

              <p className="mt-5 max-w-[42ch] text-[1.0625rem] leading-[1.6] text-shell/80 sm:text-[1.125rem]">
                Протокол подбирает врач после осмотра, а не прайс-лист.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <button
                  type="button"
                  onClick={() => open("Консультация врача-косметолога")}
                  className="inline-flex min-h-[58px] w-full cursor-pointer items-center justify-center rounded-[2px] bg-accent px-9 text-[1rem] font-medium tracking-[0.01em] text-paper transition-colors duration-200 hover:bg-accent-deep active:scale-[0.98] sm:w-auto"
                >
                  Записаться на консультацию
                </button>

                <Link
                  href="/uslugi/"
                  className="text-[1rem] text-shell underline decoration-shell/35 underline-offset-[7px] transition-colors duration-200 hover:decoration-shell"
                >
                  Все процедуры
                </Link>
              </div>
            </div>
          </div>

          <ul className="rule-dark mt-11 flex flex-col gap-y-2 pt-5 text-[0.9375rem] tracking-[0.02em] text-shell/70 sm:flex-row sm:flex-wrap sm:gap-x-8 lg:mt-14">
            {proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

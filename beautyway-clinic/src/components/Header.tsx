"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Wordmark } from "./Wordmark";
import { useBooking } from "./BookingSheet";
import { IconMenu, IconClose, IconPhone, IconChevron } from "./ui/Icons";
import { site } from "@/lib/site";
// Только таксономия (8 КБ), не весь контентный слой: иначе весь JSON
// с услугами и статьями попадёт в клиентский бандл.
import taxonomy from "@/data/generated/taxonomy.json";

const PRIMARY = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/problem", label: "Проблемы" },
  { href: "/vrachi", label: "Врачи" },
  { href: "/price", label: "Цены" },
  { href: "/portfolio", label: "Работы" },
  { href: "/contacts", label: "Контакты" },
];

const SECONDARY = [
  { href: "/about-us", label: "О клинике" },
  { href: "/oborudovanie", label: "Оборудование" },
  { href: "/preparaty", label: "Препараты" },
  { href: "/promo", label: "Акции" },
  { href: "/abonementy", label: "Абонементы" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/video", label: "Видео" },
  { href: "/blog", label: "Блог" },
  { href: "/liczenzii-i-sertifikatyi", label: "Лицензии" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { open: openBooking } = useBooking();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prev = body.style.overflow;
    body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-milk/92 backdrop-blur-md">
      <div className="safe-x mx-auto flex h-[60px] max-w-[1320px] items-center gap-3 px-4 sm:h-[68px] sm:px-8">
        <Link href="/" className="mr-auto inline-flex min-h-[44px] items-center" aria-label="BeautyWay Clinic — на главную">
          <Wordmark />
        </Link>

        <nav aria-label="Основная навигация" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {PRIMARY.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center rounded-[4px] px-3 text-[0.9375rem] text-graphite transition-colors hover:text-plum-deep"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Телефон виден всегда: это единственный путь к записи, если JavaScript
            отключён (меню и шторка записи без него не работают). */}
        <a
          href={site.phoneHref}
          aria-label={`Позвонить: ${site.phone}`}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-[4px] px-2 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint sm:px-3"
        >
          <IconPhone className="h-[18px] w-[18px]" />
          <span className="hidden md:inline">{site.phone}</span>
        </a>

        <button
          type="button"
          onClick={() => openBooking()}
          className="hidden min-h-[44px] items-center rounded-[4px] bg-plum px-4 text-[0.9375rem] font-medium text-white transition-colors hover:bg-plum-deep cursor-pointer lg:inline-flex"
        >
          Записаться
        </button>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-haspopup="dialog"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-graphite transition-colors hover:bg-plum-tint hover:text-plum-deep cursor-pointer lg:hidden"
        >
          <IconMenu />
          <span className="sr-only">Открыть меню</span>
        </button>

        <noscript>
          <Link
            href="/uslugi"
            className="inline-flex min-h-[44px] items-center rounded-[4px] px-3 text-[0.9375rem] font-medium text-plum-deep lg:hidden"
          >
            Услуги
          </Link>
        </noscript>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Закрыть меню"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/50"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Меню сайта"
            className="safe-bottom absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col overflow-y-auto overscroll-contain bg-porcelain shadow-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-line bg-porcelain px-5 py-3.5">
              <Wordmark />
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-graphite-soft transition-colors hover:bg-plum-tint hover:text-plum-deep cursor-pointer"
              >
                <IconClose />
                <span className="sr-only">Закрыть меню</span>
              </button>
            </div>

            <nav aria-label="Меню" className="px-5 py-4">
              <ul className="border-b border-line pb-4">
                {PRIMARY.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[52px] items-center justify-between gap-3 text-[1.0625rem] text-graphite transition-colors hover:text-plum-deep"
                    >
                      {l.label}
                      <IconChevron className="h-4 w-4 text-lilac" />
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-5 mb-2 text-plum">Направления</p>
              <ul className="grid grid-cols-2 gap-x-4 border-b border-line pb-4">
                {taxonomy.slice(0, 10).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/uslugi/${c.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[44px] items-center text-[0.875rem] leading-snug text-graphite-soft transition-colors hover:text-plum-deep"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 grid grid-cols-2 gap-x-4">
                {SECONDARY.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[44px] items-center text-[0.875rem] text-graphite-soft transition-colors hover:text-plum-deep"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto border-t border-line px-5 py-4">
              <a
                href={site.phoneHref}
                className="flex min-h-[48px] items-center gap-2.5 text-[1.0625rem] font-medium text-plum-deep"
              >
                <IconPhone className="h-[18px] w-[18px]" />
                {site.phone}
              </a>
              <p className="mt-1 text-[0.875rem] text-graphite-soft">{site.hours}</p>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
                className={clsx(
                  "mt-3.5 inline-flex min-h-[50px] w-full items-center justify-center rounded-[4px] bg-plum",
                  "px-5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-plum-deep cursor-pointer",
                )}
              >
                Записаться на консультацию
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

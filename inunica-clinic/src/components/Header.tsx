"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { nav, site } from "@/lib/site";
import { Wordmark } from "./ui/Wordmark";
import { useBooking } from "./BookingSheet";
import { Container } from "./ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useBooking();
  const pathname = usePathname();

  // Шапка становится плотной только после того, как герой ушёл вверх.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  /*
    На главной первый экран — тёмный кадр во всю высоту, и шапка над ним
    обязана быть светлой: чернильный текст по фотографии просто пропадает.
    Как только страница проскроллена (шапка получает светлую подложку) или
    открыто меню — возвращаемся к обычным чернилам.
  */
  const overHero = pathname === "/" && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-300 ease-out",
          scrolled || menuOpen
            ? "border-b border-line/70 bg-shell/92 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-shell/80"
            : "border-b border-transparent py-5",
        )}
      >
        <Container wide className="flex items-center justify-between gap-6">
          <Wordmark invert={overHero} className="text-[0.9rem] sm:text-[1.0625rem]" />

          <nav aria-label="Основная навигация" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "relative py-2 text-[1rem] transition-colors duration-200",
                      overHero
                        ? "text-shell/85 hover:text-shell"
                        : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={site.phone.href}
              className={clsx(
                "hidden whitespace-nowrap text-[1rem] transition-opacity duration-200 hover:opacity-65 xl:block",
                overHero ? "text-shell" : "text-ink",
              )}
            >
              {site.phone.display}
            </a>

            {/*
              Над героем кнопка становится контурной: на первом экране уже
              есть крупное фирменное «Записаться», и вторая заливка рядом
              с ним спорила бы за внимание.
            */}
            <button
              type="button"
              onClick={() => open()}
              className={clsx(
                "hidden min-h-[44px] cursor-pointer items-center rounded-[2px] px-6 text-[1rem] font-medium transition-colors duration-200 active:scale-[0.98] sm:inline-flex",
                overHero
                  ? "border border-shell/45 text-shell hover:bg-shell/12"
                  : "bg-plum text-shell hover:bg-plum-soft",
              )}
            >
              Записаться
            </button>

            <a
              href={site.phone.href}
              aria-label={`Позвонить ${site.phone.display}`}
              className={clsx(
                "grid h-11 w-11 place-items-center sm:hidden",
                overHero ? "text-shell" : "text-ink",
              )}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.6 2.5h2.3l1.6 4-2 1.2a12 12 0 005.8 5.8l1.2-2 4 1.6v2.3a2 2 0 01-2.2 2A17.6 17.6 0 014.6 4.7a2 2 0 012-2.2z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              className={clsx(
                "grid h-11 w-11 cursor-pointer place-items-center lg:hidden",
                overHero ? "text-shell" : "text-ink",
              )}
            >
              <span className="relative block h-[9px] w-[22px]">
                <span
                  className={clsx(
                    "absolute left-0 block h-px w-full bg-current transition-transform duration-300 ease-out",
                    menuOpen ? "top-1 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 bottom-0 block h-px w-full bg-current transition-transform duration-300 ease-out",
                    menuOpen ? "-translate-y-1 -rotate-45" : "",
                  )}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/* Мобильное меню: перекрывает страницу целиком, путь до записи всегда виден. */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-0 top-[60px] z-40 overflow-y-auto bg-shell lg:hidden"
      >
        <Container className="flex min-h-full flex-col pt-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <nav aria-label="Мобильная навигация">
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-line/70">
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display block py-5 text-[1.75rem] text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-10">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="min-h-[54px] w-full cursor-pointer rounded-[2px] bg-plum text-[1rem] font-medium text-shell active:scale-[0.99]"
            >
              Записаться на консультацию
            </button>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex min-h-[54px] w-full items-center justify-center rounded-[2px] border border-ink/25 text-[1rem] font-medium text-ink active:scale-[0.99]"
            >
              Написать в WhatsApp
            </a>

            <div className="mt-7 space-y-1 text-[1rem] text-ink-soft">
              <a href={site.phone.href} className="block text-ink">
                {site.phone.display}
              </a>
              <p className="pt-2">{site.address.full}</p>
              <p>{site.hours.short}</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

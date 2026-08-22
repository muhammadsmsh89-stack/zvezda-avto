"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Container } from "./ui/Container";
import { Wordmark } from "./ui/Wordmark";
import { IconClose, IconMenu, IconPhone, IconTelegram, IconVk } from "./ui/Icons";
import { contacts } from "@/lib/contacts";

const nav = [
  { href: "#works", label: "Работы" },
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О компании" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a,button")?.focus();

    const trigger = triggerRef.current;
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out",
          solid
            ? "border-b border-line bg-bg/92 backdrop-blur-md"
            : "border-b border-transparent bg-[linear-gradient(to_bottom,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.42)_55%,transparent_100%)]",
        )}
      >
        <Container className="flex h-14 items-center justify-between gap-4 lg:h-[72px]">
          <a
            href="#top"
            className="flex min-h-[44px] items-center py-2 text-[14px] lg:text-[16px]"
            aria-label="MODNOE MESTO — на главную"
          >
            <Wordmark />
          </a>

          <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[15px] font-medium text-fg-dim transition-colors duration-200 hover:text-fg"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={contacts.phoneHref}
              className="hidden text-[15px] font-semibold tabular-nums text-fg transition-colors hover:text-gold-bright lg:block"
            >
              {contacts.phoneDisplay}
            </a>
            <a
              href="#calculator"
              className="hidden min-h-[44px] items-center rounded-[4px] bg-gold px-5 text-[15px] font-semibold text-on-gold transition-[transform,background-color] duration-[160ms] ease-out hover:bg-gold-bright active:scale-[0.975] lg:inline-flex"
            >
              Рассчитать стоимость
            </a>

            <a
              href={contacts.phoneHref}
              className="grid size-11 place-items-center rounded-[4px] text-fg transition-colors hover:text-gold-bright lg:hidden"
              aria-label={`Позвонить ${contacts.phoneDisplay}`}
            >
              <IconPhone className="size-[22px]" />
            </a>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-11 place-items-center rounded-[4px] text-fg transition-colors hover:text-gold-bright lg:hidden"
              aria-label="Открыть меню"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <IconMenu className="size-[24px]" />
            </button>
          </div>
        </Container>
      </header>

      {/* Мобильное меню — короткий список, крупные зоны нажатия, один явный CTA */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
        ref={panelRef}
        className={clsx(
          "fixed inset-0 z-[60] flex flex-col bg-bg-deep transition-[opacity,transform] duration-300 lg:hidden",
          open
            ? "pointer-events-auto translate-y-0 opacity-100 ease-[cubic-bezier(0.23,1,0.32,1)]"
            : "pointer-events-none -translate-y-2 opacity-0 ease-out",
        )}
        inert={!open}
      >
        <div className="flex h-14 items-center justify-between px-5">
          <Wordmark className="text-[14px]" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-11 place-items-center text-fg"
            aria-label="Закрыть меню"
          >
            <IconClose className="size-6" />
          </button>
        </div>

        <nav aria-label="Меню" className="flex-1 overflow-y-auto px-5 pt-2">
          <ul>
            {nav.map((n) => (
              <li key={n.href} className="border-b border-line">
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[60px] items-center text-[22px] font-semibold tracking-[-0.02em]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-small text-fg-faint">
            {contacts.addressFull}
          </p>

          <div className="mt-5 flex gap-2.5">
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-[4px] border border-line px-4 text-small font-semibold"
            >
              <IconTelegram className="size-[17px] text-gold" />
              Telegram
            </a>
            <a
              href={contacts.vk}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-[4px] border border-line px-4 text-small font-semibold"
            >
              <IconVk className="size-[17px] text-gold" />
              VK
            </a>
          </div>
        </nav>

        <div className="border-t border-line px-5 pb-[max(20px,env(safe-area-inset-bottom))] pt-5">
          <a
            href="#calculator"
            onClick={() => setOpen(false)}
            className="flex min-h-[54px] w-full items-center justify-center rounded-[4px] bg-gold text-body font-semibold text-on-gold active:scale-[0.985]"
          >
            Рассчитать стоимость
          </a>
          <a
            href={contacts.phoneHref}
            className="mt-3 flex min-h-[48px] items-center justify-center gap-2 text-body font-semibold tabular-nums text-fg"
          >
            <IconPhone className="size-[18px] text-gold" />
            {contacts.phoneDisplay}
          </a>
          <p className="mt-1 text-center text-micro text-fg-faint">{contacts.hours}</p>
        </div>
      </div>
    </>
  );
}

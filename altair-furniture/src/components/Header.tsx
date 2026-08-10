"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/data/company";
import { IconClose, IconMenu } from "@/components/icons";
import { track } from "@/lib/analytics";

const NAV_ITEMS = [
  { href: "#projects", label: "Подход" },
  { href: "#categories", label: "Направления" },
  { href: "#process", label: "Процесс" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled || menuOpen ? "bg-paper/95 border-b border-border backdrop-blur" : "bg-transparent",
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between sm:h-20">
          <a href="#top" className="flex flex-col leading-none">
            <span
              className={clsx(
                "font-display text-lg font-semibold tracking-tight sm:text-xl",
                scrolled || menuOpen ? "text-ink" : "text-ink",
              )}
            >
              АЛЬТАИР
            </span>
            <span className="font-mono-tag mt-1 text-[10px] uppercase text-muted sm:text-[11px]">
              {company.tagline}
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm text-ink/80 transition-colors hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#calculator"
              onClick={() => track("hero_cta_click", { source: "header" })}
              className="hidden items-center rounded-none border border-ink bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-ink/85 sm:inline-flex"
            >
              Рассчитать проект
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border border-border text-ink lg:hidden"
            >
              {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper pb-20 pt-24 md:pb-10 lg:hidden"
          >
            <nav className="container-wide flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="border-b border-border py-4 font-display text-2xl text-ink"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-wide mt-auto hidden py-6 md:block">
              <a
                href="#calculator"
                onClick={() => {
                  setMenuOpen(false);
                  track("hero_cta_click", { source: "mobile_menu" });
                }}
                className="flex w-full items-center justify-center bg-ink px-5 py-4 text-base font-medium text-paper"
              >
                Рассчитать проект
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

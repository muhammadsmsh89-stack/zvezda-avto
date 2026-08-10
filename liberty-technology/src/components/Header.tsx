"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/data/company";
import { IconClose, IconMenu } from "@/components/icons";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { buttonClass } from "@/components/ui/Button";

const NAV_ITEMS = [
  { href: "#capabilities", label: "Услуги" },
  { href: "#projects", label: "Проекты" },
  { href: "#about", label: "О центре" },
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
        id="top"
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled || menuOpen ? "border-b border-line-dark bg-void/95 backdrop-blur" : "bg-transparent",
        )}
      >
        <div className="container-wide flex h-16 items-center justify-between sm:h-20">
          <a href="#top" className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-[0.02em] text-paper sm:text-lg">
              LIBERTY TECHNOLOGY
            </span>
            <span className="font-mono-tag mt-1 text-[10px] uppercase tracking-[0.14em] text-paper/45 sm:text-[11px]">
              {company.tagline} — {company.city}
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm text-paper/75 transition-colors hover:text-paper"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <WhatsAppLink source="header" className={buttonClass({ variant: "primary", tone: "dark", size: "md" })}>
                Обсудить автомобиль
              </WhatsAppLink>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border border-line-dark-strong text-paper lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-void pb-24 pt-24 md:pb-10 lg:hidden"
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
                  className="border-b border-line-dark py-4 font-display text-2xl font-semibold text-paper"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <div className="container-wide mt-auto py-6">
              <WhatsAppLink
                source="mobile_menu"
                className={clsx(buttonClass({ variant: "primary", tone: "dark", size: "lg" }), "w-full")}
              >
                Обсудить автомобиль
              </WhatsAppLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

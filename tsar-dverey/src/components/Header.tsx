"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import { nav, quizHref } from "@/lib/content";
import { company } from "@/data/company";
import { IconClose, IconMenu, IconPhone } from "@/components/icons";
import { BrandMark } from "@/components/BrandMark";
import { track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 z-50 transition-colors duration-300",
          scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-background/0 border-b border-transparent"
        )}
      >
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5 text-foreground">
            <BrandMark className="h-6 w-6" />
            <span className="text-[19px] tracking-[0.01em]">Царь Дверей</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Основная навигация">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-foreground/80 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={company.phone.href}
              onClick={() => track("phone_click", { location: "header" })}
              className="flex items-center gap-2 text-[15px] text-foreground hover:text-accent transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              {company.phone.display}
            </a>
            <Link
              href={quizHref}
              onClick={() => track("hero_cta_click", { location: "header" })}
              className="rounded-[3px] bg-foreground px-5 py-2.5 text-[14px] text-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Подобрать двери
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 text-foreground"
          >
            {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background lg:hidden"
          >
            <div className="h-16" />
            <nav className="container-wide flex flex-col gap-1 pt-6" aria-label="Мобильная навигация">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-[26px] border-b border-border text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="container-wide mt-8 flex flex-col gap-4">
              <a
                href={company.phone.href}
                onClick={() => track("phone_click", { location: "mobile_menu" })}
                className="flex items-center gap-3 text-[18px] text-foreground"
              >
                <IconPhone className="w-5 h-5" />
                {company.phone.display}
              </a>
              <Link
                href={quizHref}
                onClick={() => setOpen(false)}
                className="rounded-[3px] bg-foreground px-6 py-4 text-center text-[16px] text-background"
              >
                Подобрать двери
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

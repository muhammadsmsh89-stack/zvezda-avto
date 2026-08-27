"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company, navLinks, buildBookingHref } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-editorial text-xl tracking-tight text-ink md:text-2xl">
            Redken Loft
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted">
            Color / Cut / Form
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${company.phone.href}`}
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
          >
            {company.phone.value}
          </a>
          <a
            href={buildBookingHref()}
            target={company.bookingUrl ? undefined : "_blank"}
            rel={company.bookingUrl ? undefined : "noopener noreferrer"}
            className="rounded-sm border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-background"
          >
            Записаться
          </a>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center border border-border-strong text-foreground lg:hidden"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0 7H18" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0 13H18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex h-full flex-col px-6 py-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-editorial text-xl text-ink">Redken Loft</span>
                <button
                  aria-label="Закрыть меню"
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center border border-border-strong text-foreground"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>

              <nav className="mt-14 flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4, ease: EASE }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-border py-4"
                    >
                      <span className="font-editorial text-xs text-muted">0{i + 1}</span>
                      <span className="font-editorial text-3xl text-ink">{link.label}</span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a href={`tel:${company.phone.href}`} className="text-center text-lg font-medium text-ink">
                  {company.phone.value}
                </a>
                <a
                  href={buildBookingHref()}
                  onClick={() => setOpen(false)}
                  className="bg-ink px-5 py-4 text-center text-sm font-medium text-background"
                >
                  Записаться
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

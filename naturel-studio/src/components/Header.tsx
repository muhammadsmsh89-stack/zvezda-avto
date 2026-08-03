"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company, navLinks } from "@/lib/content";

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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(43,36,28,0.18)]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#top" className="flex items-center gap-3 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-surface text-accent transition-colors group-hover:border-accent">
            <span className="font-display text-xl font-semibold">N</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-wide text-foreground">
              {company.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
              Салон красоты · Москва
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${company.phone.href}`}
            className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors"
          >
            {company.phone.value}
          </a>
          <a
            href="#booking"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105 active:scale-[0.97] accent-glow"
          >
            Записаться онлайн
          </a>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
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
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">{company.name}</span>
                <button
                  aria-label="Закрыть меню"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-border py-4 text-2xl font-semibold text-foreground"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={`tel:${company.phone.href}`}
                  className="text-center text-lg font-semibold text-foreground"
                >
                  {company.phone.value}
                </a>
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-accent px-5 py-3.5 text-center text-sm font-semibold text-accent-foreground"
                >
                  Записаться онлайн
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

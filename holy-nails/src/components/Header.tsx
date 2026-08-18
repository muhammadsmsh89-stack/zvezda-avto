"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, mobileNavLinks, ctaLabels } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { EASE } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { Menu, Close, Phone, MapPin } from "@/components/ui/Icons";

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
        scrolled ? "header-tactile" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[80rem] items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 lg:px-16 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2 shrink-0" aria-label="Holy Nails — на главную">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:+${contacts.phone.href}`}
            className="flex items-center gap-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            {contacts.phone.value}
          </a>
          <Button href={contacts.yclientsUrl}>{ctaLabels.primary}</Button>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden shrink-0"
        >
          <Menu className="h-4.5 w-4.5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-deep px-6 pt-[env(safe-area-inset-top)] lg:hidden"
          >
            <div className="flex items-center justify-between py-5">
              <Wordmark dark />
              <button
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-background/20 text-background"
              >
                <Close className="h-4.5 w-4.5" />
              </button>
            </div>

            <nav className="mt-4 flex flex-1 flex-col justify-center gap-1 pb-8" aria-label="Мобильная навигация">
              {mobileNavLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE }}
                  className="border-b border-background/10"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-2xl font-semibold text-background/90 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mb-4 flex items-center justify-center gap-6 py-4">
              <a href={`tel:+${contacts.phone.href}`} className="flex items-center gap-2 text-sm text-background/80">
                <Phone className="h-4 w-4" />
                {contacts.phone.value}
              </a>
              <span className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4" />
                {contacts.city}
              </span>
            </div>

            <Button href={contacts.yclientsUrl} variant="ghost-light" className="mb-6 w-full justify-center" size="lg" onClick={() => setOpen(false)}>
              {ctaLabels.primary}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

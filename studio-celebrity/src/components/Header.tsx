"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { studio, navLinks, mobileNavLinks, ctaLabels } from "@/lib/studio";
import { useBooking } from "@/lib/booking";
import { EASE } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Monogram } from "@/components/ui/Monogram";
import { Menu, Close, WhatsAppIcon, TelegramIcon, InstagramIcon } from "@/components/ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

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
        className={`mx-auto flex max-w-[85rem] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-16 ${
          scrolled ? "py-3.5" : "py-5"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3">
          <Monogram className="h-9 w-9 transition-transform duration-300 group-hover:scale-105" />
          <span className="hidden flex-col leading-[1.05] sm:flex">
            <span className="text-[0.95rem] font-bold uppercase tracking-[0.06em] text-foreground">
              Studio
            </span>
            <span className="text-[0.95rem] font-bold uppercase tracking-[0.06em] text-foreground">
              Celebrity
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={studio.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
          </a>
          <Button onClick={() => openBooking()}>{ctaLabels.primary}</Button>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
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
            className="fixed inset-0 z-50 flex flex-col bg-deep px-6 pt-[env(safe-area-inset-top)] lg:hidden"
          >
            <div className="flex items-center justify-between py-5">
              <span className="flex items-center gap-3">
                <Monogram className="h-9 w-9" dark />
                <span className="text-sm font-bold uppercase tracking-[0.08em] text-background">
                  Studio Celebrity
                </span>
              </span>
              <button
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background"
              >
                <Close className="h-4.5 w-4.5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-1 flex-col justify-center gap-1" aria-label="Мобильная навигация">
              {mobileNavLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE }}
                  className="border-b border-background/10 py-4 text-2xl font-semibold text-background/90 transition-colors hover:text-nude"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mb-4 flex items-center justify-center gap-5 py-4">
              <a href={studio.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-background/70">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href={studio.telegramUrl} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-background/70">
                <TelegramIcon className="h-5 w-5" />
              </a>
              <a href={studio.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-background/70">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>

            <Button
              onClick={() => {
                setOpen(false);
                openBooking();
              }}
              variant="nude"
              className="mb-6 w-full justify-center"
              size="lg"
            >
              {ctaLabels.primary}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

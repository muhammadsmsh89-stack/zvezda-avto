"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, mobileNavLinks, ctaLabels } from "@/lib/site";
import { contacts, whatsappBookingLink } from "@/lib/contacts";
import { EASE } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Monogram } from "@/components/ui/Wordmark";
import { Menu, Close, WhatsAppIcon, InstagramIcon, VkIcon } from "@/components/ui/Icons";

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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-[74rem] items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled ? "header-tactile shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]" : "border border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <Monogram className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
          <span className="hidden flex-col leading-[1.05] sm:flex">
            <span className="text-[0.85rem] font-bold uppercase tracking-[0.06em] text-foreground">
              Redken <span className="text-accent">Loft</span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-white/[0.02] p-1 lg:flex" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-white/[0.06] hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contacts.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <Button size="md" href={whatsappBookingLink()}>{ctaLabels.primary}</Button>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
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
            className="fixed inset-0 z-50 flex flex-col bg-background px-6 pt-[env(safe-area-inset-top)] lg:hidden"
          >
            <div className="flex items-center justify-between py-5">
              <span className="flex items-center gap-3">
                <Monogram className="h-9 w-9" />
                <span className="text-sm font-bold uppercase tracking-[0.08em] text-foreground">
                  Redken Loft
                </span>
              </span>
              <button
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground"
              >
                <Close className="h-4.5 w-4.5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-1 flex-col justify-center gap-1" aria-label="Мобильная навигация">
              {mobileNavLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: EASE }}
                  className="border-b border-border"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-2xl font-bold text-foreground/90 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mb-4 flex items-center justify-center gap-5 py-4">
              <a href={contacts.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-foreground/70">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href={contacts.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/70">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={contacts.vkUrl} target="_blank" rel="noopener noreferrer" aria-label="VK" className="text-foreground/70">
                <VkIcon className="h-5 w-5" />
              </a>
            </div>

            <Button
              href={whatsappBookingLink()}
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

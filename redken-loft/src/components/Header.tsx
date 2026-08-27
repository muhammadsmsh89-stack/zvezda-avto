"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, mobileNavLinks, ctaLabels } from "@/lib/site";
import { contacts, whatsappBookingLink } from "@/lib/contacts";
import { EASE } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { Monogram } from "@/components/ui/Wordmark";
import { Menu, Close, InstagramIcon, VkIcon } from "@/components/ui/Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
      className={`sticky top-0 z-50 header-tactile transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(23,19,15,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[80rem] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="group flex items-center gap-2.5">
          <Monogram className="h-7 w-7" />
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-foreground">
            Redken <span className="text-accent">Loft</span>
          </span>
        </Link>

        <nav
          className="gloss-pill hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => {
            const isActive =
              !link.href.includes("#") &&
              pathname?.replace(/\/$/, "") === link.href.replace(/\/$/, "");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[0.78rem] tracking-[0.02em] transition-colors ${
                  isActive
                    ? "font-semibold text-foreground"
                    : "font-medium text-foreground/55 hover:text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <TextLink href={contacts.whatsappUrl}>WhatsApp</TextLink>
          <span className="h-6 w-px bg-border" />
          <Button size="md" href={whatsappBookingLink()}>{ctaLabels.primary}</Button>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center border border-border-strong text-foreground lg:hidden"
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
            className="fixed inset-0 z-50 flex flex-col bg-noir px-6 pt-[env(safe-area-inset-top)] lg:hidden"
          >
            <div className="flex items-center justify-between py-5">
              <span className="flex items-center gap-3">
                <Monogram ink className="h-8 w-8" />
                <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-cream">
                  Redken Loft
                </span>
              </span>
              <button
                aria-label="Закрыть меню"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-cream/20 text-cream"
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
                  className="border-b border-cream/10"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-2xl italic text-cream/90 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mb-4 flex items-center justify-center gap-5 py-4">
              <a href={contacts.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/70">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={contacts.vkUrl} target="_blank" rel="noopener noreferrer" aria-label="VK" className="text-cream/70">
                <VkIcon className="h-5 w-5" />
              </a>
            </div>

            <Button
              variant="ink"
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

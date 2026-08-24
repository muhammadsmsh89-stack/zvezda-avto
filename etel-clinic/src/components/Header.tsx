"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Phone } from "lucide-react";
import { Wordmark } from "./ui/Wordmark";
import { Button } from "./ui/Button";
import { site, nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  // Закрываем мобильное меню при смене маршрута — без эффекта: React 19
  // допускает такую подстройку состояния прямо во время рендера (см.
  // "adjusting state when a prop changes" в доках React), это и убирает
  // лишний рендер-цикл, на который жалуется react-hooks/set-state-in-effect.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={clsx(
          "transition-all duration-500",
          solid
            ? "border-b border-ink/8 bg-shell/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-[1560px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="shrink-0" aria-label="Этель — на главную">
            <Wordmark />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Основная навигация"
            onMouseLeave={() => setHovered(null)}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHovered(item.href)}
                className={clsx(
                  "relative px-4 py-2 text-[0.9375rem] font-medium transition-colors",
                  pathname === item.href ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {hovered === item.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink/6"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={site.phone.href}
              className="flex items-center gap-2 text-[0.9375rem] tabular-nums text-ink transition-colors hover:text-accent"
            >
              <Phone size={15} strokeWidth={2} />
              {site.phone.display}
            </a>
            <Button href="/contacts/" size="md">
              Записаться
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="relative flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="relative block h-[14px] w-6">
              <span
                className={clsx(
                  "absolute left-0 top-0 h-[1.5px] w-6 bg-ink transition-transform duration-300",
                  open && "translate-y-[6.5px] rotate-45",
                )}
              />
              <span
                className={clsx(
                  "absolute bottom-0 left-0 h-[1.5px] w-6 bg-ink transition-transform duration-300",
                  open && "-translate-y-[6.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[4.75rem] bottom-0 z-40 overflow-y-auto bg-shell lg:hidden"
          >
            <div className="flex h-full flex-col px-5 pt-6 pb-8">
              <nav className="flex flex-col" aria-label="Мобильная навигация">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link href={item.href} className="font-display block border-b border-line py-4 text-[1.5rem] text-ink">
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8 space-y-4">
                <a href={site.phone.href} className="block text-[1.125rem] tabular-nums text-ink">
                  {site.phone.display}
                </a>
                <p className="text-[0.9375rem] text-ink-mute">{site.hours.short}</p>
              </div>
              <Button href="/contacts/" size="lg" className="mt-auto w-full">
                Записаться на консультацию
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

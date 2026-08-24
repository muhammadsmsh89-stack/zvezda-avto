"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Button } from "./ui/Button";

/** Липкая CTA-панель на мобильном — появляется после первого экрана. */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-line bg-shell/95 px-4 py-3 backdrop-blur-sm transition-transform duration-300 lg:hidden"
      style={{ transform: visible ? "translateY(0)" : "translateY(100%)" }}
    >
      <a
        href={site.phone.href}
        aria-label="Позвонить"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[2px] border border-ink/20 text-ink"
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.9c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
      </a>
      <Button href="/contacts/" size="md" className="flex-1">
        Записаться
      </Button>
    </div>
  );
}

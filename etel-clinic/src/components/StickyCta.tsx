"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { site } from "@/lib/site";
import { useBooking } from "./BookingSheet";

/**
 * Мобильная нижняя панель. Появляется после первого экрана и прячется у
 * подвала, чтобы не перекрывать юридический блок и контакты.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    const footer = document.querySelector("footer");

    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.85;
      let atFooter = false;
      if (footer) {
        const r = footer.getBoundingClientRect();
        atFooter = r.top < window.innerHeight - 40;
      }
      setVisible(past && !atFooter);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-shell/95 backdrop-blur-md transition-transform duration-300 ease-out sm:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="flex gap-2 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={site.primaryPhone.href}
          tabIndex={visible ? undefined : -1}
          className="grid min-h-[50px] w-[50px] shrink-0 place-items-center rounded-[2px] border border-ink/25 text-ink"
          aria-label={`Позвонить ${site.primaryPhone.display}`}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6.6 2.5h2.3l1.6 4-2 1.2a12 12 0 005.8 5.8l1.2-2 4 1.6v2.3a2 2 0 01-2.2 2A17.6 17.6 0 014.6 4.7a2 2 0 012-2.2z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        {site.whatsapp && (
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={visible ? undefined : -1}
            aria-label="Написать в WhatsApp"
            className="grid min-h-[50px] w-[50px] shrink-0 place-items-center rounded-[2px] border border-ink/25 text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              <path
                d="M8.9 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.6 1.4c.1.2 0 .4-.1.5l-.4.5c-.1.2-.2.3 0 .6a6 6 0 002.6 2.3c.3.1.4 0 .6-.1l.5-.6c.2-.2.3-.1.5 0l1.3.7c.2.1.4.2.4.4a1.7 1.7 0 01-1.2 1.6c-.5.1-1.2.2-3.4-.8a8 8 0 01-3.3-3.6c-.5-1.1-.4-2 0-2.4z"
                fill="currentColor"
              />
            </svg>
          </a>
        )}
        <button
          type="button"
          onClick={() => open()}
          tabIndex={visible ? undefined : -1}
          className="min-h-[50px] flex-1 cursor-pointer rounded-[2px] bg-accent text-[1rem] font-medium text-shell active:scale-[0.99]"
        >
          Записаться
        </button>
      </div>
    </div>
  );
}

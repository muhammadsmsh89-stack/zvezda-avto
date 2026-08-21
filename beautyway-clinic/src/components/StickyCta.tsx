"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useBooking } from "./BookingSheet";
import { site } from "@/lib/site";
import { IconPhone } from "./ui/Icons";

/**
 * Одна основная мобильная CTA. Учитывает safe-area-inset-bottom,
 * появляется после первого экрана и убирается, когда в кадре футер,
 * чтобы не перекрывать юридический блок и контакты.
 *
 * Видимость считаем в одном обработчике прокрутки с throttling через rAF:
 * так поведение не зависит от того, успел ли сработать IntersectionObserver.
 */
export function StickyCta() {
  const { open } = useBooking();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const pastHero = window.scrollY > 420;
      const footer = document.getElementById("site-footer");
      // Футер считаем «в кадре», когда он поднялся выше нижней трети экрана.
      const footerInView = footer
        ? footer.getBoundingClientRect().top < window.innerHeight - 88
        : false;
      setVisible(pastHero && !footerInView);
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      className={clsx(
        "safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-porcelain/96 backdrop-blur-md",
        "transition-[transform,opacity] duration-300 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-2.5 px-4 py-2.5">
        <a
          href={site.phoneHref}
          tabIndex={visible ? 0 : -1}
          aria-label={`Позвонить ${site.phone}`}
          className="inline-flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[4px] border border-plum/40 text-plum-deep transition-colors hover:bg-plum-tint"
        >
          <IconPhone />
        </a>
        <button
          type="button"
          onClick={() => open()}
          tabIndex={visible ? 0 : -1}
          className="inline-flex h-[50px] flex-1 items-center justify-center rounded-[4px] bg-plum px-5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-plum-deep cursor-pointer"
        >
          Записаться
        </button>
      </div>
    </div>
  );
}

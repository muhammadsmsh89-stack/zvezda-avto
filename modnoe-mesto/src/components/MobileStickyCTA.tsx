"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { IconPhone } from "./ui/Icons";
import { contacts } from "@/lib/contacts";

/**
 * Появляется после первого экрана и прячется, когда пользователь дошёл до
 * калькулятора или до финального CTA — чтобы не перекрывать форму.
 */
export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const passedHero = window.scrollY > window.innerHeight * 0.85;
      const calc = document.getElementById("calculator");
      const nearForm =
        !!calc && calc.getBoundingClientRect().top < window.innerHeight * 0.9;
      setVisible(passedHero && !nearForm);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/94 backdrop-blur-md transition-[transform,opacity] duration-300 lg:hidden",
        visible
          ? "translate-y-0 opacity-100 ease-[cubic-bezier(0.23,1,0.32,1)]"
          : "pointer-events-none translate-y-full opacity-0 ease-out",
      )}
      inert={!visible}
    >
      <div className="flex items-center gap-2.5 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3">
        <a
          href="#calculator"
          className="flex min-h-[50px] flex-1 items-center justify-center rounded-[4px] bg-gold text-body font-semibold text-on-gold transition-transform duration-[160ms] ease-out active:scale-[0.985]"
        >
          Рассчитать стоимость
        </a>
        <a
          href={contacts.phoneHref}
          aria-label={`Позвонить ${contacts.phoneDisplay}`}
          className="grid size-[50px] shrink-0 place-items-center rounded-[4px] border border-line-strong text-fg transition-[transform,border-color] duration-[160ms] ease-out active:scale-[0.97]"
        >
          <IconPhone className="size-[21px]" />
        </a>
      </div>
    </div>
  );
}

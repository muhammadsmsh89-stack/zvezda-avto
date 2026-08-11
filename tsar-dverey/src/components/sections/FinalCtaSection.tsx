"use client";

import Link from "next/link";
import { company } from "@/data/company";
import { whatsappGeneric } from "@/lib/whatsapp";
import { quizHref } from "@/lib/content";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { track } from "@/lib/analytics";

export function FinalCtaSection() {
  return (
    <section className="bg-deep py-20 text-deep-foreground sm:py-28">
      <div className="container-wide">
        <Reveal variant="rise" className="max-w-2xl">
          <h2 className="text-balance text-[32px] leading-[1.15] sm:text-[42px]">
            Подберём двери под ваш интерьер
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-deep-foreground/65 sm:text-[18px]">
            Пройдите короткий подбор на сайте или напишите прямо сейчас — ответим и подскажем варианты.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={quizHref}
              onClick={() => track("hero_cta_click", { location: "final_cta" })}
              className="inline-flex items-center justify-center rounded-[3px] bg-accent px-7 py-4 text-[16px] text-accent-foreground transition-colors hover:bg-deep-foreground hover:text-deep"
            >
              Подобрать двери
            </Link>
            <a
              href={whatsappGeneric()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "final_cta" })}
              className="inline-flex items-center gap-2 rounded-[3px] border border-deep-border px-7 py-4 text-[16px] text-deep-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <IconWhatsApp className="h-4 w-4" />
              Написать в WhatsApp
            </a>
            <a
              href={company.phone.href}
              onClick={() => track("phone_click", { location: "final_cta" })}
              className="inline-flex items-center gap-2 text-[16px] text-deep-foreground/80 hover:text-accent transition-colors"
            >
              <IconPhone className="h-4 w-4" />
              {company.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

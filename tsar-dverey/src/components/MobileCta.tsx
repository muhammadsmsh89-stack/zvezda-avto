"use client";

import Link from "next/link";
import { company } from "@/data/company";
import { whatsappGeneric } from "@/lib/whatsapp";
import { quizHref } from "@/lib/content";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { track } from "@/lib/analytics";

export function MobileCta() {
  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 flex items-stretch border-t border-border bg-background/95 backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={company.phone.href}
        onClick={() => track("phone_click", { location: "mobile_cta" })}
        aria-label={`Позвонить: ${company.phone.display}`}
        className="flex items-center justify-center w-12 border-r border-border text-foreground"
      >
        <IconPhone className="w-[18px] h-[18px]" />
      </a>
      <a
        href={whatsappGeneric()}
        onClick={() => track("whatsapp_click", { location: "mobile_cta" })}
        aria-label="Написать в WhatsApp"
        className="flex items-center justify-center w-12 border-r border-border text-foreground"
      >
        <IconWhatsApp className="w-[18px] h-[18px]" />
      </a>
      <Link
        href={quizHref}
        onClick={() => track("hero_cta_click", { location: "mobile_cta" })}
        className="flex-1 flex items-center justify-center bg-foreground text-background text-[14px] py-3.5"
      >
        Подобрать двери
      </Link>
    </div>
  );
}

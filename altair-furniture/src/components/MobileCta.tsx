"use client";

import { company } from "@/data/company";
import { IconPhone } from "@/components/icons";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { track } from "@/lib/analytics";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-border bg-paper md:hidden">
      <a
        href={company.phone.href}
        onClick={() => track("phone_click", { source: "mobile_cta" })}
        aria-label="Позвонить"
        className="flex flex-1 items-center justify-center gap-2 border-r border-border py-3.5 text-sm text-ink"
      >
        <IconPhone className="h-4 w-4" />
        Звонок
      </a>
      <WhatsAppLink
        className="flex flex-1 items-center justify-center gap-2 border-r border-border py-3.5 text-sm text-ink"
        showIcon
      >
        WhatsApp
      </WhatsAppLink>
      <a
        href="#calculator"
        onClick={() => track("hero_cta_click", { source: "mobile_cta" })}
        className="flex flex-[1.4] items-center justify-center bg-ink py-3.5 text-sm font-medium text-paper"
      >
        Рассчитать
      </a>
    </div>
  );
}

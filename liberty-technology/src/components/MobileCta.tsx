"use client";

import { company } from "@/data/company";
import { IconPhone } from "@/components/icons";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { track } from "@/lib/analytics";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-line-dark bg-void md:hidden">
      <a
        href={company.phone.href}
        onClick={() => track("phone_click", { source: "mobile_cta" })}
        aria-label="Позвонить"
        className="flex flex-1 items-center justify-center gap-2 border-r border-line-dark py-3.5 text-sm text-paper/80"
      >
        <IconPhone className="h-4 w-4" />
        Звонок
      </a>
      <WhatsAppLink
        source="mobile_cta"
        className="flex flex-[1.6] items-center justify-center gap-2 bg-paper py-3.5 text-sm font-medium text-void"
      >
        Обсудить автомобиль
      </WhatsAppLink>
    </div>
  );
}

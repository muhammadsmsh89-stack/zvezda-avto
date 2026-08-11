"use client";

import { whatsappCategory } from "@/lib/whatsapp";
import { IconWhatsApp } from "@/components/icons";
import { track } from "@/lib/analytics";

export function CategoryWhatsAppCta({ context }: { context: string }) {
  return (
    <a
      href={whatsappCategory(context)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        track("whatsapp_click", { location: "category_page", context });
      }}
      className="inline-flex w-fit items-center gap-2 rounded-[3px] bg-foreground px-6 py-3.5 text-[15px] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      <IconWhatsApp className="h-4 w-4" />
      Узнать стоимость в WhatsApp
    </a>
  );
}

"use client";

import { socialLinks } from "@/data/company";
import { whatsappGeneric } from "@/lib/whatsapp";
import { IconTelegram, IconWhatsApp } from "@/components/icons";
import { track } from "@/lib/analytics";

export function ContactActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={whatsappGeneric()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { location: "contacts_page" })}
        className="inline-flex items-center gap-2 rounded-[3px] bg-foreground px-6 py-3.5 text-[15px] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <IconWhatsApp className="h-4 w-4" />
        Написать в WhatsApp
      </a>
      <a
        href={socialLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-[3px] border border-border-strong px-6 py-3.5 text-[15px] text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        <IconTelegram className="h-4 w-4" />
        Telegram
      </a>
      <a
        href={socialLinks.yandexMaps}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("route_click", { location: "contacts_page" })}
        className="inline-flex items-center gap-2 rounded-[3px] border border-border-strong px-6 py-3.5 text-[15px] text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Построить маршрут
      </a>
    </div>
  );
}

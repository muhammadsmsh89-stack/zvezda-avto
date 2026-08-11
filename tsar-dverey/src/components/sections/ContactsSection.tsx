"use client";

import { company, locations, socialLinks } from "@/data/company";
import { whatsappGeneric } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconClock, IconPhone, IconPin, IconTelegram, IconWhatsApp } from "@/components/icons";
import { track } from "@/lib/analytics";

export function ContactsSection() {
  const primary = locations[0];

  return (
    <section id="contacts" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal variant="rise">
          <SectionHeading eyebrow="Контакты" title="Заедьте в шоурум или напишите прямо сейчас" />

          <dl className="mt-8 space-y-5 text-[16px]">
            <div className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <dd>
                  {company.city}, {primary.address}
                  {primary.floor ? `, ${primary.floor}` : ""}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <dd>{primary.hours}</dd>
            </div>
            <div className="flex items-start gap-3">
              <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <a href={company.phone.href} onClick={() => track("phone_click", { location: "contacts_section" })} className="hover:text-accent transition-colors">
                {company.phone.display}
              </a>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappGeneric()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "contacts_section" })}
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
              href={primary.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("route_click", { location: "contacts_section" })}
              className="inline-flex items-center gap-2 rounded-[3px] border border-border-strong px-6 py-3.5 text-[15px] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Построить маршрут
            </a>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={0.1}>
          <a
            href={primary.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("route_click", { location: "contacts_map_preview" })}
            className="group flex h-full min-h-[280px] flex-col items-center justify-center gap-3 border border-border-strong bg-surface-2 p-8 text-center transition-colors hover:border-accent"
          >
            <IconPin className="h-8 w-8 text-accent" />
            <p className="text-[17px] text-foreground">{primary.address}, {company.city}</p>
            <p className="text-[14px] text-muted">Открыть на Яндекс Картах →</p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

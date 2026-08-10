"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowUpRight, IconInstagram, IconPhone, IconPin, IconWhatsapp } from "@/components/icons";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { track } from "@/lib/analytics";

const MAP_EMBED_URL = "https://yandex.ru/map-widget/v1/org/altair/235173322702/";

export function Contacts() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contacts" className="bg-paper py-20 sm:py-28">
      <Container size="wide">
        <Reveal>
          <SectionHeading index="§10" eyebrow="Контакты" title="Как нас найти" className="mb-14" />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <ul className="flex flex-col divide-y divide-border border-y border-border">
              <li className="flex items-start gap-4 py-5">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-ink">{company.address.line}</p>
                  <p className="text-sm text-muted">{company.address.district}, {company.address.city}</p>
                </div>
              </li>
              <li className="flex items-center gap-4 py-5">
                <IconPhone className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={company.phone.href}
                  onClick={() => track("phone_click", { source: "contacts" })}
                  className="text-ink transition-colors hover:text-accent"
                >
                  {company.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-4 py-5">
                <IconWhatsapp className="h-5 w-5 shrink-0 text-accent" />
                <WhatsAppLink showIcon={false} className="text-ink transition-colors hover:text-accent">
                  {company.whatsapp.display}
                </WhatsAppLink>
              </li>
              <li className="flex items-center gap-4 py-5">
                <IconInstagram className="h-5 w-5 shrink-0 text-accent" />
                <a
                  href={company.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("instagram_click", { source: "contacts" })}
                  className="text-ink transition-colors hover:text-accent"
                >
                  {company.instagram.handle}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-stone sm:aspect-[16/10]">
              {mapLoaded ? (
                <iframe
                  src={MAP_EMBED_URL}
                  title="Альтаир на Яндекс Картах — Производственная ул., 102/1, Махачкала"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMapLoaded(true);
                    track("map_click", { source: "contacts_embed" });
                  }}
                  className="group flex h-full w-full flex-col items-center justify-center gap-3 bg-stone transition-colors duration-200 hover:bg-surface-2"
                >
                  <span className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
                  <span className="absolute left-4 top-4 h-3 w-3 border-l border-t border-accent/60" aria-hidden="true" />
                  <span className="absolute right-4 top-4 h-3 w-3 border-r border-t border-accent/60" aria-hidden="true" />
                  <span className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-accent/60" aria-hidden="true" />
                  <span className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-accent/60" aria-hidden="true" />
                  <IconPin className="relative h-8 w-8 text-accent transition-transform duration-200 group-hover:scale-110" />
                  <span className="relative font-display text-lg font-medium text-ink">Показать карту</span>
                  <span className="relative font-mono-tag text-xs uppercase tracking-[0.1em] text-muted">
                    {company.address.line}, {company.address.city}
                  </span>
                </button>
              )}
            </div>
            <a
              href={company.yandexMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("map_click", { source: "contacts" })}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm text-ink underline decoration-border underline-offset-4 transition-colors hover:decoration-accent"
            >
              Открыть на Яндекс Картах
              <IconArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone, WhatsAppIcon, InstagramIcon } from "@/components/ui/Icons";
import { studio } from "@/lib/studio";
import { useBooking } from "@/lib/booking";

export function ContactsSection() {
  const { openBooking } = useBooking();
  const mapsSearch = `https://yandex.ru/maps/?text=${encodeURIComponent(studio.addressFull)}`;

  const rows = [
    { icon: MapPin, label: "Адрес", value: studio.addressFull, href: mapsSearch },
    { icon: Phone, label: "Телефон", value: studio.phone.value, href: `tel:${studio.phone.href}` },
    { icon: Clock, label: "График", value: `${studio.hours} · ${studio.hoursNote}` },
    { icon: InstagramIcon, label: "Instagram", value: studio.instagramHandle, href: studio.instagramUrl },
  ];

  return (
    <section id="contacts" className="bg-surface-2/50 py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Контакты</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
              Ждём вас в студии
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {rows.map((row) => (
              <Reveal key={row.label} delay={0.1}>
                {row.href ? (
                  <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-3 group">
                    <row.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted" />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.12em] text-muted/60">{row.label}</span>
                      <span className="text-sm text-foreground group-hover:underline">{row.value}</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-start gap-3">
                    <row.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted" />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.12em] text-muted/60">{row.label}</span>
                      <span className="text-sm text-foreground">{row.value}</span>
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-9 flex flex-wrap gap-3">
            <Button onClick={() => openBooking()}>Записаться</Button>
            <Button variant="secondary" href={studio.whatsappUrl} icon={<WhatsAppIcon className="h-4 w-4" />}>
              WhatsApp
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <a
            href={mapsSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
              <rect width="400" height="300" fill="var(--surface-2)" />
              <g stroke="var(--border-strong)" strokeWidth="1">
                <path d="M0 60H400M0 130H400M0 200H400M0 260H400" />
                <path d="M70 0V300M150 0V300M230 0V300M320 0V300" />
              </g>
              <path d="M0 150C90 110 140 190 230 150S360 110 400 150" stroke="var(--nude-strong)" strokeWidth="3" fill="none" />
            </svg>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <MapPin className="h-9 w-9 text-foreground transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="mt-2 rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground shadow-sm">
                {studio.landmark}
              </span>
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

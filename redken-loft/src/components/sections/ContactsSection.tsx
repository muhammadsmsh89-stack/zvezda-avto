import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { MapPin, Clock, Phone, WhatsAppIcon } from "@/components/ui/Icons";
import { contacts, whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export function ContactsSection({ className }: { className?: string } = {}) {
  const mapsSearch = `https://yandex.ru/maps/?text=${encodeURIComponent(contacts.addressFull)}`;

  const rows = [
    { icon: MapPin, label: "Адрес", value: contacts.addressFull, href: mapsSearch },
    { icon: Phone, label: "Телефон", value: contacts.phone.value, href: `tel:+${contacts.phone.href}` },
    { icon: Clock, label: "Режим работы", value: contacts.hoursNote },
  ];

  return (
    <section id="contacts" className={clsx("bg-background pb-20 lg:pb-28", className ?? "pt-20 lg:pt-28")}>
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Контакты</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-pretty font-display text-3xl leading-[1.1] text-foreground sm:text-4xl">Ждём вас в лофте</h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {rows.map((row) => (
              <Reveal key={row.label} delay={0.1}>
                {row.href ? (
                  <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-start gap-3">
                    <row.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted" />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.12em] text-muted">{row.label}</span>
                      <span className="text-sm text-foreground group-hover:underline">{row.value}</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-start gap-3">
                    <row.icon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted" />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.12em] text-muted">{row.label}</span>
                      <span className="text-sm text-foreground">{row.value}</span>
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-5">
            <Button href={whatsappBookingLink()} icon={<WhatsAppIcon className="h-4 w-4" />}>
              {ctaLabels.primary}
            </Button>
            <TextLink href={contacts.instagramUrl}>Instagram студии</TextLink>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <a
            href={mapsSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border"
          >
            <PhotoPlaceholder
              shotNumber="MAP"
              label={contacts.address}
              description="Вход в Redken Loft на Кубанской Набережной, 37"
              tone="charcoal"
              subject="wide"
              aspectClassName="h-full"
              className="transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center">
              <span className="flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Открыть в Яндекс Картах
              </span>
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

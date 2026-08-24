import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone, Mail, TelegramIcon, VkIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { contacts, whatsappLink } from "@/lib/contacts";
import { studioExteriorImage } from "@/lib/media";

export function ContactsSection({ className }: { className?: string } = {}) {
  const mapsSearch = `https://yandex.ru/maps/?text=${encodeURIComponent(contacts.addressFull)}`;

  const rows = [
    { icon: MapPin, label: "Адрес", value: contacts.addressFull, href: mapsSearch, dataEvent: "map_click" },
    { icon: Phone, label: "Телефон", value: contacts.phone.value, href: `tel:+${contacts.phone.href}`, dataEvent: "phone_click" },
    { icon: Mail, label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
    { icon: Clock, label: "Часы работы", value: contacts.hoursNote },
    { icon: TelegramIcon, label: "Telegram", value: "@wrapmenow", href: contacts.telegramUrl },
    { icon: VkIcon, label: "VK", value: "vk.com/wrapmenow", href: contacts.vkUrl },
  ];

  return (
    <section id="contacts" className={clsx("bg-surface-2/60 pb-20 lg:pb-28", className ?? "pt-20 lg:pt-28")}>
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Контакты</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 text-pretty text-display font-medium text-foreground">Ждём вас в студии</h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {rows.map((row) => (
              <Reveal key={row.label} delay={0.1}>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    data-event={row.dataEvent}
                    className="group flex items-start gap-3"
                  >
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

          <Reveal delay={0.3} className="mt-9 flex flex-wrap gap-3">
            <Button href={whatsappLink()} icon={<WhatsAppIcon className="h-4 w-4" />} dataEvent="whatsapp_click">
              Написать в WhatsApp
            </Button>
            <Button variant="secondary" href={`tel:+${contacts.phone.href}`} icon={<Phone className="h-4 w-4" />} dataEvent="phone_click">
              Позвонить
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <a
            href={mapsSearch}
            target="_blank"
            rel="noopener noreferrer"
            data-event="map_click"
            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border"
          >
            <RealPhoto image={studioExteriorImage} sizes="(min-width: 1024px) 45vw, 92vw" className="absolute inset-0 h-full w-full" overlay="bottom" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-6 w-6" />
              </span>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center">
              <span className="flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                Построить маршрут в Яндекс Картах
              </span>
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

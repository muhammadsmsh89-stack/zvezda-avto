import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { navLinks, footerDocuments, studio } from "@/lib/site";
import { contacts, whatsappLink } from "@/lib/contacts";
import { Phone, MapPin, Clock, WhatsAppIcon, TelegramIcon, VkIcon } from "@/components/ui/Icons";

const contactRows = [
  {
    icon: MapPin,
    label: "Адрес",
    value: contacts.addressFull,
    href: `https://yandex.ru/maps/?text=${encodeURIComponent(contacts.addressFull)}`,
    dataEvent: "map_click",
  },
  { icon: Phone, label: "Телефон", value: contacts.phone.value, href: `tel:+${contacts.phone.href}`, dataEvent: "phone_click" },
  { icon: Clock, label: "Часы работы", value: contacts.hoursNote },
];

const socials = [
  { icon: WhatsAppIcon, label: "WhatsApp", href: whatsappLink(), dataEvent: "whatsapp_click" },
  { icon: TelegramIcon, label: "Telegram", href: contacts.telegramUrl },
  { icon: VkIcon, label: "VK", href: contacts.vkUrl },
];

export function Footer() {
  return (
    <footer className="bg-deep text-foreground">
      <Container className="py-10 lg:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Wordmark className="text-xl" />
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Detailing Studio — {studio.city}. {studio.tagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  data-event={s.dataEvent}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/65">Навигация</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/65">Контакты</p>
              <ul className="mt-4 space-y-2.5">
                {contactRows.map((row) => (
                  <li key={row.label} className="text-sm text-foreground/80">
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        data-event={row.dataEvent}
                        className="hover:text-foreground"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/65">Документы</p>
              <ul className="mt-4 space-y-2.5">
                {footerDocuments.map((doc) => (
                  <li key={doc.label}>
                    <Link href={doc.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                      {doc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-foreground/15 pt-5 text-xs text-foreground/60">
          {studio.fullName} · {studio.city}. Пушкинская ул., 8.
        </div>
      </Container>
    </footer>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { footerNavLinks, footerDocuments, studio, rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { Phone, Mail, MapPin, Clock, WhatsAppIcon, TelegramIcon, Star } from "@/components/ui/Icons";

const contactRows = [
  { icon: MapPin, label: "Адрес", value: contacts.addressFull, href: `https://yandex.ru/maps/?text=${encodeURIComponent(contacts.addressFull)}` },
  { icon: Phone, label: "Телефон", value: contacts.phone.value, href: `tel:+${contacts.phone.href}` },
  { icon: Mail, label: "Email", value: contacts.email, href: `mailto:${contacts.email}` },
  { icon: Clock, label: "Режим", value: contacts.hoursNote },
];

const socials = [
  { icon: WhatsAppIcon, label: "WhatsApp", href: contacts.whatsappUrl },
  { icon: TelegramIcon, label: "Telegram", href: contacts.telegramUrl },
];

export function Footer() {
  return (
    <footer className="bg-deep text-background">
      <Container className="py-10 lg:py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Wordmark dark className="text-sm" />
            <p className="mt-3 text-sm leading-relaxed text-background/70">{studio.city} · {contacts.address}</p>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-background/80">
              <Star className="h-3.5 w-3.5 text-accent" />
              {rating.value} · {rating.reviewsCount} отзывов на {rating.source}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-background/20 text-background/80 transition-colors hover:border-background hover:text-background"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-background/65">Навигация</p>
              <ul className="mt-4 space-y-2.5">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-background/80 transition-colors hover:text-background">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-background/65">Контакты</p>
              <ul className="mt-4 space-y-2.5">
                {contactRows.map((row) => (
                  <li key={row.label} className="text-sm text-background/80">
                    {row.href ? (
                      <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-background">
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
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-background/65">Документы</p>
              <ul className="mt-4 space-y-2.5">
                {footerDocuments.map((doc) => (
                  <li key={doc.label}>
                    <Link href={doc.href} className="text-sm text-background/80 transition-colors hover:text-background">
                      {doc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-background/15 pt-5 text-xs text-background/55">
          {studio.name} · {studio.city}. Актуальную стоимость услуг уточняйте при записи.
        </div>
      </Container>
    </footer>
  );
}

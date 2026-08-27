import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { footerNavLinks, footerDocuments, studio, rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { Phone, MapPin, Clock, WhatsAppIcon, InstagramIcon, VkIcon, Star } from "@/components/ui/Icons";

const contactRows = [
  { icon: MapPin, label: "Адрес", value: contacts.addressFull, href: contacts.yandexUrl },
  { icon: Phone, label: "Телефон", value: contacts.phone.value, href: `tel:+${contacts.phone.href}` },
  { icon: Clock, label: "Режим", value: contacts.hoursNote },
];

const socials = [
  { icon: WhatsAppIcon, label: "WhatsApp", href: contacts.whatsappUrl },
  { icon: InstagramIcon, label: "Instagram", href: contacts.instagramUrl },
  { icon: VkIcon, label: "VK", href: contacts.vkUrl },
];

export function Footer() {
  return (
    <footer className="bg-noir text-cream">
      <Container className="py-10 lg:py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Wordmark ink className="text-sm" />
            <p className="mt-3 text-sm leading-relaxed text-cream-muted">{studio.city} · {contacts.address}</p>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-cream/80">
              <Star className="h-3.5 w-3.5 text-accent" />
              {rating.yandex.value} · {rating.yandex.reviewsCount} отзывов на {rating.yandex.source}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-cream hover:text-cream"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream-muted">Навигация</p>
              <ul className="mt-4 space-y-2.5">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream-muted">Контакты</p>
              <ul className="mt-4 space-y-2.5">
                {contactRows.map((row) => (
                  <li key={row.label} className="text-sm text-cream/80">
                    {row.href ? (
                      <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-cream">
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
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cream-muted">Документы</p>
              <ul className="mt-4 space-y-2.5">
                {footerDocuments.map((doc) => (
                  <li key={doc.label}>
                    <Link href={doc.href} className="text-sm text-cream/80 transition-colors hover:text-cream">
                      {doc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-cream/15 pt-5 text-xs text-cream-muted">
          {studio.name} · {studio.city}. Актуальную стоимость услуг уточняйте при записи.
        </div>
      </Container>
    </footer>
  );
}

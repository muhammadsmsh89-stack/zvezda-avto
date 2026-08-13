import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Monogram";
import { studio, navLinks, footerDocuments } from "@/lib/studio";
import { Phone, MapPin, Clock, WhatsAppIcon, TelegramIcon, InstagramIcon } from "@/components/ui/Icons";

const contactRows = [
  { icon: MapPin, label: "Адрес", value: studio.addressFull },
  { icon: Phone, label: "Телефон", value: studio.phone.value },
  { icon: Clock, label: "Часы работы", value: `${studio.hours} · ${studio.hoursNote}` },
];

const socials = [
  { icon: WhatsAppIcon, label: "WhatsApp", href: studio.whatsappUrl },
  { icon: TelegramIcon, label: "Telegram", href: studio.telegramUrl },
  { icon: InstagramIcon, label: "Instagram", href: studio.instagramUrl },
];

export function Footer() {
  return (
    <footer className="bg-deep text-background">
      <Container className="py-16 lg:py-20">
        <div className="flex items-center gap-3">
          <Monogram className="h-9 w-9" dark />
          <span className="text-lg font-bold uppercase tracking-[0.06em] text-background">
            Studio Celebrity
          </span>
        </div>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-background/55">
          Hair · Makeup · Brows &amp; Lashes
        </p>

        <div className="mt-12 grid gap-10 border-t border-background/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/60">Навигация</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-nude">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/60">Контакты</p>
            <ul className="mt-5 space-y-3">
              {contactRows.map((row) => (
                <li key={row.label} className="flex items-start gap-2.5 text-sm text-background/70">
                  <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-nude" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-[0.12em] text-background/55">
                      {row.label}
                    </span>
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-background/15 text-background/70 transition-colors hover:border-nude hover:text-nude"
                >
                  <s.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/60">Документы</p>
            <ul className="mt-5 space-y-3">
              {footerDocuments.map((doc) => (
                <li key={doc.label}>
                  <Link href={doc.href} className="text-sm text-background/70 transition-colors hover:text-nude">
                    {doc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-background/10 pt-7 text-xs text-background/55">
          <p>© {new Date().getFullYear()} {studio.name}. {studio.addressFull}.</p>
        </div>
      </Container>
    </footer>
  );
}

import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { Phone, MapPin, Clock, WhatsAppIcon, TelegramIcon, VkIcon, InstagramIcon } from "@/components/ui/Icons";
import { contacts, socialLinks, whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Holy Nails в Туле: адрес, телефон, часы работы и мессенджеры для записи.",
};

const socialIcons = {
  WhatsApp: WhatsAppIcon,
  Telegram: TelegramIcon,
  ВКонтакте: VkIcon,
  Instagram: InstagramIcon,
} as const;

export default function ContactsPage() {
  return (
    <>
      <PageIntro eyebrow="Контакты" title="Как нас найти" />

      <section className="bg-background pb-20 lg:pb-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                <div>
                  <p className="font-semibold text-foreground">{contacts.addressFull}</p>
                  <p className="mt-1 text-sm text-muted">{contacts.landmark}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                <a href={`tel:+${contacts.phone.href}`} className="font-semibold text-foreground hover:text-accent">
                  {contacts.phone.value}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                <p className="text-foreground/85">{contacts.hoursNote}</p>
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                {socialLinks
                  .filter((s) => s.label in socialIcons)
                  .map((s) => {
                    const Icon = socialIcons[s.label as keyof typeof socialIcons];
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-11 items-center gap-2 rounded-lg border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:border-border-strong"
                      >
                        <Icon className="h-4 w-4" />
                        {s.label}
                      </a>
                    );
                  })}
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <Button href={contacts.yclientsUrl}>{ctaLabels.primary}</Button>
                <Button href={whatsappBookingLink()} variant="secondary">
                  {ctaLabels.whatsapp}
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <TextLink href={contacts.yandexUrl}>Яндекс Карты</TextLink>
                <TextLink href={contacts.twoGisUrl}>2ГИС</TextLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.612267%2C54.192542&z=17&pt=37.612267,54.192542,pm2rdm"
                title="Holy Nails на карте — Тула, ул. Демонстрации, 1Г"
                width="100%"
                height="480"
                style={{ border: 0, display: "block" }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

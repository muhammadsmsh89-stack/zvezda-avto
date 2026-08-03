"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { company, salons } from "@/lib/content";
import { useBooking } from "@/lib/booking-context";

export function ContactsSection() {
  const { jumpToBooking } = useBooking();

  return (
    <section id="contacts" className="bg-surface py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Контакты"
          title="7 салонов по Москве — выбирайте ближайший"
          description="Пишите напрямую в WhatsApp или Telegram, звоните на общий номер или записывайтесь в конкретный салон онлайн."
          align="center"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${company.phone.href}`}
            className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
          >
            {company.phone.value}
          </a>
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground accent-glow"
          >
            Написать в WhatsApp
          </a>
          <a
            href={company.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
          >
            Telegram
          </a>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {salons.map((salon) => (
            <StaggerItem key={salon.slug}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-background p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">м. {salon.metro}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{salon.address}</p>
                <div className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm">
                  <a href={`tel:${salon.phone.href}`} className="block font-medium text-foreground hover:text-accent">
                    {salon.phone.value}
                  </a>
                  <p className="text-xs text-muted">{salon.hours}</p>
                </div>
                <button
                  onClick={() => jumpToBooking({ salonSlug: salon.slug })}
                  className="mt-5 w-full rounded-full border border-accent/50 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Записаться в этот салон
                </button>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div id="privacy" className="mx-auto mt-16 max-w-2xl scroll-mt-20 rounded-2xl border border-border bg-background p-6 text-xs leading-relaxed text-muted">
          <p className="font-semibold text-foreground">Политика обработки персональных данных</p>
          <p className="mt-2">
            Отправляя форму записи, вы соглашаетесь на обработку персональных данных (имя, телефон)
            в целях подтверждения записи на услуги {company.fullName}. Данные не передаются третьим
            лицам и используются только для связи с вами по вопросам записи.
          </p>
        </div>
      </div>
    </section>
  );
}

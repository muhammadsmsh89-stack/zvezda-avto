"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { IconClock, IconMail, IconPhone, IconPin, IconTelegram, IconVk } from "../ui/Icons";
import { contacts } from "@/lib/contacts";
import { facts } from "@/lib/site";

const rows = [
  { Icon: IconPin, label: "Адрес", value: contacts.addressFull, href: null },
  { Icon: IconClock, label: "Режим работы", value: contacts.hours, href: null },
  { Icon: IconPhone, label: "Телефон", value: contacts.phoneDisplay, href: contacts.phoneHref },
  { Icon: IconMail, label: "Почта", value: contacts.email, href: contacts.emailHref },
];

export function Contacts() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="contacts" aria-labelledby="contacts-title" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            index="09"
            eyebrow="Контакты"
            title="Как нас найти"
            id="contacts-title"
          />
        </Reveal>

        <div className="mt-9 grid gap-8 sm:mt-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <dl className="border-t border-line">
              {rows.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 border-b border-line py-5">
                  <Icon className="mt-0.5 size-5 shrink-0 text-gold" />
                  <div>
                    <dt className="text-[12px] uppercase tracking-[0.12em] text-fg-faint">
                      {label}
                    </dt>
                    <dd className="mt-1 text-[15.5px] font-medium leading-snug">
                      {href ? (
                        <a
                          href={href}
                          className="-my-2 inline-flex min-h-[44px] items-center transition-colors hover:text-gold-bright"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-[4px] border border-line-strong px-5 text-[14px] font-semibold transition-colors hover:border-gold hover:text-gold-bright"
              >
                <IconTelegram className="size-[18px]" />
                Telegram
              </a>
              <a
                href={contacts.vk}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-[4px] border border-line-strong px-5 text-[14px] font-semibold transition-colors hover:border-gold hover:text-gold-bright"
              >
                <IconVk className="size-[18px]" />
                VK
              </a>
            </div>

            <p className="mt-6 border-t border-line pt-5 text-[14px] leading-relaxed text-fg-dim">
              Подарочные сертификаты — от{" "}
              <span className="font-semibold text-fg">{facts.certificateFrom}</span>,
              действуют год и распространяются на весь спектр услуг.
            </p>
          </Reveal>

          <Reveal delay={70}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] border border-line bg-surface lg:aspect-auto lg:h-full lg:min-h-[420px]">
              {showMap ? (
                <iframe
                  title="MODNOE MESTO на карте: Москва, ул. Подвойского, вл. 5/19"
                  src={`https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent(
                    contacts.mapQuery,
                  )}&z=16`}
                  className="size-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowMap(true)}
                  className="flex size-full flex-col items-center justify-center gap-3 px-6 text-center transition-colors hover:bg-surface-2"
                >
                  <IconPin className="size-7 text-gold" />
                  <span className="text-[15.5px] font-semibold">Показать карту</span>
                  <span className="max-w-[34ch] text-[13px] leading-snug text-fg-faint">
                    {contacts.addressFull}. Карта загрузится по нажатию — чтобы
                    страница открывалась быстрее.
                  </span>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

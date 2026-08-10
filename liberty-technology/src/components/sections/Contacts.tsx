"use client";

import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { buttonClass } from "@/components/ui/Button";
import { IconPin, IconPhone, IconInstagram, IconArrowUpRight } from "@/components/icons";
import { track } from "@/lib/analytics";

export function Contacts() {
  return (
    <section id="contacts" className="border-t border-line-dark bg-void py-24 sm:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading eyebrow="Contacts" title="Обсудить автомобиль" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <dl className="flex flex-col gap-7">
              <div className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <dt className="font-mono-tag text-xs uppercase tracking-[0.12em] text-paper/40">Адрес</dt>
                  <dd className="mt-1 text-[15px] text-paper/85">
                    {company.address.city}, {company.address.line}
                  </dd>
                  <dd className="mt-0.5 text-xs text-paper/40">{company.address.district}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <dt className="font-mono-tag text-xs uppercase tracking-[0.12em] text-paper/40">Телефон / WhatsApp</dt>
                  <dd className="mt-1">
                    <a href={company.phone.href} className="text-[15px] text-paper/85 hover:text-paper">
                      {company.phone.display}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconInstagram className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <dt className="font-mono-tag text-xs uppercase tracking-[0.12em] text-paper/40">Instagram</dt>
                  <dd className="mt-1">
                    <a
                      href={company.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] text-paper/85 hover:text-paper"
                    >
                      {company.instagram.handle}
                    </a>
                  </dd>
                </div>
              </div>

              <div>
                <dt className="font-mono-tag text-xs uppercase tracking-[0.12em] text-paper/40">Email</dt>
                <dd className="mt-1">
                  <a href={company.email.href} className="text-[15px] text-paper/85 hover:text-paper">
                    {company.email.display}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="font-mono-tag text-xs uppercase tracking-[0.12em] text-paper/40">Время работы</dt>
                <dd className="mt-1 text-[15px] text-paper/85">
                  {company.hours.display}
                  <span className="ml-2 text-xs text-paper/35">уточняется</span>
                </dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppLink
                source="contacts"
                className={buttonClass({ variant: "primary", tone: "dark", size: "md" })}
              >
                Обсудить в WhatsApp
              </WhatsAppLink>
              <a
                href={company.yandexMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("map_open", { source: "contacts" })}
                className={buttonClass({ variant: "secondary", tone: "dark", size: "md" })}
              >
                Маршрут
                <IconArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.12}>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-carbon sm:aspect-[16/9]">
              <svg viewBox="0 0 480 300" className="absolute inset-0 h-full w-full text-paper/20" fill="none">
                <g stroke="currentColor" strokeWidth={1}>
                  <path d="M0 60h480M0 140h480M0 220h480" />
                  <path d="M90 0v300M240 0v300M370 0v300" />
                </g>
              </svg>
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono-tag mt-3 whitespace-nowrap text-xs uppercase tracking-[0.12em] text-paper/70">
                  {company.address.line}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

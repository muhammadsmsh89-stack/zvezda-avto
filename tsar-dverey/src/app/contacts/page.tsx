import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { branchesTotalConfirmed, company, locations, socialLinks } from "@/data/company";
import { IconClock, IconInstagram, IconPhone, IconPin } from "@/components/icons";
import { ContactActions } from "@/components/contacts/ContactActions";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Адрес, телефон и WhatsApp «Царь Дверей» в Махачкале, режим работы, ссылки на Яндекс Карты и 2ГИС.",
};

export default function ContactsPage() {
  const primary = locations[0];

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
        eyebrow="Контакты"
        title="Заедьте в шоурум или напишите прямо сейчас"
      />

      <section className="py-16 sm:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal variant="rise">
            <dl className="space-y-6 text-[16px]">
              <div className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <dd>
                    {company.city}, {primary.address}
                    {primary.floor ? `, ${primary.floor}` : ""}
                  </dd>
                  {branchesTotalConfirmed > 1 && (
                    <dd className="mt-1 text-[14px] text-muted">
                      Всего в компании {branchesTotalConfirmed} филиала — адреса остальных уточняйте у менеджера.
                    </dd>
                  )}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <dd>{primary.hours}</dd>
              </div>
              <div className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a href={company.phone.href} className="hover:text-accent transition-colors">
                  {company.phone.display}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <IconInstagram className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  @king_doors05
                </a>
              </div>
            </dl>

            <ContactActions />
          </Reveal>

          <Reveal variant="fade" delay={0.1}>
            <a
              href={primary.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[320px] flex-col items-center justify-center gap-3 border border-border-strong bg-surface-2 p-8 text-center transition-colors hover:border-accent"
            >
              <IconPin className="h-9 w-9 text-accent" />
              <p className="text-[18px] text-foreground">
                {primary.address}, {company.city}
              </p>
              <p className="text-[14px] text-muted">Открыть на Яндекс Картах →</p>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

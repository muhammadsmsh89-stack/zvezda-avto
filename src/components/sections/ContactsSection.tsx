import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/lib/content";

export function ContactsSection() {
  return (
    <section id="kontakty" className="bg-surface/40 py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Контакты" title="Как нас найти" />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8">
              <div className="space-y-6">
                <ContactRow label="Адрес" value={company.address} />
                <ContactRow label="Режим работы" value={company.hours} />
                <ContactRow
                  label="Телефоны"
                  value={company.phones.map((p) => p.value).join("  ·  ")}
                />
                <ContactRow label="Email" value={company.email} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${company.phones[0].href}`}
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
                >
                  Позвонить
                </a>
                <a
                  href={company.routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Построить маршрут
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <div className="h-[420px] overflow-hidden rounded-2xl border border-border-strong">
              <iframe
                src={company.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Карта проезда до автотехцентра «Звезда»"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</div>
      <div className="mt-1.5 text-base text-foreground">{value}</div>
    </div>
  );
}

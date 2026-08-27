import { company, locationCopy, buildBookingHref } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Location() {
  return (
    <section id="location" className="border-t border-border bg-surface py-20 scroll-mt-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="08" eyebrow="Контакты" title="Redken Loft в Краснодаре" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6 text-lg text-ink">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Адрес</p>
              <p className="mt-2">{company.city}, {company.district}</p>
              <p>{company.address}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Часы работы</p>
              <p className="mt-2">{company.hours}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Телефон</p>
              <a href={`tel:${company.phone.href}`} className="mt-2 block hover:text-accent">
                {company.phone.value}
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {locationCopy.mapUrl ? (
                <a
                  href={locationCopy.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-background"
                >
                  {locationCopy.ctaRoute}
                </a>
              ) : (
                <a
                  href={`tel:${company.phone.href}`}
                  className="border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-background"
                >
                  {locationCopy.ctaRoute}
                </a>
              )}
              <a
                href={buildBookingHref()}
                target={company.bookingUrl ? undefined : "_blank"}
                rel={company.bookingUrl ? undefined : "noopener noreferrer"}
                className="bg-ink px-6 py-3.5 text-sm font-medium text-background"
              >
                {locationCopy.ctaBook}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface-2">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-muted">
              <span className="text-xs uppercase tracking-[0.25em]">Krasnodar — Kubanskaya Naberezhnaya 37</span>
              <span className="text-xs">Карта появится после подтверждения точки владельцем</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

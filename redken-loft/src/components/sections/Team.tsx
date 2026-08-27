import { stylists, buildBookingHref, company } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Monogram } from "@/components/ui/Monogram";

export function Team() {
  return (
    <section id="team" className="border-t border-border bg-background py-20 scroll-mt-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="05" eyebrow="Команда" title="Стилисты Redken Loft" />

        <Stagger className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {stylists.map((stylist) => (
            <StaggerItem key={stylist.id}>
              <div className="flex h-full flex-col bg-surface">
                <Monogram name={stylist.name} className="aspect-[4/3] w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl text-ink">{stylist.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{stylist.role}</p>
                  {stylist.specialization && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{stylist.specialization}</p>
                  )}

                  {stylist.prices && stylist.prices.length > 0 && (
                    <ul className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                      {stylist.prices.map((p) => (
                        <li key={p.label} className="flex items-baseline justify-between text-foreground/80">
                          <span>{p.label}</span>
                          <span className="font-editorial text-accent">{p.value}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <a
                    href={buildBookingHref()}
                    target={company.bookingUrl ? undefined : "_blank"}
                    rel={company.bookingUrl ? undefined : "noopener noreferrer"}
                    className="mt-6 border border-ink px-4 py-3 text-center text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-background"
                  >
                    Записаться к {stylist.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

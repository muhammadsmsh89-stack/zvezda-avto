import { services, servicesNote, buildBookingHref, company } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface py-20 scroll-mt-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="Услуги"
          title="Окрашивание — главное направление"
          description="Ниже — ориентиры «от». Точную стоимость стилист называет после осмотра волос."
        />

        <Stagger className="mt-12 divide-y divide-border border-y border-border">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <div className="grid grid-cols-1 items-center gap-3 py-6 sm:grid-cols-12 sm:gap-6">
                <h3 className="sm:col-span-4 text-xl text-ink">{service.title}</h3>
                <p className="sm:col-span-5 text-sm leading-relaxed text-muted">{service.description}</p>
                <div className="sm:col-span-3 flex flex-col items-start gap-1 sm:items-end">
                  <span className="font-editorial text-lg text-accent">{service.priceFrom}</span>
                  {service.priceNote && (
                    <span className="text-xs text-muted">{service.priceNote}</span>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-muted">{servicesNote}</p>
          <a
            href={buildBookingHref()}
            target={company.bookingUrl ? undefined : "_blank"}
            rel={company.bookingUrl ? undefined : "noopener noreferrer"}
            className="whitespace-nowrap bg-ink px-7 py-4 text-sm font-medium text-background"
          >
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  );
}

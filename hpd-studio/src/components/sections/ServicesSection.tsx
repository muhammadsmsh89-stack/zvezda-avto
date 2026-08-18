import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPanel } from "@/components/ui/PhotoPanel";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { TextLink, Button } from "@/components/ui/Button";
import { services } from "@/lib/services";
import { serviceImages } from "@/lib/media";
import { whatsappLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

const panelVariants = ["wash", "polish", "protect", "interior", "tint", "sound"] as const;

export function ServicesSection({ full = false }: { full?: boolean }) {
  const list = full ? services : services.slice(0, 4);

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        {!full && (
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Услуги</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-4 max-w-lg text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
                  Чем занимается HPD
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <TextLink href="/services">Все услуги</TextLink>
            </Reveal>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {list.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 2) * 0.08}
              className={clsx(i === 0 && "lg:col-span-2")}
            >
              <article className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-surface">
                <div className={clsx("relative w-full overflow-hidden", i === 0 ? "aspect-[21/9]" : "aspect-[4/3]")}>
                  {serviceImages[service.slug] ? (
                    <RealPhoto
                      image={serviceImages[service.slug]!}
                      sizes={i === 0 ? "100vw" : "(min-width: 1024px) 45vw, 92vw"}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <PhotoPanel
                      variant={panelVariants[i % panelVariants.length]}
                      label={`${service.title} — HPD Studio`}
                      sweepFrom={i % 2 === 0 ? "left" : "right"}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                  <span className="absolute left-6 top-6 rounded-full bg-deep/60 px-2.5 py-1 font-[var(--font-display)] text-sm font-semibold text-foreground backdrop-blur-sm">
                    {service.number}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{service.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{service.short}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {service.fromPrice && (
                      <span className="text-sm font-semibold text-accent">{service.fromPrice}</span>
                    )}
                    <TextLink href={`/services/${service.slug}`}>Подробнее</TextLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {full && (
          <Reveal delay={0.15} className="mt-14 flex justify-center">
            <Button size="lg" href={whatsappLink()} dataEvent="hero_booking_click">
              {ctaLabels.primary}
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

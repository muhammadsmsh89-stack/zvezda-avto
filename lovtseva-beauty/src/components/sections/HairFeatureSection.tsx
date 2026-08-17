import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { getDirectionBySlug } from "@/lib/services";
import { getMastersByDirection } from "@/lib/masters";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export function HairFeatureSection() {
  const hair = getDirectionBySlug("hair")!;
  const hairMasters = getMastersByDirection("hair");
  const popular = ["Женская стрижка", "Мужская стрижка", "Сложное окрашивание", "Прикорневой объём"];

  return (
    <section id="hair" className="border-y border-border bg-background py-20 lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{hair.code} · Знаковое направление</p>
          <h2 className="mt-4 text-pretty font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-[2.6rem]">
            {hair.highlight?.title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{hair.highlight?.text}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {popular.map((name) => (
              <span key={name} className="rounded-full border border-border px-4 py-2 text-sm text-foreground">
                {name}
              </span>
            ))}
          </div>

          {hairMasters.length > 0 && (
            <p className="mt-6 text-sm text-muted">
              В свежих отзывах клиенты отдельно упоминают {hairMasters.map((m) => m.name).join(", ")}.
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={whatsappBookingLink("Японская биозавивка")}>{ctaLabels.primary}</Button>
            <TextLink href="/services/hair">Все услуги «Волосы»</TextLink>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <PhotoPlaceholder
              shotNumber="HAIR · 02"
              label="Японская биозавивка tocosme"
              description="Результат японской биозавивки волос tocosme"
              tone="charcoal"
              subject="portrait"
              aspectClassName="h-full"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

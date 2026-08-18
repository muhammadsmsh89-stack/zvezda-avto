import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Star, MapPin } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
        <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-7">
          <TextLink href={contacts.yandexUrl} className="items-baseline gap-2.5">
            <span className="font-display text-3xl leading-none tracking-tight text-foreground sm:text-4xl">{rating.value}</span>
          </TextLink>
          <span className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 text-accent" />
            ))}
          </span>

          <span className="hidden h-8 w-px bg-border sm:block" />

          <span className="text-sm">
            <span className="mr-1.5 font-semibold text-foreground">{rating.ratingsCount}</span>
            <span className="text-muted">оценок</span>
          </span>
          <span className="text-sm">
            <span className="mr-1.5 font-semibold text-foreground">{rating.reviewsCount}</span>
            <span className="text-muted">отзывов</span>
          </span>

          <span className="hidden h-8 w-px bg-border sm:block" />

          <span className="inline-flex items-center rounded-lg border border-accent/35 bg-accent-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-accent">
            {rating.award}
          </span>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-col gap-1 sm:items-end">
          <span className="flex items-center gap-1.5 text-sm text-foreground/80 sm:justify-end">
            <MapPin className="h-4 w-4 text-muted" />
            {contacts.city} · {contacts.address}, ТЦ «Утюг»
          </span>
          <span className="text-xs text-muted">Маникюр: от {rating.fromPrice}</span>
        </Reveal>
      </Container>
    </section>
  );
}

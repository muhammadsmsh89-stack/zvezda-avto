import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Phone, MapPin, Clock } from "@/components/ui/Icons";
import { ctaLabels } from "@/lib/site";
import { contacts, whatsappBookingLink } from "@/lib/contacts";

export function FinalCtaSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="rounded-lg border border-border-strong bg-surface px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Запись</p>
            <h2 className="mx-auto mt-3 max-w-xl text-pretty text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Выберите мастера и удобное время
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" href={contacts.yclientsUrl}>
              {ctaLabels.primary}
            </Button>
            <Button size="lg" variant="secondary" href={whatsappBookingLink()}>
              {ctaLabels.whatsapp}
            </Button>
          </Reveal>

          <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <a href={`tel:+${contacts.phone.href}`} className="flex items-center gap-1.5 hover:text-foreground">
              <Phone className="h-3.5 w-3.5" />
              {contacts.phone.value}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {contacts.addressFull}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {contacts.hoursNote}
            </span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

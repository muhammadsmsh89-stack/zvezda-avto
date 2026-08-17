import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { contacts, whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section className="bg-deep py-24 text-background lg:py-32">
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl leading-[1.16] text-background sm:text-5xl">
            Выберите направление и специалиста
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-background/65">
            Посмотрите услуги, цены и работы мастеров — и запишитесь удобным способом.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            href={whatsappBookingLink()}
            icon={<WhatsAppIcon className="h-4 w-4" />}
            className="bg-background text-foreground hover:bg-background/90"
          >
            {ctaLabels.primary}
          </Button>
          <Button variant="ghost-light" size="lg" href="/services">
            {ctaLabels.chooseService}
          </Button>
        </Reveal>
        <Reveal delay={0.28} className="mt-8 text-sm text-background/55">
          <a href={`tel:+${contacts.phone.href}`} className="hover:text-background/80">{contacts.phone.value}</a>
          <span className="mx-2">·</span>
          {contacts.city} · {contacts.address}
        </Reveal>
      </Container>
    </section>
  );
}

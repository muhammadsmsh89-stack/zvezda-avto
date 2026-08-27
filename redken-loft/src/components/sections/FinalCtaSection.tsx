import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ctaLabels, studio } from "@/lib/site";
import { whatsappBookingLink } from "@/lib/contacts";

export function FinalCtaSection() {
  return (
    <section className="bg-noir py-20 text-cream lg:py-28">
      <Container className="text-center">
        <Reveal>
          <span className="mx-auto block h-px w-12 bg-accent" />
          <h2 className="mx-auto mt-6 max-w-2xl text-pretty font-display text-3xl italic leading-[1.15] text-cream sm:text-4xl lg:text-5xl">
            {studio.tagline}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-cream/70">
            Расскажите о волосах и желаемом результате в WhatsApp — подберём стилиста
            и свободное время.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" href={whatsappBookingLink()}>
            {ctaLabels.primary}
          </Button>
          <Button size="lg" variant="ink-outline" href="/masters">
            {ctaLabels.chooseMaster}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

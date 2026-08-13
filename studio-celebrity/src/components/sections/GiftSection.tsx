import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function GiftSection() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-nude px-7 py-10 sm:flex-row sm:items-center sm:px-12 sm:py-12">
          <div>
            <p className="font-serif-accent text-3xl italic text-foreground sm:text-4xl">
              Подарить Celebrity
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/70">
              Подарочный сертификат на услуги Studio Celebrity — hair, makeup, brows
              и lashes на выбор получателя.
            </p>
          </div>
          <Button href="/gift" variant="primary" size="lg" className="shrink-0">
            Узнать о сертификате
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

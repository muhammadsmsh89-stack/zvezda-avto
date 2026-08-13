"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { studio, ctaLabels } from "@/lib/studio";
import { useBooking } from "@/lib/booking";

export function FinalCtaSection() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-deep py-24 text-background lg:py-32">
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl leading-[1.15] text-background sm:text-5xl">
            Не знаете, какую
            <br />
            услугу выбрать?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-background/65">
            Расскажите, какой результат хотите получить — поможем подобрать услугу
            и мастера.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button variant="nude" size="lg" onClick={() => openBooking()}>
            {ctaLabels.consultation}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={studio.whatsappUrl}
            icon={<WhatsAppIcon className="h-4 w-4" />}
            className="border-background/25 text-background hover:border-background hover:bg-background/5"
          >
            WhatsApp
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

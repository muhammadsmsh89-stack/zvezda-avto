"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ctaLabels } from "@/lib/studio";
import { useBooking } from "@/lib/booking";

export function EducationCta() {
  const { openBooking } = useBooking();
  return (
    <section className="bg-deep py-16 text-background lg:py-20">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="max-w-md text-pretty text-2xl leading-snug text-background sm:text-3xl">
          Хотите узнать подробнее об обучении?
        </p>
        <Button variant="nude" size="lg" onClick={() => openBooking()}>
          {ctaLabels.consultation}
        </Button>
      </Container>
    </section>
  );
}

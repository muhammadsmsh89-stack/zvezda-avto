"use client";

import { useBooking } from "@/components/BookingSheet";
import { Button } from "@/components/ui/Button";

export function TechnologyCta({ name }: { name: string }) {
  const { open } = useBooking();
  return (
    <Button onClick={() => open(`Технология: ${name}`)} size="lg" className="mt-7">
      Узнать, подходит ли мне
    </Button>
  );
}

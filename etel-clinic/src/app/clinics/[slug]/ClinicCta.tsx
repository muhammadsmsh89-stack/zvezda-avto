"use client";

import { useBooking } from "@/components/BookingSheet";
import { Button } from "@/components/ui/Button";

export function ClinicCta({ clinicName }: { clinicName: string }) {
  const { open } = useBooking();
  return (
    <Button onClick={() => open(`Запись в клинику: ${clinicName}`)} size="lg" className="mt-7">
      Записаться в эту клинику
    </Button>
  );
}

"use client";

import { useBooking } from "@/components/BookingSheet";
import { Button } from "@/components/ui/Button";

export function DoctorCta({ name }: { name: string }) {
  const { open } = useBooking();
  return (
    <Button onClick={() => open(`Запись к врачу: ${name}`)} size="lg" className="mt-7">
      Записаться к врачу
    </Button>
  );
}

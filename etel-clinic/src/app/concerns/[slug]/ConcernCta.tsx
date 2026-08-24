"use client";

import { useBooking } from "@/components/BookingSheet";
import { Button } from "@/components/ui/Button";

export function ConcernCta({ label }: { label: string }) {
  const { open } = useBooking();
  return (
    <Button onClick={() => open(label)} size="lg" className="mt-7">
      Получить план
    </Button>
  );
}

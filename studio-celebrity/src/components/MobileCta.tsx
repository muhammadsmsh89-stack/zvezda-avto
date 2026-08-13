"use client";

import { useBooking } from "@/lib/booking";
import { ctaLabels } from "@/lib/studio";
import { Button } from "@/components/ui/Button";

export function MobileCta() {
  const { openBooking } = useBooking();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden">
      <Button onClick={() => openBooking()} className="w-full justify-center">
        {ctaLabels.primary}
      </Button>
    </div>
  );
}

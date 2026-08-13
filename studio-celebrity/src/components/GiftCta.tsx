"use client";

import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { studio } from "@/lib/studio";
import { useBooking } from "@/lib/booking";

export function GiftCta() {
  const { openBooking } = useBooking();
  return (
    <div className="rounded-3xl bg-nude px-7 py-10 sm:px-12 sm:py-14">
      <p className="font-serif-accent max-w-md text-3xl italic text-foreground sm:text-4xl">
        Подарок, который выбирают сами
      </p>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/70">
        Номинал и оформление сертификата уточняйте у администратора студии —
        по телефону или в WhatsApp.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Button onClick={() => openBooking()}>Узнать о сертификате</Button>
        <Button variant="secondary" href={studio.whatsappUrl} icon={<WhatsAppIcon className="h-4 w-4" />}>
          Написать в WhatsApp
        </Button>
      </div>
    </div>
  );
}

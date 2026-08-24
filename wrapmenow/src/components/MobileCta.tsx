import { ctaLabels } from "@/lib/site";
import { contacts, whatsappLink } from "@/lib/contacts";
import { Button } from "@/components/ui/Button";
import { Phone } from "@/components/ui/Icons";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="flex gap-2.5">
        <Button href={whatsappLink()} className="flex-1 justify-center" dataEvent="hero_booking_click">
          {ctaLabels.primary}
        </Button>
        <a
          href={`tel:+${contacts.phone.href}`}
          aria-label="Позвонить"
          data-event="phone_click"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground"
        >
          <Phone className="h-4.5 w-4.5" />
        </a>
      </div>
    </div>
  );
}

import { ctaLabels } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { Button } from "@/components/ui/Button";
import { Phone } from "@/components/ui/Icons";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-border bg-surface/95 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <a
        href={`tel:+${contacts.phone.href}`}
        aria-label="Позвонить"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border-strong text-foreground"
      >
        <Phone className="h-4.5 w-4.5" />
      </a>
      <Button href={contacts.yclientsUrl} className="w-full justify-center">
        {ctaLabels.primary}
      </Button>
    </div>
  );
}

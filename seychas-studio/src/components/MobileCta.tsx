import { ctaLabels } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { Button } from "@/components/ui/Button";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <Button href={contacts.dikidiUrl} className="w-full justify-center">
        {ctaLabels.primary}
      </Button>
    </div>
  );
}

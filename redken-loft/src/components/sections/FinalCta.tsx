import { finalCta, buildBookingHref, company } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-balance font-editorial text-3xl leading-[1.2] text-ink sm:text-4xl md:text-5xl">
            {finalCta.title}
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <a
            href={buildBookingHref()}
            target={company.bookingUrl ? undefined : "_blank"}
            rel={company.bookingUrl ? undefined : "noopener noreferrer"}
            className="bg-ink px-9 py-4 text-sm font-medium text-background transition-transform active:scale-[0.98]"
          >
            {finalCta.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

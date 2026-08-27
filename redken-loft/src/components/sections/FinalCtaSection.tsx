import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ctaLabels, studio } from "@/lib/site";
import { whatsappBookingLink } from "@/lib/contacts";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-25 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
      />
      <Container className="relative text-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Запись</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-pretty font-display text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
            {studio.tagline}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-foreground/70">
            Расскажите о волосах и желаемом результате в WhatsApp — подберём стилиста
            и свободное время.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" href={whatsappBookingLink()}>
            {ctaLabels.primary}
          </Button>
          <Button size="lg" variant="secondary" href="/masters">
            {ctaLabels.chooseMaster}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { RealPhoto } from "@/components/ui/RealPhoto";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { contacts, whatsappLink } from "@/lib/contacts";
import { finalCtaImage } from "@/lib/media";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-deep py-24 text-foreground lg:py-32">
      <RealPhoto
        image={finalCtaImage}
        sizes="100vw"
        className="absolute inset-0 h-full w-full opacity-80"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep via-deep/85 to-deep/50" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl leading-[1.15] text-foreground sm:text-5xl">
            Хотите привести автомобиль в порядок?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-foreground/70">
            Расскажите, что хотите сделать с автомобилем — подберём подходящие услуги.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            href={whatsappLink()}
            dataEvent="final_booking_click"
            icon={<WhatsAppIcon className="h-4 w-4" />}
          >
            Записать автомобиль
          </Button>
          <Button variant="ghost-light" size="lg" href={`tel:+${contacts.phone.href}`} dataEvent="phone_click">
            {contacts.phone.value}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

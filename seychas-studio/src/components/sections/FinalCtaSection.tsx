import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { studio } from "@/lib/site";
import { contacts, whatsappLink } from "@/lib/contacts";

export function FinalCtaSection() {
  return (
    <section className="bg-deep py-24 text-background lg:py-32">
      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl leading-[1.15] text-background sm:text-5xl">
            {studio.name} — время для себя
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-background/65">
            Выберите услугу и удобное время онлайн.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button variant="ghost-light" size="lg" href={contacts.dikidiUrl}>
            Записаться
          </Button>
          <Button variant="ghost-light" size="lg" href="/masters">
            Выбрать мастера
          </Button>
          <Button
            size="lg"
            href={whatsappLink()}
            icon={<WhatsAppIcon className="h-4 w-4" />}
            className="bg-background text-foreground hover:bg-background/90"
          >
            Написать в WhatsApp
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

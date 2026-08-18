import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GiftCertificateCard } from "@/components/ui/GiftCertificateCard";
import { promos, loyalty } from "@/lib/promos";
import { whatsappLink } from "@/lib/contacts";

export function PromosGiftSection() {
  return (
    <section className="bg-surface pt-14 pb-20 lg:pt-20 lg:pb-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Акции</p>
          </Reveal>

          <div className="mt-6 divide-y divide-border border-t border-border">
            {promos.map((p, i) => (
              <Reveal key={p.title} delay={0.06 + i * 0.06} className="py-6">
                <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{p.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-accent">До {p.until}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-6 text-xs text-muted">
            {loyalty.welcomeBonus} · {loyalty.note}
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <GiftCertificateCard />
          </Reveal>
          <Reveal delay={0.2} className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Подарить Holy Nails</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                Красивый повод сказать «спасибо» или «просто так». Номинал и условия — у администратора.
              </p>
            </div>
            <Button href={whatsappLink("Здравствуйте! Хочу узнать про подарочный сертификат Holy Nails.")} variant="secondary" size="md" className="shrink-0">
              Узнать про сертификат
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

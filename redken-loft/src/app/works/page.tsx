import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WorksGrid } from "@/components/WorksGrid";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Работы",
  description: "Портфолио Redken Loft: Airtouch, Balayage, Shatush, сложный блонд и авторские стрижки.",
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Портфолио"
        title="До / после — а не обещания"
        description="Выберите технику окрашивания и посмотрите характер работ стилистов студии."
      />
      <section className="bg-background pb-16 lg:pb-20">
        <Container>
          <WorksGrid hideCta />
        </Container>
      </section>

      <section className="bg-surface py-20 text-center lg:py-24">
        <Container>
          <Reveal>
            <h2 className="text-pretty font-display text-3xl leading-[1.15] text-foreground sm:text-4xl">
              Нашли идею для себя?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-foreground/70">
              Выберите стилиста и запишитесь удобным способом.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" href={whatsappBookingLink()}>
              {ctaLabels.primary}
            </Button>
            <Button size="lg" variant="secondary" href="/masters">
              {ctaLabels.chooseMaster}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

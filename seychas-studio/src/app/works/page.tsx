import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WorksGrid } from "@/components/WorksGrid";
import { contacts } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Работы",
  description: "Работы студии SEYCHAS: маникюр, педикюр, брови и ресницы — по направлениям.",
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Портфолио"
        title="Работы SEYCHAS"
        description="Выберите направление и посмотрите результаты мастеров SEYCHAS."
      />
      <section className="bg-background pb-16 lg:pb-20">
        <Container>
          <WorksGrid hideCta />
        </Container>
      </section>

      <section className="bg-deep py-20 text-background lg:py-24">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-pretty text-3xl leading-[1.15] text-background sm:text-4xl">
              Нашли идею для себя?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-background/70">
              Выберите услугу и удобное время онлайн.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="ghost-light" size="lg" href={contacts.dikidiUrl}>
              {ctaLabels.primary}
            </Button>
            <Button variant="ghost-light" size="lg" href="/masters">
              {ctaLabels.chooseMaster}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

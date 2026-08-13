import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { EducationCta } from "@/components/EducationCta";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Beauty School",
  description: "Обучение и мастер-классы Studio Celebrity — курс «Brow master» и индивидуальные уроки макияжа.",
};

export default function EducationPage() {
  const direction = getDirectionBySlug("education")!;

  return (
    <>
      <PageIntro
        eyebrow="Beauty School"
        title="Celebrity Education"
        description="Обучение и мастер-классы Studio Celebrity — для будущих мастеров и для тех, кто хочет разобраться в макияже для себя."
      />

      <section className="bg-background py-14 lg:py-20">
        <Container>
          <FrameReveal>
            <PhotoPlaceholder
              shotNumber="School"
              label="Обучение в Studio Celebrity"
              description="Рабочий момент курса или индивидуального урока"
              tone="ivory"
              aspectClassName="aspect-[21/9]"
            />
          </FrameReveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/50 py-16 lg:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl text-foreground sm:text-3xl">Программы</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {direction.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-surface p-7">
                  <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                  <p className="mt-3 text-2xl font-bold text-foreground">{item.price}</p>
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    Точная программа, длительность и даты старта уточняются на консультации.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <EducationCta />
    </>
  );
}

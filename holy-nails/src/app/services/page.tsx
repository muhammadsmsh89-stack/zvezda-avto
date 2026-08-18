import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { FrameReveal, Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Button, TextLink } from "@/components/ui/Button";
import { directions } from "@/lib/services";
import { formatPrice } from "@/lib/prices";
import { contacts } from "@/lib/contacts";
import { ctaLabels, seo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Услуги",
  description: seo.description,
};

const tones = ["ivory", "stone", "ink"] as const;

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Услуги"
        title="Пять направлений, один результат"
        description="Маникюр, педикюр, наращивание, дизайн, брови и ресницы. Выравнивание ногтевой пластины входит в стоимость, на покрытие — гарантия 2 недели."
      />

      <section className="bg-background py-4 lg:py-8">
        <Container>
          {directions.map((d, i) => (
            <div key={d.slug} id={d.slug} className="scroll-mt-24 border-b border-border py-14 lg:py-20">
              <div className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10 ${i % 2 === 1 ? "" : ""}`}>
                <FrameReveal
                  className={`aspect-[4/3] w-full lg:col-span-5 lg:aspect-[4/5] ${i % 2 === 1 ? "lg:order-2 lg:col-start-8" : "lg:col-start-1"}`}
                  direction={i % 2 === 1 ? "right" : "left"}
                >
                  <PhotoPlaceholder
                    shotNumber={d.index}
                    label={d.title}
                    description={d.title}
                    tone={tones[i % tones.length]}
                    subject="wide"
                    aspectClassName="h-full"
                  />
                </FrameReveal>

                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                  <Reveal>
                    <span className="font-display text-2xl text-muted">{d.index}</span>
                    <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">{d.title}</h2>
                    <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted">{d.long}</p>
                    <p className="mt-5 text-lg font-semibold text-foreground">от {formatPrice(d.priceFrom)}</p>
                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      <Button href={contacts.yclientsUrl}>{ctaLabels.primary}</Button>
                      <TextLink href={`/prices#${d.slug}`}>Полный прайс</TextLink>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

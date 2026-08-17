import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { directions } from "@/lib/services";
import { directionIcons } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Все направления Центра красоты Натальи Ловцевой в Рязани: волосы, ногти, косметология, лазерная эпиляция, перманентный макияж, брови и ресницы, массаж, пирсинг, солярий.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Услуги"
        title="Все направления центра"
        description="Выберите направление, чтобы увидеть полный список услуг, цены, мастеров и работы."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {directions.map((d, i) => {
              const Icon = directionIcons[d.slug as keyof typeof directionIcons];
              return (
                <Reveal key={d.slug} delay={i * 0.05}>
                  <Link href={`/services/${d.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                    <PhotoPlaceholder
                      shotNumber={d.code}
                      label={d.title}
                      description={`Фотография направления «${d.title}»`}
                      tone={d.tone === "light" ? "ivory" : d.tone === "clean" ? "charcoal" : "espresso"}
                      subject="wide"
                      aspectClassName="h-full"
                      hideCaption
                      className="transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/5 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6">
                      <Icon className="h-7 w-7 text-background" />
                      <div>
                        <h2 className="font-serif text-2xl text-background">{d.title}</h2>
                        <p className="mt-1.5 text-sm text-background/75">{d.short}</p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

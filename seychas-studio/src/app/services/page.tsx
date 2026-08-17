import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { directions } from "@/lib/services";
import { directionImages } from "@/lib/media";
import { directionIcons } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Направления студии SEYCHAS в Туле: ногти, брови, ресницы и beauty-уход.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Услуги" title="Все направления SEYCHAS" description="Выберите направление, чтобы увидеть полный список услуг и работы мастеров." />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {directions.map((d, i) => {
              const Icon = directionIcons[d.slug as keyof typeof directionIcons];
              const image = directionImages[d.slug];
              return (
                <Reveal key={d.slug} delay={i * 0.06}>
                  <Link href={`/services/${d.slug}`} className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 46vw, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/5 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6">
                      <Icon className="h-7 w-7 text-background" />
                      <div>
                        <h2 className="text-2xl font-extrabold uppercase tracking-tight text-background">
                          {d.title}
                        </h2>
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

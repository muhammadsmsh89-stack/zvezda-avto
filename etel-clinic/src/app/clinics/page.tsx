import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { clinics } from "@/data/clinics";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Клиники",
  description: "Три клиники «Этель» в Брянске: Ромашина 32, Дуки 59/10, бульвар 50 лет Октября 1. Единый стандарт приёма во всех трёх.",
  alternates: { canonical: "/clinics/" },
};

export default function ClinicsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Клиники"
        title="Три клиники, один стандарт"
        lead="Команда врачей и протокол приёма одинаковы во всех трёх клиниках — выбирайте по расположению или свободному времени записи."
      />

      <section className="pb-24">
        <Container wide>
          <ul className="grid gap-10 border-t border-line pt-12 lg:grid-cols-3">
            {clinics.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 90}>
                <Link href={`/clinics/${c.slug}/`} className="group block">
                  <div className="img-zoom relative aspect-4/3 overflow-hidden bg-line">
                    <Image
                      src={withBase(c.photo)}
                      alt={c.name}
                      fill
                      sizes="(min-width: 1024px) 32vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="eyebrow mt-5">{c.district}</p>
                  <p className="font-display mt-2 text-[1.5rem] text-ink group-hover:text-accent">
                    {c.address}
                  </p>
                  <p className="mt-2 text-[0.9375rem] text-ink-soft">{c.hours}</p>
                  <p className="mt-1 text-[0.9375rem] text-ink-soft">{c.phone.display}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Клиники", path: "/clinics/" },
        ])}
      />
    </>
  );
}

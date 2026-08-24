import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { clinics } from "@/data/clinics";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ClinicsPreview() {
  return (
    <section className="bg-shell py-24 sm:py-32">
      <Container wide>
        <SectionHeading eyebrow="Три адреса, один стандарт" title="Клиники «Этель» в Брянске" />

        <ul className="mt-14 grid gap-8 lg:grid-cols-3">
          {clinics.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 90}>
              <Link href={`/clinics/${c.slug}/`} className="group block">
                <div className="img-zoom relative aspect-[4/3] overflow-hidden bg-line">
                  <Image
                    src={withBase(c.photo)}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 32vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <p className="eyebrow mt-5">{c.district}</p>
                <p className="font-display mt-2 text-[1.375rem] text-ink group-hover:text-accent">
                  {c.address}
                </p>
                <p className="mt-2 text-[0.9375rem] text-ink-soft">{c.hours}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

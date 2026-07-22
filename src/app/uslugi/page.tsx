import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { serviceCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Услуги автосервиса",
  description:
    "Слесарный ремонт, автоэлектрика и кузовной ремонт в автотехцентре «Звезда» в Махачкале. Гарантия до 12 месяцев, диагностика в течение 2 часов.",
};

export default function UslugiPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги"
        breadcrumb="Услуги"
        title="Услуги автосервиса «Звезда»"
        description="Три направления работы техцентра — выберите нужное, чтобы увидеть полный перечень работ и записаться."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Stagger className="grid gap-8">
            {serviceCategories.map((service, i) => (
              <StaggerItem key={service.slug}>
                <div
                  className={`grid gap-8 overflow-hidden rounded-3xl border border-border bg-surface md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[260px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {service.heroNote}
                    </span>
                    <h2 className="mt-3 font-sans text-2xl font-extrabold text-foreground md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{service.description}</p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {service.items.slice(0, 6).map((item) => (
                        <li key={item.name} className="flex items-center gap-2 text-sm text-foreground/80">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {item.name}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/uslugi/${service.slug}`}
                        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
                      >
                        Полный список работ
                      </Link>
                      <Link
                        href="/#booking"
                        className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        Записаться
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}

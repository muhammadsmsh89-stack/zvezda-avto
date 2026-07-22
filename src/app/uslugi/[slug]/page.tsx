import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { serviceCategories } from "@/lib/content";

export function generateStaticParams() {
  return serviceCategories.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = serviceCategories.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceCategories.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = serviceCategories.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Услуги"
        breadcrumb={service.title}
        title={service.title}
        description={service.description}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
          <div className="md:col-span-2">
            <div className="relative mb-10 h-72 overflow-hidden rounded-2xl border border-border">
              <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
            </div>

            <h2 className="font-sans text-xl font-bold text-foreground">Перечень работ</h2>
            <Stagger className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <StaggerItem key={item.name}>
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-4">
                    <span className="text-sm text-foreground/85">{item.name}</span>
                    {item.price && (
                      <span className="whitespace-nowrap text-sm font-semibold text-accent">{item.price}</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <p className="mt-6 text-xs text-muted">
              Итоговая стоимость зависит от марки и модели автомобиля, а также объёма работ. Точную цену
              мастер назовёт после диагностики.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-sans text-lg font-bold text-foreground">Записаться на «{service.title.toLowerCase()}»</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Оставьте заявку — уточним детали и подберём удобное время визита.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/#booking"
                  className="rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
                >
                  Записаться на эту услугу
                </Link>
                <Link
                  href="/price"
                  className="rounded-full border border-border-strong px-5 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Смотреть полный прайс
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Другие услуги</h3>
              <div className="mt-4 flex flex-col gap-2">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/uslugi/${s.slug}`}
                    className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground/85 transition-colors hover:border-accent hover:text-accent"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

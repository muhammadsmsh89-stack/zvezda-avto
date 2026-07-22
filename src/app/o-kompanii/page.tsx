import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { advantages, trustStats, certificates, insurancePartners, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "О компании",
  description:
    "Автотехцентр «Звезда» в Махачкале — более 10 лет опыта, собственный склад из 25 000+ запчастей, гарантия до 12 месяцев на все виды работ.",
};

export default function OKompanii() {
  return (
    <>
      <PageHero
        eyebrow="О компании"
        breadcrumb="О компании"
        title={`${company.fullName} в Махачкале`}
        description={company.description}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
                <Image src="/images/site/facade.jpg" alt="Фасад автотехцентра «Звезда»" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Опыт и подход</span>
              <h2 className="mt-3 font-sans text-3xl font-extrabold text-foreground">
                Команда с опытом ремонта более 10 лет
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                Все специалисты техцентра «Звезда» имеют опыт ремонта более 10 лет. Регулярное обучение
                позволяет нашей команде успешно ремонтировать современные модели — от массовых японских и
                корейских автомобилей до премиальных немецких марок и суперкаров.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Работаем прозрачно: на все услуги предоставляем полный пакет документов, с организациями
                заключаем официальный договор, принимаем наличный и безналичный расчёт, а также ремонт по
                ОСАГО и страховому полису.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {company.legalName}, ИНН {company.inn}. Работаем {company.hours.toLowerCase()} по адресу{" "}
                {company.address}.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 rounded-3xl border border-border bg-surface/60 p-8 md:p-12">
            <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {trustStats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="font-sans text-4xl font-extrabold text-foreground">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="mt-20">
            <SectionHeading eyebrow="Принципы работы" title="На чём строится наш сервис" />
            <Stagger className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((item) => (
                <StaggerItem key={item.title} className="bg-surface p-8">
                  <h3 className="font-sans text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Сертификаты</h3>
              <Stagger className="mt-5 grid grid-cols-3 gap-4">
                {certificates.map((cert) => (
                  <StaggerItem key={cert.file}>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-white">
                      <Image src={`/images/certificates/${cert.file}`} alt={cert.title} fill className="object-contain p-2" sizes="200px" />
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Страховые партнёры</h3>
              <Stagger className="mt-5 grid grid-cols-4 gap-3">
                {insurancePartners.map((partner) => (
                  <StaggerItem key={partner.file}>
                    <div className="flex aspect-square items-center justify-center rounded-xl border border-border bg-white p-3">
                      <div className="relative h-full w-full">
                        <Image src={`/images/insurance/${partner.file}`} alt={partner.name} fill className="object-contain" sizes="120px" />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center gap-4 rounded-3xl border border-border bg-gradient-to-br from-surface to-surface-2 p-12 text-center">
            <h3 className="font-sans text-2xl font-extrabold text-foreground">Готовы доверить нам свой автомобиль?</h3>
            <p className="max-w-md text-sm text-muted">Запишитесь на диагностику или позвоните нам напрямую.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Link href="/#booking" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110">
                Записаться на сервис
              </Link>
              <a href={`tel:${company.phones[0].href}`} className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent">
                {company.phones[0].value}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

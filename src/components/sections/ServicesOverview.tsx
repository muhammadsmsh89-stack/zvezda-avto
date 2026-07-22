"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { serviceCategories } from "@/lib/content";

export function ServicesOverview() {
  return (
    <section id="uslugi" className="border-b border-border bg-background py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Услуги"
            title="Три направления, один сервис"
            description="Полный цикл ремонта и обслуживания — от плановой диагностики до сложного кузовного ремонта."
          />
          <Link
            href="/uslugi"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 md:flex"
          >
            Все услуги
            <ArrowIcon />
          </Link>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceCategories.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/uslugi/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">
                    {service.heroNote}
                  </span>
                  <h3 className="mt-2 font-sans text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    Подробнее об услугах
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ArrowIcon />
                    </motion.span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center md:hidden">
          <Link href="/uslugi" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Все услуги
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

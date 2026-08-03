"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { serviceCategories, type ServiceCategory } from "@/lib/content";
import { useBooking } from "@/lib/booking-context";

export function ServicesOverview() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const { jumpToBooking } = useBooking();

  return (
    <section id="services" className="bg-surface py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Услуги"
          title="6 направлений красоты под одной крышей"
          description="От стрижки до инъекционной косметологии — выбирайте услугу и записывайтесь сразу, без звонков."
          align="center"
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => {
            const isOpen = openSlug === category.slug;
            return (
              <StaggerItem key={category.slug}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-background p-7 transition-colors hover:border-accent/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <ServiceIcon icon={category.icon} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>

                  <button
                    onClick={() => setOpenSlug(isOpen ? null : category.slug)}
                    className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent"
                  >
                    {isOpen ? "Скрыть услуги" : `Показать все (${category.subcategories.length})`}
                    <ChevronIcon open={isOpen} />
                  </button>

                  {isOpen && (
                    <ul className="mt-4 space-y-2.5 border-t border-border pt-4">
                      {category.subcategories.map((sub) => (
                        <li key={sub.name} className="flex items-baseline justify-between gap-3 text-sm">
                          <span className="text-foreground/85">{sub.name}</span>
                          <span className="shrink-0 whitespace-nowrap text-xs text-muted">
                            {sub.duration} · {sub.priceFrom}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() => jumpToBooking({ categorySlug: category.slug })}
                    className="mt-6 w-full rounded-full border border-accent/50 px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Записаться на {category.title.toLowerCase()}
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <p className="mt-8 text-center text-xs text-muted">
          Цены приведены ориентировочно и уточняются мастером на консультации в зависимости от длины волос,
          объёма работы и выбранных материалов.
        </p>
      </div>
    </section>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: ServiceCategory["icon"] }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" } as const;
  switch (icon) {
    case "hair":
      return (
        <svg {...common}>
          <path d="M6 4c3 0 4 3 4 6s-2 8-2 8M12 4c3 0 5 3 5 7s-1 9-3 9M18 5c1.5 1 2 3 1.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "nails":
      return (
        <svg {...common}>
          <path d="M7 21c-1.5 0-2.5-1.5-2-3l1.5-9A2 2 0 0 1 8.5 7.3l7 1.4a2 2 0 0 1 1.6 2.2l-1 8.1c-.2 1.2-1.3 2-2.5 2H7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "makeup":
      return (
        <svg {...common}>
          <circle cx="9" cy="15" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 11.5 18 5l2 2-6.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cosmetology":
      return (
        <svg {...common}>
          <path d="M12 3c2 2.2 3 4.4 3 6.5A3 3 0 0 1 9 9.5C9 7.4 10 5.2 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M6 14c1.8-1 3.6-1.4 6-1.4s4.2.4 6 1.4M6 18c1.8-1 3.6-1.4 6-1.4s4.2.4 6 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "massage":
      return (
        <svg {...common}>
          <path d="M4 15c1.5 2 3 3 5 3 3 0 4-2 4-4M12 14c0 2.5 1.5 4 4 4 2 0 3.5-1 5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M4 11.5 12 4l8 7.5M6.5 10v9a1 1 0 0 0 1 1H16a1 1 0 0 0 1-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
  }
}

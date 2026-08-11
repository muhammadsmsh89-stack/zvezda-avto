"use client";

import Link from "next/link";
import { footerNav } from "@/lib/content";
import { company, isDemoMode, locations, socialLinks } from "@/data/company";
import { whatsappGeneric } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  const primary = locations[0];

  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 text-deep-foreground">
            <BrandMark className="h-6 w-6" />
            <span className="text-[19px]">Царь Дверей</span>
          </div>
          <p className="mt-4 text-[14px] text-deep-foreground/65 leading-relaxed max-w-xs">
            Двери в Махачкале, подобранные под интерьер. Замер, монтаж, рассрочка.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-deep-foreground/75">
            <a
              href={whatsappGeneric()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "footer" })}
              className="hover:text-accent transition-colors"
            >
              WhatsApp
            </a>
            <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Telegram
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Instagram
            </a>
          </div>
        </div>

        <nav className="text-[14px] text-deep-foreground/75 space-y-2.5" aria-label="Разделы сайта">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="block hover:text-accent transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="text-[14px] text-deep-foreground/80 space-y-1.5">
          <p className="text-deep-foreground">{company.city}</p>
          <p className="text-deep-foreground/65">
            {primary.address}
            {primary.floor ? `, ${primary.floor}` : ""}
          </p>
          <p className="text-deep-foreground/65">{primary.hours}</p>
          <a
            href={company.phone.href}
            onClick={() => track("phone_click", { location: "footer" })}
            className="block pt-2 hover:text-accent transition-colors"
          >
            {company.phone.display}
          </a>
          <a href={`mailto:${company.email}`} className="block hover:text-accent transition-colors">
            {company.email}
          </a>
        </div>

        <div className="text-[13px] text-deep-foreground/55 leading-relaxed space-y-3">
          <a
            href={socialLinks.yandexMaps}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("route_click", { location: "footer" })}
            className="block hover:text-accent transition-colors"
          >
            Яндекс Карты →
          </a>
          <a
            href={socialLinks.twoGis}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-accent transition-colors"
          >
            2ГИС →
          </a>
        </div>
      </div>
      <div className="border-t border-deep-border">
        <div
          className="container-wide py-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-deep-foreground/45"
          style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
        >
          <span>© {new Date().getFullYear()} {company.brand}</span>
          {isDemoMode && (
            <span>Демонстрационная концепция сайта, подготовленная на основе открытых данных компании. Не является официальным сайтом.</span>
          )}
        </div>
      </div>
      {/* Резерв под sticky mobile CTA (высота бара ~50px), чтобы последняя строка футера не пряталась
          за фиксированной панелью на мобильных — см. MobileCta.tsx. */}
      <div className="h-[50px] lg:hidden" aria-hidden="true" />

    </footer>
  );
}

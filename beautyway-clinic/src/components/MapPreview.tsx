"use client";

import { useState } from "react";
import { Media } from "./ui/Media";
import { IconPin, IconArrow } from "./ui/Icons";
import type { Branch } from "@/lib/site";

/**
 * Карта не грузится при открытии страницы. Сначала — лёгкий превью-блок
 * с реальным фото филиала; iframe Яндекс Карт подключается только по нажатию.
 */
export function MapPreview({ branch }: { branch: Branch }) {
  const [showMap, setShowMap] = useState(false);
  const embed = `https://yandex.ru/map-widget/v1/?ll=${branch.geo.lng}%2C${branch.geo.lat}&z=17&pt=${branch.geo.lng},${branch.geo.lat},pm2rdm`;

  return (
    <div className="overflow-hidden rounded-[12px] border border-line bg-porcelain">
      {showMap ? (
        <iframe
          src={embed}
          title={`Карта: ${branch.address}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="block h-[320px] w-full border-0 sm:h-[420px]"
        />
      ) : (
        <div className="relative">
          <Media
            name={branch.photo}
            widths={[640, 1280]}
            ratio="4 / 3"
            alt={`Клиника BeautyWay — ${branch.name}`}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-12">
            <p className="flex items-start gap-2 text-[0.9375rem] leading-snug text-milk">
              <IconPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-orchid-soft" />
              {branch.address}
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 p-4 sm:flex-row">
        <a
          href={branch.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-[4px] bg-plum px-4 text-[0.9375rem] font-medium text-white transition-colors hover:bg-plum-deep"
        >
          Открыть в Яндекс Картах
          <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        {!showMap && (
          <button
            type="button"
            onClick={() => setShowMap(true)}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-[4px] border border-plum/45 px-4 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint cursor-pointer"
          >
            Показать карту здесь
          </button>
        )}
      </div>
      {!showMap && (
        <p className="px-4 pb-4 text-[0.8125rem] leading-snug text-graphite-soft">
          Карта не загружается автоматически — так страница открывается быстрее и не тянет сторонние скрипты.
        </p>
      )}
    </div>
  );
}

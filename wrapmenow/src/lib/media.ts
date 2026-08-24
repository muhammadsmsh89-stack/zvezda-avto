// Реестр реальных фотографий WrapMeNow. Источник — официальный сайт студии
// wrapmenow.ru, раздел «Проекты» (публичные карточки завершённых работ).
// Отбор и происхождение каждого файла — см. scripts/photo-sources.md
// (не публикуется на сайте). Скачано и подключено 23.08.2026.

import { withBase } from "@/lib/basePath";

export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

const img = (src: string, alt: string, width: number, height: number, position = "center"): MediaAsset => ({
  src: withBase(src),
  alt,
  width,
  height,
  position,
});

export function projectImage(slug: string, index: number, alt: string, position = "center"): MediaAsset {
  return img(`/images/projects/${slug}/${index}.webp`, alt, 1500, 1125, position);
}

// Hero: Range Rover Sport на фоне студии WrapMeNow (вывеска «Студия оклейки»,
// табличка с графиком и адресом видны в кадре) — единственное найденное фото,
// где реальная работа и сама студия сняты в одном кадре.
export const heroImage = projectImage(
  "range-rover-sport",
  2,
  "Range Rover Sport после полной защиты кузова у студии WrapMeNow на Ташкентской, 28с8",
  "center 60%"
);

export const studioExteriorImage = projectImage(
  "range-rover-sport",
  1,
  "Автомобиль клиента у входа в студию WrapMeNow",
  "center 55%"
);

export const finalCtaImage = projectImage(
  "zeekr-001",
  1,
  "Zeekr 001 после оклейки защитной полиуретановой плёнкой в WrapMeNow",
  "center 55%"
);

// Представительные фото по услугам — где нашлась подходящая реальная карточка.
// Антихром и тонировка честно остаются без фото (см. photo-sources.md) —
// в интерфейсе для них используется PhotoPanel.
export const serviceImages: Partial<Record<string, MediaAsset>> = {
  ppf: projectImage("toyota-fj-cruiser", 1, "Toyota FJ Cruiser — полная защита кузова полиуретановой плёнкой", "center 45%"),
  "color-wrap": projectImage("jeep-wrangler", 1, "Jeep Wrangler — оклейка кузова цветной плёнкой Avery Grass Green", "center 40%"),
  branding: projectImage("vw-golf-branding", 1, "Volkswagen Golf — брендирование виниловой плёнкой", "center 45%"),
};

// Реестр изображений сайта. Реальные фотографии SEYCHAS получены из
// официальных публичных источников (проверено 17.08.2026):
// — Яндекс Карты (yandex.ru/maps/org/seychas/132539768768, раздел «Фото»,
//   вкладки «Внутри»/«Снаружи»/«Услуги») — интерьер, вывеска, работы мастеров;
// — DIKIDI (dikidi.net/ru/profile/seychas_953828) — портреты специалистов
//   (подписаны именем в самой карточке специалиста).
// Одно изображение направления Beauty — лицензионное редакционное фото
// (Unsplash License, коммерческое использование без атрибуции), т.к. у
// студии нет собственных публичных фото по уходу за лицом. Помечено
// assetStatus: "demo" и не выдаётся за конкретную работу SEYCHAS.

import { withBase } from "@/lib/basePath";

export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  assetStatus: "confirmed" | "demo";
};

const confirmed = (
  src: string,
  alt: string,
  width: number,
  height: number
): MediaAsset => ({ src: withBase(src), alt, width, height, assetStatus: "confirmed" });

const demo = (
  src: string,
  alt: string,
  width: number,
  height: number
): MediaAsset => ({ src: withBase(src), alt, width, height, assetStatus: "demo" });

export const heroImage: MediaAsset = confirmed(
  "/images/hero-lashes.webp",
  "Наращивание ресниц в студии SEYCHAS — крупный план",
  1000,
  1250
);

export const directionImages: Record<string, MediaAsset> = {
  nails: confirmed("/images/direction-nails.webp", "Маникюр SEYCHAS", 1000, 1250),
  brows: confirmed("/images/direction-brows.webp", "Оформление бровей SEYCHAS", 1000, 1250),
  lashes: confirmed("/images/direction-lashes.webp", "Наращивание ресниц SEYCHAS", 1000, 1250),
  beauty: demo("/images/direction-beauty.webp", "Уход за лицом — иллюстративное фото", 1000, 1250),
};

export const workImages: Record<string, MediaAsset> = {
  "nails-glossy": confirmed("/images/work-featured.webp", "Маникюр — глянцевое покрытие", 1600, 1000),
  "nails-french": confirmed("/images/work-manicure-french.webp", "Маникюр — французское покрытие", 1100, 1375),
  "pedicure-red": confirmed("/images/work-pedicure-red.webp", "Педикюр", 1000, 1000),
  "nails-glitter": confirmed("/images/work-nails-glitter.webp", "Дизайн ногтей", 900, 1125),
  "brows-shape": confirmed("/images/work-brows-shape.webp", "Коррекция и оформление бровей", 1000, 1000),
  "brows-lamination": confirmed("/images/work-brows-lamination.webp", "Долговременная укладка бровей", 900, 1125),
  "lashes-extension": confirmed("/images/work-lashes-extension.webp", "Наращивание ресниц", 1000, 1000),
  "lashes-before-after": confirmed("/images/work-lashes-before-after.webp", "Ламинирование ресниц — до и после", 900, 1125),
  "beauty-facial": demo("/images/work-beauty-facial.webp", "Уход за лицом — иллюстративное фото", 1100, 825),
};

export const interiorImages: MediaAsset[] = [
  confirmed("/images/interior-4.webp", "Стойка администратора SEYCHAS", 1280, 854),
  confirmed("/images/interior-2.webp", "Рабочее место мастера маникюра SEYCHAS", 1280, 854),
  confirmed("/images/interior-3.webp", "Рабочее место в студии SEYCHAS", 1280, 854),
  confirmed("/images/interior-1.webp", "Кабинет педикюра SEYCHAS", 1280, 854),
  confirmed("/images/interior-5.webp", "Интерьер студии SEYCHAS", 1280, 854),
];

export const exteriorImage: MediaAsset = confirmed(
  "/images/exterior-1.webp",
  "Вход в студию SEYCHAS",
  1280,
  960
);

export const masterImages: Record<string, MediaAsset> = {
  darya: confirmed("/images/master-darya.webp", "Дарья — топ-мастер маникюра и педикюра SEYCHAS", 900, 900),
  anastasiya: confirmed("/images/master-anastasiya.webp", "Анастасия — топ-мастер маникюра и педикюра SEYCHAS", 900, 900),
  svetlana: confirmed("/images/master-svetlana.webp", "Светлана — мастер-бровист SEYCHAS", 900, 900),
  olesya: confirmed("/images/master-olesya.webp", "Олеся — мастер по наращиванию ресниц SEYCHAS", 900, 900),
  dasha: confirmed("/images/master-dasha.webp", "Даша — мастер маникюра SEYCHAS", 900, 900),
};

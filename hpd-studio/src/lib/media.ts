// Реестр реальных фотографий HPD Studio. Источник — публичная фотогалерея
// карточки HPD на Яндекс Картах (yandex.ru/maps/org/hpd_studio/227086737296/gallery/),
// авторы — клиенты и сама студия. Отбор и проверка происхождения — см.
// scripts/photo-sources.md (не публикуется на сайте). Подключено 18.08.2026.
// Для направления «Шумоизоляция» и для «Работ»/«До-После» подходящих
// подтверждённых фото не найдено — там остаётся авторская заглушка (PhotoPanel).

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

export const heroImage = img(
  "/images/hero.jpg",
  "BMW X5 M в студии HPD — глянцевый результат после обработки",
  1050,
  1400,
  "center 65%"
);

export const finalCtaImage = img(
  "/images/final-cta.jpg",
  "Автомобиль в студии HPD на Пушкинской, 8",
  1050,
  1400,
  "center 65%"
);

export const exteriorImage = img(
  "/images/exterior.jpg",
  "Вход в здание на Пушкинской, 8, Воронеж",
  750,
  1000,
  "center 55%"
);

export const serviceImages: Partial<Record<string, MediaAsset>> = {
  polishing: img("/images/service-polishing.jpg", "Полировка кузова и диска в HPD — глянцевое отражение", 750, 1000),
  protection: img("/images/service-protection.jpg", "Оклейка кузова защитной плёнкой в студии HPD", 1000, 750),
  "detailing-wash": img("/images/service-wash.jpg", "Автомобиль в мойке HPD", 750, 1000, "center 40%"),
  interior: img("/images/service-interior.jpg", "Салон автомобиля в студии HPD", 750, 1000),
  tinting: img("/images/service-tinting.jpg", "Оклейка фары защитной плёнкой — работа с оптикой в HPD", 750, 1000, "center 30%"),
};

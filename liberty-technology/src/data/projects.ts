import type { MediaAsset } from "./media";
import { projectBmwMedia, projectCamryMedia } from "./media";

export type Project = {
  id: string;
  index: string;
  make: string;
  model: string;
  tag: string;
  summary: string;
  works?: string[];
  source: string;
  media: MediaAsset[];
  layout: "large" | "pair";
};

// Только проекты, работы по которым подтверждаются реальными отзывами (Яндекс Карты / 2ГИС).
// История и детали не додумываются сверх того, что написал клиент.
export const projects: Project[] = [
  {
    id: "bmw-5",
    index: "01",
    make: "BMW",
    model: "5 серии",
    tag: "Рестайлинг / кузов / салон",
    summary:
      "Комплексный проект: обвес окрашен и подогнан по зазорам, в салоне — вставки в рубленый карбон.",
    works: ["Обвес", "Покраска", "Подгонка по зазорам", "Карбоновые вставки салона"],
    source: "отзыв на Яндекс Картах, 8 ноября 2025",
    media: projectBmwMedia,
    layout: "large",
  },
  {
    id: "camry-80",
    index: "02",
    make: "Toyota",
    model: "Camry 80",
    tag: "Оклейка кузова",
    summary: "Кузов оклеен плёнкой — по словам клиента, работа выполнена качественно и быстро.",
    source: "отзыв в 2ГИС",
    media: projectCamryMedia,
    layout: "pair",
  },
];

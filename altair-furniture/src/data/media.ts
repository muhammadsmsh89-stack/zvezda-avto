import type { IllustrationId } from "@/components/illustrations";

// Центральная конфигурация визуальных активов. Каждый визуал на сайте — либо
// собственный технический чертёж (blueprint), либо реальная фотография (photo).
// Пока у Альтаира нет предоставленных фотографий объектов, все MediaAsset на
// сайте — blueprint. Когда владелец передаст фото, достаточно заменить запись
// здесь на { type: "photo", ... } — компонент SceneFrame сам переключит режим
// показа, вёрстку менять не нужно.
export type MediaAsset =
  | {
      type: "blueprint";
      illustrationId: IllustrationId;
    }
  | {
      type: "photo";
      src: string;
      alt: string;
      verified: boolean;
      // Технические подписи поверх фото (см. SceneFrame) — необязательны.
      dimension?: string;
    };

export const heroMedia: MediaAsset = {
  type: "blueprint",
  illustrationId: "kitchen",
};

export const philosophyMedia: MediaAsset = {
  type: "blueprint",
  illustrationId: "joinery",
};

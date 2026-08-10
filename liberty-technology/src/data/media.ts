// Центральный реестр визуальных слотов сайта. Скачивание чужих фото и выдача стоковых
// изображений за реальные объекты Liberty запрещены правилами репозитория. Пока владелец
// не передал фотографии, каждый слот — "scene": собственная авторская студийная композиция
// (без карбона/пламени/спидометров), с заданными пропорциями, готовая принять реальный
// кадр без изменения вёрстки. Полный список того, что нужно снять, — public/ASSETS_NEEDED.md.
export type SceneVariant = "sheen" | "panel" | "ppf-edge" | "grid" | "silhouette" | "macro";

export type MediaAsset =
  | {
      type: "scene";
      variant: SceneVariant;
      label: string;
    }
  | {
      type: "photo";
      src: string;
      alt: string;
      verified: boolean;
    };

export const heroMedia: MediaAsset = {
  type: "scene",
  variant: "sheen",
  label: "OWNER_ASSET_REQUIRED — hero: автомобиль Liberty целиком, студийный свет, портретный ракурс 3/4",
};

export const capabilityMedia: Record<string, MediaAsset> = {
  detailing: {
    type: "scene",
    variant: "macro",
    label: "OWNER_ASSET_REQUIRED — детейлинг: макро блик на отполированной поверхности кузова",
  },
  protection: {
    type: "scene",
    variant: "ppf-edge",
    label: "OWNER_ASSET_REQUIRED — защита кузова: край сатиновой плёнки на кромке панели",
  },
  bodywork: {
    type: "scene",
    variant: "panel",
    label: "OWNER_ASSET_REQUIRED — кузовной ремонт: геометрия панели после покраски/рихтовки",
  },
  tuning: {
    type: "scene",
    variant: "grid",
    label: "OWNER_ASSET_REQUIRED — тюнинг: карбоновый элемент салона или обвес крупным планом",
  },
};

export const projectBmwMedia: MediaAsset[] = [
  {
    type: "scene",
    variant: "sheen",
    label: "OWNER_ASSET_REQUIRED — BMW 5: общий план после рестайлинга, 3/4 спереди",
  },
  {
    type: "scene",
    variant: "grid",
    label: "OWNER_ASSET_REQUIRED — BMW 5: карбоновые вставки салона крупным планом",
  },
  {
    type: "scene",
    variant: "panel",
    label: "OWNER_ASSET_REQUIRED — BMW 5: зазоры обвеса после подгонки",
  },
];

export const projectCamryMedia: MediaAsset[] = [
  {
    type: "scene",
    variant: "sheen",
    label: "OWNER_ASSET_REQUIRED — Toyota Camry 80: общий план после переоклейки в новый цвет",
  },
  {
    type: "scene",
    variant: "ppf-edge",
    label: "OWNER_ASSET_REQUIRED — Toyota Camry 80: край плёнки на дверной кромке",
  },
];

export const beforeAfterMedia: { before: MediaAsset; after: MediaAsset; label: string }[] = [
  {
    label: "Кузовной ремонт и полировка",
    before: {
      type: "scene",
      variant: "panel",
      label: "OWNER_ASSET_REQUIRED — до: повреждённая/тусклая поверхность панели",
    },
    after: {
      type: "scene",
      variant: "sheen",
      label: "OWNER_ASSET_REQUIRED — после: тот же ракурс, тот же автомобиль, результат",
    },
  },
];

export const protectionFeatureMedia: MediaAsset = {
  type: "scene",
  variant: "macro",
  label: "OWNER_ASSET_REQUIRED — защита кузова: макро-блик на сатиновой плёнке, отражение",
};

export const bodyworkFeatureMedia: MediaAsset = {
  type: "scene",
  variant: "sheen",
  label: "OWNER_ASSET_REQUIRED — кузовной ремонт: поверхность после покраски, студийный свет",
};

export const tuningFeatureMedia: MediaAsset = {
  type: "scene",
  variant: "silhouette",
  label: "OWNER_ASSET_REQUIRED — тюнинг: автомобиль после рестайлинга, силуэт/профиль",
};

export const aboutMedia: MediaAsset = {
  type: "scene",
  variant: "grid",
  label: "OWNER_ASSET_REQUIRED — интерьер центра: рабочая зона, реальное помещение Liberty",
};

export const finalCtaMedia: MediaAsset = {
  type: "scene",
  variant: "silhouette",
  label: "OWNER_ASSET_REQUIRED — закрывающий кадр: автомобиль Liberty в цехе, широкий план",
};

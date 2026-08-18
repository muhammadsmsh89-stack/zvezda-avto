// Реальные фотографии Holy Nails, предоставлены владельцем/пользователем как
// локальные файлы (изначально размещённые на holy-nails.clients.site).
// Provenance и обоснование выбора — в REAL_ASSETS.md (не публикуется на сайте).
//
// next/image с unoptimized:true в этом static-export + basePath сетапе не
// подставляет basePath к src сам — префиксуем вручную через withBase(),
// иначе на GitHub Pages (/zvezda-avto/holy-nails/...) картинки будут 404.

import { withBase } from "@/lib/basePath";

export const realAssets = {
  interior: {
    src: withBase("/images/holy-nails/interior.avif"),
    width: 1138,
    height: 640,
  },
  workMilky: {
    // hero-кроп 3:4, тот же кадр что и workMilkyFull
    src: withBase("/images/holy-nails/work-milky.avif"),
    width: 533,
    height: 711,
  },
  workMilkyFull: {
    // нативный кадр без кропа, для works-плитки
    src: withBase("/images/holy-nails/work-milky-full.avif"),
    width: 533,
    height: 800,
  },
  workNude: {
    src: withBase("/images/holy-nails/work-nude.avif"),
    width: 300,
    height: 380,
  },
} as const;

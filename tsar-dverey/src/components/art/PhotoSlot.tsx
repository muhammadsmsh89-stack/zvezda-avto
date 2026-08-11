import Image from "next/image";
import type { ReactNode } from "react";
import { clsx } from "clsx";

// Инфраструктура под реальные фотографии. Пока `src` не передан — рендерится `fallback` (текущая
// SVG-иллюстрация или честная заглушка), но контейнер, object-position и overlay уже готовы к
// замене на реальный кадр без переделки вёрстки секции. `id` — читаемый идентификатор слота
// (напр. REAL_HERO_IMAGE_REQUIRED), фиксируется в data-атрибуте для инспекции в DOM.
export function PhotoSlot({
  id,
  src,
  alt,
  objectPositionClassName = "object-center",
  fallback,
  overlay,
  className,
  priority,
}: {
  id: string;
  src?: string;
  alt: string;
  objectPositionClassName?: string;
  fallback: ReactNode;
  overlay?: ReactNode;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={clsx("relative overflow-hidden", className)} data-photo-slot={id}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={clsx("object-cover", objectPositionClassName)}
        />
      ) : (
        fallback
      )}
      {overlay}
    </div>
  );
}

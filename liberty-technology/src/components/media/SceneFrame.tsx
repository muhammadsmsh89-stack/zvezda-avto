import Image from "next/image";
import clsx from "clsx";
import { SceneArt } from "./SceneArt";
import type { MediaAsset } from "@/data/media";

type SceneFrameProps = {
  media: MediaAsset;
  caption: string;
  index?: string;
  aspect?: string;
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

// Единая рамка для любого автомобильного визуала на сайте. Если media — photo,
// показываем реальный кадр Liberty на всю плоскость, без рамки и подложки — фотография
// сама несёт композицию. Пока фото нет, media — scene: авторская студийная композиция
// (см. globals.css .scene-* и SceneArt). Подпись — тонкий overlay поверх плоскости,
// а не отдельная карточная плашка снизу: изображение остаётся одной цельной плоскостью.
export function SceneFrame({ media, caption, index, aspect = "aspect-[4/3]", tone = "dark", className, priority }: SceneFrameProps) {
  const isDark = tone === "dark";
  return (
    <div className={clsx("relative w-full overflow-hidden", isDark ? "bg-carbon" : "bg-paper-2", aspect, className)}>
      {media.type === "photo" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
      ) : (
        <>
          {/* Studio-scene gradients are always dark by construction — the art layer stays
              paper-toned regardless of the surrounding section's tone. */}
          <div className={clsx("absolute inset-0", `scene-${media.variant}`)} />
          <SceneArt variant={media.variant} className="absolute inset-0 h-full w-full text-paper" />
        </>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
        <span className="font-mono-tag text-[11px] uppercase tracking-[0.1em] text-paper/70 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
          {caption}
        </span>
        {index ? (
          <span className="font-mono-tag text-[11px] text-paper/70 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
            {index}
          </span>
        ) : null}
      </div>
    </div>
  );
}

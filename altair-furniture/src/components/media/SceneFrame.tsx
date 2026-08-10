import Image from "next/image";
import clsx from "clsx";
import { illustrations, DrawingFrame } from "@/components/illustrations";
import type { MediaAsset } from "@/data/media";

type SceneFrameProps = {
  media: MediaAsset;
  label: string;
  scale?: string;
  sheet?: string;
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

// Единая "рамка чертежа" для любого визуала на сайте: если media — blueprint,
// показываем инлайн-SVG иллюстрацию; если photo — реальное фото на всю рамку
// с технической подписью размера поверх. Переключение типа не требует правок
// вёрстки в местах использования (Hero, Categories, Projects) — только смены
// записи в data/media.ts или data/projects.ts.
export function SceneFrame({ media, label, scale = "М 1:20", sheet, tone = "light", className, priority }: SceneFrameProps) {
  if (media.type === "photo") {
    return (
      <DrawingFrame label={label} scale={scale} sheet={sheet} tone={tone} className={className} padded={false}>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          {media.dimension ? (
            <span className="font-mono-tag absolute bottom-3 right-3 border border-accent/60 bg-paper/90 px-2 py-1 text-[11px] text-accent backdrop-blur-sm">
              {media.dimension}
            </span>
          ) : null}
        </div>
      </DrawingFrame>
    );
  }

  const Illustration = illustrations[media.illustrationId];
  return (
    <DrawingFrame label={label} scale={scale} sheet={sheet} tone={tone} className={className}>
      <Illustration className={clsx("h-auto w-full", tone === "dark" ? "text-paper" : "text-ink")} />
    </DrawingFrame>
  );
}

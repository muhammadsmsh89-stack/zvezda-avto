import clsx from "clsx";
import { withBase } from "@/lib/basePath";

/**
 * Реальная фотография клиники в формате <picture>: AVIF -> WebP -> ничего лишнего.
 * Размеры кадра резервируются через aspect-ratio, поэтому CLS не возникает.
 * Все файлы — локальные копии в /public/media, хотлинка с bwclinic.ru нет.
 */
export function Media({
  name,
  widths,
  alt,
  sizes = "100vw",
  ratio,
  priority = false,
  className,
  imgClassName,
  objectPosition = "center",
  fit = "cover",
}: {
  /** Путь внутри /public/media без расширения, например "doctors/solopenkova-evgeniya". */
  name: string;
  /** Доступные ширины, по возрастанию. */
  widths: number[];
  alt: string;
  sizes?: string;
  /** Пропорции кадра, например "3 / 4". */
  ratio: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  fit?: "cover" | "contain";
}) {
  const set = (ext: string) =>
    widths.map((w) => `${withBase(`/media/${name}-${w}.${ext}`)} ${w}w`).join(", ");
  const fallback = withBase(`/media/${name}-${widths[widths.length - 1]}.webp`);

  return (
    <div className={clsx("relative overflow-hidden bg-porcelain-sunk", className)} style={{ aspectRatio: ratio }}>
      <picture>
        <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
        <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
        <img
          src={fallback}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          className={clsx("h-full w-full", fit === "cover" ? "object-cover" : "object-contain", imgClassName)}
          style={{ objectPosition }}
        />
      </picture>
    </div>
  );
}

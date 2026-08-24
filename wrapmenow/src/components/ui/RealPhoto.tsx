import Image from "next/image";
import clsx from "clsx";
import type { MediaAsset } from "@/lib/media";

export function RealPhoto({
  image,
  className,
  sizes,
  priority,
  overlay = "none",
}: {
  image: MediaAsset;
  className?: string;
  sizes: string;
  priority?: boolean;
  overlay?: "bottom" | "none";
}) {
  return (
    <div className={clsx("relative overflow-hidden bg-surface", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition: image.position ?? "center" }}
      />
      {overlay === "bottom" && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/5 to-transparent" />
      )}
      <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
    </div>
  );
}

import Image from "next/image";
import clsx from "clsx";

type Tone = "light" | "dark";

/**
 * Frame for a real Holy Nails photograph — mirrors PhotoPlaceholder's corner
 * registration marks and caption strip so real and placeholder imagery share
 * one visual language while photos are integrated section by section.
 */
export function RealPhoto({
  src,
  width,
  height,
  alt,
  label,
  tone = "light",
  objectPosition = "center",
  priority,
  sizes,
  aspectClassName = "aspect-[4/5]",
  className,
  hideCaption = false,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  label?: string;
  tone?: Tone;
  objectPosition?: string;
  priority?: boolean;
  sizes?: string;
  aspectClassName?: string;
  className?: string;
  hideCaption?: boolean;
}) {
  const isDark = tone === "dark";
  const stroke = isDark ? "rgba(245,242,234,0.35)" : "rgba(23,20,14,0.28)";

  return (
    <div className={clsx("relative w-full overflow-hidden", aspectClassName, className)}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        sizes={sizes}
        style={{ objectPosition }}
        className="h-full w-full object-cover"
      />

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
        preserveAspectRatio="none"
      >
        <g stroke={stroke} strokeWidth={0.6} vectorEffect="non-scaling-stroke">
          <path d="M0 9 H5 M9 0 V5" />
          <path d="M100 9 H95 M91 0 V5" />
          <path d="M100 91 H95 M91 100 V95" />
          <path d="M0 91 H5 M9 100 V95" />
        </g>
      </svg>

      {!hideCaption && label && (
        <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center gap-2 sm:inset-x-5 sm:bottom-5">
          <span className={clsx("h-px flex-1", isDark ? "bg-background/25" : "bg-foreground/20")} />
          <p
            className={clsx(
              "shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em]",
              isDark ? "text-background/75" : "text-foreground/65"
            )}
          >
            {label}
          </p>
        </div>
      )}
    </div>
  );
}

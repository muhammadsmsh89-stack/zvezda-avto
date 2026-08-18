import { ReactNode } from "react";
import clsx from "clsx";
import { Monogram } from "@/components/ui/Wordmark";

const TONE_GRADIENTS: Record<string, string> = {
  ivory: "linear-gradient(160deg, #f0e9d8 0%, #ddd0b3 55%, #c7b48c 100%)",
  stone: "linear-gradient(160deg, #ddd0b3 0%, #c7b48c 55%, #a89877 100%)",
  ink: "linear-gradient(160deg, #2a241a 0%, #17140e 55%, #0d0b07 100%)",
};

const TONE_STROKE: Record<string, string> = {
  ivory: "rgba(23,20,14,0.22)",
  stone: "rgba(23,20,14,0.22)",
  ink: "rgba(245,242,234,0.2)",
};

const TONE_ARC: Record<string, string> = {
  ivory: "rgba(23,20,14,0.09)",
  stone: "rgba(23,20,14,0.1)",
  ink: "rgba(245,242,234,0.12)",
};

type Subject = "portrait" | "wide" | "detail";
type Tone = "ivory" | "stone" | "ink";

/**
 * Editorial stand-in for photography the studio hasn't supplied yet — real
 * Yandex/Instagram photos can't be downloaded into the project. Composition
 * is a warm gradient field with a fine arc motif (a manicured-nail / crescent
 * line, echoing the wordmark), not a stock photo and not an empty box, so the
 * owner can drop in real shots later without touching the layout.
 */
export function PhotoPlaceholder({
  shotNumber,
  label,
  description,
  tone = "ivory",
  subject = "wide",
  aspectClassName = "aspect-[4/5]",
  className,
  captionPosition = "bottom",
  hideCaption = false,
  children,
}: {
  shotNumber: string;
  label: string;
  description: string;
  tone?: Tone;
  subject?: Subject;
  aspectClassName?: string;
  className?: string;
  captionPosition?: "bottom" | "top";
  hideCaption?: boolean;
  children?: ReactNode;
}) {
  const isDark = tone === "ink";
  const arcAlign = subject === "portrait" ? "40% 20%" : subject === "detail" ? "60% 70%" : "50% 45%";
  const arcSize = subject === "detail" ? "70cqw" : "92cqw";

  return (
    <div
      aria-hidden="true"
      title={description || label}
      className={clsx("relative w-full overflow-hidden", aspectClassName, className)}
      style={{ containerType: "inline-size" }}
    >
      <div className="absolute inset-0" style={{ background: TONE_GRADIENTS[tone] }} />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 50% 0%, transparent 45%, ${
            isDark ? "rgba(0,0,0,0.42)" : "rgba(20,17,10,0.14)"
          } 100%)`,
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-noise" />

      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute"
        style={{
          width: arcSize,
          height: arcSize,
          left: `calc(${arcAlign.split(" ")[0]} - ${arcSize} / 2)`,
          top: `calc(${arcAlign.split(" ")[1]} - ${arcSize} / 2)`,
        }}
      >
        <path
          d="M38 10c14 9 14 71 0 80 26-4 42-22 42-40S64 14 38 10Z"
          fill={TONE_ARC[tone]}
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
        preserveAspectRatio="none"
      >
        <g stroke={TONE_STROKE[tone]} strokeWidth={0.6} vectorEffect="non-scaling-stroke">
          <path d="M0 9 H5 M9 0 V5" />
          <path d="M100 9 H95 M91 0 V5" />
          <path d="M100 91 H95 M91 100 V95" />
          <path d="M0 91 H5 M9 100 V95" />
        </g>
      </svg>

      <span
        className={clsx(
          "absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.18em] sm:left-5 sm:top-5",
          isDark ? "text-background/50" : "text-foreground/45"
        )}
        aria-hidden
      >
        {shotNumber}
      </span>

      <Monogram
        dark={!isDark}
        className="absolute right-4 top-4 h-6 w-6 opacity-30 sm:right-5 sm:top-5"
      />

      {children}

      {!hideCaption && (
        <div
          className={clsx(
            "absolute inset-x-4 flex items-center gap-2 sm:inset-x-5",
            captionPosition === "bottom" ? "bottom-4 sm:bottom-5" : "top-11 sm:top-12"
          )}
          aria-hidden
        >
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

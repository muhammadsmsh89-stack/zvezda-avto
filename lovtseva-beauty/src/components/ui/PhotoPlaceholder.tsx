import { ReactNode } from "react";
import clsx from "clsx";
import { Monogram } from "@/components/ui/Wordmark";

const TONE_GRADIENTS: Record<string, string> = {
  ivory: "linear-gradient(155deg, #f1e7d6 0%, #ddccb2 55%, #c2ac89 100%)",
  espresso: "linear-gradient(155deg, #33261a 0%, #1d150e 55%, #100b07 100%)",
  charcoal: "linear-gradient(155deg, #443627 0%, #241a12 55%, #100b07 100%)",
};

const TONE_STROKE: Record<string, string> = {
  ivory: "rgba(31,24,17,0.24)",
  espresso: "rgba(246,239,227,0.2)",
  charcoal: "rgba(246,239,227,0.2)",
};

const TONE_GLYPH: Record<string, string> = {
  ivory: "rgba(31,24,17,0.1)",
  espresso: "rgba(246,239,227,0.13)",
  charcoal: "rgba(246,239,227,0.13)",
};

const TONE_ACCENT_GLYPH: Record<string, string> = {
  ivory: "rgba(169,128,63,0.16)",
  espresso: "rgba(200,158,94,0.22)",
  charcoal: "rgba(200,158,94,0.2)",
};

type Subject = "portrait" | "wide" | "detail";
type Tone = "ivory" | "espresso" | "charcoal";

function glyphFor(label: string) {
  const word = label.trim().split(/\s+/)[0] ?? "";
  return word.slice(0, 2).toUpperCase();
}

/**
 * Editorial stand-in for photography the center has not yet supplied (see
 * PHOTO_REQUIREMENTS.md). Composition is typography-led — a large tonal
 * initial, fine registration marks and a texture field — so it reads as a
 * deliberate art-direction choice rather than an empty box. No process/dev
 * text is shown to visitors; the shot description lives only in aria-label.
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
  const isDark = tone !== "ivory";
  const glyph = glyphFor(label);
  const glyphAlign = subject === "portrait" ? "items-start pt-[18%]" : subject === "detail" ? "items-end pb-[6%]" : "items-end pb-[10%]";
  const glyphSize = subject === "detail" ? "34cqw" : "40cqw";

  return (
    <div
      role="img"
      aria-label={`${description || label} — фотография появится здесь позже.`}
      className={clsx("relative w-full overflow-hidden", aspectClassName, className)}
      style={{ containerType: "inline-size" }}
    >
      <div className="absolute inset-0" style={{ background: TONE_GRADIENTS[tone] }} />

      {subject === "portrait" && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(34% 30% at 50% 30%, ${
              isDark ? "rgba(255,255,255,0.1)" : "rgba(17,17,17,0.1)"
            } 0%, transparent 72%)`,
            filter: "blur(6px)",
          }}
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 50% 0%, transparent 45%, ${
            isDark ? "rgba(0,0,0,0.46)" : "rgba(20,16,10,0.16)"
          } 100%)`,
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-noise" />

      <div aria-hidden className={clsx("pointer-events-none absolute inset-0 flex justify-center overflow-hidden", glyphAlign)}>
        <span
          className="font-serif leading-none"
          style={{ fontSize: glyphSize, color: TONE_GLYPH[tone], fontWeight: 600 }}
        >
          {glyph}
        </span>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-1 w-1 -translate-x-1/2 rounded-full"
        style={{ background: TONE_ACCENT_GLYPH[tone] }}
      />

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
        preserveAspectRatio="none"
      >
        <g stroke={TONE_STROKE[tone]} strokeWidth={0.6} vectorEffect="non-scaling-stroke" fill="none">
          <path d="M5 13 V5 H13" />
          <path d="M87 5 H95 V13" />
          <path d="M95 87 V95 H87" />
          <path d="M13 95 H5 V87" />
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

import { ReactNode } from "react";
import clsx from "clsx";
import { Monogram } from "@/components/ui/Wordmark";

const TONE_GRADIENTS: Record<string, string> = {
  espresso: "linear-gradient(155deg, #2c2013 0%, #1a130b 55%, #0c0b09 100%)",
  copper: "linear-gradient(155deg, #6b4326 0%, #3a2415 55%, #180f09 100%)",
  charcoal: "linear-gradient(155deg, #2a2a28 0%, #17150f 55%, #0c0b09 100%)",
  paper: "linear-gradient(155deg, #f1e9dc 0%, #ddccae 55%, #c2ac89 100%)",
};

const TONE_STROKE: Record<string, string> = {
  espresso: "rgba(243,236,224,0.2)",
  copper: "rgba(243,236,224,0.22)",
  charcoal: "rgba(243,236,224,0.2)",
  paper: "rgba(23,19,13,0.24)",
};

const TONE_GLYPH: Record<string, string> = {
  espresso: "rgba(243,236,224,0.1)",
  copper: "rgba(243,236,224,0.14)",
  charcoal: "rgba(243,236,224,0.1)",
  paper: "rgba(23,19,13,0.1)",
};

const TONE_ACCENT_GLYPH: Record<string, string> = {
  espresso: "rgba(193,122,74,0.28)",
  copper: "rgba(233,178,128,0.3)",
  charcoal: "rgba(193,122,74,0.22)",
  paper: "rgba(156,95,54,0.2)",
};

type Subject = "portrait" | "wide" | "detail";
type Tone = "espresso" | "copper" | "charcoal" | "paper";

function glyphFor(label: string) {
  const word = label.trim().split(/\s+/)[0] ?? "";
  return word.slice(0, 2).toUpperCase();
}

/**
 * Editorial stand-in for photography the salon has not yet supplied.
 * Composition is typography-led — a large tonal initial, fine registration
 * marks and a texture field — so it reads as a deliberate art-direction
 * choice rather than an empty box. No process/dev text is shown to
 * visitors; the shot description lives only in aria-label.
 */
export function PhotoPlaceholder({
  shotNumber,
  label,
  description,
  tone = "espresso",
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
  const isPaper = tone === "paper";
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
              isPaper ? "rgba(23,19,13,0.1)" : "rgba(255,255,255,0.09)"
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
            isPaper ? "rgba(23,19,13,0.14)" : "rgba(0,0,0,0.5)"
          } 100%)`,
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-noise" />

      <div aria-hidden className={clsx("pointer-events-none absolute inset-0 flex justify-center overflow-hidden", glyphAlign)}>
        <span
          className="font-display leading-none"
          style={{ fontSize: glyphSize, color: TONE_GLYPH[tone], fontWeight: 700 }}
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
          isPaper ? "text-foreground/45" : "text-cream/60"
        )}
        aria-hidden
      >
        {shotNumber}
      </span>

      <Monogram
        ink={!isPaper}
        className="absolute right-4 top-4 h-6 w-6 opacity-40 sm:right-5 sm:top-5"
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
          <span className={clsx("h-px flex-1", isPaper ? "bg-foreground/20" : "bg-cream/25")} />
          <p
            className={clsx(
              "shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em]",
              isPaper ? "text-foreground/70" : "text-cream/75"
            )}
          >
            {label}
          </p>
        </div>
      )}
    </div>
  );
}

"use client";

import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { usePresentation } from "@/lib/presentation";
import { Monogram } from "@/components/ui/Monogram";

const TONE_GRADIENTS: Record<string, string> = {
  ivory: "linear-gradient(155deg, #efe7da 0%, #ded0c1 50%, #c9b79f 100%)",
  espresso: "linear-gradient(155deg, #2b2420 0%, #1d1712 55%, #14100c 100%)",
  charcoal: "linear-gradient(155deg, #3a332c 0%, #221c17 55%, #14100c 100%)",
};

const TONE_TEXT: Record<string, string> = {
  ivory: "text-foreground/45",
  espresso: "text-background/45",
  charcoal: "text-background/45",
};

const TONE_STROKE: Record<string, string> = {
  ivory: "rgba(17,17,17,0.26)",
  espresso: "rgba(246,242,236,0.22)",
  charcoal: "rgba(246,242,236,0.22)",
};

type Subject = "portrait" | "wide" | "detail";
type Tone = "ivory" | "espresso" | "charcoal";

/**
 * Stands in for photography we don't have yet (see PHOTO_REQUIREMENTS.md for
 * the shot list owners need to supply). Renders real photography via
 * next/image when `desktopSrc` is supplied; otherwise a toned, vignetted
 * field with a monogram mark that reads as an intentional editorial visual,
 * not an empty box or a dev placeholder. No internal/process text is ever
 * shown to visitors — that detail lives only in the `aria-label` for screen
 * readers and in PHOTO_REQUIREMENTS.md.
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
  desktopSrc,
  mobileSrc,
  alt,
  objectPositionDesktop = "center",
  objectPositionMobile,
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
  desktopSrc?: string;
  mobileSrc?: string;
  alt?: string;
  objectPositionDesktop?: string;
  objectPositionMobile?: string;
  children?: ReactNode;
}) {
  const presentation = usePresentation();

  if (desktopSrc) {
    return (
      <div className={clsx("relative w-full overflow-hidden", aspectClassName, className)}>
        <Image
          src={desktopSrc}
          alt={alt ?? label}
          fill
          sizes="(max-width: 767px) 100vw, 60vw"
          className={clsx("object-cover", mobileSrc && "hidden sm:block")}
          style={{ objectPosition: objectPositionDesktop }}
        />
        {mobileSrc && (
          <Image
            src={mobileSrc}
            alt={alt ?? label}
            fill
            sizes="100vw"
            className="object-cover sm:hidden"
            style={{ objectPosition: objectPositionMobile ?? objectPositionDesktop }}
          />
        )}
        {children}
      </div>
    );
  }

  const isDark = tone !== "ivory";

  return (
    <div
      role={presentation ? undefined : "img"}
      aria-label={presentation ? undefined : `${description || label} — фотография появится здесь позже.`}
      aria-hidden={presentation ? true : undefined}
      className={clsx("relative w-full overflow-hidden", aspectClassName, className)}
    >
      <div className="absolute inset-0" style={{ background: TONE_GRADIENTS[tone] }} />

      {subject === "portrait" && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(30% 26% at 50% 34%, ${
              isDark ? "rgba(255,255,255,0.12)" : "rgba(17,17,17,0.12)"
            } 0%, transparent 72%), radial-gradient(48% 30% at 50% 78%, ${
              isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.08)"
            } 0%, transparent 75%)`,
            filter: "blur(6px)",
          }}
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 50% 8%, transparent 55%, ${
            isDark ? "rgba(0,0,0,0.42)" : "rgba(20,16,10,0.14)"
          } 100%)`,
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-noise" />

      {!presentation && (
        <>
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full opacity-70"
            aria-hidden
            preserveAspectRatio="none"
          >
            <g stroke={TONE_STROKE[tone]} strokeWidth={1} vectorEffect="non-scaling-stroke" fill="none">
              <path d="M5 13 V5 H13" />
              <path d="M87 5 H95 V13" />
              <path d="M95 87 V95 H87" />
              <path d="M13 95 H5 V87" />
            </g>
          </svg>

          <span
            className={clsx(
              "absolute left-4 top-4 text-[10px] font-semibold uppercase tracking-[0.18em] sm:left-5 sm:top-5",
              TONE_TEXT[tone]
            )}
            aria-hidden
          >
            {shotNumber}
          </span>

          <Monogram
            dark={!isDark}
            className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 opacity-[0.16]"
          />
        </>
      )}

      {children}

      {!presentation && (
        <p
          className={clsx(
            "absolute inset-x-4 text-[11px] font-semibold uppercase tracking-[0.12em] sm:inset-x-5",
            isDark ? "text-background/70" : "text-foreground/65",
            captionPosition === "bottom" ? "bottom-4 sm:bottom-5" : "top-4 sm:top-5"
          )}
        >
          {label}
        </p>
      )}
    </div>
  );
}

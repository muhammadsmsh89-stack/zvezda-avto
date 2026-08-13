"use client";

import { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
import { usePresentation } from "@/lib/presentation";

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
 * Stands in for photography we don't have yet — marked OWNER_ASSET_REQUIRED
 * per PHOTO_REQUIREMENTS.md. Renders real photography via next/image when
 * `desktopSrc` is supplied; otherwise a toned, vignetted field that reads as
 * an intentional editorial placeholder rather than an empty box. Dev chrome
 * (shot number, caption) hides under ?presentation=1 for client demos.
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
      aria-label={presentation ? undefined : `${label}. OWNER_ASSET_REQUIRED — фотография будет добавлена владельцем.`}
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
          >
            {shotNumber}
          </span>
        </>
      )}

      {children}

      {!presentation && (
        <div
          className={clsx(
            "absolute inset-x-0 border-border-strong/60 px-4 py-3 backdrop-blur-[2px] sm:px-5 sm:py-3.5",
            isDark ? "bg-deep/70" : "bg-surface/75",
            captionPosition === "bottom" ? "bottom-0 border-t" : "top-0 border-b"
          )}
        >
          <p
            className={clsx(
              "text-[10px] font-semibold uppercase tracking-[0.14em]",
              isDark ? "text-background/60" : "text-foreground/50"
            )}
          >
            OWNER_ASSET_REQUIRED · {label}
          </p>
          <p className={clsx("mt-0.5 text-[11px] leading-relaxed", isDark ? "text-background/40" : "text-muted/80")}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

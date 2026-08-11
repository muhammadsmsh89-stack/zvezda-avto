import { clsx } from "clsx";
import type { ReactNode } from "react";
import { DoorScene } from "@/components/art/DoorScene";

// Переиспользует ЕДИНСТВЕННЫЙ проработанный SVG-актив (DoorScene) в разных кадрах/тонах вместо
// плоских цветовых заглушек — визуальный QA показал, что flat-gradient "свотчи" читаются как
// мудборд, а не как интерьер. Здесь та же графика подаётся крупным планом, с обрезкой и тоном,
// плюс скрим для читаемости текста — тот же приём, что уже работает в hero.

type Tone = "default" | "dark" | "walnut" | "gold";
type Crop = "full" | "door" | "floor";

const toneFilter: Record<Tone, string> = {
  default: "none",
  dark: "brightness(0.4) contrast(1.15) saturate(0.9)",
  walnut: "sepia(0.55) saturate(1.6) brightness(0.6) hue-rotate(-8deg)",
  gold: "sepia(0.12) saturate(1.05) brightness(1) contrast(1.05)",
};

const cropScale: Record<Crop, string> = {
  full: "scale(1)",
  door: "scale(1.9) translateY(-6%)",
  floor: "scale(1.7) translateY(28%)",
};

export function DoorTexturePanel({
  tone = "default",
  crop = "full",
  variant = "double",
  scrim = true,
  className,
  children,
  slotId,
}: {
  tone?: Tone;
  crop?: Crop;
  variant?: "double" | "single";
  scrim?: boolean;
  className?: string;
  children?: ReactNode;
  slotId?: string;
}) {
  return (
    <div className={clsx("relative overflow-hidden", className)} data-photo-slot={slotId}>
      <div
        className="absolute inset-0"
        style={{ filter: toneFilter[tone], transform: cropScale[crop] }}
      >
        <DoorScene variant={variant} className="h-full w-full" />
      </div>
      {scrim && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(0deg, rgba(15,12,9,0.72) 0%, rgba(15,12,9,0.12) 45%, rgba(15,12,9,0) 65%)",
          }}
        />
      )}
      {children && <div className="relative z-10 flex h-full flex-col justify-end p-7">{children}</div>}
    </div>
  );
}

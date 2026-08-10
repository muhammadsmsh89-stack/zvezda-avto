import { DrawPath } from "@/components/ui/DrawPath";
import type { SceneVariant } from "@/data/media";

type SceneArtProps = {
  variant: SceneVariant;
  className?: string;
  preserveAspectRatio?: string;
};

// Авторская линия поверх студийного градиента (см. globals.css .scene-*) — замена
// стоковой автомобильной фотографии там, где реального кадра Liberty ещё нет.
// Каждый вариант читается как конкретный автомобильный мотив (кромка панели, поднятый
// угол плёнки, силуэт кузова), а не абстрактная декоративная линия.
//
// preserveAspectRatio по умолчанию "slice" (как object-cover у фото) — линия заполняет
// и обрезается по плоскости, а не сжимается по высоте в маленький остров по центру,
// как было бы с дефолтным "meet" внутри широких/высоких контейнеров (hero, final CTA).
export function SceneArt({ variant, className, preserveAspectRatio = "xMidYMid slice" }: SceneArtProps) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio={preserveAspectRatio} className={className} fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {variant === "sheen" && (
          <>
            <DrawPath d="M-20 205C110 130 240 235 420 95" strokeWidth={2} opacity={0.55} />
            <DrawPath d="M-20 245C120 190 250 270 420 165" strokeWidth={1} opacity={0.2} delay={0.15} />
          </>
        )}
        {variant === "panel" && (
          <>
            <DrawPath d="M-20 150C130 105 190 205 420 140" strokeWidth={1.5} opacity={0.5} />
            <path d="M-20 172C130 128 190 226 420 162" opacity={0.16} strokeWidth={1} />
          </>
        )}
        {variant === "ppf-edge" && (
          <>
            <path d="M400 0V96L304 0Z" fill="currentColor" opacity={0.14} stroke="none" />
            <DrawPath d="M400 0L304 0M304 0L400 96" strokeWidth={1.5} opacity={0.55} />
            <DrawPath d="M60 40V280" strokeWidth={1} opacity={0.22} delay={0.2} strokeDasharray="1 7" />
          </>
        )}
        {variant === "silhouette" && (
          <>
            <ellipse cx="200" cy="222" rx="128" ry="10" fill="currentColor" opacity={0.14} stroke="none" />
            <DrawPath
              d="M26 196c10-32 42-37 68-37h16c13-25 42-42 82-42s67 17 82 42h64c26 0 48 12 56 37M48 196a19 19 0 1 0 38 0 19 19 0 0 0-38 0ZM306 196a19 19 0 1 0 38 0 19 19 0 0 0-38 0Z"
              strokeWidth={1.6}
              opacity={0.6}
            />
            <DrawPath d="M118 122h100" strokeWidth={1} opacity={0.3} delay={0.25} />
          </>
        )}
        {variant === "macro" && (
          <>
            <DrawPath d="M40 280C-10 190 30 70 140 40" strokeWidth={1.6} opacity={0.5} />
            <DrawPath d="M70 280C30 210 60 110 150 80" strokeWidth={1} opacity={0.24} delay={0.15} />
            <DrawPath d="M100 280C70 230 90 150 160 120" strokeWidth={1} opacity={0.14} delay={0.28} />
          </>
        )}
        {variant === "grid" && (
          <DrawPath d="M40 60l70 30-14 80 84-8 46 70" strokeWidth={1.4} opacity={0.4} />
        )}
      </g>
    </svg>
  );
}

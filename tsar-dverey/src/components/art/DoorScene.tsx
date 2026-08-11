"use client";

// Оригинальная инлайн-SVG композиция — не фотография и не сток. Художественная интерпретация
// того, что подтверждено на реальных фото шоурума (2ГИС): остеклённые двери тёплого айвори с
// латунной фурнитурой, паркет-ёлочка, мягкая скрытая подсветка по периметру. Используется как
// hero-визуал и как основа для повторного текстурного применения (DoorTexturePanel), пока
// реальные фотографии не предоставлены клиентом — см. PHOTO_SLOTS.md.
//
// Градиенты/паттерны получают уникальный id на инстанс (useId) — при нескольких <DoorScene>
// на одной странице (интерьеры, коллекции) id не должны пересекаться между разными <svg>.

import { useId } from "react";

type DoorSceneProps = {
  className?: string;
  variant?: "double" | "single";
};

function HerringboneFloor({ y, height, uid }: { y: number; height: number; uid: string }) {
  const tileW = 34;
  const tileH = 12;
  return (
    <g>
      <defs>
        <pattern
          id={`herringbone-${uid}`}
          width={tileW * 2}
          height={tileH * 2}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          <rect width={tileW * 2} height={tileH * 2} fill="#cbab7c" />
          <g stroke="rgba(66,42,20,0.35)" strokeWidth="1">
            <rect x="0" y="0" width={tileW} height={tileH} fill="#d8bb8c" transform={`skewX(-28)`} />
            <rect x={tileW} y="0" width={tileW} height={tileH} fill="#c7a677" transform={`skewX(28)`} />
            <rect x="0" y={tileH} width={tileW} height={tileH} fill="#c7a677" transform={`skewX(28)`} />
            <rect x={tileW} y={tileH} width={tileW} height={tileH} fill="#d8bb8c" transform={`skewX(-28)`} />
          </g>
        </pattern>
        <linearGradient id={`floorFade-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#171310" stopOpacity="0.55" />
          <stop offset="0.35" stopColor="#171310" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y={y} width="800" height={height} fill={`url(#herringbone-${uid})`} />
      <rect x="0" y={y} width="800" height={height} fill={`url(#floorFade-${uid})`} />
    </g>
  );
}

const DOOR_TOP = 150;
const DOOR_HEIGHT = 600;

function DoorLeaf({ x, width, uid }: { x: number; width: number; uid: string }) {
  const cols = 2;
  const rows = 4;
  const frame = 10;
  const gap = 6;
  const paneW = (width - frame * 2 - gap * (cols - 1)) / cols;
  const paneAreaH = DOOR_HEIGHT - 64;
  const paneH = (paneAreaH - gap * (rows - 1)) / rows;

  const panes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      panes.push(
        <rect
          key={`${r}-${c}`}
          x={x + frame + c * (paneW + gap)}
          y={DOOR_TOP + 32 + r * (paneH + gap)}
          width={paneW}
          height={paneH}
          fill={`url(#glassGradient-${uid})`}
          stroke="#b3925a"
          strokeWidth="2"
        />
      );
    }
  }

  return (
    <g>
      <rect x={x} y={DOOR_TOP} width={width} height={DOOR_HEIGHT} rx="2" fill="#f2ead9" stroke="#b3925a" strokeWidth="2.5" />
      {panes}
      {/* латунная ручка */}
      <circle cx={x + width - 22} cy={DOOR_TOP + 320} r="4.5" fill="#b3925a" />
      <rect x={x + width - 24} y={DOOR_TOP + 316} width="14" height="3" rx="1.5" fill="#b3925a" opacity="0.7" />
    </g>
  );
}

export function DoorScene({ className, variant = "double" }: DoorSceneProps) {
  const uid = useId();

  return (
    <svg
      viewBox="0 0 800 1000"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Остеклённые межкомнатные двери тёплого айвори с латунной фурнитурой в интерьере"
    >
      <defs>
        <linearGradient id={`wallGradient-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efe6d4" />
          <stop offset="1" stopColor="#e4d6ba" />
        </linearGradient>
        <linearGradient id={`glassGradient-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbf7ee" stopOpacity="0.9" />
          <stop offset="1" stopColor="#d9cdb2" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={`coveLight-${uid}`} cx="0.5" cy="0" r="0.7">
          <stop offset="0" stopColor="#fff6e0" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff6e0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`vignette-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#171310" stopOpacity="0.28" />
          <stop offset="0.18" stopColor="#171310" stopOpacity="0" />
          <stop offset="0.82" stopColor="#171310" stopOpacity="0" />
          <stop offset="1" stopColor="#171310" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <rect width="800" height="1000" fill={`url(#wallGradient-${uid})`} />
      <rect width="800" height="140" fill={`url(#coveLight-${uid})`} opacity="0.8" />

      {/* архитектурная ниша за дверями */}
      <rect x="60" y="110" width="680" height="640" fill="#e9dcc0" opacity="0.5" />

      {variant === "double" ? (
        <>
          <DoorLeaf x={168} width={220} uid={uid} />
          <DoorLeaf x={412} width={220} uid={uid} />
        </>
      ) : (
        <DoorLeaf x={290} width={220} uid={uid} />
      )}

      <HerringboneFloor y={750} height={250} uid={uid} />
      <rect width="800" height="1000" fill={`url(#vignette-${uid})`} />
    </svg>
  );
}

/**
 * Контраст текста первого экрана поверх фотографии.
 *
 * Зачем отдельная проверка. Обычный check-contrast.mjs сравнивает токены
 * палитры между собой — там фон известен. На первом экране фон живой:
 * это фотография под тремя слоями затемнения. Стоит заменить кадр на более
 * светлый — и заголовок молча станет нечитаемым, никакая сборка об этом
 * не сообщит.
 *
 * Скрипт повторяет расчёт браузера: object-fit: cover с той же
 * object-position, три слоя plum поверх, затем альфа самого текста.
 * Берётся худший пиксель под каждым текстовым блоком.
 *
 * ВАЖНО: константы ниже дублируют разметку Hero.tsx. Меняете затемнение,
 * прозрачность текста или раскладку — правьте здесь же, иначе проверка
 * начнёт врать.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const IMAGE = path.join(ROOT, "public/clinic/reception.webp");

/* Опорный кадр: десктоп, на нём текстовые блоки шире всего разъезжаются. */
const W = 1440;
const H = 900;
const OBJECT_POSITION = [0.46, 0.38];

const PLUM = [0x2a, 0x1e, 0x26];
const SHELL = [0xf7, 0xf4, 0xf1];
const ACCENT_LIFT = [0xd9, 0xa9, 0xc6];

/* Три слоя затемнения из Hero.tsx, в порядке наложения. */
const BASE_ALPHA = 0.36; // bg-plum/36 на весь кадр
const TOP = { height: 0.38 * H, stops: [0.8, 0.35, 0] }; // сверху вниз
const BOTTOM = { height: 0.8 * H, stops: [1, 0.85, 0] }; // снизу вверх

/*
 * Текстовые блоки: координаты сняты с живого DOM при 1440×900.
 * alpha — прозрачность самого текста (text-shell/80 → 0.8).
 * need — порог WCAG AA: 4.5 обычный текст, 3.0 крупный (h1).
 */
const ZONES = [
  { label: "надзаголовок", rect: [48, 417, 400, 21], color: SHELL, alpha: 0.8, need: 4.5 },
  { label: "заголовок h1", rect: [48, 467, 747, 252], color: SHELL, alpha: 1, need: 3 },
  { label: "подпись «Направления:»", rect: [859, 530, 280, 30], color: SHELL, alpha: 0.75, need: 4.5 },
  { label: "печатающееся слово", rect: [1000, 530, 336, 30], color: ACCENT_LIFT, alpha: 1, need: 4.5 },
  { label: "лид-абзац", rect: [859, 559, 477, 58], color: SHELL, alpha: 0.8, need: 4.5 },
  { label: "строка доказательств", rect: [48, 795, 400, 30], color: SHELL, alpha: 0.7, need: 4.5 },
  { label: "шапка сайта", rect: [24, 12, 1392, 40], color: SHELL, alpha: 0.85, need: 4.5 },
];

const lum = (rgb) => {
  const c = rgb
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const contrast = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
const over = (fg, alpha, bg) => bg.map((b, i) => fg[i] * alpha + b * (1 - alpha));
const lerp = (a, b, t) => a + (b - a) * t;

/** Линейный градиент в три остановки: 0 %, 50 %, 100 %. */
const ramp = ([from, via, to], t) =>
  t < 0.5 ? lerp(from, via, t / 0.5) : lerp(via, to, (t - 0.5) / 0.5);

function scrimAlphas(vy) {
  const alphas = [BASE_ALPHA];
  if (vy < TOP.height) alphas.push(ramp(TOP.stops, vy / TOP.height));
  if (vy > H - BOTTOM.height) alphas.push(ramp(BOTTOM.stops, (H - vy) / BOTTOM.height));
  return alphas;
}

const { data, info } = await sharp(IMAGE)
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: iw, height: ih, channels } = info;
const scale = Math.max(W / iw, H / ih);
const offsetX = (W - iw * scale) * OBJECT_POSITION[0];
const offsetY = (H - ih * scale) * OBJECT_POSITION[1];

function pixelAt(vx, vy) {
  const ix = Math.round((vx - offsetX) / scale);
  const iy = Math.round((vy - offsetY) / scale);
  const x = Math.max(0, Math.min(iw - 1, ix));
  const y = Math.max(0, Math.min(ih - 1, iy));
  const o = (y * iw + x) * channels;
  return [data[o], data[o + 1], data[o + 2]];
}

let failed = 0;
console.log(`Кадр: ${path.relative(ROOT, IMAGE)} ${iw}×${ih}`);
console.log(`Опорный экран: ${W}×${H}\n`);

for (const { label, rect, color, alpha, need } of ZONES) {
  const [rx, ry, rw, rh] = rect;
  let worst = Infinity;
  let at = null;

  for (let vy = ry; vy < ry + rh; vy += 2) {
    const alphas = scrimAlphas(vy);
    for (let vx = rx; vx < rx + rw; vx += 4) {
      let bg = pixelAt(vx, vy);
      for (const a of alphas) bg = over(PLUM, a, bg);
      const ratio = contrast(over(color, alpha, bg), bg);
      if (ratio < worst) {
        worst = ratio;
        at = [vx, vy];
      }
    }
  }

  const ok = worst >= need;
  if (!ok) failed++;
  console.log(
    `${ok ? " ok " : "FAIL"}  ${worst.toFixed(2).padStart(5)} : 1  (нужно ${need})  ${label}` +
      (ok ? "" : `  — худшая точка ${at[0]},${at[1]}`),
  );
}

console.log(
  failed
    ? `\nНе проходят: ${failed}. Затемните кадр сильнее или поднимите прозрачность текста в Hero.tsx.`
    : "\nВесь текст первого экрана проходит WCAG AA поверх фотографии.",
);
process.exit(failed ? 1 : 0);

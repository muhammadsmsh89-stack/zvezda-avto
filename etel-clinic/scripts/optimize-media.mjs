// Пережимает сырые фото из scripts/import/assets-orig в public/ как WebP.
// Сырьё в git не попадает (см. .gitignore) — этот скрипт восстанавливает
// готовые файлы из него, повторный запуск идемпотентен.
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW = path.join(ROOT, "scripts/import/assets-orig");
const PUBLIC = path.join(ROOT, "public");

async function convert(srcDir, destDir, { width, quality = 82 }) {
  if (!existsSync(srcDir)) return;
  await mkdir(destDir, { recursive: true });
  const files = await readdir(srcDir);
  for (const file of files) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const src = path.join(srcDir, file);
    const destName = file.replace(/\.(jpe?g|png)$/i, ".webp");
    const dest = path.join(destDir, destName);
    const img = sharp(src).rotate();
    const resized = width ? img.resize({ width, withoutEnlargement: true }) : img;
    await resized.webp({ quality }).toFile(dest);
    console.log("optimized", path.relative(ROOT, dest));
  }
}

const CLINIC_KEEP = new Set([
  "romashina.jpg",
  "salon-sovietsky.jpg",
  "oktyabrya.jpg",
  "duki.jpg",
  "about-general.jpg",
  "salon2.jpg",
]);

async function convertClinic() {
  const srcDir = path.join(RAW, "clinic");
  const destDir = path.join(PUBLIC, "clinic");
  if (!existsSync(srcDir)) return;
  await mkdir(destDir, { recursive: true });
  const files = await readdir(srcDir);
  for (const file of files) {
    if (!CLINIC_KEEP.has(file)) continue;
    const src = path.join(srcDir, file);
    const destName = file.replace(/\.(jpe?g|png)$/i, ".webp");
    const dest = path.join(destDir, destName);
    await sharp(src).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 84 }).toFile(dest);
    console.log("optimized", path.relative(ROOT, dest));
  }
}

await convert(path.join(RAW, "doctors"), path.join(PUBLIC, "doctors"), { width: 640, quality: 82 });
await convert(path.join(RAW, "equipment"), path.join(PUBLIC, "equipment"), { width: 700, quality: 84 });
await convertClinic();

// Логотип-растр сохраняем как небольшой файл — используется только как
// маленькая фолбэк-иконка (favicon-класс), крупный вордмарк — типографический.
const logoSrc = path.join(RAW, "brand/logo-raster.png");
if (existsSync(logoSrc)) {
  await mkdir(path.join(PUBLIC, "brand"), { recursive: true });
  await sharp(logoSrc).toFile(path.join(PUBLIC, "brand/logo-raster.png"));
  console.log("optimized public/brand/logo-raster.png");
}

console.log("done");

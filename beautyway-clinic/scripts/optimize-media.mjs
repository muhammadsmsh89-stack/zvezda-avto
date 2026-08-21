import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = '/private/tmp/claude-501/-Users-patyasaidova-Desktop-10K-websites/bcf941df-097b-471d-a690-5b92dcf20735/scratchpad/bw/assets-orig';
const DST = '/Users/patyasaidova/Desktop/10K websites/zvezda-avto/beautyway-clinic/public/media';

const PLAN = {
  doctors:       { widths: [400, 800],  fit: 'cover',   ratio: 3 / 4 },
  equipment:     { widths: [420, 840],  fit: 'contain', ratio: 1 },
  works:         { widths: [320, 640],  fit: 'cover',   ratio: 1 },
  branches:      { widths: [640, 1280], fit: 'cover',   ratio: 4 / 3 },
  interior:      { widths: [720, 1440], fit: 'cover',   ratio: 16 / 10 },
  licenses:      { widths: [300, 900],  fit: 'contain', ratio: null },
  video:         { widths: [300, 600],  fit: 'cover',   ratio: 300 / 530 },
  vreviews:      { widths: [300, 600],  fit: 'cover',   ratio: 300 / 530 },
};

const walk = (d) => fs.readdirSync(d, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);

const files = walk(SRC);
let n = 0, bytesIn = 0, bytesOut = 0;
const report = [];

for (const f of files) {
  const relDir = path.relative(SRC, path.dirname(f));
  const stem = path.basename(f).replace(/\.[a-z0-9]+$/i, '');
  const plan = PLAN[relDir];
  bytesIn += fs.statSync(f).size;

  if (!plan) { // logo — keep transparency, single small PNG + webp
    const outDir = path.join(DST, relDir || '.');
    fs.mkdirSync(outDir, { recursive: true });
    const base = sharp(f).resize({ width: 320, withoutEnlargement: true });
    await base.clone().png({ quality: 90, compressionLevel: 9 }).toFile(path.join(outDir, `${stem}.png`));
    await base.clone().webp({ quality: 88 }).toFile(path.join(outDir, `${stem}.webp`));
    n++; continue;
  }

  const outDir = path.join(DST, relDir);
  fs.mkdirSync(outDir, { recursive: true });
  const meta = await sharp(f).metadata();

  for (const w of plan.widths) {
    const h = plan.ratio ? Math.round(w / plan.ratio) : undefined;
    let pipe = sharp(f).rotate();
    if (h) pipe = pipe.resize(w, h, { fit: plan.fit, position: 'attention',
                                      background: { r: 252, g: 250, b: 247, alpha: 1 } });
    else   pipe = pipe.resize({ width: w, withoutEnlargement: true });

    const avif = path.join(outDir, `${stem}-${w}.avif`);
    const webp = path.join(outDir, `${stem}-${w}.webp`);
    await pipe.clone().avif({ quality: 52, effort: 4 }).toFile(avif);
    await pipe.clone().webp({ quality: 76 }).toFile(webp);
    bytesOut += fs.statSync(avif).size + fs.statSync(webp).size;
  }
  const w0 = plan.widths[plan.widths.length - 1];
  report.push({ file: path.join(relDir, stem), origW: meta.width, origH: meta.height,
                ratio: plan.ratio, widths: plan.widths, maxW: w0 });
  n++;
  if (n % 50 === 0) console.log(`  ...${n}/${files.length}`);
}
fs.writeFileSync(path.join(path.dirname(SRC), 'optimize-report.json'), JSON.stringify(report, null, 1));
console.log(`DONE ${n} sources -> ${(bytesOut / 1048576).toFixed(2)} MB optimized (from ${(bytesIn / 1048576).toFixed(2)} MB)`);

import sharp from 'sharp';
const SRC = '/private/tmp/claude-501/-Users-patyasaidova-Desktop-10K-websites/bcf941df-097b-471d-a690-5b92dcf20735/scratchpad/bw/assets-orig/logo.png';
const meta = await sharp(SRC).metadata();
console.log('orig', meta.width, meta.height);
// Знак-лебедь занимает верхнюю часть; словесный знак ниже отрисовываем текстом.
const img = sharp(SRC).extract({ left: 60, top: 4, width: 180, height: 142 }).trim({ threshold: 12 });
const buf = await img.png().toBuffer();
const m2 = await sharp(buf).metadata();
console.log('cropped', m2.width, m2.height);
// Знак показывается высотой 24 px; 72 px хватает вплоть до DPR 3.
await sharp(buf).resize({ height: 72 })
  .png({ compressionLevel: 9, palette: true, quality: 92 }).toFile('public/media/swan.png');
await sharp(buf).resize({ height: 72 }).webp({ quality: 90 }).toFile('public/media/swan.webp');
console.log('done');

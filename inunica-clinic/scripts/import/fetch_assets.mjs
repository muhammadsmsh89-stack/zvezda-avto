/**
 * Скачивает ЛОКАЛЬНЫЕ копии всех фотографий inunica.ru (без хотлинка на Tilda CDN).
 * Вежливость: одно соединение, пауза 350 мс, докачка с места обрыва.
 * Библиотечные иконки и скрипты Tilda не переносим — они не наш контент.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DST = path.join(ROOT, 'assets-orig');
fs.mkdirSync(DST, { recursive: true });

const items = JSON.parse(fs.readFileSync(path.join(ROOT, 'images.json'), 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Имя файла: хеш каталога Tilda + исходное имя. Так имена не сталкиваются.
const nameFor = (u) => {
  const parts = new URL(u).pathname.split('/').filter(Boolean);
  const hash = (parts.at(-2) || '').replace(/^tild/, '').slice(0, 8);
  return `${hash}-${parts.at(-1)}`.replace(/[^A-Za-z0-9._-]/g, '_');
};

let ok = 0, skipped = 0, failed = 0;
const manifest = [];

for (const { url, pages } of items) {
  const name = nameFor(url);
  const out = path.join(DST, name);
  manifest.push({ url, name, pages });
  if (fs.existsSync(out) && fs.statSync(out).size > 1024) { skipped++; continue; }
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        'Referer': 'https://inunica.ru/',
      },
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()));
    ok++;
  } catch (e) {
    failed++;
    console.log(`  FAIL ${name} — ${e.message}`);
  }
  await sleep(350);
}

fs.writeFileSync(path.join(ROOT, 'assets-manifest.json'), JSON.stringify(manifest, null, 2));
const bytes = fs.readdirSync(DST).reduce((n, f) => n + fs.statSync(path.join(DST, f)).size, 0);
console.log(`скачано ${ok}, пропущено ${skipped}, ошибок ${failed} — ${(bytes / 1e6).toFixed(1)} МБ`);

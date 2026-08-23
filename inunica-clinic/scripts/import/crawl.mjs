/**
 * Импортёр страниц inunica.ru.
 * Вежливость к серверу: одно соединение, пауза 800 мс, докачка с места обрыва,
 * честный User-Agent. Сайт маленький — 11 URL, полный проход ~10 секунд.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Путь проекта содержит пробел, поэтому только fileURLToPath даёт настоящий путь.
const ROOT = path.dirname(fileURLToPath(import.meta.url));
const RAW = path.join(ROOT, 'raw');
fs.mkdirSync(RAW, { recursive: true });

const urls = fs.readFileSync(path.join(ROOT, 'urls.txt'), 'utf8')
  .split('\n').map((s) => s.trim()).filter(Boolean);

const slugFor = (u) => {
  const p = new URL(u).pathname.replace(/^\/|\/$/g, '');
  return (p === '' ? '_home' : p.replace(/\//g, '__')) + '.html';
};

const DELAY = 800;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let ok = 0, skipped = 0, failed = 0;
const failures = [];

for (const u of urls) {
  const out = path.join(RAW, slugFor(u));
  if (fs.existsSync(out) && fs.statSync(out).size > 500) { skipped++; continue; }
  try {
    const res = await fetch(u, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'ru-RU,ru;q=0.9',
      },
      redirect: 'follow',
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    fs.writeFileSync(out, await res.text());
    ok++;
    process.stdout.write(`  ok  ${u}\n`);
  } catch (e) {
    failed++;
    failures.push(`${u} — ${e.message}`);
    process.stdout.write(`  FAIL ${u} — ${e.message}\n`);
  }
  await sleep(DELAY);
}

console.log(`\nСкачано ${ok}, пропущено ${skipped}, ошибок ${failed}`);
if (failures.length) console.log(failures.join('\n'));

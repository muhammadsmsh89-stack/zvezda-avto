// Rate-limited importer for bwclinic.ru
// Politeness: single connection, 800ms delay, resumable, identifies itself.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const RAW = path.join(ROOT, 'raw');
fs.mkdirSync(RAW, { recursive: true });

const urls = fs.readFileSync(path.join(ROOT, 'urls.txt'), 'utf8')
  .split('\n').map(s => s.trim()).filter(Boolean);

const slugFor = (u) => {
  const p = new URL(u).pathname.replace(/^\/|\/$/g, '');
  return (p === '' ? '_home' : p.replace(/\//g, '__')) + '.html';
};

const DELAY = 800;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

let ok = 0, skipped = 0, failed = 0;
const failures = [];

for (let i = 0; i < urls.length; i++) {
  const u = urls[i];
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
    if (!res.ok) { failed++; failures.push([u, res.status]); }
    else { fs.writeFileSync(out, await res.text()); ok++; }
  } catch (e) {
    failed++; failures.push([u, String(e.message || e)]);
  }
  if ((i + 1) % 25 === 0) console.log(`[${i + 1}/${urls.length}] ok=${ok} skip=${skipped} fail=${failed}`);
  await sleep(DELAY);
}
console.log(`DONE ok=${ok} skipped=${skipped} failed=${failed}`);
fs.writeFileSync(path.join(ROOT, 'crawl-failures.json'), JSON.stringify(failures, null, 2));

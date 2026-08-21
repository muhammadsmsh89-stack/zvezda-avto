/** SEO-проверка собранного экспорта: уникальность мета, canonical, OG, JSON-LD. */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'out');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const htmls = walk(OUT).filter(f => f.endsWith('.html') && !f.endsWith('404.html'));

const titles = new Map(), descs = new Map();
const noCanonical = [], noDesc = [], noOg = [], longTitle = [], shortDesc = [], noRobots = [];
const ldTypes = new Map();
let faqPages = 0, faqWithoutVisible = 0;

for (const f of htmls) {
  const rel = '/' + path.relative(OUT, f).split(path.sep).join('/').replace(/index\.html$/, '');
  const h = fs.readFileSync(f, 'utf8');

  const t = h.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const d = h.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  titles.set(t, [...(titles.get(t) ?? []), rel]);
  descs.set(d, [...(descs.get(d) ?? []), rel]);
  if (t.length > 125) longTitle.push(`${rel} (${t.length})`);
  if (!d) noDesc.push(rel); else if (d.length < 60) shortDesc.push(`${rel} (${d.length})`);
  if (!/<link rel="canonical"/.test(h)) noCanonical.push(rel);
  if (!/property="og:title"/.test(h)) noOg.push(rel);
  if (!/name="robots"[^>]*noindex/.test(h)) noRobots.push(rel);

  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const j = JSON.parse(m[1].replace(/\\u003c/g, '<'));
      const arr = Array.isArray(j) ? j : [j];
      for (const n of arr) ldTypes.set(n['@type'], (ldTypes.get(n['@type']) ?? 0) + 1);
      if (arr.some(n => n['@type'] === 'FAQPage')) {
        faqPages++;
        if (!/<details/.test(h)) faqWithoutVisible++;
      }
      if (arr.some(n => n.aggregateRating || n['@type'] === 'AggregateRating')) {
        console.log('!! AggregateRating найден на', rel);
      }
    } catch { console.log('!! невалидный JSON-LD на', rel); }
  }
}

const dupes = (m) => [...m.entries()].filter(([k, v]) => k && v.length > 1);
const rep = (label, rows, lim = 5) => {
  console.log(`${rows.length ? '✗' : '✓'} ${label}: ${rows.length}`);
  rows.slice(0, lim).forEach(r => console.log('    ', Array.isArray(r) ? `«${r[0].slice(0,60)}» → ${r[1].length} стр.` : r));
  if (rows.length > lim) console.log(`     …ещё ${rows.length - lim}`);
};

console.log(`Страниц: ${htmls.length}\n`);
rep('Дубли <title>', dupes(titles));
rep('Дубли description', dupes(descs));
rep('Без canonical', noCanonical);
rep('Без description', noDesc);
rep('Короткие description (<60)', shortDesc);
rep('Длинные title (>125)', longTitle);
rep('Без Open Graph', noOg);
rep('Без noindex (демоверсия)', noRobots);
console.log(`\nFAQPage-разметка: ${faqPages} стр., из них без видимого FAQ: ${faqWithoutVisible}`);
console.log('JSON-LD типы:', [...ldTypes.entries()].map(([k, v]) => `${k}=${v}`).join(', '));

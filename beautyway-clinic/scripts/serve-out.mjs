/** Статический сервер для проверки production-экспорта (out/) с basePath. */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const OUT = path.join(process.cwd(), 'out');
const BASE = '/zvezda-avto/beautyway-clinic';
const PORT = Number(process.env.PORT || 4600);
const TYPES = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css',
  '.json':'application/json', '.txt':'text/plain; charset=utf-8', '.svg':'image/svg+xml',
  '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp', '.avif':'image/avif',
  '.woff2':'font/woff2', '.mp4':'video/mp4', '.xml':'application/xml' };

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.startsWith(BASE)) p = p.slice(BASE.length) || '/';
  let file = path.join(OUT, p);
  if (!file.startsWith(OUT)) { res.writeHead(403).end(); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) {
    const alt = file.replace(/\/$/, '') + '/index.html';
    if (fs.existsSync(alt)) file = alt;
    else { res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
           res.end(fs.existsSync(path.join(OUT,'404.html')) ? fs.readFileSync(path.join(OUT,'404.html')) : 'Not found'); return; }
  }
  const ext = path.extname(file).toLowerCase();
  const body = fs.readFileSync(file);
  const headers = { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' };
  // GitHub Pages отдаёт текстовые ресурсы сжатыми — воспроизводим для честного замера.
  if (/^(text|application\/(javascript|json|xml)|image\/svg)/.test(headers['Content-Type']) &&
      (req.headers['accept-encoding'] || '').includes('gzip')) {
    const gz = zlib.gzipSync(body);
    res.writeHead(200, { ...headers, 'Content-Encoding': 'gzip', 'Content-Length': gz.length });
    res.end(gz);
  } else {
    res.writeHead(200, { ...headers, 'Content-Length': body.length });
    res.end(body);
  }
}).listen(PORT, () => console.log(`static export on http://localhost:${PORT}${BASE}/`));

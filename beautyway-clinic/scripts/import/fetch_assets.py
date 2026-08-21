# -*- coding: utf-8 -*-
"""Rate-limited first-party asset importer. Saves LOCAL copies (no hotlinking)."""
import json, os, re, time, urllib.request, hashlib

ROOT = os.path.dirname(os.path.abspath(__file__))
PROJ = "/Users/patyasaidova/Desktop/10K websites/zvezda-avto/beautyway-clinic"
ORIG = os.path.join(ROOT, 'assets-orig')
os.makedirs(ORIG, exist_ok=True)

docs = json.load(open(os.path.join(ROOT, 'extracted.json'), encoding='utf-8'))
by = {d['path'].rstrip('/') or '/': d for d in docs}

manifest = []          # {src, kind, page, localName}
seen = set()

def add(src, kind, page, name, alt=''):
    if not src: return
    src = src.strip()
    if src.startswith('assets/'): src = '/' + src
    if not src.startswith('/'): return
    key = (src, name)
    if src in seen: return
    seen.add(src)
    manifest.append({'src': 'https://bwclinic.ru' + src, 'kind': kind, 'page': page,
                     'name': name, 'alt': alt})

def safe(s):
    return re.sub(r'[^a-z0-9._-]+', '-', s.lower()).strip('-')[:100]

# 1. Логотип
add('/assets/cache/images/logo.7c04b393.png', 'logo', '/', 'logo.png', 'BeautyWay Clinic')

# 2. Врачи
for d in docs:
    if d['type'] != 'doctor': continue
    di = d.get('doctor') or {}
    slug = d['path'][len('/vrachi/'):].rstrip('/')
    add(di.get('photo'), 'doctor', d['path'], f'doctors/{safe(slug)}.jpg', d.get('h1') or '')

# 3. Оборудование
for d in docs:
    if d['type'] != 'equipment': continue
    slug = d['path'].strip('/')
    img = next((i['src'] for i in d['images'] if 'uploaded' in i['src']), None)
    add(img, 'equipment', d['path'], f'equipment/{safe(slug)}.png', d.get('h1') or '')

# 4. Филиалы + интерьер
add('/assets/cache/images/content/contacts/s.07f921f2.jpg', 'branch', '/contacts', 'branches/strastnoy.jpg', 'Клиника BeautyWay на Страстном бульваре')
add('/assets/cache/images/content/contacts/m.a524108e.jpg', 'branch', '/contacts', 'branches/myasnitskaya.jpg', 'Клиника BeautyWay на Мясницкой')
add('/assets/cache/images/video_interior_5_poster.d0ba0fcd.jpg', 'interior', '/', 'interior/clinic-poster.jpg', 'Интерьер клиники BeautyWay')

# 5. Лицензии и сертификаты
lic = by.get('/liczenzii-i-sertifikatyi')
if lic:
    for n, im in enumerate(lic['images'][:9], 1):
        add(im['src'], 'license', '/liczenzii-i-sertifikatyi', f'licenses/doc-{n:02d}.jpg', im['alt'] or 'Лицензия / сертификат BeautyWay Clinic')

# 6. Видеопостеры (главная + /video)
vp = []
for p in ['/video', '/']:
    d = by.get(p)
    if d: vp += d.get('videoPosters', [])
for n, v in enumerate(vp[:14], 1):
    add(v['poster'], 'video-poster', '/video', f'video/poster-{safe(v["title"]) or n}.jpg', v['title'])

# 7. Работы до/после — курируем: до 4 на услугу, приоритет разделам навигации
tax = json.load(open(os.path.join(PROJ, 'src/data/generated/taxonomy.json'), encoding='utf-8'))
priority = []
for c in tax:
    priority.append(c['slug'])
    priority += [ch['slug'] for ch in c['children']]
order = {s: i for i, s in enumerate(priority)}
svc_docs = [d for d in docs if d['type'] == 'service' and d['works']]
svc_docs.sort(key=lambda d: order.get(d['path'][len('/uslugi/'):].rstrip('/'), 9999))
count = 0
for d in svc_docs:
    slug = d['path'][len('/uslugi/'):].rstrip('/')
    for n, w in enumerate(d['works'][:4], 1):
        if count >= 200: break
        add(w['thumb'], 'work', d['path'], f'works/{safe(slug)}-{n}.jpg', w['alt'] or '')
        count += 1
    if count >= 200: break

json.dump(manifest, open(os.path.join(ROOT, 'asset-manifest.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=1)
print('manifest entries:', len(manifest))
from collections import Counter
print(Counter(m['kind'] for m in manifest).most_common())

# ---- скачивание с паузой
ok = fail = skip = 0
failures = []
for m in manifest:
    dest = os.path.join(ORIG, m['name'])
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    if os.path.exists(dest) and os.path.getsize(dest) > 200:
        skip += 1; continue
    try:
        req = urllib.request.Request(m['src'], headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36',
            'Referer': 'https://bwclinic.ru/'})
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read()
        open(dest, 'wb').write(data)
        ok += 1
    except Exception as e:
        fail += 1; failures.append([m['src'], str(e)])
    time.sleep(0.35)
    if (ok + fail) % 40 == 0: print(f'  ...{ok+fail} downloaded (ok={ok} fail={fail})')
print(f'DONE ok={ok} skip={skip} fail={fail}')
json.dump(failures, open(os.path.join(ROOT, 'asset-failures.json'), 'w'), indent=1)

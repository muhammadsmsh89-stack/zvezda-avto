# -*- coding: utf-8 -*-
import json, os, re, subprocess, time, urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
PROJ = "/Users/patyasaidova/Desktop/10K websites/zvezda-avto/beautyway-clinic"
FF = os.path.join(ROOT, 'tools/node_modules/ffmpeg-static/ffmpeg')
TMP = os.path.join(ROOT, 'video-tmp'); os.makedirs(TMP, exist_ok=True)
POST = os.path.join(ROOT, 'assets-orig/vreviews'); os.makedirs(POST, exist_ok=True)
os.makedirs(os.path.join(PROJ, 'public/video'), exist_ok=True)

DOCTOR = {
    'Solopenkova': 'solopenkova-evgeniya',
    'Hanina': 'khanina-alena-sergeevna',
    'Gerasimova': 'gerasimova-tatyana-yurevna',
    'Pahomova': 'paxomova-irina',
    'Yakupova': 'yakupova-rinata-rinatovna',
    'Yadrovskaya': 'yadrovskaya-alina-sergeevna-vrach-kosmetolog-dermatovenerolog-trixolog',
    'Terehina': 'terexina-tatyana-dmitrievna-vrach-xirurg-onkolog',
    'Tarasova': 'tarasova-anna-sergeevna-kosmetolog-estetist-speczialist-lazernoj-epilyaczii',
}
# Реально встраиваем 6 видеоотзывов; остальные показываем постерами.
EMBED = {'Tarasova/1', 'Yadrovskaya/1', 'Yakupova/1', 'Hanina/1', 'Gerasimova/1', 'Pahomova/1'}

src = json.load(open(os.path.join(ROOT, 'video-reviews-src.json'), encoding='utf-8'))
UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36',
      'Referer': 'https://bwclinic.ru/'}

def get(url, dest):
    if os.path.exists(dest) and os.path.getsize(dest) > 500: return True
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=120) as r:
            open(dest, 'wb').write(r.read())
        return True
    except Exception as e:
        print('  FAIL', url, e); return False

out = []
for item in src:
    m = re.search(r'reviews/([^/]+)/(\d+)/', item['video'])
    if not m: continue
    folder, idx = m.group(1), m.group(2)
    key = f'{folder}/{idx}'
    slug = f'{folder.lower()}-{idx}'
    # постер
    pdest = os.path.join(POST, slug + '.webp')
    if not get('https://bwclinic.ru' + item['poster'], pdest): continue
    rec = {
        'id': slug,
        'poster': f'vreviews/{slug}',
        'title': item['alt'].replace(' отзывы, результат до и после.', '').strip(),
        'doctor': DOCTOR.get(folder),
        'video': None,
    }
    if key in EMBED:
        raw = os.path.join(TMP, slug + '.mp4')
        if get('https://bwclinic.ru/' + item['video'].lstrip('/'), raw):
            dest = os.path.join(PROJ, 'public/video', slug + '.mp4')
            if not os.path.exists(dest):
                subprocess.run([FF, '-y', '-loglevel', 'error', '-i', raw,
                                '-vf', "scale='min(540,iw)':-2",
                                '-c:v', 'libx264', '-preset', 'slow', '-crf', '32',
                                '-profile:v', 'main', '-pix_fmt', 'yuv420p',
                                '-movflags', '+faststart',
                                '-c:a', 'aac', '-b:a', '56k', '-ac', '1',
                                dest], check=False)
            if os.path.exists(dest):
                rec['video'] = slug + '.mp4'
                print(f'  {slug}: {os.path.getsize(raw)//1024}KB -> {os.path.getsize(dest)//1024}KB')
    out.append(rec)
    time.sleep(0.3)

json.dump(out, open(os.path.join(PROJ, 'src/data/generated/video-reviews.json'), 'w', encoding='utf-8'),
          ensure_ascii=False, indent=0)
print('video reviews:', len(out), '| embedded:', sum(1 for r in out if r['video']))

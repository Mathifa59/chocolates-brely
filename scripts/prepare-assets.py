"""Optimiza copias de las fotos originales. No altera el empaque ni su contenido."""
from pathlib import Path
from PIL import Image, ImageOps
import json

root = Path(__file__).resolve().parent.parent
originals = sorted(root.parent.glob('WhatsApp*.jpeg'))
output = root / 'public' / 'images'
output.mkdir(parents=True, exist_ok=True)
names = ['frutos-rojos', 'granilla-de-cacao', 'intenso', 'arandano', 'pecana',
         'mora', 'quinua-tostada', 'aguaymanto', 'almendra', 'caramelo-sal-de-maras',
         'pistacho', 'damasco', 'coco', 'limon', 'pasas-con-ron', 'excelencia',
         'maracuya', 'mango', 'kiwicha', 'sal-de-maras', 'kiwi', 'platano',
         'hojas-de-coca', 'profundo', 'naranja', 'menta', 'cafe', 'mani',
         'lucuma', 'maca', 'cereza']
sources = []
for index, (source, name) in enumerate(zip(originals, names, strict=True)):
    image = ImageOps.exif_transpose(Image.open(source))
    if index == 23:
        image = image.rotate(90, expand=True)
    image.thumbnail((900, 1600), Image.Resampling.LANCZOS)
    target = output / f'{name}.webp'
    image.save(target, 'WEBP', quality=84, method=6)
    sources.append({'id': name, 'original': source.name, 'image': f'/images/{name}.webp'})
(root / 'src' / 'data').mkdir(parents=True, exist_ok=True)
(root / 'src' / 'data' / 'image-sources.json').write_text(json.dumps(sources, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'{len(sources)} fotografías optimizadas: {sum(p.stat().st_size for p in output.glob("*.webp")) / 1024:.0f} KB')

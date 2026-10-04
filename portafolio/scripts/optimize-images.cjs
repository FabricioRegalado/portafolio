const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const originals = path.join(root, 'assets/originals');
const output = path.join(root, 'public');

async function optimizeImages() {
  await fs.mkdir(path.join(output, 'images'), { recursive: true });
  await fs.mkdir(path.join(root, 'src/data'), { recursive: true });

  const logo = path.join(originals, 'LOGO2026.png');
  for (const [name, size] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180], ['logo192.png', 192], ['logo512.png', 512]]) {
    await sharp(logo).resize(size, size).png({ palette: true, colours: 256, effort: 10, compressionLevel: 9 }).toFile(path.join(output, name));
  }
  await sharp(logo).resize(192, 192).webp({ quality: 90, effort: 6 }).toFile(path.join(output, 'images/logo.webp'));

  // An ICO containing a PNG image also covers browsers requesting /favicon.ico.
  const icon = await fs.readFile(path.join(output, 'favicon-32.png'));
  const header = Buffer.alloc(22);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header[6] = 32;
  header[7] = 32;
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(icon.length, 14);
  header.writeUInt32LE(22, 18);
  await fs.writeFile(path.join(output, 'favicon.ico'), Buffer.concat([header, icon]));

  const source = await fs.readFile(path.join(root, 'src/components/Projects.js'), 'utf8');
  const usedImages = new Set(['hero-image', ...Array.from(source.matchAll(/['"]([\w-]+)['"]/g), (match) => match[1])]);
  const manifest = {};
  let originalBytes = 0;
  let optimizedBytes = 0;

  for (const filename of await fs.readdir(path.join(originals, 'images'))) {
    const name = path.parse(filename).name;
    if (!usedImages.has(name)) continue;
    const input = path.join(originals, 'images', filename);
    const metadata = await sharp(input).metadata();
    const fullWidth = Math.min(metadata.width, 1600);
    const widths = [...[480, 960].filter((width) => width < fullWidth * 0.85), fullWidth];
    manifest[name] = [];
    originalBytes += (await fs.stat(input)).size;

    for (const width of widths) {
      const file = `images/${name}-${width}.webp`;
      const result = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
        .webp({ quality: name === 'hero-image' ? 82 : 88, effort: 6 }).toFile(path.join(output, file));
      manifest[name].push({ src: file, width: result.width, height: result.height });
      optimizedBytes += result.size;
    }
  }

  await fs.writeFile(path.join(root, 'src/data/images.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(JSON.stringify({ images: Object.keys(manifest).length, originalBytes, optimizedBytes }, null, 2));
}

optimizeImages().catch((error) => { console.error(error); process.exitCode = 1; });

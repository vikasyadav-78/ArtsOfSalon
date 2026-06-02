const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'public', 'images');

fs.readdir(imagesDir, async (err, files) => {
  if (err) {
    console.error('Error reading images directory:', err);
    return;
  }

  console.log(`Found ${files.length} files in public/images. Starting conversion to WebP...\n`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(imagesDir, file);
      const nameWithoutExt = path.basename(file, ext);
      const outputPath = path.join(imagesDir, `${nameWithoutExt}.webp`);

      try {
        const info = await sharp(inputPath)
          .webp({ quality: 82 }) // Premium quality WebP
          .toFile(outputPath);

        const oldSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
        const newSize = (info.size / 1024).toFixed(1);
        const savings = ((1 - info.size / fs.statSync(inputPath).size) * 100).toFixed(1);

        console.log(`[Converted] ${file} (${oldSize} KB) -> ${nameWithoutExt}.webp (${newSize} KB) | Saved ${savings}%`);
      } catch (error) {
        console.error(`Error converting ${file}:`, error);
      }
    }
  }

  console.log('\nConversion complete.');
});

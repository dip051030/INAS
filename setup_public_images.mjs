import fs from 'fs';
import path from 'path';

if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}
if (!fs.existsSync('public/images')) {
  fs.mkdirSync('public/images');
}

const files = fs.readdirSync('downloaded_images');
for (const file of files) {
  fs.copyFileSync(
    path.join('downloaded_images', file),
    path.join('public/images', file)
  );
  console.log(`Copied ${file} to public/images/`);
}

import fs from 'fs';
import path from 'path';

const siteData = fs.readFileSync('data/siteData.ts', 'utf8');

const imgRegex = /"imgSrc":\s*["']([^"']+)["']/g;
let m;
let missing = 0;
let total = 0;
while ((m = imgRegex.exec(siteData)) !== null) {
  total++;
  const relPath = m[1].replace(/^\//, '');
  const fullPath = path.join('public', relPath);
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING IMAGE:', m[1], '-> expected at', fullPath);
    missing++;
  } else {
    console.log('OK:', m[1]);
  }
}

console.log(`\nChecked ${total} images.`);
if (missing === 0) {
  console.log('All images verified! None missing.');
} else {
  console.error(`${missing} images are missing!`);
}

import fs from 'fs';

const pages = ['page.html', ...fs.readdirSync('scraped_pages').filter(f => f.endsWith('.html')).map(f => `scraped_pages/${f}`)];

const imageUrls = new Set();
for (const p of pages) {
  const content = fs.readFileSync(p, 'utf8');
  const imgRegex = /<img\s+[^>]*src=["']([^"']*)["'][^>]*>/gi;
  let m;
  while ((m = imgRegex.exec(content)) !== null) {
    if (m[1].startsWith('http') && m[1].includes('inasukorg.uk')) {
      imageUrls.add(m[1]);
    }
  }
  // also check srcset
  const srcsetRegex = /srcset=["']([^"']*)["']/gi;
  while ((m = srcsetRegex.exec(content)) !== null) {
    const parts = m[1].split(',');
    for (const part of parts) {
      const url = part.trim().split(/\s+/)[0];
      if (url.startsWith('http') && url.includes('inasukorg.uk')) {
        imageUrls.add(url);
      }
    }
  }
}

console.log(`Found ${imageUrls.size} unique image URLs on inasukorg.uk`);
fs.writeFileSync('all_images.json', JSON.stringify([...imageUrls], null, 2));
console.log('Sample image URLs:', [...imageUrls].slice(0, 10));

import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');

// Title
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'None');

// Meta description
const metaDesc = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
console.log('Meta Description:', metaDesc ? metaDesc[1] : 'None');

// All links
const links = [];
const linkRegex = /<a\s+[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gis;
let m;
while ((m = linkRegex.exec(html)) !== null) {
  const href = m[1];
  const text = m[2].replace(/<[^>]+>/g, '').trim();
  if (href && !href.startsWith('javascript:') && text) {
    links.push({ href, text });
  }
}
console.log('Total links found:', links.length);
console.log('Sample links (unique):');
const uniqueHrefs = [...new Set(links.map(l => `${l.text} -> ${l.href}`))];
console.log(uniqueHrefs.slice(0, 30).join('\n'));

// Headings
console.log('\nHeadings:');
const hRegex = /<(h[1-4])[^>]*>(.*?)<\/\1>/gis;
while ((m = hRegex.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text) {
    console.log(`${m[1].toUpperCase()}: ${text}`);
  }
}

// Find images
const images = [];
const imgRegex = /<img\s+[^>]*src=["']([^"']*)["'][^>]*>/gis;
while ((m = imgRegex.exec(html)) !== null) {
  images.push(m[1]);
}
console.log('\nImages count:', images.length);
console.log('Sample images:', images.slice(0, 15));

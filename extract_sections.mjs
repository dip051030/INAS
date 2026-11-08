import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');

// Stylesheets
const cssLinks = [];
const cssRegex = /<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']*)["'][^>]*>/gi;
let m;
while ((m = cssRegex.exec(html)) !== null) {
  cssLinks.push(m[1]);
}
console.log('CSS links:', cssLinks);

// Let's inspect the body tag and top level tags
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  console.log('Body length:', bodyMatch[1].length);
}

// Find all unique images with alt text
const imgMatches = [];
const imgR = /<img\s+([^>]+)>/gi;
while ((m = imgR.exec(html)) !== null) {
  const src = m[1].match(/src=["']([^"']+)["']/i)?.[1] || '';
  const alt = m[1].match(/alt=["']([^"']*)["']/i)?.[1] || '';
  imgMatches.push({ src: src.startsWith('data:') ? 'data:image...' : src, alt });
}
console.log('Images (filtered):', imgMatches.filter(i => !i.src.startsWith('data:image')));

// Let's dump all text content block by block
// Look for sections or articles or divs with classes
const sectionR = /<(section|header|footer|nav|main|div)\s+([^>]*)>/gi;
const elements = [];
let sm;
while ((sm = sectionR.exec(html)) !== null) {
  const tag = sm[1];
  const attrs = sm[2];
  const id = attrs.match(/id=["']([^"']+)["']/i)?.[1] || '';
  const className = attrs.match(/class=["']([^"']+)["']/i)?.[1] || '';
  if (id || className) {
    elements.push({ tag, id, className });
  }
}
console.log('Elements with id/class count:', elements.length);
console.log('Key IDs:', [...new Set(elements.map(e => e.id).filter(Boolean))]);
console.log('Sample classes:', [...new Set(elements.map(e => e.className).filter(Boolean))].slice(0, 30));

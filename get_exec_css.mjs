import fs from 'fs';

const html = fs.readFileSync('scraped_pages/exec-2025.html', 'utf8');
const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
if (styleMatch) {
  fs.writeFileSync('exec_editorial.css', styleMatch[1]);
  console.log('Saved exec_editorial.css');
}

import fs from 'fs';

const html = fs.readFileSync('scraped_pages/exec-2025.html', 'utf8');
const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
const editorialStyle = styles.find(s => s.includes('masthead') && s.includes('card__photo'));

if (editorialStyle) {
  fs.writeFileSync('exec_editorial.css', editorialStyle);
  console.log('Saved correct exec_editorial.css, size:', editorialStyle.length);
}

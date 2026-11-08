import fs from 'fs';

const html = fs.readFileSync('scraped_pages/exec-2025.html', 'utf8');
const idx = html.indexOf('Puspa Baruwal');
if (idx !== -1) {
  console.log(html.substring(idx - 150, idx + 400));
}

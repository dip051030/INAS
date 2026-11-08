import fs from 'fs';

const html = fs.readFileSync('scraped_pages/exec-2025.html', 'utf8');
const idx = html.indexOf('card__name');
if (idx !== -1) {
  console.log(html.substring(idx - 200, idx + 400));
}

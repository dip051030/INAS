import fs from 'fs';

const html = fs.readFileSync('scraped_pages/exec-2025.html', 'utf8');
const lastIdx = html.lastIndexOf('card__name');
const secondIdx = html.indexOf('card__name', html.indexOf('</style>'));
if (secondIdx !== -1) {
  console.log(html.substring(secondIdx - 200, secondIdx + 400));
}

import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');

// Find main-menu
const idx = html.indexOf('id="main-menu"');
if (idx !== -1) {
  console.log('main-menu snippet:');
  console.log(html.substring(idx - 100, idx + 2500));
} else {
  console.log('id="main-menu" not found');
}

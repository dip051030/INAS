import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');
const tmStart = html.indexOf('class="tm"');
// Let's find the closing section or next section
const nextSec = html.indexOf('<section class="hs"', tmStart) !== -1 ? html.indexOf('<section class="hs"', tmStart) : html.indexOf('class="hs"', tmStart);
const tmHtml = html.substring(tmStart, nextSec);

fs.writeFileSync('tm_section.html', tmHtml);
console.log('Saved tm_section.html with length:', tmHtml.length);

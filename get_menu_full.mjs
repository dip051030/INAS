import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');

const start = html.indexOf('id="main-menu"');
const end = html.indexOf('<!-- mobile-sidebar #main-menu -->', start);
const menuHtml = end !== -1 ? html.substring(start, end) : html.substring(start, start + 10000);

console.log(menuHtml);

import fs from 'fs';

const html = fs.readFileSync('tm_section.html', 'utf8');

// Find all headings
const headings = [];
const hRegex = /<(h[1-5])[^>]*>([\s\S]*?)<\/\1>/gi;
let m;
while ((m = hRegex.exec(html)) !== null) {
  headings.push({ tag: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() });
}
console.log('Headings:', headings);

// Find all occurrences of names and roles
// Let's search for tm-card
const cardRegex = /<article[^>]*class=["']([^"']*tm-card[^"']*)["'][^>]*>([\s\S]*?)<\/article>/gi;
const articles = [];
while ((m = cardRegex.exec(html)) !== null) {
  articles.push(m[2]);
}
console.log('Cards matching article.tm-card:', articles.length);

// If not article, what tags are used for cards?
const tmCardMatches = [];
const anyCardRegex = /class=["']([^"']*tm-card[^"']*)["'][^>]*>/gi;
while ((m = anyCardRegex.exec(html)) !== null) {
  tmCardMatches.push(m[0]);
}
console.log('tm-card occurrences:', tmCardMatches.length);

// Print first 5 card snippets
let idx = 0;
for (let i = 0; i < tmCardMatches.length; i++) {
  const start = html.indexOf(tmCardMatches[i], idx);
  console.log(`\n--- Card ${i + 1} ---`);
  console.log(html.substring(start, start + 350));
  idx = start + tmCardMatches[i].length;
}

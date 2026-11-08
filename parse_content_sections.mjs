import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');

// Parse menu items
const menuMatch = html.match(/<div id="main-menu"[\s\S]*?<\/div>\s*<\/div>/i);
if (menuMatch) {
  console.log('--- MENU ---');
  const liRegex = /<li[^>]*class=["']([^"']*)["'][^>]*>\s*<a([^>]*)>(.*?)<\/a>/gi;
  let m;
  while ((m = liRegex.exec(menuMatch[0])) !== null) {
    const text = m[3].replace(/<[^>]+>/g, '').trim();
    const href = m[2].match(/href=["']([^"']+)["']/i)?.[1] || '';
    if (text) {
      console.log(`- ${text} (${href})`);
    }
  }
}

// Let's inspect sections in content.html
const content = fs.readFileSync('content.html', 'utf8');
const sectionMatches = content.match(/<section[^>]*>[\s\S]*?<\/section>/gi) || [];
console.log('\n--- SECTIONS FOUND:', sectionMatches.length);
sectionMatches.forEach((s, idx) => {
  const idMatch = s.match(/id=["']([^"']+)["']/i);
  const classMatch = s.match(/class=["']([^"']+)["']/i);
  const h1 = s.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const h2 = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const h3 = s.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  console.log(`\nSection #${idx + 1}: id=${idMatch?.[1]} class=${classMatch?.[1]}`);
  console.log(`  h1: ${h1}`);
  console.log(`  h2: ${h2}`);
  console.log(`  h3: ${h3}`);
  // text snippet
  const cleanText = s.replace(/<style[\s\S]*?<\/style>/gi, '')
                     .replace(/<script[\s\S]*?<\/script>/gi, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
  console.log(`  Preview (${cleanText.length} chars): ${cleanText.slice(0, 200)}...`);
});

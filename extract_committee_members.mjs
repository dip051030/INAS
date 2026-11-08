import fs from 'fs';

function parseCommittee(filename) {
  const html = fs.readFileSync(`scraped_pages/${filename}`, 'utf8');
  const title = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
  
  // Find all cards
  // Check for .tm-card or similar
  const cards = [];
  const cardRegex = /<article[^>]*class=["']([^"']*tm-card[^"']*)["'][^>]*>([\s\S]*?)<\/article>/gi;
  let m;
  while ((m = cardRegex.exec(html)) !== null) {
    const cardHtml = m[2];
    const name = cardHtml.match(/<h[34][^>]*>([\s\S]*?)<\/h[34]>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
    const role = cardHtml.match(/<span[^>]*>([\s\S]*?)<\/span>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
    const img = cardHtml.match(/<img[^>]*src=["']([^"']*)["']/i)?.[1] || '';
    const initials = cardHtml.match(/<div class="tm-ph"><b>(.*?)<\/b><\/div>/i)?.[1] || '';
    cards.push({ name, role, img, initials });
  }

  // Also check if there's tm-feature (like president)
  const features = [];
  const featRegex = /<article[^>]*class=["']([^"']*tm-feature[^"']*)["'][^>]*>([\s\S]*?)<\/article>/gi;
  while ((m = featRegex.exec(html)) !== null) {
    const fHtml = m[2];
    const name = fHtml.match(/<h[23][^>]*class=["'][^"']*tm-feature-name[^"']*["'][^>]*>([\s\S]*?)<\/h[23]>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
    const tag = fHtml.match(/<span[^>]*class=["'][^"']*tm-feature-tag[^"']*["'][^>]*>([\s\S]*?)<\/span>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
    const role = fHtml.match(/<div class="tm-feature-info"><p>([\s\S]*?)<\/p>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
    const img = fHtml.match(/<img[^>]*src=["']([^"']*)["']/i)?.[1] || '';
    features.push({ name, tag, role, img });
  }

  return { title, features, cardCount: cards.length, sampleCards: cards.slice(0, 5) };
}

console.log('2025:', JSON.stringify(parseCommittee('exec-2025.html'), null, 2));
console.log('2023:', JSON.stringify(parseCommittee('exec-2023.html'), null, 2));
console.log('2021:', JSON.stringify(parseCommittee('exec-2021.html'), null, 2));
console.log('2019:', JSON.stringify(parseCommittee('exec-2019.html'), null, 2));
console.log('2017:', JSON.stringify(parseCommittee('exec-2017.html'), null, 2));

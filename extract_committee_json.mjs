import fs from 'fs';

function extractCommittee(file) {
  const html = fs.readFileSync(`scraped_pages/${file}`, 'utf8');
  const h1 = html.match(/<h1[^>]*class=["']masthead__title["'][^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() ||
             html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
  const years = html.match(/<span>(\d{4}\s*[–-]\s*\d{4})<\/span>/i)?.[1] || '';
  const count = html.match(/<span>(\d+\s*members?)<\/span>/i)?.[1] || '';

  const cards = [];
  const figRegex = /<figure\s+class=["']([^"']*)["'][^>]*>([\s\S]*?)<\/figure>/gi;
  let m;
  while ((m = figRegex.exec(html)) !== null) {
    const cardClass = m[1];
    const inner = m[2];
    const name = inner.match(/<h3[^>]*class=["']card__name["'][^>]*>([\s\S]*?)<\/h3>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
    const role = inner.match(/<p[^>]*class=["']card__role["'][^>]*>([\s\S]*?)<\/p>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
    const imgMatch = inner.match(/<img[^>]*src=["']([^"']*)["']/i);
    const imgSrc = imgMatch ? imgMatch[1] : '';
    const initialsMatch = inner.match(/<div class="initials[^>]*>([\s\S]*?)<\/div>/i);
    const initials = initialsMatch ? initialsMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    if (name) {
      cards.push({ name, role, cardClass, imgSrc, initials });
    }
  }
  return { file, title: h1, years, count, memberCount: cards.length, members: cards };
}

const list = ['exec-2025.html', 'exec-2023.html', 'exec-2021.html', 'exec-2019.html', 'exec-2017.html'];
const results = list.map(extractCommittee);
fs.writeFileSync('committees_data.json', JSON.stringify(results, null, 2));
console.log(results.map(r => `${r.file}: ${r.title} (${r.years}) - ${r.memberCount} members`));

import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');
const tmStart = html.indexOf('class="tm"');
const nextSec = html.indexOf('class="hs"', tmStart);
const tmHtml = html.substring(tmStart, nextSec);

const members = [];

// President (Sanjaya Kandel)
members.push({
  name: 'Sanjaya Kandel',
  role: 'President',
  designation: 'Company Director · INAS UK',
  category: 'Executive Leadership',
  badge: '★ President',
  term: '2025 – 2027',
  imgSrc: '/images/461243918_477367171946048_603323212427980209_n.jpg'
});

// Sarbendra Adhikary
members.push({
  name: 'Sarbendra Adhikary',
  role: 'UK Global Representative',
  designation: 'Global Committee Representative',
  category: 'Executive Leadership',
  badge: '◆ Global Representative',
  term: '2025 – 2027',
  imgSrc: '/images/459829303_1033677235219092_3976631607542329491_n-e1727700573822.jpg'
});

// All tm-card articles
const cardRegex = /<article[^>]*class=["']([^"']*tm-card[^"']*)["'][^>]*>([\s\S]*?)<\/article>/gi;
let m;
while ((m = cardRegex.exec(tmHtml)) !== null) {
  const cardHtml = m[2];
  const name = cardHtml.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)?.[1]?.trim() || '';
  const role = cardHtml.match(/<span[^>]*>([\s\S]*?)<\/span>/i)?.[1]?.trim() || '';
  const term = cardHtml.match(/<em[^>]*class=["']tm-term["'][^>]*>([\s\S]*?)<\/em>/i)?.[1]?.trim() || '';
  const imgMatch = cardHtml.match(/<img[^>]*src=["']([^"']*)["']/i);
  let imgSrc = imgMatch ? imgMatch[1] : '';

  // map remote URLs to local /images/ if available
  if (imgSrc.includes('deepak-thapa')) {
    imgSrc = '/images/deepak-thapa-e1727702891810.jpg';
  } else if (imgSrc.includes('461433159')) {
    imgSrc = '/images/461433159_940161341486845_1992974142303693528_n.jpg';
  } else if (imgSrc.includes('WhatsApp-Image-2024-03-12')) {
    imgSrc = '/images/WhatsApp-Image-2024-03-12-at-11.47.29-AM.jpeg';
  } else if (imgSrc.includes('461291825')) {
    imgSrc = '/images/461291825_1751052325717836_7017261014996237513_n.jpg';
  } else if (imgSrc.includes('manish-shrestha')) {
    imgSrc = '/images/manish-shrestha.jpg';
  }

  // Determine category based on name/role
  let category = 'Executive Officers';
  if (['Shiddhartha Bikram Chhetri', 'Bigyan Karki', 'Darwin Devkota', 'Shatrudhan Shah', 'Sunder Pandit', 'RD Mishra'].includes(name)) {
    category = 'Programme & Members';
  } else if (['Hari Karki', 'Vijay Dangol', 'Aakriti Rimal'].includes(name)) {
    category = 'State Coordinators';
  } else if (['Lal Shivayogi', 'Shreya Shiwakoti'].includes(name)) {
    category = 'Past State Coordinators';
  } else if (['Manish Shrestha', 'Sanam Kumar Bairag', 'Binod Chipalu'].includes(name)) {
    category = 'Founders & Patrons';
  }

  members.push({
    name,
    role,
    designation: role,
    category,
    term: term || '2025 – 2027',
    imgSrc
  });
}

console.log(`Extracted total ${members.length} UK people!`);
members.forEach((mem, i) => {
  console.log(`${i + 1}. [${mem.category}] ${mem.name} — ${mem.role} (hasImg: ${Boolean(mem.imgSrc)})`);
});

fs.writeFileSync('uk_team_data.json', JSON.stringify(members, null, 2));

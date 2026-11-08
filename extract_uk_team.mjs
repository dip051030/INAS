import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');

const tmStart = html.indexOf('class="tm"');
const tmEnd = html.indexOf('</section>', tmStart);
const tmHtml = html.substring(tmStart, tmEnd + 10);

const people = [];

// Features
const featRegex = /<article[^>]*class=["']([^"']*tm-feature[^"']*)["'][^>]*>([\s\S]*?)<\/article>/gi;
let m;
while ((m = featRegex.exec(tmHtml)) !== null) {
  const c = m[2];
  const name = c.match(/<h[23][^>]*class=["'][^"']*tm-feature-name[^"']*["'][^>]*>([\s\S]*?)<\/h[23]>/i)?.[1]?.trim();
  const tag = c.match(/<span[^>]*class=["'][^"']*tm-feature-tag[^"']*["'][^>]*>([\s\S]*?)<\/span>/i)?.[1]?.trim();
  const role = c.match(/<p>([\s\S]*?)<\/p>/i)?.[1]?.trim();
  const img = c.match(/<img[^>]*src=["']([^"']*)["']/i)?.[1];
  people.push({ category: 'Executive Leadership', name, tag, role, img });
}

// Check groups
const groupSections = tmHtml.split(/<div class="tm-group">/i);
groupSections.slice(1).forEach(sec => {
  const groupName = sec.substring(0, sec.indexOf('</div>')).replace(/&amp;/g, '&').trim();
  const cardRegex = /<div[^>]*class=["']([^"']*tm-card[^"']*)["'][^>]*>([\s\S]*?)<\/div>/gi;
  let cm;
  while ((cm = cardRegex.exec(sec)) !== null) {
    const c = cm[2];
    const name = c.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i)?.[1]?.trim();
    const role = c.match(/<span[^>]*>([\s\S]*?)<\/span>/i)?.[1]?.trim();
    const term = c.match(/<i class=["']tm-term["']>([\s\S]*?)<\/i>/i)?.[1]?.trim();
    const img = c.match(/<img[^>]*src=["']([^"']*)["']/i)?.[1];
    const initials = c.match(/<b>(.*?)<\/b>/i)?.[1];
    if (name) {
      people.push({
        category: groupName,
        name,
        role: term ? `${role} (${term})` : role,
        img: img || '',
        initials: initials || ''
      });
    }
  }
});

console.log(`Found ${people.length} UK people:`);
console.log(JSON.stringify(people, null, 2));

// Also let's check what images exist in public/images
const publicImages = fs.readdirSync('public/images');
console.log('\nAvailable images in public/images:', publicImages);

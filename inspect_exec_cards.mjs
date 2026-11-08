import fs from 'fs';

const html = fs.readFileSync('scraped_pages/exec-2025.html', 'utf8');

// Find all HTML elements that look like cards
const mainMatch = html.match(/<div class="col-inner">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i);
if (mainMatch) {
  // Let's find classes inside
  const classes = [...mainMatch[1].matchAll(/class=["']([^"']+)["']/g)].map(m => m[1]);
  console.log('Classes used in exec-2025:', [...new Set(classes)]);
  // Let's find headings and cards
  const hTags = [...mainMatch[1].matchAll(/<(h[1-4]|header)[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => m[0]);
  console.log('Headings/headers count:', hTags.length);
  console.log('Sample headings:', hTags.slice(0, 8));

  // Find sample person card
  const cardMatch = mainMatch[1].match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
                    mainMatch[1].match(/<div class="card[^>]*>([\s\S]*?)<\/div>/i) ||
                    mainMatch[1].match(/<li[^>]*class=["'][^"']*card[^"']*["'][^>]*>([\s\S]*?)<\/li>/i);
  if (cardMatch) {
    console.log('Sample card match:');
    console.log(cardMatch[0].slice(0, 600));
  }
}

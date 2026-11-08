import fs from 'fs';

const files = fs.readdirSync('scraped_pages');
for (const f of files) {
  if (!f.endsWith('.html')) continue;
  const content = fs.readFileSync(`scraped_pages/${f}`, 'utf8');
  const title = content.match(/<title>(.*?)<\/title>/i)?.[1] || '';
  const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
  const h2 = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1]?.replace(/<[^>]+>/g, '').trim() || '';
  console.log(`\n--- ${f} ---`);
  console.log(`Title: ${title}`);
  console.log(`H1: ${h1}`);
  console.log(`H2: ${h2}`);
  
  // Extract main text snippet
  const mainMatch = content.match(/<div id="content"[^>]*>([\s\S]*?)<\/div><!-- #content -->/i) ||
                    content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    const text = mainMatch[1].replace(/<style[\s\S]*?<\/style>/gi, '')
                             .replace(/<script[\s\S]*?<\/script>/gi, '')
                             .replace(/<[^>]+>/g, ' ')
                             .replace(/\s+/g, ' ')
                             .trim();
    console.log(`Snippet: ${text.slice(0, 300)}...`);
  }
}

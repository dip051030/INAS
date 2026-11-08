import fs from 'fs';

const html = fs.readFileSync('scraped_pages/exec-2025.html', 'utf8');
const mainMatch = html.match(/<div id="content"[^>]*>([\s\S]*?)<\/div><!-- #content -->/i) ||
                  html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);

if (mainMatch) {
  console.log('Snippet of exec-2025:');
  console.log(mainMatch[1].slice(0, 2000));
}

import fs from 'fs';

const css = fs.readFileSync('all_styles.css', 'utf8');

// Also check scraped pages for <style> tags
const allPages = ['page.html', ...fs.readdirSync('scraped_pages').map(f => `scraped_pages/${f}`)];

const customStyles = [];
for (const p of allPages) {
  const html = fs.readFileSync(p, 'utf8');
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = styleRegex.exec(html)) !== null) {
    if (m[1].includes('.ina') || m[1].includes('.tm') || m[1].includes('.hs') || m[1].includes('.ct') || m[1].includes('.up') || m[1].includes('.ev') || m[1].includes('.inas-hero')) {
      customStyles.push(m[1]);
    }
  }
}

fs.writeFileSync('extracted_components.css', customStyles.join('\n\n/* ==================== */\n\n'));
console.log('Saved extracted_components.css with length:', customStyles.join('\n').length);

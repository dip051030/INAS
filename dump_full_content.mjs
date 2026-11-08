import fs from 'fs';

const html = fs.readFileSync('page.html', 'utf8');

// Find all style blocks
const styleBlocks = [];
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
let m;
while ((m = styleRegex.exec(html)) !== null) {
  styleBlocks.push(m[1]);
}
fs.writeFileSync('all_styles.css', styleBlocks.join('\n\n'));
console.log('Saved all_styles.css, count of blocks:', styleBlocks.length);

// Let's extract sections inside #main or .page-wrapper
const mainMatch = html.match(/<div id="content"[^>]*>([\s\S]*?)<\/div><!-- #content -->/i) ||
                  html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);

if (mainMatch) {
  fs.writeFileSync('content.html', mainMatch[1]);
  console.log('Saved content.html, length:', mainMatch[1].length);
}

// Let's extract header and footer
const headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/i);
if (headerMatch) {
  fs.writeFileSync('header.html', headerMatch[1]);
  console.log('Saved header.html, length:', headerMatch[1].length);
}

const footerMatch = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
if (footerMatch) {
  fs.writeFileSync('footer.html', footerMatch[1]);
  console.log('Saved footer.html, length:', footerMatch[1].length);
}

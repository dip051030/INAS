import fs from 'fs';

const css = fs.readFileSync('all_styles.css', 'utf8');

// Find font-family
const fontFamilies = new Set();
const fontRegex = /font-family:\s*([^;!}]+)/gi;
let m;
while ((m = fontRegex.exec(css)) !== null) {
  fontFamilies.add(m[1].trim());
}
console.log('Font families:', [...fontFamilies]);

// Find colors
const colors = new Set();
const hexRegex = /#([0-9a-f]{3,8})\b/gi;
while ((m = hexRegex.exec(css)) !== null) {
  colors.add(m[0].toLowerCase());
}
console.log('Hex colors count:', colors.size);
console.log('Sample colors:', [...colors].slice(0, 30));

// Find background colors in sections
const sectionBgRegex = /(section_[0-9]+|col-[0-9]+|row-[0-9]+)\s*\{([^}]+)\}/gi;
while ((m = sectionBgRegex.exec(css)) !== null) {
  console.log(m[1], '->', m[2].replace(/\s+/g, ' '));
}

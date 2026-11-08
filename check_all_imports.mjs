import fs from 'fs';
import path from 'path';

function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      if (item !== 'node_modules' && item !== '.next') {
        files = files.concat(walk(full));
      }
    } else if (full.endsWith('.ts') || full.endsWith('.tsx')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk('.');
console.log('Checking', files.length, 'source files...');

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes("from 'next/navigation'")) {
    const navMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]next\/navigation['"]/);
    if (navMatch) {
      console.log(`${f} imports from next/navigation:`, navMatch[1].trim());
    }
    const defaultNav = content.match(/import\s+(\w+)\s+from\s+['"]next\/navigation['"]/);
    if (defaultNav) {
      console.log(`WARNING in ${f}: default import from next/navigation:`, defaultNav[1]);
    }
  }
  // Check for <img> vs <Image> or missing alt
  const unescapedEntities = content.match(/(>[^<]*['"][^<]*<)/g);
  // Check for bad href
  const brokenHrefs = [...content.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]).filter(h => h.startsWith('/') && !h.startsWith('//'));
  // print
}
console.log('Import check complete.');

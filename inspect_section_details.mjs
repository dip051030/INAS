import fs from 'fs';

const content = fs.readFileSync('content.html', 'utf8');

// Split sections by <section
const sections = content.split(/<section/i).slice(1).map(s => '<section' + s);

sections.forEach((sec, idx) => {
  const id = sec.match(/id=["']([^"']+)["']/i)?.[1];
  console.log(`\n================ SECTION ${idx + 1} (${id}) ================`);
  // Print first 1000 characters
  console.log(sec.slice(0, 1500));
});

import fs from 'fs';

const html = fs.readFileSync('scraped_pages/membership.html', 'utf8');
const match = html.match(/<div class="col-inner"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i) ||
              html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);

const cleanText = html.replace(/<style[\s\S]*?<\/style>/gi, '')
                      .replace(/<script[\s\S]*?<\/script>/gi, '')
                      .replace(/<[^>]+>/g, ' ')
                      .replace(/\s+/g, ' ');

const startIdx = cleanText.indexOf('Become part of INAS UK');
console.log('Membership text:\n', cleanText.substring(startIdx, startIdx + 3000));

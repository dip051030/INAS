import fs from 'fs';

console.log('--- SCOTLAND ---');
const scot = fs.readFileSync('scraped_pages/scotland.html', 'utf8');
const scotClean = scot.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(scotClean.slice(0, 1000));

console.log('\n--- WALES ---');
const wales = fs.readFileSync('scraped_pages/wales.html', 'utf8');
const walesClean = wales.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(walesClean.slice(0, 1000));

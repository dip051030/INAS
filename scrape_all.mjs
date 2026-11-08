import fs from 'fs';
import https from 'https';

const pages = [
  { name: 'exec-2025', url: 'https://inasukorg.uk/executive-committee/executive-committee-2025/' },
  { name: 'exec-2023', url: 'https://inasukorg.uk/executive-committee-2023/' },
  { name: 'exec-2021', url: 'https://inasukorg.uk/executive-committee-2021/' },
  { name: 'exec-2019', url: 'https://inasukorg.uk/executive-committee-2019/' },
  { name: 'exec-2017', url: 'https://inasukorg.uk/executive-committee-2017/' },
  { name: 'exec-2015', url: 'https://inasukorg.uk/executive-committee-2015/' },
  { name: 'scotland', url: 'https://inasukorg.uk/scotland-committee/' },
  { name: 'wales', url: 'https://inasukorg.uk/wales-committee/' },
  { name: 'membership', url: 'https://inasukorg.uk/membership/' },
  { name: 'activities', url: 'https://inasukorg.uk/activities/' },
  { name: 'news', url: 'https://inasukorg.uk/news/' },
];

if (!fs.existsSync('scraped_pages')) {
  fs.mkdirSync('scraped_pages');
}

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  for (const p of pages) {
    console.log(`Fetching ${p.name} from ${p.url}...`);
    try {
      const html = await fetchUrl(p.url);
      fs.writeFileSync(`scraped_pages/${p.name}.html`, html);
      console.log(`Saved scraped_pages/${p.name}.html (${html.length} bytes)`);
    } catch (e) {
      console.error(`Failed ${p.name}:`, e.message);
    }
  }
}

run();

import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = JSON.parse(fs.readFileSync('all_images.json', 'utf8'));

if (!fs.existsSync('downloaded_images')) {
  fs.mkdirSync('downloaded_images');
}

async function download(url) {
  const filename = path.basename(new URL(url).pathname);
  const dest = path.join('downloaded_images', filename);
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Saved ${filename}`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const url of urls) {
    try {
      await download(url);
    } catch (e) {
      console.error(`Failed ${url}:`, e.message);
    }
  }
}

run();

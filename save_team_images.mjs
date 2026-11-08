import fs from 'fs';
import path from 'path';

const team = JSON.parse(fs.readFileSync('uk_team_data.json', 'utf8'));

const outDir = 'public/images/team';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

team.forEach(member => {
  const slug = slugify(member.name);
  if (member.imgSrc && member.imgSrc.startsWith('data:image')) {
    const matches = member.imgSrc.match(/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/);
    if (matches) {
      const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
      const buffer = Buffer.from(matches[2], 'base64');
      const filename = `${slug}.${ext}`;
      const filePath = path.join(outDir, filename);
      fs.writeFileSync(filePath, buffer);
      member.imgSrc = `/images/team/${filename}`;
      console.log(`Saved ${filename} (${buffer.length} bytes)`);
    }
  } else if (member.imgSrc && member.imgSrc.startsWith('/images/')) {
    // copy to /images/team/ as well for uniform paths
    const srcPath = path.join('public', member.imgSrc.replace('/images/', ''));
    if (fs.existsSync(srcPath)) {
      const ext = path.extname(srcPath);
      const filename = `${slug}${ext}`;
      fs.copyFileSync(srcPath, path.join(outDir, filename));
      member.imgSrc = `/images/team/${filename}`;
      console.log(`Copied existing image to /images/team/${filename}`);
    }
  }
});

fs.writeFileSync('data/ukTeam.json', JSON.stringify(team, null, 2));
console.log('Saved data/ukTeam.json with all local clean image paths!');

import fs from 'fs';

const committees = JSON.parse(fs.readFileSync('committees_data.json', 'utf8'));

// Format committees data into clean TS objects
const dataFileContent = `export interface CommitteeMember {
  name: string;
  role: string;
  cardClass?: string;
  imgSrc?: string;
  initials?: string;
}

export interface CommitteeTerm {
  slug: string;
  title: string;
  years: string;
  count: string;
  members: CommitteeMember[];
}

export const COMMITTEES_DATA: CommitteeTerm[] = ${JSON.stringify(
  committees.map(c => {
    let slug = 'executive-committee-2025';
    if (c.file.includes('2023')) slug = 'executive-committee-2023';
    if (c.file.includes('2021')) slug = 'executive-committee-2021';
    if (c.file.includes('2019')) slug = 'executive-committee-2019';
    if (c.file.includes('2017')) slug = 'executive-committee-2017';
    return {
      slug,
      title: c.title || 'Executive Committee',
      years: c.years || '',
      count: c.count || `${c.members.length} members`,
      members: c.members.map(m => ({
        name: m.name,
        role: m.role,
        cardClass: m.cardClass || '',
        imgSrc: m.imgSrc || '',
        initials: m.initials || m.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
      }))
    };
  }),
  null,
  2
)};

export const SITE_INFO = {
  name: "International Nepalese Artist Society UK CIC",
  shortName: "INAS UK",
  companyNumber: "15988250",
  companyType: "Community Interest Company (CIC)",
  registeredCountry: "Registered in England and Wales",
  foundedYear: 2015,
  incorporatedYear: 2024,
  email: "info@inasukorg.uk",
  phone: "07767 424341",
  presidentContact: "07767 424341 President",
  address: "45 Lakedale Road, London, SE18 1PR",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=45+Lakedale+Road+London+SE18+1PR",
  facebookUrl: "https://www.facebook.com/inasuk.org",
  youtubeUrl: "https://www.youtube.com/@INASUK",
  developerUrl: "https://livelymemorablebranding.com",
  developerName: "Lively Memorable Branding Ltd.",
};
`;

if (!fs.existsSync('data')) {
  fs.mkdirSync('data');
}
fs.writeFileSync('data/siteData.ts', dataFileContent);
console.log('Saved data/siteData.ts with all committees');

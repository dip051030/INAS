import fs from 'fs';

const ukTeam = JSON.parse(fs.readFileSync('data/ukTeam.json', 'utf8'));

const content = `export interface UKTeamMember {
  name: string;
  role: string;
  designation?: string;
  category: 'Executive Leadership' | 'Executive Officers' | 'Programme & Members' | 'State Coordinators' | 'Past State Coordinators' | 'Founders & Patrons';
  badge?: string;
  term: string;
  imgSrc: string;
}

export const UK_EXECUTIVE_COMMITTEE: UKTeamMember[] = ${JSON.stringify(ukTeam, null, 2)};

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

fs.writeFileSync('data/siteData.ts', content);
console.log('Updated data/siteData.ts with UK Executive Committee members only!');

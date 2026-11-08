import fs from 'fs';

const team = JSON.parse(fs.readFileSync('data/ukTeam.json', 'utf8'));

// Update Sarbendra Adhikary to remove "Global"
team.forEach(m => {
  if (m.name.includes('Sarbendra')) {
    m.role = 'Senior Executive Advisor';
    m.designation = 'UK Representative & Director';
    m.badge = '★ Senior Advisor';
  }
  if (m.name.includes('Hari Karki')) {
    m.role = 'State Coordinator';
    m.designation = 'State Committee · England Region';
    m.badge = 'State Coordinator';
    m.category = 'State Coordinators';
  }
  if (m.name.includes('Vijay Dangol')) {
    m.role = 'State Coordinator';
    m.designation = 'State Committee';
    m.badge = 'State Coordinator';
    m.category = 'State Coordinators';
  }
  if (m.name.includes('Aakriti Rimal')) {
    m.role = 'Acting State Coordinator';
    m.designation = 'State Committee';
    m.badge = 'Acting Coordinator';
    m.category = 'State Coordinators';
  }
  if (m.name.includes('Lal Shivayogi')) {
    m.role = 'State Coordinator';
    m.designation = 'State Committee (2023–2025)';
    m.badge = 'Past Coordinator';
    m.category = 'State Coordinators';
  }
  if (m.name.includes('Shreya Shiwakoti')) {
    m.role = 'State Coordinator';
    m.designation = 'State Committee (2023–2025)';
    m.badge = 'Past Coordinator';
    m.category = 'State Coordinators';
  }
});

const stateMembers = [
  {
    name: 'Hari Karki',
    role: 'State Coordinator',
    designation: 'State Committee · Term 2025–2027',
    badge: '★ State Coordinator',
    term: '2025 – 2027',
    imgSrc: '/images/team/hari-karki.jpg',
    bio: 'Leading regional community outreach, artist registrations, and cultural programmes for the State Committee.'
  },
  {
    name: 'Vijay Dangol',
    role: 'State Coordinator',
    designation: 'State Committee · Term 2025–2027',
    badge: '★ State Coordinator',
    term: '2025 – 2027',
    imgSrc: '/images/team/vijay-dangol.jpg',
    bio: 'Overseeing regional artist liaisons, youth performance rehearsals, and competition qualifiers.'
  },
  {
    name: 'Aakriti Rimal',
    role: 'Acting State Coordinator',
    designation: 'State Committee · Term 2025–2027',
    badge: 'Acting Coordinator',
    term: '2025 – 2027',
    imgSrc: '/images/team/aakriti-rimal.jpg',
    bio: 'Managing community liaison, women artist workshops, and cultural event coordination.'
  },
  {
    name: 'Lal Shivayogi',
    role: 'State Coordinator',
    designation: 'State Committee · Term 2023–2025',
    badge: 'Past Coordinator',
    term: '2023 – 2025',
    imgSrc: '/images/team/lal-shivayogi.jpg',
    bio: 'Senior community activist and past coordinator supporting heritage continuity and member relations.'
  },
  {
    name: 'Shreya Shiwakoti',
    role: 'State Coordinator',
    designation: 'State Committee · Term 2023–2025',
    badge: 'Past Coordinator',
    term: '2023 – 2025',
    imgSrc: '/images/team/shreya-shiwakoti.jpg',
    bio: 'Coordinated regional youth arts, cultural exchange programs, and festival arrangements.'
  }
];

const fileContent = `export interface UKTeamMember {
  name: string;
  role: string;
  designation?: string;
  category: 'Executive Leadership' | 'Executive Officers' | 'Programme & Members' | 'State Coordinators' | 'Past State Coordinators' | 'Founders & Patrons';
  badge?: string;
  term: string;
  imgSrc: string;
}

export interface StateCommitteeMember {
  name: string;
  role: string;
  designation: string;
  badge: string;
  term: string;
  imgSrc: string;
  bio: string;
}

export const UK_EXECUTIVE_COMMITTEE: UKTeamMember[] = ${JSON.stringify(team, null, 2)};

export const STATE_COMMITTEE_MEMBERS: StateCommitteeMember[] = ${JSON.stringify(stateMembers, null, 2)};

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

fs.writeFileSync('data/siteData.ts', fileContent);
console.log('Successfully updated data/siteData.ts!');

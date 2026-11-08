export interface UKTeamMember {
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

export const UK_EXECUTIVE_COMMITTEE: UKTeamMember[] = [
  {
    "name": "Sanjaya Kandel",
    "role": "President",
    "designation": "Company Director · INAS UK",
    "category": "Executive Leadership",
    "badge": "★ President",
    "term": "2025 – 2027",
    "imgSrc": "/images/461243918_477367171946048_603323212427980209_n.jpg"
  },
  {
    "name": "Sarbendra Adhikary",
    "role": "Senior Executive Advisor",
    "designation": "UK Representative & Director",
    "category": "Executive Leadership",
    "badge": "★ Senior Advisor",
    "term": "2025 – 2027",
    "imgSrc": "/images/459829303_1033677235219092_3976631607542329491_n-e1727700573822.jpg"
  },
  {
    "name": "Deepak Thapa",
    "role": "Vice President",
    "designation": "Vice President",
    "category": "Executive Officers",
    "term": "2025 – 2027",
    "imgSrc": "/images/deepak-thapa-e1727702891810.jpg"
  },
  {
    "name": "Sabina Shrestha",
    "role": "Vice President",
    "designation": "Vice President",
    "category": "Executive Officers",
    "term": "2025 – 2027",
    "imgSrc": "/images/461433159_940161341486845_1992974142303693528_n.jpg"
  },
  {
    "name": "Lal Mani Bhattarai",
    "role": "General Secretary",
    "designation": "General Secretary",
    "category": "Executive Officers",
    "term": "2025 – 2027",
    "imgSrc": "/images/WhatsApp-Image-2024-03-12-at-11.47.29-AM.jpeg"
  },
  {
    "name": "Dip Giri",
    "role": "Deputy General Secretary",
    "designation": "Deputy General Secretary",
    "category": "Executive Officers",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/dip-giri.jpg"
  },
  {
    "name": "Dhruba Hari Banskota",
    "role": "Secretary",
    "designation": "Secretary",
    "category": "Executive Officers",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/dhruba-hari-banskota.jpg"
  },
  {
    "name": "Shailesh Rai “Manav”",
    "role": "Joint Secretary",
    "designation": "Joint Secretary",
    "category": "Executive Officers",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/shailesh-rai-manav.jpg"
  },
  {
    "name": "Renuka Shrestha",
    "role": "Treasurer",
    "designation": "Treasurer",
    "category": "Executive Officers",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/renuka-shrestha.jpg"
  },
  {
    "name": "Amrita Pandey",
    "role": "Joint Treasurer",
    "designation": "Joint Treasurer",
    "category": "Executive Officers",
    "term": "2025 – 2027",
    "imgSrc": "/images/461291825_1751052325717836_7017261014996237513_n.jpg"
  },
  {
    "name": "Shiddhartha Bikram Chhetri",
    "role": "Programme Coordinator",
    "designation": "Programme Coordinator",
    "category": "Programme & Members",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/shiddhartha-bikram-chhetri.jpg"
  },
  {
    "name": "Bigyan Karki",
    "role": "Spokesperson",
    "designation": "Spokesperson",
    "category": "Programme & Members",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/bigyan-karki.jpg"
  },
  {
    "name": "Darwin Devkota",
    "role": "Member",
    "designation": "Member",
    "category": "Programme & Members",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/darwin-devkota.jpg"
  },
  {
    "name": "Shatrudhan Shah",
    "role": "Member",
    "designation": "Member",
    "category": "Programme & Members",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/shatrudhan-shah.jpg"
  },
  {
    "name": "Sunder Pandit",
    "role": "Member",
    "designation": "Member",
    "category": "Programme & Members",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/sunder-pandit.jpg"
  },
  {
    "name": "RD Mishra",
    "role": "Executive Member",
    "designation": "Honorary Member",
    "category": "Programme & Members",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/rd-mishra.jpg"
  },
  {
    "name": "Hari Karki",
    "role": "State Coordinator",
    "designation": "State Committee",
    "category": "State Coordinators",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/hari-karki.jpg",
    "badge": "State Coordinator"
  },
  {
    "name": "Vijay Dangol",
    "role": "State Coordinator",
    "designation": "State Committee",
    "category": "State Coordinators",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/vijay-dangol.jpg",
    "badge": "State Coordinator"
  },
  {
    "name": "Aakriti Rimal",
    "role": "Acting State Coordinator",
    "designation": "State Committee",
    "category": "State Coordinators",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/aakriti-rimal.jpg",
    "badge": "Acting Coordinator"
  },
  {
    "name": "Lal Shivayogi",
    "role": "State Coordinator",
    "designation": "State Committee (2023–2025)",
    "category": "State Coordinators",
    "term": "2023 – 2025",
    "imgSrc": "/images/team/lal-shivayogi.jpg",
    "badge": "Past Coordinator"
  },
  {
    "name": "Shreya Shiwakoti",
    "role": "State Coordinator",
    "designation": "State Committee (2023–2025)",
    "category": "State Coordinators",
    "term": "2023 – 2025",
    "imgSrc": "/images/team/shreya-shiwakoti.jpg",
    "badge": "Past Coordinator"
  },
  {
    "name": "Manish Shrestha",
    "role": "Founder · Patron",
    "designation": "Founder · Patron",
    "category": "Founders & Patrons",
    "term": "2025 – 2027",
    "imgSrc": "/images/manish-shrestha.jpg"
  },
  {
    "name": "Sanam Kumar Bairag",
    "role": "Patron",
    "designation": "Patron",
    "category": "Founders & Patrons",
    "term": "2015 – 2017",
    "imgSrc": "/images/team/sanam-kumar-bairag.jpg"
  },
  {
    "name": "Binod Chipalu",
    "role": "Patron",
    "designation": "Patron",
    "category": "Founders & Patrons",
    "term": "2019 – 2023",
    "imgSrc": "/images/team/binod-chipalu.jpg"
  }
];

export const STATE_COMMITTEE_MEMBERS: StateCommitteeMember[] = [
  {
    "name": "Hari Karki",
    "role": "State Coordinator",
    "designation": "State Committee · Term 2025–2027",
    "badge": "★ State Coordinator",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/hari-karki.jpg",
    "bio": "Leading regional community outreach, artist registrations, and cultural programmes for the State Committee."
  },
  {
    "name": "Vijay Dangol",
    "role": "State Coordinator",
    "designation": "State Committee · Term 2025–2027",
    "badge": "★ State Coordinator",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/vijay-dangol.jpg",
    "bio": "Overseeing regional artist liaisons, youth performance rehearsals, and competition qualifiers."
  },
  {
    "name": "Aakriti Rimal",
    "role": "Acting State Coordinator",
    "designation": "State Committee · Term 2025–2027",
    "badge": "Acting Coordinator",
    "term": "2025 – 2027",
    "imgSrc": "/images/team/aakriti-rimal.jpg",
    "bio": "Managing community liaison, women artist workshops, and cultural event coordination."
  },
  {
    "name": "Lal Shivayogi",
    "role": "State Coordinator",
    "designation": "State Committee · Term 2023–2025",
    "badge": "Past Coordinator",
    "term": "2023 – 2025",
    "imgSrc": "/images/team/lal-shivayogi.jpg",
    "bio": "Senior community activist and past coordinator supporting heritage continuity and member relations."
  },
  {
    "name": "Shreya Shiwakoti",
    "role": "State Coordinator",
    "designation": "State Committee · Term 2023–2025",
    "badge": "Past Coordinator",
    "term": "2023 – 2025",
    "imgSrc": "/images/team/shreya-shiwakoti.jpg",
    "bio": "Coordinated regional youth arts, cultural exchange programs, and festival arrangements."
  }
];

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

export interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  event: string;
  tag: string;
}

export const INAS_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    src: "/images/gallery/inas-activity-01.png",
    title: "6th National Convention Stage Address",
    event: "INAS UK 6th General Assembly",
    tag: "Stage Address"
  },
  {
    id: 2,
    src: "/images/gallery/inas-activity-02.png",
    title: "President's Vision & Keynote Presentation",
    event: "London General Assembly",
    tag: "Keynote"
  },
  {
    id: 3,
    src: "/images/gallery/inas-activity-03.png",
    title: "Executive Standing Committee & Certificates",
    event: "Annual Convention 2024",
    tag: "Honours Distribution"
  },
  {
    id: 4,
    src: "/images/gallery/inas-activity-04.png",
    title: "Executive Leaders & Advisory Assembly",
    event: "Auditorium Front Row",
    tag: "Leadership"
  },
  {
    id: 5,
    src: "/images/gallery/inas-activity-05.png",
    title: "Classical Solo Harmonium & Vocal Recital",
    event: "Cultural Showcase Live",
    tag: "Live Performance"
  },
  {
    id: 6,
    src: "/images/gallery/inas-activity-06.png",
    title: "Full Theatre Audience & Community Guests",
    event: "London Performing Arts Hall",
    tag: "Auditorium Gala"
  },
  {
    id: 7,
    src: "/images/gallery/inas-activity-07.png",
    title: "Traditional Namaste Cultural Greeting",
    event: "6th Convention Opening",
    tag: "Ceremonial"
  },
  {
    id: 8,
    src: "/images/gallery/inas-activity-08.png",
    title: "Official INAS UK Crest & Emblem",
    event: "Artists Welfare & Culture Promotion",
    tag: "Heritage Crest"
  },
  {
    id: 9,
    src: "/images/gallery/inas-activity-09.png",
    title: "Felicitation Plaque Presentation",
    event: "Executive Committee Meeting",
    tag: "Felicitation"
  },
  {
    id: 10,
    src: "/images/gallery/inas-activity-10.png",
    title: "Summer Outdoor Artist Gathering",
    event: "Community Terrace Meet",
    tag: "Artist Fellowship"
  },
  {
    id: 11,
    src: "/images/gallery/inas-activity-11.png",
    title: "Diaspora Cultural Supporters & Families",
    event: "Annual Summer Gathering",
    tag: "Community"
  },
  {
    id: 12,
    src: "/images/gallery/inas-activity-12.png",
    title: "Senior Performing Artists with Society Banner",
    event: "INAS UK Fellowship",
    tag: "Official Banner"
  },
  {
    id: 13,
    src: "/images/gallery/inas-activity-13.png",
    title: "Distinguished Nepalese Film & Stage Artists",
    event: "Artist Camaraderie Meet",
    tag: "Cinema & Theatre"
  },
  {
    id: 14,
    src: "/images/gallery/inas-activity-14.png",
    title: "Sacred Tika & Khada Blessing Ceremony",
    event: "Traditional Ceremony",
    tag: "Tradition"
  },
  {
    id: 15,
    src: "/images/gallery/inas-activity-15.png",
    title: "Annual General Assembly Lecture & Report",
    event: "AGM London",
    tag: "AGM"
  },
  {
    id: 16,
    src: "/images/gallery/inas-activity-16.png",
    title: "Advisory Council Standing Reception",
    event: "Cultural Assembly",
    tag: "Council"
  },
  {
    id: 17,
    src: "/images/gallery/inas-activity-17.png",
    title: "Special Recognition Award to Senior Artist",
    event: "Heritage Honours",
    tag: "Award Ceremony"
  },
  {
    id: 18,
    src: "/images/gallery/inas-activity-18.png",
    title: "Members & Audience During Strategic Assembly",
    event: "Convention Hall",
    tag: "Community"
  },
  {
    id: 19,
    src: "/images/gallery/inas-activity-19.png",
    title: "Presidential Address in Cultural Dhaka Topi & Khada",
    event: "Keynote Address",
    tag: "President"
  },
  {
    id: 20,
    src: "/images/gallery/inas-activity-20.png",
    title: "Grand Theatre Hall Packed with Supporters",
    event: "Gala Main Stage",
    tag: "Grand Gala"
  },
  {
    id: 21,
    src: "/images/gallery/inas-activity-21.png",
    title: "Grand Finale Certificate & Honours Distribution",
    event: "6th National Convention Stage",
    tag: "Grand Finale"
  }
];

export interface InasEventRecord {
  title: string;
  nepaliTitle?: string;
  category: 'Convention' | 'Competition' | 'Welfare' | 'Community' | 'Masterclass';
  date: string;
  location: string;
  summary: string;
  highlights: string[];
  badge: string;
}

export const INAS_EVENTS_HISTORY: InasEventRecord[] = [
  {
    title: "INAS UK 6th National Convention & General Assembly",
    nepaliTitle: "इनास युकेको छैठौं अधिवेशन घोषणा सभा",
    category: "Convention",
    date: "2024",
    location: "London, United Kingdom",
    summary: "A landmark gathering of artists, musicians, choreographers, and patrons uniting the UK Nepali artistic community. Celebrated with live vocal presentations, authentic folk dance recitals, and cultural walk.",
    highlights: [
      "Election and formal declaration of the UK Executive Committee (2025–2027)",
      "Cultural performances including solo vocal, folk dance, and traditional attire cultural walk",
      "Conferment of certificates and lifetime contribution honours to veteran diaspora artists"
    ],
    badge: "Official Convention"
  },
  {
    title: "6th INAS European Regional Programme & Championships",
    nepaliTitle: "छैटौं इनास युरोपस्तरीय क्षेत्रीय कार्यक्रम",
    category: "Competition",
    date: "21–22 April 2018",
    location: "London, United Kingdom",
    summary: "Staged the European finals for the 6th Solo Nepali Dance and 3rd Solo Nepali Singing competitions, uniting national champions from across 12 European nations in London.",
    highlights: [
      "Solo Dance Winners: 1st Saru Shrestha (Germany), 2nd Nikita Sapkota (Belgium), 3rd Kajol Gurung (UK)",
      "Solo Singing Winners: 1st Sushrut Timalsina (UK), 2nd Niman Tamang (UK), 3rd Suraj Sapkota (Germany)",
      "Assembly of international adjudicators and distinguished performers from across Europe"
    ],
    badge: "European Championship"
  },
  {
    title: "Artist Benevolent Welfare Fund & Emergency Relief",
    nepaliTitle: "कलाकार कल्याणकारी कोष",
    category: "Welfare",
    date: "Continuous Mandate",
    location: "UK & Nepal",
    summary: "In keeping with INAS UK's core founding mission ('Stand for Artists Welfare and Culture Promotion'), providing direct financial, medical, and emergency relief to struggling or veteran artists.",
    highlights: [
      "Emergency medical assistance for veteran folk musicians and performers facing hardships",
      "Disaster relief mobilisation and benefit events supporting earthquake-affected artist families",
      "Dedicated legal and institutional framework safeguarded as a registered UK CIC (#15988250)"
    ],
    badge: "Welfare Mission"
  },
  {
    title: "Annual Summer Cultural Get-Together & Artist Fellowship",
    nepaliTitle: "वार्षिक ग्रीष्मकालीन कलाकार मिलन",
    category: "Community",
    date: "Annual Summer Edition",
    location: "London & South East",
    summary: "Informal, fraternal gathering connecting celebrated film directors, lyricists, folk performers, young emerging talents, and society patrons in an intimate outdoor setting.",
    highlights: [
      "Traditional BBQ, acoustic jam sessions, and poetry recitals under the society banner",
      "Mentorship conversations bridging veteran performers with second-generation diaspora youth",
      "Traditional Tika, Khada felicitation, and cross-generational creative exchange"
    ],
    badge: "Fellowship"
  },
  {
    title: "Youth Cultural Heritage & Instrumental Masterclasses",
    nepaliTitle: "युवा सांस्कृतिक कार्यशाला",
    category: "Masterclass",
    date: "Seasonal Workshops",
    location: "Woolwich & Plumstead, London",
    summary: "Hands-on instruction for young British-Nepali performers in classical tabla rhythm, traditional madal beats, sarangi, and authentic folk choreography.",
    highlights: [
      "Free and subsidised weekend workshops for youth and young learners",
      "Bilingual instruction linking cultural storytelling with practical instrumental skills",
      "Preparation pathways for auditions leading to European-level youth stages"
    ],
    badge: "Education"
  },
  {
    title: "Awarded Bid for the 12th INAS Europe Programme 2027",
    nepaliTitle: "१२औं युरोपस्तरीय कार्यक्रम आयोजना अधिकार",
    category: "Competition",
    date: "Easter Weekend (28–29 March 2027)",
    location: "Woolwich Works & Plumstead, London",
    summary: "Following the historic bid awarded at the 11th Programme in Maldegem, Belgium, INAS UK is preparing to host 26 continental finalists from 12 European nations in London.",
    highlights: [
      "Hosting the 12th Solo Nepali Dance and 9th Solo Nepali Singing European finals",
      "Grand two-day Easter weekend festival at the prestigious Woolwich Works auditorium",
      "Assembly of all European national coordinators, master artists, and international delegates"
    ],
    badge: "Upcoming Flagship"
  }
];

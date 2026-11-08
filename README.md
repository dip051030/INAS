# INAS UK – Next.js Website Replica

A modern, high-performance replica of the official **International Nepalese Artist Society UK CIC** ([inasukorg.uk](https://inasukorg.uk/)) built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **TypeScript**.

---

## 🌟 Highlights & Features

- **Accurate Design Replication**: Faithfully replicates the original layout, typography, color palette, custom cards, ribbons, and badges.
- **Local Assets & Authentic Media**: All 16 official logos, team portraits, event banners, and founder pictures are saved locally under `/public/images/`.
- **Complete Route Architecture**:
  - `/` – Homepage featuring the Hero banner, Centered Blue Ribbon, Mission & 3 Focus Cards, Meet the Team leadership grid, 12th Europe Regional Programme 2027 card, and Contact Us panel.
  - `/membership` – "Become part of INAS UK" with the 4 membership pathways, benefits checklist, regional coordinators, and an interactive application form.
  - `/activities` – Track record featuring the 6th INAS European Regional Programme results (Dance & Singing competitions), timeline, and 12-nation diaspora map.
  - `/news` – Flagship announcement for the 12th INAS Europe Regional Programme 2027 (Easter weekend), schedule for March 28–29, 2027, programme strands, and road to 2027.
  - `/scotland-committee` – Dedicated Scotland state chapter page with coordinator Hari Karki.
  - `/wales-committee` – Dedicated Wales state chapter page with coordinator Vijay Dangol.
  - `/executive-committee-2025` – 6th Global Executive Committee (57 members with portraits & filter).
  - `/executive-committee-2023` – 5th Global Executive Committee (39 members).
  - `/executive-committee-2021` – 4th Global Executive Committee (29 members).
  - `/executive-committee-2019` – 3rd Global Executive Committee (10 members).
  - `/executive-committee-2017` – 2nd Global Executive Committee (9 members).
  - `/executive-committee-2015` – Inaugural Foundation Committee & history.
- **Interactive UI**:
  - Responsive navigation with dropdown menus for Executive & State Committees.
  - Mobile slide-over drawer navigation with expandable accordions.
  - Real-time search bar dropdown.
  - Floating back-to-top button.
  - Interactive membership inquiry form with validation.

---

## 🚀 Getting Started

### 1. Development Server
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

### 2. Production Build
Build and start the optimized production bundle:
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                              # Root layout with header, footer & metadata
│   ├── page.tsx                                # Complete replica Homepage
│   ├── globals.css                             # Extracted styles, typography & Tailwind
│   ├── membership/page.tsx                     # Membership pathways & interactive form
│   ├── activities/page.tsx                     # 6th European Programme & track record
│   ├── news/page.tsx                           # 12th INAS Europe Programme 2027 schedule
│   ├── scotland-committee/page.tsx             # Scotland chapter
│   ├── wales-committee/page.tsx                # Wales chapter
│   ├── executive-committee-2025/page.tsx       # 2025–2027 6th committee (57 members)
│   ├── executive-committee-2023/page.tsx       # 2023–2025 5th committee
│   ├── executive-committee-2021/page.tsx       # 2021–2023 4th committee
│   ├── executive-committee-2019/page.tsx       # 2019–2021 3rd committee
│   ├── executive-committee-2017/page.tsx       # 2017–2019 2nd committee
│   └── executive-committee-2015/page.tsx       # 2015–2017 founding committee
├── components/
│   ├── Navbar.tsx                              # Sticky navbar, dropdowns, search, drawer
│   ├── Footer.tsx                              # 3-col footer with CIC registration & socials
│   ├── CommitteeView.tsx                       # Filterable editorial committee card grid
│   └── BackToTop.tsx                           # Smooth scroll-to-top floating button
├── data/
│   └── siteData.ts                             # Extracted committee database & site metadata
└── public/
    └── images/                                 # 16 authentic downloaded logos and photos
```

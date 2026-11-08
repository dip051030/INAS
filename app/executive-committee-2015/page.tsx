import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Executive Committee 2015–2017 – International Nepalese Society UK',
};

export default function Exec2015Page() {
  const termsNav = [
    { label: '2025–2027', href: '/executive-committee-2025' },
    { label: '2023–2025', href: '/executive-committee-2023' },
    { label: '2021–2023', href: '/executive-committee-2021' },
    { label: '2019–2021', href: '/executive-committee-2019' },
    { label: '2017–2019', href: '/executive-committee-2017' },
    { label: '2015–2017', href: '/executive-committee-2015' },
  ];

  const founders = [
    { name: 'Sanam Kumar Bairag', role: 'Founder President', tag: 'Founder' },
    { name: 'Puspa Baruwal', role: 'Founding General Secretary', tag: 'Inaugural Executive' },
    { name: 'Manish Shrestha', role: 'Founding Executive Member & Patron', tag: 'Patron' },
    { name: 'Binod Chipalu', role: 'Founding Member / Past President', tag: 'Honorary' },
    { name: 'Kamala Dahal', role: 'Founding Committee Member', tag: 'Inaugural' },
    { name: 'Meera Rana', role: 'Honorary Patron & Veteran Artist', tag: 'Patron' },
  ];

  return (
    <div className="bg-[#fbfcfe] min-h-screen py-14 lg:py-20">
      <div className="wrap">
        
        {/* Terms Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {termsNav.map((item, idx) => {
            const isActive = item.href === '/executive-committee-2015';
            return (
              <Link
                key={idx}
                href={item.href}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#070d1e] text-[#dfc07a] shadow-md border border-[#cba358]/30'
                    : 'bg-white text-gray-600 hover:text-[#070d1e] hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Editorial Masthead */}
        <header className="masthead text-center max-w-2xl mx-auto mb-12">
          <p className="text-[11px] uppercase font-bold tracking-widest text-[#cba358] mb-2">
            INAS UK · Founding History
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1536] tracking-tight mb-3">
            1st Executive <em className="font-serif-title italic font-normal text-[#cba358]">Committee</em>
          </h1>
          <div className="flex items-center justify-center gap-3 text-xs text-gray-500 font-medium">
            <span>2015 – 2017</span>
            <span className="w-6 h-[1px] bg-gray-300"></span>
            <span>Inaugural Foundation Term</span>
          </div>
        </header>

        {/* Narrative Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm max-w-3xl mx-auto mb-16 text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
          <p className="mb-3">
            Established in London in 2015, the International Nepalese Artist Society UK was founded by artists, musicians,
            and cultural patrons to champion Himalayan performing arts and heritage across the UK diaspora.
          </p>
          <p>
            Under inaugural leadership, the committee forged alliances with INAS Europe, hosted early London conventions,
            and laid the foundation for today&apos;s registered Community Interest Company.
          </p>
        </div>

        {/* Founding Leaders Grid */}
        <div className="grid">
          {founders.map((founder, idx) => (
            <figure key={idx} className="card card--lead">
              <div className="card__photo">
                <div className="initials font-bold text-2xl">
                  {founder.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
              </div>
              <figcaption className="card__body">
                <h3 className="card__name">{founder.name}</h3>
                <p className="card__role">{founder.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </div>
  );
}

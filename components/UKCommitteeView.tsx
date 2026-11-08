'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UK_EXECUTIVE_COMMITTEE } from '@/data/siteData';
import { Search, ShieldCheck, MapPin, Sparkles, Users } from 'lucide-react';

export default function UKCommitteeView() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

  const categories = [
    'All',
    'Executive Leadership',
    'Executive Officers',
    'Programme & Members',
    'State Coordinators',
    'Founders & Patrons',
  ];

  const filteredMembers = UK_EXECUTIVE_COMMITTEE.filter((m) => {
    const matchesCategory =
      activeCategory === 'All'
        ? true
        : activeCategory === 'State Coordinators'
        ? m.category === 'State Coordinators' || m.category === 'Past State Coordinators'
        : m.category === activeCategory;

    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase()) ||
      (m.designation && m.designation.toLowerCase().includes(search.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#fbfcfd] min-h-screen py-16 lg:py-24 text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Luxury Serif & Badges */}
        <header className="text-center max-w-3xl mx-auto mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-[#cba358] border border-amber-200/80 mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#dfc07a]" />
            <span>INAS UK CIC · Term 2025–2027</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a1128] tracking-tight mb-4">
            UK Executive <em className="font-serif-title italic font-normal text-[#cba358]">Committee</em>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The dedicated team of officers, directors, coordinators, and patrons leading the
            International Nepalese Artist Society UK across the United Kingdom.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 font-medium mt-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#c8102e]" /> United Kingdom
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#dfc07a]" /> 24 Active UK Team Members
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>CIC No. 15988250</span>
          </div>
        </header>

        {/* Filter Pills & Instant Live Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-14 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? UK_EXECUTIVE_COMMITTEE.length
                  : cat === 'State Coordinators'
                  ? UK_EXECUTIVE_COMMITTEE.filter(
                      (m) => m.category === 'State Coordinators' || m.category === 'Past State Coordinators'
                    ).length
                  : UK_EXECUTIVE_COMMITTEE.filter((m) => m.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? 'bg-[#0a1128] text-[#dfc07a] shadow-md font-bold'
                      : 'text-gray-600 hover:text-[#0a1128] hover:bg-slate-100'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeCategory === cat ? 'bg-[#dfc07a]/20 text-[#dfc07a]' : 'bg-slate-200 text-gray-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input with Icon */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Search member by name or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#dfc07a] bg-slate-50/60 shadow-inner"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          </div>

        </div>

        {/* Executive Committee Cards Grid - All with Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, idx) => {
            const isPresident = member.role.toLowerCase() === 'president';
            const isSeniorAdvisor = member.role.toLowerCase().includes('advisor');

            return (
              <div
                key={idx}
                className={`portrait-card group bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${
                  isPresident || isSeniorAdvisor
                    ? 'border-[#dfc07a]/80 shadow-md ring-1 ring-[#dfc07a]/20'
                    : 'border-slate-200/90 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Photo Container */}
                <div className="relative w-full aspect-[1/1.05] bg-slate-100 overflow-hidden">
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    fill
                    className="portrait-image object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge */}
                  {member.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9.5px] font-bold uppercase tracking-wider bg-[#050814]/90 text-[#dfc07a] backdrop-blur-md border border-[#dfc07a]/40 shadow-md">
                      {member.badge}
                    </div>
                  )}

                  {/* Term Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md text-[9.5px] font-semibold text-white bg-black/65 backdrop-blur-sm">
                    {member.term}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 flex flex-col justify-between flex-grow text-center">
                  <div>
                    <h3 className="text-base font-bold text-[#0a1128] mb-1 group-hover:text-[#cba358] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#c8102e] mb-1">
                      {member.role}
                    </p>
                    {member.designation && member.designation !== member.role && (
                      <p className="text-[11px] text-gray-500">
                        {member.designation}
                      </p>
                    )}
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-slate-100 text-[9.5px] text-gray-400 font-semibold uppercase tracking-widest">
                    {member.category}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-20 text-gray-400 text-sm bg-white rounded-3xl border border-slate-200 mt-6">
            <Users className="w-10 h-10 mx-auto text-gray-300 mb-3" />
            <p className="font-semibold text-gray-600">No UK team members found</p>
            <p className="text-xs text-gray-400 mt-1">Try adjusting your search query &quot;{search}&quot;</p>
          </div>
        )}

      </div>
    </div>
  );
}

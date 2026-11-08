import React from 'react';
import Link from 'next/link';
import {
  Trophy,
  Calendar,
  MapPin,
  Award,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  HeartHandshake,
  Users,
  Music,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { INAS_GALLERY_PHOTOS, INAS_EVENTS_HISTORY } from '@/data/siteData';
import ActivityMovingGallery from '@/components/ActivityMovingGallery';

export const metadata = {
  title: 'Activities, Events & Gallery – International Nepalese Artist Society UK',
  description: 'Explore the complete timeline of INAS UK conventions, European competitions, artist welfare grants, and our photographic gallery.',
};

export default function ActivitiesPage() {
  const europeanCountries = [
    { name: 'United Kingdom', isHost: true },
    { name: 'Germany', isHost: false },
    { name: 'Belgium', isHost: false },
    { name: 'France', isHost: false },
    { name: 'Portugal', isHost: false },
    { name: 'Spain', isHost: false },
    { name: 'Netherlands', isHost: false },
    { name: 'Switzerland', isHost: false },
    { name: 'Denmark', isHost: false },
    { name: 'Poland', isHost: false },
    { name: 'Italy', isHost: false },
    { name: 'Norway', isHost: false },
  ];

  return (
    <div className="bg-[#fbfcfd] min-h-screen text-[#0f172a]">
      
      {/* 1. HERO SECTION */}
      <div className="pt-16 pb-12 lg:pt-20 lg:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-[#cba358] border border-amber-200/80 mb-4 shadow-sm">
            <Trophy className="w-4 h-4 text-[#dfc07a]" />
            <span>Activities, Records &amp; Milestones</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a1128] tracking-tight mb-4">
            Our Activities &amp; <em className="font-serif-title italic font-normal text-[#cba358]">Events</em>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From national conventions and European solo dance/singing championships to community masterclasses
            and benevolent artist welfare funds — discover everything INAS UK has accomplished in Great Britain.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 font-medium mt-5">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#c8102e]" /> Estd. 2015 · London
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#dfc07a]" /> Registered UK CIC #15988250
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>12 European Nations</span>
          </div>
        </div>

        {/* 2. COMPLETE INAS EVENTS TIMELINE GRID */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#cba358] block mb-1">
                Chronicle of Achievements
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">
                All Major Events &amp; Initiatives
              </h2>
            </div>
            <span className="text-xs text-gray-500 font-semibold">
              Showing 6 Key Institutional Milestones
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {INAS_EVENTS_HISTORY.map((evt, idx) => (
              <div
                key={idx}
                className="portrait-card bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-[#cba358] border border-amber-200/70">
                      {evt.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400">
                      {evt.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1128] mb-1 group-hover:text-[#cba358] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  {evt.nepaliTitle && (
                    <span className="text-xs text-[#c8102e] font-semibold block mb-2 font-serif-title">
                      {evt.nepaliTitle}
                    </span>
                  )}

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {evt.summary}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    {evt.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-[11px] text-gray-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#dfc07a] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#c8102e]" /> {evt.location}
                  </span>
                  <span className="text-[#0a1128] font-bold uppercase text-[9.5px] tracking-wider">
                    {evt.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. HISTORIC FEATURED CARD: 6TH EUROPEAN PROGRAMME RESULTS */}
        <div className="bg-gradient-to-br from-[#050814] via-[#0a1128] to-[#131f47] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 mb-20 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cba358]/12 rounded-full blur-[110px] pointer-events-none"></div>

          <div className="max-w-3xl mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#dfc07a] border border-[#dfc07a]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Historic Championship Record</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              6th INAS European Regional Programme
            </h2>
            <p className="text-xs text-gray-300 mt-2 flex items-center gap-2 font-medium">
              <Calendar className="w-4 h-4 text-[#dfc07a]" /> 21–22 April 2018 · London, United Kingdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            
            {/* Solo Dance Winners */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfc07a] mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#dfc07a]" />
                <span>6th Solo Nepali Dance European Finals</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#dfc07a] text-[#050814] font-black flex items-center justify-center text-[10px]">1</span>
                    <strong className="text-sm text-white">Saru Shrestha</strong>
                  </div>
                  <span className="text-gray-300 font-medium">Germany</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-300 text-[#050814] font-black flex items-center justify-center text-[10px]">2</span>
                    <strong className="text-sm text-white">Nikita Sapkota</strong>
                  </div>
                  <span className="text-gray-300 font-medium">Belgium</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-black flex items-center justify-center text-[10px]">3</span>
                    <strong className="text-sm text-white">Kajol Gurung</strong>
                  </div>
                  <span className="text-[#dfc07a] font-bold">United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Solo Singing Winners */}
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#dfc07a] mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#dfc07a]" />
                <span>3rd Solo Nepali Singing European Finals</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#dfc07a] text-[#050814] font-black flex items-center justify-center text-[10px]">1</span>
                    <strong className="text-sm text-white">Sushrut Timalsina</strong>
                  </div>
                  <span className="text-[#dfc07a] font-bold">United Kingdom</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-300 text-[#050814] font-black flex items-center justify-center text-[10px]">2</span>
                    <strong className="text-sm text-white">Niman Tamang</strong>
                  </div>
                  <span className="text-[#dfc07a] font-bold">United Kingdom</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-700 text-white font-black flex items-center justify-center text-[10px]">3</span>
                    <strong className="text-sm text-white">Suraj Sapkota</strong>
                  </div>
                  <span className="text-gray-300 font-medium">Germany</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. 12 EUROPEAN NATIONS NETWORK */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#cba358] block mb-2">
            Continental Diaspora Reach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] mb-2">
            12 European Member Nations
          </h2>
          <p className="text-xs text-gray-500 mb-7 max-w-lg mx-auto">
            Artists, national coordinators, and cultural delegations participating in INAS European championships
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {europeanCountries.map((c, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full text-xs font-semibold ${
                  c.isHost
                    ? 'bg-[#0a1128] text-[#dfc07a] border border-[#dfc07a]/40 shadow-sm'
                    : 'bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {c.name} {c.isHost && '★ Host Nation'}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* 5. DEDICATED HORIZONTAL MOVING GALLERY SECTION WITH ANIMATION */}
      <ActivityMovingGallery photos={INAS_GALLERY_PHOTOS} />

    </div>
  );
}

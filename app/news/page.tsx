import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Music, Sparkles, Trophy, Users, ArrowRight, ShieldCheck } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className="bg-[#fbfcfd] min-h-screen py-16 lg:py-24 text-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-[#cba358] border border-amber-200/80 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#dfc07a]" />
            <span>Continental Event Countdown</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a1128] tracking-tight mb-4">
            Upcoming <em className="font-serif-title italic font-normal text-[#cba358]">Programmes</em>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The road to the 12th INAS Europe Regional Programme in London over the Easter 2027 weekend.
          </p>
        </div>

        {/* Flagship Card */}
        <div className="bg-gradient-to-br from-[#050814] via-[#0a1128] to-[#131f47] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 mb-16 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#cba358]/12 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#dfc07a] border border-[#dfc07a]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship European Convention</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
              The 12th INAS Europe Regional Programme 2027
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Two days of vibrant Himalayan performing arts in south-east London featuring 26 competitors from 12 European nations,
              official delegate assemblies, and gala masterclasses.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold mb-8">
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md">
                <Calendar className="w-4 h-4 text-[#dfc07a]" />
                <span>28–29 March 2027 (Easter Weekend)</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md">
                <MapPin className="w-4 h-4 text-[#dfc07a]" />
                <span>Woolwich &amp; Plumstead, London SE18</span>
              </div>
            </div>

            <Link
              href="/membership"
              className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <span>Audition &amp; Volunteer Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* The Two Event Days */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-[#0a1128] mb-8 text-center">Festival Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Day 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#cba358]">Day 1 · Sun 28 Mar 2027</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Delegate Assembly
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1128] mb-3">INAS Europe Regional Assembly</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Assembly of all European committee presidents, country coordinators, and executive advisors. Strategic review of regional initiatives and youth cultural mentorship.
                </p>
              </div>
              <div className="text-xs text-gray-500 font-medium space-y-1 pt-4 border-t border-slate-100">
                <p>📍 Plumstead Centre, London SE18</p>
                <p>⏰ 10:00 – 17:00</p>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#131f47]">Day 2 · Mon 29 Mar 2027</span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-50 text-[#cba358] border border-amber-200">
                    Public Festival Gala
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1128] mb-3">European Dance &amp; Singing Finals</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  Grand public championship staging the 12th Solo Nepali Dance and 9th Solo Singing finals, guest master performances, and trophy presentations.
                </p>
              </div>
              <div className="text-xs text-gray-500 font-medium space-y-1 pt-4 border-t border-slate-100">
                <p>📍 Grand Auditorium, Woolwich Works, London SE18</p>
                <p>⏰ 12:00 – 21:00</p>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Programme Strands */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm text-center group hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#c8102e] border border-red-200/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#0a1128] mb-1">Solo Nepali Dance</h4>
            <p className="text-xs text-gray-600 leading-relaxed">Folk, classical, and fusion choreography adjudicated by international masters.</p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm text-center group hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#131f47] border border-blue-200/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Music className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#0a1128] mb-1">Solo Nepali Singing</h4>
            <p className="text-xs text-gray-600 leading-relaxed">Traditional folk ballads and Adhunik geet with live acoustic accompaniment.</p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm text-center group hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#cba358] border border-amber-200/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#0a1128] mb-1">Youth Masterclasses</h4>
            <p className="text-xs text-gray-600 leading-relaxed">Interactive masterclasses in traditional percussion, instruments, and cultural storytelling.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

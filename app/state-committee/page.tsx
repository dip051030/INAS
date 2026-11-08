import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { STATE_COMMITTEE_MEMBERS, SITE_INFO } from '@/data/siteData';
import { MapPin, Users, Calendar, Award, ArrowRight, ShieldCheck, Sparkles, Music } from 'lucide-react';

export const metadata = {
  title: 'State Committee – International Nepalese Artist Society UK',
  description: 'Meet the regional coordinators and dedicated leaders of the INAS UK State Committee.',
};

export default function StateCommitteePage() {
  return (
    <div className="bg-[#fbfcfd] min-h-screen py-16 lg:py-24 text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <header className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-[#cba358] border border-amber-200/80 mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#dfc07a]" />
            <span>INAS UK · Regional Coordination</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a1128] tracking-tight mb-4">
            State <em className="font-serif-title italic font-normal text-[#cba358]">Committee</em>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            The dedicated coordinators and grassroots organizers fostering cultural fellowship,
            mentoring diaspora artists, and coordinating regional qualifiers across Great Britain.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500 font-medium mt-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#c8102e]" /> United Kingdom
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#dfc07a]" /> State Committee Leaders
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span>CIC No. 15988250</span>
          </div>
        </header>

        {/* State Committee Members Grid - All 5 with Real Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {STATE_COMMITTEE_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="portrait-card group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="relative w-full aspect-[1/1] bg-slate-100 overflow-hidden">
                  <Image
                    src={member.imgSrc}
                    alt={member.name}
                    fill
                    className="portrait-image object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#050814]/90 text-[#dfc07a] backdrop-blur-md border border-[#dfc07a]/30 shadow-md">
                    {member.badge}
                  </div>

                  {/* Term Tag */}
                  <div className="absolute bottom-4 left-4 px-2.5 py-0.5 rounded-md text-[10px] font-semibold text-white bg-black/65 backdrop-blur-sm">
                    {member.term}
                  </div>
                </div>

                {/* Body Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1128] mb-1 group-hover:text-[#cba358] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#c8102e] block mb-3">
                    {member.role}
                  </span>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span>{member.designation}</span>
                <span className="text-[#cba358] font-bold">INAS UK</span>
              </div>
            </div>
          ))}
        </div>

        {/* State Committee Mandate & Objectives */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#cba358] block mb-2">
              Regional Mandate
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1128] tracking-tight">
              State Committee Responsibilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#cba358] border border-amber-200/60 flex items-center justify-center mb-4 shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#0a1128] mb-2">Grassroots Artist Scouting</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Identifying, registering, and mentoring folk and modern artists, instrumentalists, and traditional dancers across all UK regions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#131f47] border border-blue-200/60 flex items-center justify-center mb-4 shadow-sm">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#0a1128] mb-2">Festive Recitals &amp; Workshops</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Organizing regional festive recitals, Dashain &amp; Tihar cultural concerts, and educational workshops for young learners.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#c8102e] border border-rose-200/60 flex items-center justify-center mb-4 shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-[#0a1128] mb-2">National Competition Auditions</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Hosting preliminaries and auditions for UK candidates preparing to compete in the European Solo Dance and Solo Singing Championships.
              </p>
            </div>

          </div>
        </div>

        {/* Minimalist Dark Invitation Strip */}
        <div className="bg-gradient-to-r from-[#050814] via-[#0a1128] to-[#131f47] text-white rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Collaborate with the State Committee</h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Reach out to coordinate local workshops, register as a regional performing artist, or invite INAS UK talent to your community event.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/membership"
              className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <span>Join State Committee Network</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/executive-committee-2025"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white glass-dark-elevated hover:bg-white/10 border border-white/15 transition-colors"
            >
              <span>View Executive Committee &rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

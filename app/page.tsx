import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_INFO } from '@/data/siteData';
import {
  ArrowRight,
  Calendar,
  MapPin,
  Sparkles,
  Trophy,
  Users,
  ShieldCheck,
  Music,
  Compass,
  ArrowUpRight,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[#fbfcfd] text-[#0f172a] selection:bg-[#dfc07a] selection:text-[#050814]">
      
      {/* 1. HERO SECTION: Grand Editorial & Ambient Luxury */}
      <section className="relative bg-mesh-dark text-white overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-white/[0.08]">
        
        {/* Ambient Golden Glowing Orbs */}
        <div className="absolute top-10 right-1/4 w-[540px] h-[540px] bg-[#cba358]/12 rounded-full blur-[150px] pointer-events-none animate-glow-pulse"></div>
        <div className="absolute -bottom-20 left-10 w-[420px] h-[420px] bg-[#1c2b5f]/40 rounded-full blur-[140px] pointer-events-none"></div>
        
        {/* Subtle Cultural Pattern Overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Prestigious Copy & Key Actions */}
            <div className="lg:col-span-7 space-y-7 animate-fade-in-up">
              
              {/* Refined Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase glass-gold-pill text-[#dfc07a] shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#dfc07a] animate-pulse"></span>
                <span>Community Interest Company · Reg. 15988250</span>
              </div>

              {/* Title with Serif Luxury & Gold Gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Himalayan Heritage.<br />
                <span className="gold-gradient-text font-serif-title italic font-normal tracking-normal">
                  Empowering Artists.
                </span>
              </h1>

              {/* Editorial Description */}
              <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                International Nepalese Artist Society UK is the premier cultural sanctuary uniting
                diaspora performers, traditional instrumentalists, and contemporary artists across
                the United Kingdom.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/membership"
                  className="btn-gold-shimmer inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-xl transition-all"
                >
                  <span>Become a Member</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 hover:text-white glass-dark-elevated hover:bg-white/[0.1] transition-all border border-white/15"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#dfc07a]" />
                  <span>12th Europe Programme 2027</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-gray-400 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#dfc07a] flex-shrink-0" />
                  <span className="font-medium">CIC Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#dfc07a] flex-shrink-0" />
                  <span className="font-medium">European Contests</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <Users className="w-4 h-4 text-[#dfc07a] flex-shrink-0" />
                  <span className="font-medium">National Coverage</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Frame with Gold Accent and Floating Glass Pill */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden p-1.5 gold-border-glow shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] group">
                
                <div className="relative w-full h-full rounded-[22px] overflow-hidden">
                  <Image
                    src="/images/e8b6546d-fbb3-4bcc-a537-f739be81cce0.jpg"
                    alt="INAS UK Cultural Celebration and Artists"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/85 via-transparent to-transparent"></div>
                  
                  {/* Floating Glass Pill Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-dark-elevated flex items-center justify-between text-xs text-white border border-white/15 animate-float-slow">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#dfc07a] mb-0.5">
                        <Sparkles className="w-3 h-3 text-[#dfc07a]" />
                        <span>Flagship European Edition</span>
                      </div>
                      <span className="block font-bold text-sm text-white">Easter Weekend 2027 · London</span>
                      <span className="text-[11px] text-gray-300">26 European Finalists · Solo Dance &amp; Singing</span>
                    </div>
                    <Link
                      href="/news"
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-[#dfc07a] hover:text-[#050814] text-white transition-all ml-3 flex-shrink-0"
                      aria-label="View Programme details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS & REPUTATION STRIP */}
      <section className="bg-white border-b border-slate-200/80 py-10 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="text-center md:border-r border-slate-200/80 last:border-none p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0a1128] tracking-tight">
                10+ <span className="text-[#cba358]">Years</span>
              </span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1 block">
                Artistic Heritage
              </span>
            </div>

            <div className="text-center md:border-r border-slate-200/80 last:border-none p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0a1128] tracking-tight">
                12 <span className="text-[#cba358]">Nations</span>
              </span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1 block">
                European Cultural Network
              </span>
            </div>

            <div className="text-center md:border-r border-slate-200/80 last:border-none p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0a1128] tracking-tight">
                24 <span className="text-[#cba358]">Leaders</span>
              </span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1 block">
                UK Executive &amp; State Team
              </span>
            </div>

            <div className="text-center p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0a1128] tracking-tight">
                1,000+
              </span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1 block">
                Patrons &amp; Community Visitors
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ARTISTIC PILLARS / THREE MISSIONS */}
      <section className="py-20 lg:py-28 bg-[#fbfcfd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#cba358] block mb-2">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1128] tracking-tight">
              Preserving Culture, <em className="font-serif-title italic font-normal text-[#c8102e]">Championing Artists</em>
            </h2>
            <div className="w-16 h-1 bg-[#dfc07a] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_-6px_rgba(10,17,40,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#cba358] border border-amber-200/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Music className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1128] mb-3 group-hover:text-[#cba358] transition-colors">
                  Classical &amp; Folk Performing Arts
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Preserving and celebrating sacred classical ragas, traditional folk instruments (Madal, Sarangi, Bansuri),
                  and authentic regional dances from across Nepal.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1128]">
                <span>Workshops &amp; Recitals</span>
                <span className="text-[#cba358]">&rarr;</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_-6px_rgba(10,17,40,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#131f47] border border-blue-200/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1128] mb-3 group-hover:text-[#cba358] transition-colors">
                  European Competition Gateway
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Coordinating British qualifications and delegations for the prestigious European Solo Dancing
                  and European Solo Singing Championships.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1128]">
                <span>12 European Nations</span>
                <span className="text-[#cba358]">&rarr;</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_35px_-6px_rgba(10,17,40,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#c8102e] border border-rose-200/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1128] mb-3 group-hover:text-[#cba358] transition-colors">
                  Artist Welfare &amp; Fellowship
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  As an accredited UK Community Interest Company, we support the livelihoods, recognition, and mental
                  well-being of working immigrant artists and elder performers.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0a1128]">
                <span>CIC Welfare Mandate</span>
                <span className="text-[#cba358]">&rarr;</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. GOVERNANCE & LEADERSHIP SPOTLIGHT */}
      <section className="py-20 lg:py-28 bg-[#f4f7fb] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#cba358] block mb-2">
                Executive Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1128] tracking-tight">
                Governance &amp; <em className="font-serif-title italic font-normal text-[#cba358]">Officers</em>
              </h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
              <Link
                href="/executive-committee-2025"
                className="px-5 py-2.5 rounded-full bg-[#0a1128] text-[#dfc07a] hover:bg-[#131f47] shadow-sm transition-all flex items-center gap-1.5"
              >
                <span>Executive Committee (24 Members)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              
              <Link
                href="/state-committee"
                className="px-5 py-2.5 rounded-full bg-white text-[#0a1128] border border-slate-300 hover:border-[#cba358] hover:text-[#cba358] shadow-sm transition-all flex items-center gap-1.5"
              >
                <span>State Committee</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Top 2 Leaders: President & Senior Executive Advisor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* President: Sanjaya Kandel */}
            <div className="portrait-card bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100 border-2 border-[#dfc07a]/40 shadow-md">
                <Image
                  src="/images/461243918_477367171946048_603323212427980209_n.jpg"
                  alt="Sanjaya Kandel"
                  fill
                  className="portrait-image object-cover"
                />
              </div>
              <div className="text-center sm:text-left flex-grow">
                <span className="inline-block px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-amber-50 text-[#cba358] border border-amber-200/80 mb-2">
                  ★ President
                </span>
                <h3 className="text-2xl font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors">
                  Sanjaya Kandel
                </h3>
                <p className="text-xs text-gray-500 font-semibold mb-3">Company Director · INAS UK</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Steering institutional partnerships, legal stewardship, and global festival curation for the United Kingdom.
                </p>
              </div>
            </div>

            {/* Senior Executive Advisor: Sarbendra Adhikary */}
            <div className="portrait-card bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 group">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100 border-2 border-blue-200 shadow-md">
                <Image
                  src="/images/459829303_1033677235219092_3976631607542329491_n-e1727700573822.jpg"
                  alt="Sarbendra Adhikary"
                  fill
                  className="portrait-image object-cover"
                />
              </div>
              <div className="text-center sm:text-left flex-grow">
                <span className="inline-block px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-wider bg-blue-50 text-[#131f47] border border-blue-200 mb-2">
                  ◆ Senior Executive Advisor
                </span>
                <h3 className="text-2xl font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors">
                  Sarbendra Adhikary
                </h3>
                <p className="text-xs text-gray-500 font-semibold mb-3">UK Executive Advisory &amp; Director</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Senior strategic advisor guiding artist fellowships, European cross-border collaboration, and community outreach.
                </p>
              </div>
            </div>

          </div>

          {/* Officers Row: All 6 Key Officers with Photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            
            {/* 1. Deepak Thapa */}
            <div className="portrait-card bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center flex flex-col items-center justify-between group">
              <div>
                <div className="relative w-20 h-20 mb-3.5 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 group-hover:border-[#cba358] transition-colors shadow-inner">
                  <Image src="/images/deepak-thapa-e1727702891810.jpg" alt="Deepak Thapa" fill className="portrait-image object-cover" />
                </div>
                <h4 className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors leading-tight">
                  Deepak Thapa
                </h4>
              </div>
              <span className="text-[10px] text-[#c8102e] font-bold uppercase tracking-wider block mt-2">
                Vice President
              </span>
            </div>

            {/* 2. Sabina Shrestha */}
            <div className="portrait-card bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center flex flex-col items-center justify-between group">
              <div>
                <div className="relative w-20 h-20 mb-3.5 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 group-hover:border-[#cba358] transition-colors shadow-inner">
                  <Image src="/images/461433159_940161341486845_1992974142303693528_n.jpg" alt="Sabina Shrestha" fill className="portrait-image object-cover" />
                </div>
                <h4 className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors leading-tight">
                  Sabina Shrestha
                </h4>
              </div>
              <span className="text-[10px] text-[#c8102e] font-bold uppercase tracking-wider block mt-2">
                Vice President
              </span>
            </div>

            {/* 3. Lal Mani Bhattarai */}
            <div className="portrait-card bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center flex flex-col items-center justify-between group">
              <div>
                <div className="relative w-20 h-20 mb-3.5 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 group-hover:border-[#cba358] transition-colors shadow-inner">
                  <Image src="/images/WhatsApp-Image-2024-03-12-at-11.47.29-AM.jpeg" alt="Lal Mani Bhattarai" fill className="portrait-image object-cover" />
                </div>
                <h4 className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors leading-tight">
                  Lal Mani Bhattarai
                </h4>
              </div>
              <span className="text-[10px] text-[#c8102e] font-bold uppercase tracking-wider block mt-2">
                General Secretary
              </span>
            </div>

            {/* 4. Dip Giri */}
            <div className="portrait-card bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center flex flex-col items-center justify-between group">
              <div>
                <div className="relative w-20 h-20 mb-3.5 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 group-hover:border-[#cba358] transition-colors shadow-inner">
                  <Image src="/images/team/dip-giri.jpg" alt="Dip Giri" fill className="portrait-image object-cover" />
                </div>
                <h4 className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors leading-tight">
                  Dip Giri
                </h4>
              </div>
              <span className="text-[10px] text-[#c8102e] font-bold uppercase tracking-wider block mt-2">
                Deputy Gen. Sec.
              </span>
            </div>

            {/* 5. Renuka Shrestha */}
            <div className="portrait-card bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center flex flex-col items-center justify-between group">
              <div>
                <div className="relative w-20 h-20 mb-3.5 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 group-hover:border-[#cba358] transition-colors shadow-inner">
                  <Image src="/images/team/renuka-shrestha.jpg" alt="Renuka Shrestha" fill className="portrait-image object-cover" />
                </div>
                <h4 className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors leading-tight">
                  Renuka Shrestha
                </h4>
              </div>
              <span className="text-[10px] text-[#c8102e] font-bold uppercase tracking-wider block mt-2">
                Treasurer
              </span>
            </div>

            {/* 6. Amrita Pandey */}
            <div className="portrait-card bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm text-center flex flex-col items-center justify-between group">
              <div>
                <div className="relative w-20 h-20 mb-3.5 rounded-full overflow-hidden bg-slate-100 border-2 border-slate-200 group-hover:border-[#cba358] transition-colors shadow-inner">
                  <Image src="/images/461291825_1751052325717836_7017261014996237513_n.jpg" alt="Amrita Pandey" fill className="portrait-image object-cover" />
                </div>
                <h4 className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors leading-tight">
                  Amrita Pandey
                </h4>
              </div>
              <span className="text-[10px] text-[#c8102e] font-bold uppercase tracking-wider block mt-2">
                Joint Treasurer
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SPOTLIGHT: THE 12TH EUROPE PROGRAMME 2027 */}
      <section className="py-20 lg:py-28 bg-[#0a1128] text-white relative overflow-hidden">
        
        {/* Subtle Ambient Golden Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#cba358]/10 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest glass-gold-pill text-[#dfc07a]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Continental Gathering · London</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              The 12th INAS Europe <br />
              <span className="gold-gradient-text font-serif-title italic font-normal">Programme 2027</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              A landmark two-day international festival hosting the 12th European Solo Nepali Dance Competition
              and 9th European Solo Singing Competition — bringing 26 national finalists together in London.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2 text-left text-xs">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.06] border border-white/10">
                <Calendar className="w-5 h-5 text-[#dfc07a] flex-shrink-0" />
                <div>
                  <span className="block font-bold text-white text-sm">Easter Weekend</span>
                  <span className="text-gray-400">28–29 March 2027</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.06] border border-white/10">
                <MapPin className="w-5 h-5 text-[#dfc07a] flex-shrink-0" />
                <div>
                  <span className="block font-bold text-white text-sm">Woolwich &amp; Plumstead</span>
                  <span className="text-gray-400">London SE18, United Kingdom</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Link
                href="/news"
                className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                <span>Read Full Event Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/activities"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold text-gray-300 hover:text-white glass-dark-elevated hover:bg-white/10 transition-colors border border-white/15"
              >
                <span>Past Winners &amp; Track Record</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 6. MEMBERSHIP CALL TO ACTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#050814] via-[#0a1128] to-[#131f47] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-white/10">
            
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dfc07a] block">
                Open Pathways
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Join the INAS UK Cultural Society
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you are a practicing dancer, vocal soloist, instrumentalist, volunteer organizer,
                or cultural patron — your contribution keeps Himalayan arts thriving in Great Britain.
              </p>
              
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  <span>Select Membership Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-gray-400">Artist · Volunteer · Youth · Patron</span>
              </div>
            </div>

            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#dfc07a]/15 rounded-full blur-[90px] pointer-events-none"></div>

          </div>
        </div>
      </section>

      {/* 7. CONTACT STRIP */}
      <section className="bg-[#fbfcfd] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <a
              href={`mailto:${SITE_INFO.email}`}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#dfc07a]/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#c8102e] flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform">
                @
              </div>
              <div>
                <span className="block text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Official Email</span>
                <span className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors">{SITE_INFO.email}</span>
              </div>
            </a>

            <a
              href={SITE_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#dfc07a]/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#131f47] flex items-center justify-center group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Secretariat</span>
                <span className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors">London SE18 1PR, United Kingdom</span>
              </div>
            </a>

            <a
              href="tel:+447767424341"
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#dfc07a]/60 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#cba358] flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform">
                #
              </div>
              <div>
                <span className="block text-[11px] text-gray-400 font-semibold uppercase tracking-wider">President Direct</span>
                <span className="text-sm font-bold text-[#0a1128] group-hover:text-[#cba358] transition-colors">07767 424341</span>
              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
}

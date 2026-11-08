'use client';

import React, { useState } from 'react';
import { SITE_INFO } from '@/data/siteData';
import { Check, Send, Users, Heart, Award, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function MembershipPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nation: 'UK National',
    interest: 'Performing Artist',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const pathways = [
    {
      id: '01',
      title: 'Performing Artist',
      forWhom: 'Dancers, Singers & Instrumentalists',
      desc: 'Access UK qualifying auditions, European competition mentorship, and international stage showcases.',
      icon: Award,
      badge: 'Competitive & Showcase',
    },
    {
      id: '02',
      title: 'Community Member',
      forWhom: 'Cultural Supporters & Patrons',
      desc: 'Privileged attendance at annual conventions, festive recitals, and regional community galas.',
      icon: Users,
      badge: 'All Welcome',
    },
    {
      id: '03',
      title: 'Event Volunteer',
      forWhom: 'Organisers & Coordinators',
      desc: 'Work behind the scenes or on stage managing festivals, hospitality, and event production.',
      icon: Heart,
      badge: 'United Kingdom Wide',
    },
    {
      id: '04',
      title: 'Youth & Workshop',
      forWhom: 'Emerging Learners & Families',
      desc: 'Structured workshops in traditional folk dance, rhythmic instruments (Madal, Tabla), and heritage.',
      icon: Sparkles,
      badge: 'Heritage Learning',
    },
  ];

  return (
    <div className="bg-[#fbfcfd] min-h-screen py-16 lg:py-24 text-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-[#cba358] border border-amber-200/80 mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#dfc07a]" />
            <span>Join INAS UK Community</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0a1128] tracking-tight mb-4">
            Membership <em className="font-serif-title italic font-normal text-[#cba358]">Pathways</em>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Support Himalayan performing arts across the United Kingdom. Choose your pathway and connect with fellow creators.
          </p>
        </div>

        {/* 4 Clean Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="portrait-card bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-gray-400">{p.id}</span>
                    <span className="p-2.5 rounded-xl bg-amber-50 text-[#cba358] border border-amber-200/50 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1128] mb-1 group-hover:text-[#cba358] transition-colors">{p.title}</h3>
                  <span className="text-xs text-gray-500 font-medium block mb-3">{p.forWhom}</span>
                  <p className="text-gray-600 text-xs leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#cba358] bg-amber-50 px-3 py-1 rounded-full w-max border border-amber-200/60">
                  {p.badge}
                </span>
              </div>
            );
          })}
        </div>

        {/* What You Receive */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm mb-20">
          <h2 className="text-2xl font-bold text-[#0a1128] mb-8 text-center">
            Membership Privileges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            
            <div className="flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="block text-[#0a1128] mb-1">European Stage Access</strong>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Opportunity to compete in the INAS European Solo Dance and Solo Singing competitions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="block text-[#0a1128] mb-1">Democratic Voice</strong>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Vote for the Executive Committee at general conventions and help shape society policies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <strong className="block text-[#0a1128] mb-1">Youth Workshops</strong>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Structured learning in authentic folk instruments, rhythmic tabla, and traditional choreography.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Minimal Luxury Inquiry Form */}
        <div className="bg-gradient-to-br from-[#050814] via-[#0a1128] to-[#131f47] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 max-w-3xl mx-auto relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#dfc07a]/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="text-center mb-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#dfc07a]">Register Your Interest</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">Ready to Join?</h2>
            <p className="text-gray-300 text-xs mt-2">
              Submit your inquiry and an INAS UK coordinator will connect with you directly.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 bg-white/10 rounded-2xl border border-white/10 relative z-10">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Inquiry Received</h3>
              <p className="text-xs text-gray-300 max-w-sm mx-auto">
                Thank you for your interest in INAS UK. We will reach out shortly to your email address.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-1 focus:ring-[#dfc07a]"
                    placeholder="e.g. Maya Gurung"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-1 focus:ring-[#dfc07a]"
                    placeholder="maya@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-1 focus:ring-[#dfc07a]"
                    placeholder="+44 7..."
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Region / Affiliation
                  </label>
                  <select
                    value={formData.nation}
                    onChange={(e) => setFormData({ ...formData, nation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0a1128] border border-white/15 text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#dfc07a]"
                  >
                    <option value="UK National">UK National</option>
                    <option value="State Committee">State Committee</option>
                    <option value="London & South">London & Greater South</option>
                    <option value="Midlands & North">Midlands & North</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                  Pathway of Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0a1128] border border-white/15 text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#dfc07a]"
                >
                  <option value="Performing Artist">Performing Artist (Dance / Singing / Instrument)</option>
                  <option value="Community Member">Community Member</option>
                  <option value="Volunteer">Volunteer &amp; Event Support</option>
                  <option value="Youth Workshop">Family &amp; Youth Workshop</option>
                </select>
              </div>

              <div className="text-center pt-3">
                <button
                  type="submit"
                  className="btn-gold-shimmer inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-[11px] text-gray-400">
            Registered Community Interest Company No. 15988250 · {SITE_INFO.email}
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_INFO } from '@/data/siteData';
import { MapPin, Mail, Phone, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050814] text-white border-t border-white/10 text-xs relative overflow-hidden">
      
      {/* Decorative hairline gold top accent */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#dfc07a]/60 to-transparent"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1 & 2: Brand & CIC Registration */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/Logo-Inas-Website-150x150.png"
                  alt="INAS UK Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wider block text-white">
                  INAS <span className="text-[#dfc07a]">UK</span>
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block">
                  Community Interest Company
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              International Nepalese Artist Society UK is dedicated to safeguarding traditional
              Himalayan arts, empowering diaspora performers, and uniting communities across the United Kingdom.
            </p>

            <div className="pt-2 text-[11px] text-gray-400 space-y-1">
              <p><strong className="text-gray-300">Company No.:</strong> 15988250 (England &amp; Wales)</p>
              <p><strong className="text-gray-300">Classification:</strong> Arts &amp; Cultural Non-Profit CIC</p>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#dfc07a] block">
              Exploration
            </span>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-white transition-colors">Membership Pathways</Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white transition-colors">Past Competitions &amp; Winners</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Programme 2027</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dfc07a]"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#dfc07a] block">
              Governance
            </span>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <Link href="/executive-committee-2025" className="hover:text-white transition-colors">
                  UK Executive Committee
                </Link>
              </li>
              <li>
                <Link href="/state-committee" className="hover:text-white transition-colors">
                  State Committee
                </Link>
              </li>
              <li>
                <Link href="/executive-committee-2023" className="hover:text-white transition-colors">
                  Past Committee Archives
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect & Legal */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#dfc07a] block">
              Connect
            </span>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#dfc07a] flex-shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {SITE_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dfc07a] flex-shrink-0" />
                <span className="text-gray-400">London SE18, UK</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={SITE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-[#1877f2] hover:text-white text-gray-300 transition-all text-[11px] font-semibold"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.592 0 9 1.592 9 4.889V8z"/>
                </svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} International Nepalese Artist Society UK CIC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Preserving Himalayan Culture</span>
            <span>·</span>
            <Link href="/membership" className="text-[#dfc07a] hover:underline font-semibold">
              Join INAS UK
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

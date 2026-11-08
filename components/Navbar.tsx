'use client';

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const searchResults = [
    { title: 'Home', subtitle: 'Himalayan Arts & Heritage in Great Britain', url: '/' },
    { title: 'Executive Committee', subtitle: 'INAS UK Executive Leadership & 24 Officers', url: '/executive-committee-2025' },
    { title: 'State Committee', subtitle: 'Regional Representatives & Cultural Coordinators', url: '/state-committee' },
    { title: '12th Europe Programme 2027', subtitle: 'Easter weekend celebration in London SE18', url: '/news' },
    { title: 'Activities & Record', subtitle: 'Past European Solo Dance & Singing winners', url: '/activities' },
    { title: 'Membership & Pathways', subtitle: 'Join as artist, coordinator, patron or youth', url: '/membership' },
  ].filter(item => searchQuery.trim() !== '' && (
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  ));

  return (
    <>
      {/* Top ambient gold accent hairline */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#dfc07a]/80 to-transparent fixed top-0 left-0 z-[60] pointer-events-none" />

      {/* Main Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050814]/92 backdrop-blur-2xl shadow-[0_10px_35px_-10px_rgba(0,0,0,0.5)] border-b border-white/[0.08] py-3'
            : 'bg-[#050814]/80 backdrop-blur-md border-b border-white/[0.05] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Brand Identity */}
            <NextLink href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/Logo-Inas-Website-1024x1024.png"
                  alt="INAS UK Logo"
                  fill
                  className="object-contain drop-shadow-[0_2px_12px_rgba(203,163,88,0.25)]"
                  priority
                />
              </div>
              <span className="text-white font-extrabold text-lg sm:text-xl tracking-wider leading-none flex items-center gap-1.5">
                INAS <span className="text-[#dfc07a] font-black">UK</span>
              </span>
            </NextLink>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 text-[13px] font-semibold tracking-wide text-gray-300">
              <NextLink
                href="/"
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  pathname === '/'
                    ? 'text-[#dfc07a] bg-white/[0.07] font-bold shadow-inner'
                    : 'hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                Home
              </NextLink>

              <NextLink
                href="/executive-committee-2025"
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  pathname.includes('executive-committee')
                    ? 'text-[#dfc07a] bg-white/[0.07] font-bold shadow-inner'
                    : 'hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                Executive Committee
              </NextLink>

              <NextLink
                href="/state-committee"
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  pathname.includes('state-committee')
                    ? 'text-[#dfc07a] bg-white/[0.07] font-bold shadow-inner'
                    : 'hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                State Committee
              </NextLink>

              <NextLink
                href="/activities"
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  pathname === '/activities'
                    ? 'text-[#dfc07a] bg-white/[0.07] font-bold shadow-inner'
                    : 'hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                Activities
              </NextLink>

              <NextLink
                href="/news"
                className={`px-3.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 ${
                  pathname === '/news'
                    ? 'text-[#dfc07a] bg-white/[0.07] font-bold shadow-inner'
                    : 'hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfc07a] animate-pulse"></span>
                <span>Programme 2027</span>
              </NextLink>
            </nav>

            {/* Right Action: Search & Metallic CTA */}
            <div className="hidden lg:flex items-center gap-3.5">
              
              {/* Search Trigger */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-gray-400 hover:text-[#dfc07a] hover:bg-white/[0.08] rounded-full transition-all duration-300"
                  aria-label="Search site"
                >
                  <Search className="h-4 w-4" />
                </button>

                {searchOpen && (
                  <div className="absolute right-0 mt-3 w-88 bg-[#0a1128]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] rounded-2xl border border-white/15 p-4 z-50 animate-scale-in">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search artists, committee, events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="w-full pl-9 pr-3 py-2.5 text-xs bg-white/[0.07] border border-white/15 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#dfc07a]"
                      />
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    </div>

                    {searchResults.length > 0 && (
                      <div className="mt-3 divide-y divide-white/[0.08] max-h-60 overflow-y-auto">
                        {searchResults.map((res, i) => (
                          <NextLink
                            key={i}
                            href={res.url}
                            onClick={() => setSearchOpen(false)}
                            className="block py-2.5 px-2.5 hover:bg-white/[0.08] rounded-xl transition-colors text-left group"
                          >
                            <span className="block text-xs font-semibold text-white group-hover:text-[#dfc07a] transition-colors">
                              {res.title}
                            </span>
                            <span className="block text-[10.5px] text-gray-400 mt-0.5">{res.subtitle}</span>
                          </NextLink>
                        ))}
                      </div>
                    )}
                    {searchQuery && searchResults.length === 0 && (
                      <p className="mt-3 text-xs text-gray-400 text-center py-3">No matching results found</p>
                    )}
                  </div>
                )}
              </div>

              {/* Ultra-luxe Gold CTA */}
              <NextLink
                href="/membership"
                className="btn-gold-shimmer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <span>Join INAS UK</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </NextLink>

            </div>

            {/* Mobile Actions: Search & Three-Bar Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>

              {/* Three Bar (Hamburger) Menu Button with Toggle State */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all ${
                  mobileMenuOpen
                    ? 'bg-[#dfc07a]/20 border-[#dfc07a]/50 text-[#dfc07a]'
                    : 'text-gray-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Search Dropdown if open */}
        {searchOpen && (
          <div className="lg:hidden px-4 pt-3 pb-2 border-t border-white/10 bg-[#050814]/95 animate-fade-in-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Search artists, committee, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-white/[0.07] border border-white/15 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#dfc07a]"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>

            {searchResults.length > 0 && (
              <div className="mt-3 divide-y divide-white/[0.08] max-h-52 overflow-y-auto">
                {searchResults.map((res, i) => (
                  <NextLink
                    key={i}
                    href={res.url}
                    onClick={() => {
                      setSearchOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className="block py-2 px-2 hover:bg-white/[0.08] rounded-lg transition-colors text-left"
                  >
                    <span className="block text-xs font-semibold text-white">{res.title}</span>
                    <span className="block text-[10px] text-gray-400">{res.subtitle}</span>
                  </NextLink>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Mobile Drawer (Rendered Outside header to avoid stacking context & backdrop-filter clipping) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex lg:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative flex flex-col w-full max-w-xs bg-[#050814] text-white h-full shadow-2xl p-6 overflow-y-auto border-r border-white/10 z-10 animate-fade-in-up">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <NextLink
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/Logo-Inas-Website-1024x1024.png"
                    alt="INAS UK"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-extrabold text-base tracking-wider block text-white">
                  INAS <span className="text-[#dfc07a]">UK</span>
                </span>
              </NextLink>
              
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links with close on click */}
            <nav className="mt-6 flex flex-col space-y-1.5 text-sm font-semibold text-gray-200">
              <NextLink
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl transition-colors ${
                  pathname === '/' ? 'text-[#dfc07a] bg-white/10 font-bold' : 'hover:bg-white/10 hover:text-[#dfc07a]'
                }`}
              >
                Home
              </NextLink>

              <NextLink
                href="/executive-committee-2025"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl transition-colors ${
                  pathname.includes('executive-committee') ? 'text-[#dfc07a] bg-white/10 font-bold' : 'hover:bg-white/10 hover:text-[#dfc07a]'
                }`}
              >
                Executive Committee
              </NextLink>

              <NextLink
                href="/state-committee"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl transition-colors ${
                  pathname.includes('state-committee') ? 'text-[#dfc07a] bg-white/10 font-bold' : 'hover:bg-white/10 hover:text-[#dfc07a]'
                }`}
              >
                State Committee
              </NextLink>

              <NextLink
                href="/activities"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl transition-colors ${
                  pathname === '/activities' ? 'text-[#dfc07a] bg-white/10 font-bold' : 'hover:bg-white/10 hover:text-[#dfc07a]'
                }`}
              >
                Activities &amp; Record
              </NextLink>

              <NextLink
                href="/news"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                  pathname === '/news' ? 'text-[#dfc07a] bg-white/10 font-bold' : 'hover:bg-white/10 hover:text-[#dfc07a]'
                }`}
              >
                <span>Programme 2027</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#dfc07a]/20 text-[#dfc07a] border border-[#dfc07a]/30">
                  Easter '27
                </span>
              </NextLink>

              <div className="pt-5">
                <NextLink
                  href="/membership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold-shimmer flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center shadow-lg"
                >
                  <span>Become a Member</span>
                  <ArrowUpRight className="w-4 h-4" />
                </NextLink>
              </div>
            </nav>

            <div className="mt-auto pt-6 text-[11px] text-gray-400 border-t border-white/10 space-y-1">
              <p className="font-semibold text-gray-300">International Nepalese Artist Society UK</p>
              <p>Registered CIC #15988250 · London SE18</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer so content never hides under the fixed navbar */}
      <div className="h-20 lg:h-22"></div>
    </>
  );
}

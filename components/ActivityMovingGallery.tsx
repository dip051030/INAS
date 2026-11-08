'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GalleryPhoto } from '@/data/siteData';
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';

interface Props {
  photos: GalleryPhoto[];
}

export default function ActivityMovingGallery({ photos }: Props) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Split photos into two alternating rows for dual-track movement
  const row1 = photos.slice(0, Math.ceil(photos.length / 2));
  const row2 = photos.slice(Math.ceil(photos.length / 2));

  // Double arrays to achieve seamless infinite looping in CSS marquee
  const track1 = [...row1, ...row1];
  const track2 = [...row2, ...row2];

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  return (
    <div className="w-full py-16 bg-[#050814] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#cba358]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#131f47]/40 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-[#dfc07a] border border-[#dfc07a]/30 mb-3 shadow-sm">
          <Camera className="w-3.5 h-3.5 text-[#dfc07a]" />
          <span>Real Archive &amp; Photographic Record</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          INAS UK In <em className="font-serif-title italic font-normal text-[#dfc07a]">Action</em>
        </h2>

        <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
          Moments from our general assemblies, classical stage recitals, artist fellowship galas, and national conventions across Great Britain.
        </p>

        <p className="text-[11px] text-gray-400 mt-2 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dfc07a] animate-pulse"></span>
          <span>Hover over any photo to pause · Click to view in high resolution</span>
        </p>
      </div>

      {/* TRACK 1: Moves Left Continuously */}
      <div className="relative w-full overflow-hidden mb-6 py-2">
        <div className="marquee-track flex gap-5 animate-marquee">
          {track1.map((photo, idx) => (
            <div
              key={`row1-${photo.id}-${idx}`}
              onClick={() => setSelectedPhotoIndex(photo.id - 1)}
              className="gallery-card relative w-72 sm:w-80 md:w-96 aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 bg-slate-900 border border-white/15 group shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 300px, 400px"
              />
              
              {/* Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-transparent to-black/20 opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#050814]/85 text-[#dfc07a] backdrop-blur-md border border-[#dfc07a]/30">
                {photo.tag}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-xs font-bold text-white group-hover:text-[#dfc07a] transition-colors line-clamp-1">
                  {photo.title}
                </h4>
                <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">
                  {photo.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRACK 2: Moves Right Continuously */}
      <div className="relative w-full overflow-hidden py-2">
        <div className="marquee-track flex gap-5 animate-marquee-reverse">
          {track2.map((photo, idx) => (
            <div
              key={`row2-${photo.id}-${idx}`}
              onClick={() => setSelectedPhotoIndex(photo.id - 1)}
              className="gallery-card relative w-72 sm:w-80 md:w-96 aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 bg-slate-900 border border-white/15 group shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 300px, 400px"
              />

              {/* Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-transparent to-black/20 opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Tag Pill */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#050814]/85 text-[#dfc07a] backdrop-blur-md border border-[#dfc07a]/30">
                {photo.tag}
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-xs font-bold text-white group-hover:text-[#dfc07a] transition-colors line-clamp-1">
                  {photo.title}
                </h4>
                <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5">
                  {photo.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 backdrop-blur-xl p-4 sm:p-8 animate-fade-in-up"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0a1128] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-[#050814]/80">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#dfc07a]/20 text-[#dfc07a] border border-[#dfc07a]/30">
                  {photos[selectedPhotoIndex].tag}
                </span>
                <span className="text-xs text-gray-300 font-medium">
                  Photo {selectedPhotoIndex + 1} of {photos.length}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Close photo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Photo Viewport */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-black">
              <Image
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].title}
                fill
                className="object-contain"
                priority
              />

              {/* Prev Button */}
              <button
                onClick={() =>
                  setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : 0))
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#dfc07a] hover:text-[#050814] text-white flex items-center justify-center transition-all border border-white/20"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : 0))
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#dfc07a] hover:text-[#050814] text-white flex items-center justify-center transition-all border border-white/20"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & Metadata Footer */}
            <div className="p-5 px-6 bg-[#050814]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
              <div>
                <h3 className="text-base font-bold text-white">
                  {photos[selectedPhotoIndex].title}
                </h3>
                <p className="text-xs text-[#dfc07a] font-medium mt-0.5">
                  {photos[selectedPhotoIndex].event}
                </p>
              </div>
              <span className="text-[11px] text-gray-400">
                Press Esc to close · ← / → to navigate
              </span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

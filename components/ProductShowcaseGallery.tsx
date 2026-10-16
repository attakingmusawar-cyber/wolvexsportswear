'use client';

import React, { useState } from 'react';
import { Eye, X, ZoomIn, ArrowRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string;
  image: string;
  colSpan?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Elite Tournament Basketball Uniform',
    category: 'Basketball Kits',
    description: 'Ultra-lightweight moisture-wicking honeycomb mesh with high-contrast metallic chrome numbering.',
    specs: '180 GSM Pro-Dry Honeycomb · Sublimated Graphics · Ergonomic Rib Collar',
    image: '/images/product-basketball.jpg',
    colSpan: 'lg:col-span-2',
  },
  {
    id: 'gal-2',
    title: 'Chrome Crest Tailored Tracksuit',
    category: 'Tracksuits',
    description: 'Midnight black tracksuit featuring brushed silver chrome wolf emblem and silver piping details.',
    specs: '280 GSM Poly Interlock · Concealed Zip Hardware · Ribbed Tapered Cuffs',
    image: '/images/product-tracksuit.jpg',
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'gal-3',
    title: 'Athletic Performance Shirt & Shorts Set',
    category: 'Sports T-Shirts & Shorts',
    description: 'High-aeration technical training set designed for collegiate sprint training and gym conditioning.',
    specs: '160 GSM Feather-Touch Spandex · Anti-Odor Silver Ions · Split Leg Opening',
    image: '/images/product-tshirt.jpg',
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'gal-4',
    title: 'Ballistic Player Travel Duffle & Backpack',
    category: 'Player Travel Bags',
    description: 'Weatherproof heavy-duty equipment duffle with custom team embroidery and isolated shoe tunnel.',
    specs: '1680D Waterproof Ballistic Oxford · Chrome Alloy Hardware · Ergonomic Harness',
    image: '/images/product-bag.jpg',
    colSpan: 'lg:col-span-2',
  },
  {
    id: 'gal-5',
    title: 'WOLVEX Metallic Wolf Identity Emblem',
    category: 'Brand Hardware',
    description: 'Precision chrome metallic wolf emblem insignia applied to jerseys and luxury outerwear.',
    specs: 'Polished High-Density Chrome Finish · Thermo-Bonded Backing · Scratch Resistant',
    image: '/images/wolf-emblem.jpg',
    colSpan: 'lg:col-span-1',
  },
  {
    id: 'gal-6',
    title: 'Pro Athlete Tracksuit & Jersey Campaign',
    category: 'Official Tournament Wear',
    description: 'Full-court custom performance kit engineered for international tournament athletes.',
    specs: 'Anatomical Athletic Cut · Rapid-Dry Sublimation · High-Tensile Flatlock Stitching',
    image: '/images/hero-athlete.jpg',
    colSpan: 'lg:col-span-2',
  },
];

interface ProductShowcaseGalleryProps {
  onEnquire: (item: GalleryItem) => void;
}

export default function ProductShowcaseGallery({ onEnquire }: ProductShowcaseGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3">
              <span>VISUAL SHOWCASE</span>
              <span aria-hidden="true">·</span>
              <span>RECENT RUNS & ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              PRODUCT SHOWCASE GALLERY
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              A curated look into our precision cut, sublimated uniforms, outerwear, and player gear manufactured for global teams.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400 tracking-wider">
            CLICK ANY ITEM FOR SPECIFICATIONS
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 aspect-[4/3] sm:aspect-[16/10] cursor-pointer hover:border-zinc-500 transition-all duration-300 shadow-xl ${
                item.colSpan || ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Unboxed Tag */}
              <div className="absolute top-4 left-4 text-[11px] font-mono tracking-widest uppercase text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                {item.category}
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                  {item.specs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Spec Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 hover:bg-white hover:text-black text-white border border-white/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto bg-zinc-900">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                    {selectedItem.category}
                  </div>
                  <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight mb-4">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    {selectedItem.description}
                  </p>

                  <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800 mb-6">
                    <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      TECHNICAL SPECIFICATIONS
                    </p>
                    <p className="text-xs text-white font-medium">
                      {selectedItem.specs}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-zinc-400 mb-8">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                      <span>Custom colorway development with Pantone match</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                      <span>Individual player name & roster number placement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                      <span>Worldwide express courier delivery (USA / UK / EU)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const item = selectedItem;
                      setSelectedItem(null);
                      onEnquire(item);
                    }}
                    className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>ENQUIRE FOR THIS STYLE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/923252785376?text=Hi%20WOLVEX,%20I%20am%20interested%20in%20custom%20manufacturing%20for:%20${encodeURIComponent(
                      selectedItem.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 text-xs font-bold uppercase text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-lg transition-all"
                  >
                    WHATSAPP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

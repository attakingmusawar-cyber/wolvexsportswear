'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, SlidersHorizontal } from 'lucide-react';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tag: string;
  description: string;
  fabricSpecs: string;
  customizationTypes: string[];
  image: string;
  minOrderQty: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'basketball-kits',
    name: 'Basketball Kits',
    category: 'Team Kits',
    tag: 'Full Uniform Set',
    description:
      'Engineered mesh jersey & shorts sets with dynamic side vents, zero-drag collar, and heat-sealed emblems. Built for high-tempo court dominance.',
    fabricSpecs: '180 GSM Pro-Dry Honeycomb Micro-Mesh, 4-Way Stretch Interlock',
    customizationTypes: ['Full 360° Sublimation', 'Heat-Pressed Numbers', 'Custom Team Crest', 'Player Names'],
    image: '/images/product-basketball.jpg',
    minOrderQty: '10 Sets',
  },
  {
    id: 'tracksuits',
    name: 'Tracksuits & Warmups',
    category: 'Tracksuits & Outerwear',
    tag: 'Jacket & Tapered Jogger',
    description:
      'Fitted athletic track jackets with brushed chrome metallic zippers and tailored tapered pants. Premium sideline and travel uniform.',
    fabricSpecs: '280 GSM Poly-Cotton Interlock Fleece / Matte Tricot Poly',
    customizationTypes: ['Silver Metallic Piping', '3D Silicone Chest Emblem', 'Zipped Pockets', 'Custom Neck Label'],
    image: '/images/product-tracksuit.jpg',
    minOrderQty: '15 Sets',
  },
  {
    id: 'sports-tshirts',
    name: 'Sports T-Shirts',
    category: 'Training & Gym',
    tag: 'Performance Tops',
    description:
      'Ultra-breathable athletic training tees with ergonomic raglan sleeves and flatlock anti-chafing seams for intense workout sessions.',
    fabricSpecs: '160 GSM Featherlight Poly-Spandex with Anti-Bacterial Silver Ion Treatment',
    customizationTypes: ['Silkscreen Inks', 'Reflective Silver Accents', 'Full Sublimation Print', 'Custom Sizing XS-5XL'],
    image: '/images/product-tshirt.jpg',
    minOrderQty: '20 Pieces',
  },
  {
    id: 'sports-shorts',
    name: 'Sports Shorts',
    category: 'Training & Gym',
    tag: 'Utility Athletic Shorts',
    description:
      'Speed-tested lightweight shorts featuring concealed zip storage pockets, reinforced elastic waistband with custom drawcords, and split hem.',
    fabricSpecs: '140 GSM Dobby Microfiber Shell + Breathable Compression Underliner',
    customizationTypes: ['Sublimated Side Panels', 'Laser Cut Perforations', 'Rubberized Brand Stamp', 'Custom Waistband'],
    image: '/images/product-tshirt.jpg',
    minOrderQty: '20 Pieces',
  },
  {
    id: 'gym-wear',
    name: 'Gym Wear & Stringers',
    category: 'Training & Gym',
    tag: 'Compression & Fitness',
    description:
      'Physique-enhancing gym apparel, muscle tees, and compression baselayers crafted specifically for bodybuilding, CrossFit, and weightlifting brands.',
    fabricSpecs: '220 GSM High-Recovery Nylon-Spandex Compression & Cotton-Modal Blend',
    customizationTypes: ['High-Density 3D Rubber Print', 'Custom Cut & Fit', 'Private Label Tagging', 'Custom Colorways'],
    image: '/images/hero-athlete.jpg',
    minOrderQty: '15 Pieces',
  },
  {
    id: 'player-travel-bags',
    name: 'Player Travel Bags',
    category: 'Travel Gear',
    tag: 'Heavy-Duty Pro Equipment',
    description:
      'Waterproof ballistic nylon team travel duffles and backpacks with isolated ventilated shoe tunnels, chrome metal clips, and team logo embroidery.',
    fabricSpecs: '1680D Ballistic Waterproof Oxford Nylon with Heavy-Gauge Metal Hardware',
    customizationTypes: ['Direct Heavy Embroidery', 'Player Number Patch', 'Custom Zip Pullers', 'Team Colorway Panels'],
    image: '/images/product-bag.jpg',
    minOrderQty: '10 Pieces',
  },
];

interface ProductCollectionProps {
  onSelectProduct: (product: ProductItem) => void;
}

export default function ProductCollection({ onSelectProduct }: ProductCollectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Team Kits', 'Tracksuits & Outerwear', 'Training & Gym', 'Travel Gear'];

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3">
              <span>MANUFACTURING CATALOGUE</span>
              <span aria-hidden="true">·</span>
              <span>100% CUSTOMIZABLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              PRODUCTS COLLECTION
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              All items are manufactured to your exact club specifications, brand colorways, measurements, and logo placements.
            </p>
          </div>

          {/* Interactive Category Filter Controls (Functional Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-950 border border-zinc-800 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-zinc-950/80 rounded-2xl border border-zinc-800/80 hover:border-zinc-500/80 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1"
            >
              {/* Product Image Stage */}
              <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                {/* Unboxed Metadata Tag */}
                <div className="absolute top-4 left-4 text-[11px] font-mono tracking-widest uppercase text-zinc-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                  MOQ: {product.minOrderQty}
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-zinc-400 mb-2">
                    <span className="font-semibold uppercase tracking-wider text-zinc-400">
                      {product.tag}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-mono">EXPORT SPEC</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-zinc-200 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Fabric Spec Note */}
                  <div className="text-[11px] text-zinc-500 pb-4 mb-4 border-b border-white/5">
                    <span className="font-semibold text-zinc-400">Fabric: </span>
                    {product.fabricSpecs}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-widest text-white bg-zinc-900 hover:bg-white hover:text-zinc-950 border border-zinc-700 hover:border-white rounded-lg transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>CUSTOMISE / ENQUIRE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { Palette, Scissors, Layers, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';

interface CustomManufacturingProps {
  onStartOrder: () => void;
}

export default function CustomManufacturing({ onStartOrder }: CustomManufacturingProps) {
  const capabilities = [
    {
      title: 'Custom Colours & Pantone Matching',
      desc: 'Exact color matching to your team or brand palette. From deep blacks to vibrant neon stadium dyes with UV-stable Italian sublimation inks.',
    },
    {
      title: 'Emblems & 3D Silicone Printing',
      desc: 'Crisp metallic chrome wolf crests, high-density raised silicone badges, and heavy direct embroidery with metallic silver threading.',
    },
    {
      title: 'Player Names & Numbers',
      desc: 'Laser-precise heat transfers, tackle twill, or direct-into-fabric sublimation ensuring zero peeling, cracking, or weight drag.',
    },
    {
      title: 'Private Label & Custom Trims',
      desc: 'Custom branded neck taping, satin size tags, silicone zip pullers, custom aglets, and individualized polybag packaging for retail readiness.',
    },
  ];

  const manufacturingSteps = [
    {
      step: '01',
      title: 'Concept & Vector Mockup',
      detail: 'Send us your sketches, logos, or ideas. Our design team prepares digital 3D vector mockups within 24-48 hours for review.',
    },
    {
      step: '02',
      title: 'Fabric & Tech Pack Lock',
      detail: 'Choose your GSM, weave pattern (micro-mesh, interlock, compression, fleece), and specific customization techniques.',
    },
    {
      step: '03',
      title: 'Pre-Production Sample',
      detail: 'We produce a complete physical sample garment with your exact logos and sizing for final physical verification.',
    },
    {
      step: '04',
      title: 'Precision Bulk Production',
      detail: 'Laser fabric cutting, state-of-the-art sublimation printing, and multi-needle reinforced stitching at our facility in Lahore.',
    },
    {
      step: '05',
      title: 'Express Door-to-Door Delivery',
      detail: '100% inspected, individually folded, and shipped directly via DHL / FedEx Express to USA, UK, Europe, and worldwide.',
    },
  ];

  return (
    <section id="manufacturing" className="py-24 bg-[#070707] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3">
            <span>FULL-SERVICE OEM / ODM SPORTSWEAR</span>
            <span aria-hidden="true">·</span>
            <span>END-TO-END CRAFTSMANSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            YOUR TEAM, YOUR IDENTITY, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              OUR CRAFT.
            </span>
          </h2>
          <p className="text-base text-zinc-300 mt-4 leading-relaxed font-normal">
            Whether outfitting an elite collegiate basketball program, producing a limited streetwear tracksuit capsule, or building an athletic fitness label from scratch — we handle complete bespoke development from our manufacturing facility in Lahore, Pakistan.
          </p>
        </div>

        {/* Feature Grid: Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 hover:border-zinc-500 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 font-mono text-xs font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold uppercase tracking-wide text-white mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-300" />
                <span>Unlimited Variations</span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Showcase Split: Process & Craftsmanship */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Manufacturing Process Steps */}
            <div className="lg:col-span-7">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                PRODUCTION WORKFLOW
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-8">
                FROM CONCEPT TO COURT IN 5 PHASES
              </h3>

              <div className="space-y-6">
                {manufacturingSteps.map((s) => (
                  <div key={s.step} className="flex gap-4 items-start group">
                    <span className="font-mono text-sm font-bold text-zinc-400 border border-white/10 rounded-md px-2.5 py-1 bg-white/5 shrink-0 group-hover:text-white group-hover:border-white/30 transition-colors">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold uppercase text-white tracking-wide mb-1">
                        {s.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onStartOrder}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all flex items-center gap-2"
                >
                  <span>REQUEST BESPOKE TECH PACK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/923252785376?text=Hi%20WOLVEX,%20I%20have%20a%20custom%20sportswear%20design%20to%20discuss."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-lg transition-all"
                >
                  TALK TO HEAD OF PRODUCTION
                </a>
              </div>
            </div>

            {/* Right: Graphic / Visual Craftsmanship Spotlight */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl">
                <img
                  src="/images/product-tracksuit.jpg"
                  alt="WOLVEX Sportswear Garment Construction"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    PRECISION STITCHING & METALLIC ACCENTS
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Lahore workshop technical standards with Japanese multi-spool embroidery machines and Italian SubliJet dye systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

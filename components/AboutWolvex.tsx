'use client';

import React from 'react';
import { Target, Shield, Award, MapPin, Zap } from 'lucide-react';

export default function AboutWolvex() {
  const pillars = [
    {
      title: 'Precision Athletic Fit',
      description:
        'Patterned to move with the human body in competition. Zero binding, optimized armhole cuts, and aerodynamic contours engineered for maximum mobility.',
    },
    {
      title: 'Performance Fabrics & Inks',
      description:
        'Moisture-transporting technical microfibers paired with fade-resistant sublimation inks that penetrate the yarn fibers for permanent vibrant clarity.',
    },
    {
      title: 'Dedicated Team Identity',
      description:
        'Every sports club and fitness label possesses a unique spirit. We translate your crest, ethos, and colors into championship-calibre uniforms that demand respect.',
    },
    {
      title: 'Direct Manufacturer Value',
      description:
        'By partnering directly with our manufacturing floor in Lahore, Pakistan, you bypass middleman markups and communicate directly with production specialists.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#070707] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3">
              <span>OUR ORIGIN & PURPOSE</span>
              <span aria-hidden="true">·</span>
              <span>WOLVEX SPORTSWEAR</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight">
              BUILT FOR PERFORMANCE. <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                CREATED TO STAND OUT.
              </span>
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                At <strong className="text-white font-semibold">WOLVEX Sportswear</strong>, our philosophy is anchored in a single, uncompromising mandate: <span className="text-zinc-100 font-semibold tracking-wide">BUILT TO DOMINATE</span>. We believe athletic apparel shouldn’t just look sharp in warmups — it must endure the brutal physical demands of championship competition.
              </p>
              <p>
                Operating from <strong className="text-white font-semibold">Lahore, Pakistan</strong> — an internationally recognized hub of textile engineering and athletic garment production — we specialize in bespoke custom sportswear manufacturing for international sports teams, universities, competitive clubs, gyms, and emerging streetwear fitness brands across the <strong className="text-white font-semibold">USA, UK, Europe</strong>, and worldwide.
              </p>
              <p>
                From pro-grade basketball kits with breathable mesh zoning to luxury tapered tracksuits, our craftsmanship balances advanced moisture-wicking technology with razor-sharp aesthetic identity. Every stitch, sublimation panel, and chrome detail is executed with precision so that when your squad steps onto the floor, your presence is felt before the whistle even blows.
              </p>
            </div>

            {/* Location Tag */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-zinc-400 font-mono">
              <MapPin className="w-4 h-4 text-zinc-300 shrink-0" />
              <span>Headquarters & Manufacturing: Lahore, Pakistan · Global Export Direct</span>
            </div>
          </div>

          {/* Right Column: Pillars & Emblem Badge */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl relative">
              {/* Subtle wolf watermark / emblem icon */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/20 bg-black p-0.5">
                    <img
                      src="/images/wolf-emblem.jpg"
                      alt="WOLVEX Metallic Emblem"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white tracking-widest uppercase">WOLVEX</h3>
                    <p className="text-[11px] text-zinc-400 font-mono">THE PREDATORY STANDARD</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider border border-white/10 px-2 py-1 rounded bg-white/5">
                  EST. LAHORE
                </div>
              </div>

              {/* 4 Pillars */}
              <div className="space-y-5">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-sm font-bold uppercase text-white tracking-wide mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-white transition-colors" />
                      <span>{pillar.title}</span>
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-3.5">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

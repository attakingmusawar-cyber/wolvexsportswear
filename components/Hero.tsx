'use client';

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Globe, Factory } from 'lucide-react';

interface HeroProps {
  onStartCustomOrder: () => void;
}

export default function Hero({ onStartCustomOrder }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Subtle Background Glow & Radial Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-zinc-800/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-zinc-700/10 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Statement & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Direct unboxed kicker metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-4">
              <span className="text-zinc-200">CUSTOM SPORTSWEAR MANUFACTURER</span>
              <span aria-hidden="true">·</span>
              <span>LAHORE, PAKISTAN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] mb-6 font-sans">
              BUILT TO <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">DOMINATE.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
              Premium Custom Sportswear. Engineered for Performance. Designed for Your Identity.
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mb-10 font-light">
              We manufacture tournament-grade basketball kits, precision tracksuits, athletic gym wear, and team travel gear for clubs, universities, fitness brands, and international buyers worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#products"
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all text-center flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]"
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onStartCustomOrder}
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 rounded-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <span>START YOUR CUSTOM ORDER</span>
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-zinc-400 text-xs">
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-zinc-300 shrink-0" />
                <span className="leading-tight">USA, UK & Europe Direct Export</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-zinc-300 shrink-0" />
                <span className="leading-tight">Pro Technical Fabrics & Inks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Factory className="w-4 h-4 text-zinc-300 shrink-0" />
                <span className="leading-tight">Low MOQs for Teams & Gyms</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Model with Metallic Chrome Emblem */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl group">
              {/* Background gradient overlay for cinematic contrast */}
              <img
                src="/images/hero-athlete.jpg"
                alt="WOLVEX Sportswear Athletic Campaign Model"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-transparent" />

              {/* Discreet Brand Stamp Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg overflow-hidden border border-white/20 bg-zinc-950 p-0.5 shrink-0">
                    <img
                      src="/images/wolf-emblem.jpg"
                      alt="WOLVEX Chrome Emblem"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">OFFICIAL TOURNAMENT EDITION</p>
                    <p className="text-[11px] text-zinc-400">Custom Sublimation & Athletic Cut</p>
                  </div>
                </div>
                <span className="text-[10px] tracking-widest text-zinc-400 font-mono uppercase px-2 py-1 rounded bg-white/5 border border-white/10">
                  EXPORT GRADE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

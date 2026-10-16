'use client';

import React from 'react';
import { Mail, Phone, Instagram, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-zinc-400">
      {/* Top Banner Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-white/5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 p-1 shrink-0 shadow-lg">
              <img
                src="/images/wolf-emblem.jpg"
                alt="WOLVEX Metallic Wolf Emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold uppercase tracking-widest text-white">
                  WOLVEX
                </span>
                <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                  SPORTSWEAR
                </span>
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-zinc-400 font-bold mt-0.5">
                BUILT TO DOMINATE
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/923252785376"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500 rounded-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP: +92 325 278 5376</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg hover:border-white transition-all"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              HEADQUARTERS
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              WOLVEX Sportswear Manufacturing <br />
              Lahore, Punjab, Pakistan
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Serving professional athletics, collegiate clubs, and high-performance streetwear brands in the USA, UK, Europe, and worldwide.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products Collection
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-white transition-colors">
                  Custom Manufacturing & OEM
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About WOLVEX
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Product Showcase Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Wholesale Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              CORE SPECIALTIES
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Basketball Kits & Uniforms</li>
              <li>Athletic Tracksuits & Joggers</li>
              <li>Sports Performance T-Shirts</li>
              <li>Athletic Training Shorts</li>
              <li>Gym Wear & Stringers</li>
              <li>Player Travel Duffles & Bags</li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              DIRECT REACH
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="mailto:officialatta25@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span>officialatta25@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923252785376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span>+92 325 278 5376</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wolvexsportswear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@wolvexsportswear</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Unboxed Legal */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {currentYear} WOLVEX Sportswear. All rights reserved. BUILT TO DOMINATE.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Direct Manufacturer</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Export</span>
            <span aria-hidden="true">·</span>
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

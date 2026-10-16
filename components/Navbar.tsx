'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onRequestQuote: () => void;
}

export default function Navbar({ onRequestQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Custom Manufacturing', href: '#manufacturing' },
    { label: 'About Us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark + Wolf Emblem */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden border border-white/20 bg-zinc-950 flex items-center justify-center p-0.5 group-hover:border-white/50 transition-all">
              <img
                src="/images/wolf-emblem.jpg"
                alt="WOLVEX Emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-widest text-lg sm:text-xl text-white uppercase font-sans group-hover:text-zinc-200 transition-colors">
                WOLVEX
              </span>
              <span className="text-[9px] tracking-[0.28em] text-zinc-400 font-medium uppercase -mt-1">
                SPORTSWEAR
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/923252785376?text=Hi%20WOLVEX%20Sportswear,%20I%20would%20like%20to%20enquire%20about%20custom%20sportswear%20manufacturing."
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              title="Chat on WhatsApp (+92 325 278 5376)"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </a>

            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-transparent border border-white/30 rounded-lg hover:border-white hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onRequestQuote}
              className="px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase text-white border border-white/30 rounded bg-white/5"
            >
              QUOTE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img
                src="/images/wolf-emblem.jpg"
                alt="WOLVEX Emblem"
                className="w-8 h-8 rounded border border-white/20 object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold tracking-wider text-white">WOLVEX SPORTSWEAR</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-5 py-8 text-base font-semibold tracking-wide uppercase text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-white hover:translate-x-1 transition-all border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-3 text-xs font-bold tracking-widest uppercase text-white bg-white/10 border border-white/40 rounded-lg text-center"
            >
              REQUEST A QUOTE
            </button>
            <a
              href="https://wa.me/923252785376?text=Hi%20WOLVEX%20Sportswear,%20I%20would%20like%20to%20inquire%20about%20custom%20sportswear%20manufacturing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-xs font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 rounded-lg text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP INQUIRY (+92 325 278 5376)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

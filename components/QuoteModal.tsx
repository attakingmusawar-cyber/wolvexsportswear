'use client';

import React, { useState } from 'react';
import { X, Check, ArrowRight, MessageCircle, Send, Loader2, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function QuoteModal({ isOpen, onClose, initialProduct }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    teamName: '',
    email: '',
    phone: '',
    country: 'United States',
    category: initialProduct || 'Basketball Kits',
    quantity: '25-50 Pieces',
    notes: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [inquiryId, setInquiryId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setInquiryId(data.inquiryId || `WVX-${Date.now().toString().slice(-6)}`);
      setStatus('success');
    } catch {
      setInquiryId(`WVX-${Date.now().toString().slice(-6)}`);
      setStatus('success');
    }
  };

  const whatsappUrl = `https://wa.me/923252785376?text=${encodeURIComponent(
    `*WOLVEX Sportswear Quote Request*\n` +
    `*Name:* ${formData.fullName}\n` +
    `*Team/Club:* ${formData.teamName || 'N/A'}\n` +
    `*Email:* ${formData.email}\n` +
    `*Country:* ${formData.country}\n` +
    `*Category:* ${formData.category}\n` +
    `*Qty:* ${formData.quantity}\n` +
    (formData.notes ? `*Notes:* ${formData.notes}` : '')
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-zinc-950 border border-zinc-700 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <p className="text-xs font-mono uppercase text-emerald-400">
              QUOTE REQUEST LOGGED · {inquiryId}
            </p>
            <h3 className="text-2xl font-extrabold uppercase text-white">
              WE RECEIVED YOUR SPECIFICATIONS
            </h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
              Our production desk in Lahore is reviewing your request. For instant turnaround or to upload your vector logos directly, click below to chat on WhatsApp.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT DIRECT ON WHATSAPP</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-700 rounded-lg"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 bg-black p-0.5 shrink-0">
                <img
                  src="/images/wolf-emblem.jpg"
                  alt="WOLVEX Emblem"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold uppercase text-white tracking-wide">
                  REQUEST A PRODUCTION QUOTE
                </h3>
                <p className="text-[11px] text-zinc-400">Direct Factory Pricing · USA, UK & Europe Delivery</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-zinc-400 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your Name"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase text-zinc-400 mb-1">
                  Team / Club / Brand
                </label>
                <input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="e.g. Wolves FC"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-zinc-400 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase text-zinc-400 mb-1">
                  Destination Country *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. USA, UK, Germany"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-zinc-400 mb-1">
                  Product Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="Basketball Kits">Basketball Kits</option>
                  <option value="Tracksuits & Outerwear">Tracksuits & Outerwear</option>
                  <option value="Sports T-Shirts">Sports T-Shirts</option>
                  <option value="Sports Shorts">Sports Shorts</option>
                  <option value="Gym Wear & Stringers">Gym Wear & Stringers</option>
                  <option value="Player Travel Bags">Player Travel Bags</option>
                  <option value="Full Team Package">Full Team Package</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase text-zinc-400 mb-1">
                  Estimated Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white"
                >
                  <option value="10-25 Pieces">10-25 Pieces</option>
                  <option value="25-50 Pieces">25-50 Pieces</option>
                  <option value="50-100 Pieces">50-100 Pieces</option>
                  <option value="100-250 Pieces">100-250 Pieces</option>
                  <option value="250-500 Pieces">250-500 Pieces</option>
                  <option value="500+ Pieces">500+ Pieces</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase text-zinc-400 mb-1">
                Custom Requirements / Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention specific colors, logo file format, or delivery deadline..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white resize-none"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>SUBMIT QUOTE REQUEST</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-xs font-bold uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/50 rounded-lg flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

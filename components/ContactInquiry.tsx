'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, MapPin, Send, CheckCircle2, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';

export interface PreFillData {
  category?: string;
  quantity?: string;
  customization?: string[];
  country?: string;
  notes?: string;
}

interface ContactInquiryProps {
  preFill?: PreFillData | null;
}

export default function ContactInquiry({ preFill }: ContactInquiryProps) {
  const [prevPreFill, setPrevPreFill] = useState(preFill);
  const [formData, setFormData] = useState({
    fullName: '',
    teamName: '',
    email: '',
    phone: '',
    country: preFill?.country || 'United States',
    category: preFill?.category || 'Basketball Kits',
    quantity: preFill?.quantity || '25-50 Pieces',
    notes: preFill?.notes || '',
  });

  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>(
    preFill?.customization && preFill.customization.length > 0
      ? preFill.customization
      : ['Sublimation Printing', 'Custom Logo']
  );

  // Synchronize state when preFill prop updates without useEffect
  if (preFill !== prevPreFill) {
    setPrevPreFill(preFill);
    if (preFill) {
      setFormData((prev) => ({
        ...prev,
        category: preFill.category || prev.category,
        quantity: preFill.quantity || prev.quantity,
        country: preFill.country || prev.country,
        notes: preFill.notes || prev.notes,
      }));
      if (preFill.customization && preFill.customization.length > 0) {
        setSelectedCustomizations(preFill.customization);
      }
    }
  }

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [inquiryResult, setInquiryResult] = useState<{
    inquiryId?: string;
    whatsappUrl?: string;
    message?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');


  const categoryOptions = [
    'Basketball Kits',
    'Tracksuits & Outerwear',
    'Sports T-Shirts',
    'Sports Shorts',
    'Gym Wear & Stringers',
    'Player Travel Bags',
    'Full Team Uniform Package',
    'Other Bespoke Apparel',
  ];

  const quantityOptions = [
    '10-25 Pieces (Small Club / Sample Run)',
    '25-50 Pieces (Single Team Roster)',
    '50-100 Pieces (Multi-Squad Program)',
    '100-250 Pieces (Gym / Brand Launch)',
    '250-500 Pieces (Wholesale)',
    '500+ Pieces (Bulk Container Order)',
  ];

  const customTags = [
    'Sublimation Printing',
    'Player Names & Numbers',
    'Custom Logo',
    '3D Silicone Emblem',
    'Heavy Embroidery',
    'Custom Labels & Tags',
    'Reflective Trims',
  ];

  const toggleCustomTag = (tag: string) => {
    if (selectedCustomizations.includes(tag)) {
      setSelectedCustomizations(selectedCustomizations.filter((t) => t !== tag));
    } else {
      setSelectedCustomizations([...selectedCustomizations, tag]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          teamName: formData.teamName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          category: formData.category,
          quantity: formData.quantity,
          notes: formData.notes,
          customization: selectedCustomizations,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setStatus('success');
      setInquiryResult(data);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please use WhatsApp or email directly.');
    }
  };

  // Build direct WhatsApp link with form data for instant 1-click contact
  const directWhatsAppLink = `https://wa.me/923252785376?text=${encodeURIComponent(
    `*WOLVEX Sportswear Manufacturing Inquiry*\n\n` +
    `*Name:* ${formData.fullName || 'Prospective Buyer'}\n` +
    `*Team/Club:* ${formData.teamName || 'N/A'}\n` +
    `*Email:* ${formData.email || 'N/A'}\n` +
    `*Country:* ${formData.country}\n` +
    `*Category:* ${formData.category}\n` +
    `*Quantity:* ${formData.quantity}\n` +
    `*Customizations:* ${selectedCustomizations.join(', ') || 'Custom specs'}\n` +
    (formData.notes ? `*Notes:* ${formData.notes}` : '')
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contacts & Factory Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-3">
                <span>CONNECT WITH US</span>
                <span aria-hidden="true">·</span>
                <span>GLOBAL B2B INQUIRIES</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-6">
                CONTACT & WHOLESALE INQUIRY
              </h2>

              <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-8">
                Ready to manufacture custom uniforms for your team, gym, or apparel brand? Fill out the manufacturing brief, or reach our production desk directly via WhatsApp or email.
              </p>

              {/* Direct Channels List */}
              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/923252785376?text=Hi%20WOLVEX%20Sportswear,%20I%20would%20like%20to%20discuss%20a%20manufacturing%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-950/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-zinc-400">PHONE & WHATSAPP (DIRECT)</p>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      +92 325 278 5376
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:officialatta25@gmail.com?subject=WOLVEX%20Sportswear%20Custom%20Manufacturing%20Inquiry"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-white/40 hover:bg-white/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-zinc-400">OFFICIAL INQUIRY EMAIL</p>
                    <p className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                      officialatta25@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/wolvexsportswear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-500 hover:bg-white/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-zinc-400">OFFICIAL INSTAGRAM</p>
                    <p className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                      @wolvexsportswear
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-zinc-400">FACTORY & HEADQUARTERS</p>
                    <p className="text-sm font-bold text-white">
                      Lahore, Pakistan
                    </p>
                    <p className="text-xs text-zinc-400">Export destinations: USA, UK, Europe & Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 text-xs text-zinc-400">
              <span className="font-bold text-white">Turnaround Commitment:</span> Digital 3D mockups and comprehensive quotations returned within 24 hours of brief receipt.
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 shadow-2xl relative">
              {status === 'success' && inquiryResult ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
                      REFERENCE NO: {inquiryResult.inquiryId}
                    </p>
                    <h3 className="text-2xl font-bold uppercase text-white tracking-wide">
                      INQUIRY LOGGED SUCCESSFULLY
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto mt-3 font-normal leading-relaxed">
                      {inquiryResult.message}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-left max-w-md mx-auto space-y-2 text-xs">
                    <p className="text-zinc-400">
                      <span className="font-semibold text-white">Name:</span> {formData.fullName}
                    </p>
                    <p className="text-zinc-400">
                      <span className="font-semibold text-white">Team/Brand:</span> {formData.teamName || 'N/A'}
                    </p>
                    <p className="text-zinc-400">
                      <span className="font-semibold text-white">Category:</span> {formData.category} ({formData.quantity})
                    </p>
                    <p className="text-zinc-400">
                      <span className="font-semibold text-white">Destination:</span> {formData.country}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    {inquiryResult.whatsappUrl && (
                      <a
                        href={inquiryResult.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/50 rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>DISPATCH NOW VIA WHATSAPP</span>
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setInquiryResult(null);
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-lg transition-all"
                    >
                      SUBMIT ANOTHER REQUEST
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold uppercase text-white tracking-wide mb-1">
                      CUSTOM PRODUCTION SPECIFICATION
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Please provide your club or brand specs. All details are kept strictly confidential.
                    </p>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 text-xs text-red-300 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Team */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Business / Team / Club Name
                      </label>
                      <input
                        type="text"
                        value={formData.teamName}
                        onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                        placeholder="e.g. Apex Wolves Basketball Club"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone/WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. coach@apexwolves.com"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 (555) 019-2834"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Country & Product Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Country / Destination *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. USA, UK, Germany, Canada"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                        Product Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors"
                      >
                        {categoryOptions.map((cat) => (
                          <option key={cat} value={cat} className="bg-zinc-900 text-white">
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Estimated Quantity */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Estimated Quantity Tier
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors"
                    >
                      {quantityOptions.map((qty) => (
                        <option key={qty} value={qty} className="bg-zinc-900 text-white">
                          {qty}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 5: Customization Checkboxes */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Customization Requirements
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {customTags.map((tag) => {
                        const active = selectedCustomizations.includes(tag);
                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => toggleCustomTag(tag)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                              active
                                ? 'bg-white text-zinc-950 border-white'
                                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 6: Detailed Requirements */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Design Requirements / Logo & Color Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify colors (e.g. Matte Black with Metallic Silver), logo placements, roster sizes, or any specific fabric GSM requirements..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:flex-1 py-4 px-6 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 disabled:opacity-50 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>TRANSMITTING BRIEF...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT PRODUCTION INQUIRY</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <a
                      href={directWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-4 px-5 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 rounded-xl transition-all flex items-center justify-center gap-2"
                      title="Direct WhatsApp Dispatch"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WHATSAPP DIRECT</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

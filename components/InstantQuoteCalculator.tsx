'use client';

import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, MessageCircle } from 'lucide-react';

interface InstantQuoteCalculatorProps {
  onApplySpec: (spec: {
    category: string;
    quantity: string;
    customization: string[];
    country: string;
  }) => void;
}

export default function InstantQuoteCalculator({ onApplySpec }: InstantQuoteCalculatorProps) {
  const [selectedProduct, setSelectedProduct] = useState('Basketball Kits');
  const [selectedQty, setSelectedQty] = useState('25-50 Pieces');
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([
    'Full Sublimation Print',
    'Custom Team Logo & Crest',
  ]);
  const [selectedCountry, setSelectedCountry] = useState('United States');

  const productOptions = [
    { name: 'Basketball Kits', turnaround: '10-14 days', moq: '10 sets' },
    { name: 'Tracksuits & Outerwear', turnaround: '12-16 days', moq: '15 sets' },
    { name: 'Sports T-Shirts', turnaround: '8-12 days', moq: '20 pcs' },
    { name: 'Sports Shorts', turnaround: '8-12 days', moq: '20 pcs' },
    { name: 'Gym Wear & Stringers', turnaround: '10-14 days', moq: '15 pcs' },
    { name: 'Player Travel Bags', turnaround: '12-15 days', moq: '10 pcs' },
  ];

  const qtyTiers = ['10-25 Pieces', '25-50 Pieces', '50-100 Pieces', '100-250 Pieces', '250-500 Pieces', '500+ Pieces'];

  const customFeatures = [
    'Full Sublimation Print',
    'Custom Team Logo & Crest',
    'Player Names & Numbers',
    '3D Silicone Emblem',
    'Heavy Metallic Embroidery',
    'Custom Woven Neck Labels & Tags',
  ];

  const countryList = [
    'United States',
    'United Kingdom',
    'Germany / EU',
    'Canada',
    'Australia',
    'Middle East',
    'Pakistan (Domestic)',
    'Other International',
  ];

  const toggleCustomization = (feat: string) => {
    if (selectedCustomizations.includes(feat)) {
      setSelectedCustomizations(selectedCustomizations.filter((c) => c !== feat));
    } else {
      setSelectedCustomizations([...selectedCustomizations, feat]);
    }
  };

  const handleApply = () => {
    onApplySpec({
      category: selectedProduct,
      quantity: selectedQty,
      customization: selectedCustomizations,
      country: selectedCountry,
    });
  };

  const currentProductData = productOptions.find((p) => p.name === selectedProduct) || productOptions[0];

  return (
    <section className="py-20 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-2">
                <span>INTERACTIVE ESTIMATOR</span>
                <span aria-hidden="true">·</span>
                <span>CUSTOM TEAMWEAR & OEM</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                INSTANT UNIFORM SPEC ESTIMATOR
              </h2>
            </div>
            <div className="text-xs text-zinc-400 font-mono">
              DIRECT FACTORY PRICING & FAST DISPATCH
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Options Selection */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Product Category */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  1. SELECT PRODUCT CATEGORY
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {productOptions.map((opt) => (
                    <button
                      key={opt.name}
                      type="button"
                      onClick={() => setSelectedProduct(opt.name)}
                      className={`p-3 text-left rounded-xl border transition-all text-xs font-medium ${
                        selectedProduct === opt.name
                          ? 'border-white bg-white/10 text-white font-bold'
                          : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                      }`}
                    >
                      <div className="font-semibold text-white truncate">{opt.name}</div>
                      <div className="text-[10px] text-zinc-500 font-mono mt-0.5">MOQ: {opt.moq}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Quantity Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  2. ESTIMATED ORDER QUANTITY
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {qtyTiers.map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setSelectedQty(qty)}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-medium text-center transition-all ${
                        selectedQty === qty
                          ? 'border-white bg-white/10 text-white font-bold'
                          : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Customization Requirements */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  3. CUSTOMIZATION TECHNIQUES (SELECT ALL REQUIRED)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {customFeatures.map((feat) => {
                    const active = selectedCustomizations.includes(feat);
                    return (
                      <button
                        key={feat}
                        type="button"
                        onClick={() => toggleCustomization(feat)}
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs text-left transition-all ${
                          active
                            ? 'border-white/50 bg-white/10 text-white font-semibold'
                            : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300'
                        }`}
                      >
                        <span>{feat}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                            active
                              ? 'bg-white text-zinc-950 border-white font-bold'
                              : 'border-zinc-700 bg-zinc-950'
                          }`}
                        >
                          {active && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Target Destination Country */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                  4. DELIVERY REGION
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors"
                >
                  {countryList.map((c) => (
                    <option key={c} value={c} className="bg-zinc-900 text-white">
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right: Summary Box & Transfer CTA */}
            <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800">
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 uppercase tracking-widest font-mono mb-4 pb-3 border-b border-white/10">
                  <span>ESTIMATED TIMELINE</span>
                  <span className="text-emerald-400 font-bold">READY TO QUOTE</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[11px] text-zinc-400 uppercase">Selected Item:</span>
                    <p className="text-base font-bold text-white uppercase">{selectedProduct}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 uppercase">Batch Volume:</span>
                    <p className="text-sm font-semibold text-zinc-200">{selectedQty}</p>
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 uppercase">Production Turnaround:</span>
                    <p className="text-sm font-semibold text-zinc-200 flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{currentProductData.turnaround} (Post-Approval)</span>
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 uppercase">Customization Count:</span>
                    <p className="text-sm font-semibold text-zinc-200">
                      {selectedCustomizations.length} Techniques Selected
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 uppercase">Courier Method:</span>
                    <p className="text-sm font-semibold text-zinc-200">
                      DHL / FedEx Express (4–6 Days to {selectedCountry})
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-[11px] text-zinc-400 leading-relaxed mb-6">
                  <ShieldCheck className="w-4 h-4 text-zinc-300 inline mr-1.5" />
                  Free 3D digital mockup and physical pre-production sample photo verification included with team orders.
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3.5 px-4 text-xs font-bold uppercase tracking-widest text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>TRANSFER SPECS TO INQUIRY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/923252785376?text=${encodeURIComponent(
                    `Hi WOLVEX Sportswear! I would like a quote for:\n- Product: ${selectedProduct}\n- Quantity: ${selectedQty}\n- Destination: ${selectedCountry}\n- Customizations: ${selectedCustomizations.join(', ')}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/30 border border-emerald-500/30 hover:border-emerald-500/60 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>QUOTE VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

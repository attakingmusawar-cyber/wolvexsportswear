'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import ProductCollection, { ProductItem } from '@/components/ProductCollection';
import CustomManufacturing from '@/components/CustomManufacturing';
import ProductShowcaseGallery from '@/components/ProductShowcaseGallery';
import InstantQuoteCalculator from '@/components/InstantQuoteCalculator';
import AboutWolvex from '@/components/AboutWolvex';
import ContactInquiry, { PreFillData } from '@/components/ContactInquiry';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalInitialCategory, setModalInitialCategory] = useState<string>('Basketball Kits');
  const [inquiryPreFill, setInquiryPreFill] = useState<PreFillData | null>(null);

  const handleOpenQuoteModal = (category?: string) => {
    if (category) {
      setModalInitialCategory(category);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    // Populate the contact section and smoothly scroll to it
    setInquiryPreFill({
      category: product.name,
      quantity: product.minOrderQty,
      customization: product.customizationTypes,
      notes: `Inquiry regarding ${product.name} (${product.fabricSpecs}).`,
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyCalculatorSpec = (spec: {
    category: string;
    quantity: string;
    customization: string[];
    country: string;
  }) => {
    setInquiryPreFill({
      category: spec.category,
      quantity: spec.quantity,
      customization: spec.customization,
      country: spec.country,
      notes: `Calculated Spec: ${spec.category} for ${spec.country} with [${spec.customization.join(', ')}].`,
    });

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col selection:bg-white selection:text-black">
      {/* Premium Top Navigation */}
      <Navbar onRequestQuote={() => handleOpenQuoteModal()} />

      <main className="flex-grow">
        {/* Cinematic Hero Campaign */}
        <Hero onStartCustomOrder={() => handleOpenQuoteModal('Basketball Kits')} />

        {/* Business Statistics */}
        <StatsStrip />

        {/* Products Collection (6 Core Items) */}
        <ProductCollection onSelectProduct={handleSelectProduct} />

        {/* Custom Manufacturing Editorial (Your Team, Your Identity, Our Craft) */}
        <CustomManufacturing onStartOrder={() => handleOpenQuoteModal('Full Team Uniform Package')} />

        {/* Responsive Product Showcase Lookbook */}
        <ProductShowcaseGallery
          onEnquire={(item) => {
            setInquiryPreFill({
              category: item.category,
              notes: `Requesting custom quotation for style: ${item.title} (${item.specs})`,
            });
            const contactEl = document.getElementById('contact');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* Interactive Custom Uniform Estimator */}
        <InstantQuoteCalculator onApplySpec={handleApplyCalculatorSpec} />

        {/* About WOLVEX & Brand Heritage */}
        <AboutWolvex />

        {/* Wholesale & Custom Inquiry Form */}
        <ContactInquiry preFill={inquiryPreFill} />
      </main>

      {/* Minimalist Black Footer */}
      <Footer />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={modalInitialCategory}
      />
    </div>
  );
}

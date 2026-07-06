"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

export default function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Schema.org Script for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Wholesaler", "LocalBusiness"],
    "name": "SAPGENE - Shri Annamalai Power Generators",
    "alternateName": ["SAPGENE", "sapgen generators", "Shri Annamalai Power Generator"],
    "url": "https://www.sapgene.com",
    "logo": "https://www.sapgene.com/images/logo.webp",
    "description": "SAPGENE (Shri Annamalai Power Generators) offers India's best generators and power backup solutions for industrial, commercial, and residential use. Authorized Cummins Powerica dealer in Pondicherry, Chennai & Karaikal. Find generators near you across Tamil Nadu.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "19B, 6th cross Extension, Anna Nagar",
        "addressLocality": "Pondicherry",
        "addressRegion": "Puducherry",
        "postalCode": "605005",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "14, West St, Mela Oduthurai",
        "addressLocality": "Karaikal",
        "addressRegion": "Puducherry",
        "postalCode": "609602",
        "addressCountry": "IN"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.9416,
      "longitude": 79.8083
    },
    "areaServed": ["Chennai", "Pondicherry", "Karaikal", "Tamil Nadu", "India"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9442946598",
      "contactType": "Sales and Technical Support",
      "availableLanguage": ["en", "ta"]
    }
  };

  return (
    <>
      {/* SEO & Metadata via JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white selection:bg-brand-action/30 selection:text-brand-enterprise">
        <Header onQuote={openModal} />

        {/* Pass the openModal function to components that need to trigger the quote form */}
        <Hero />

        <section id="inventory">
          <ProductGrid onQuoteInquiry={openModal} />
        </section>

        {/* Dynamic Trust Gallery replacing Blog */}
        <Gallery />

        {/* Testimonials */}
        <Testimonials />

        {/* SEO Brand Identity Section – crawlable entity definition */}
        <section className="bg-gray-50 border-t border-gray-100 py-10">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-xl md:text-2xl font-heading font-black text-brand-enterprise mb-4">
              About SAPGENE – Shri Annamalai Power Generators
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
              <strong>SAPGENE</strong> (short for <strong>Shri Annamalai Power Generators</strong>) is an Indian diesel generator company headquartered in Pondicherry, India.
              We are an authorized <strong>Cummins Powerica</strong> dealer supplying diesel generators, DG sets, rental generators,
              servo stabilizers, online UPS systems, and solar infrastructure across <strong>Tamil Nadu, Chennai, Karaikal, and Puducherry</strong>.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              SAPGENE (sapgene.com) is a <strong>power backup and generator company in India</strong> — not related to any biology or molecular software product.
              With 20+ years of experience and 3000+ successful generator installations, SAPGENE is India&apos;s trusted generator dealer for industrial, commercial, and residential power needs.
              Call us at <strong>+91-9442946598</strong> or visit <strong>sapgene.com</strong>.
            </p>
          </div>
        </section>

        <Footer />

        {/* Global Modal */}
        <LeadModal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </>
  );
}

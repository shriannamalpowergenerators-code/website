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
    "@type": "Wholesaler",
    "name": "SAPGEN - Shri Annamalai Power Generators",
    "url": "https://shriannamalai.com",
    "logo": "https://shriannamalai.com/images/logo.webp",
    "description": "SAPGEN (Shri Annamalai Power Generators) offers India's best generators and power backup solutions for industrial, commercial, and residential use. Authorized Cummins Powerica dealer in Pondicherry & Karaikal.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "19B, 6th cross Extension, Anna Nagar",
        "addressLocality": "Pondicherry",
        "postalCode": "605005",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "14, West St, Mela Oduthurai",
        "addressLocality": "Karaikal",
        "postalCode": "609602",
        "addressCountry": "IN"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94429-46598",
      "contactType": "Sales and Technical Support"
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

        <Footer />

        {/* Global Modal */}
        <LeadModal isOpen={isModalOpen} onClose={closeModal} />
      </main>
    </>
  );
}

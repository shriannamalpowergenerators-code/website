"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import Head from "next/head";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Schema.org Script for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Wholesaler",
    "name": "Shri Annamalai Power Generators",
    "url": "https://shriannamalai.com",
    "logo": "https://shriannamalai.com/logo.png",
    "description": "Reliable power backup solutions for industrial, commercial, and residential needs. Generators and solar infrastructure provider in pondicherry and Karaikal.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "19B,6th cross Extension",
        "addressLocality": "Pondicherry",
        "postalCode": "605 005",
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
        {/* Note: In a real app, you might use a Context for this, but for simplicity here we just use state in page */}

        <Hero />

        {/* We can wrap the ProductGrid to capture the quote button click if needed, 
            but for now the LeadModal is just a global component we can trigger via other CTAs or 
            we can pass the state down. Let's make it simpler for this demo. */}
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

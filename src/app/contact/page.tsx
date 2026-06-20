import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact SAPGEN | Generators Near You in Tamil Nadu",
  description: "Contact Shri Annamalai Power Generators (SAPGEN) for Cummins generator sales, DG set installation, and emergency maintenance near you in Chennai, Pondicherry & Tamil Nadu. Call +91-9442946598.",
  keywords: "generators near me, contact sapgen, shri annamalai power generators contact, Generator Maintenance Chennai, sapgen phone number, generator dealers phone number, Chennai generator repair, generator service near me",
  alternates: {
    canonical: "https://www.sapgene.com/contact",
  },
  openGraph: {
    title: "Contact SAPGEN | Generators Near You in Tamil Nadu",
    description: "Contact Shri Annamalai Power Generators (SAPGEN) for Cummins generator sales, DG set installation, and emergency maintenance in Chennai, Pondicherry & Tamil Nadu.",
    url: "https://www.sapgene.com/contact",
  },
  twitter: {
    title: "Contact SAPGEN | Generators Near You in Tamil Nadu",
    description: "Contact Shri Annamalai Power Generators (SAPGEN) for Cummins generator sales and emergency maintenance near you in Chennai, Pondicherry & Tamil Nadu.",
  },
};

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sapgene.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://www.sapgene.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}
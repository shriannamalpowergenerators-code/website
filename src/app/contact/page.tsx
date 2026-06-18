import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact SAPGEN | Shri Annamalai Power Generators Offices & Support",
  description: "Contact Shri Annamalai Power Generators (SAPGEN). Get office addresses, phone numbers, and inquiry forms for generator sales in Pondicherry and Karaikal.",
  keywords: "sapgen contact, contact shri annamalai power generators, generator dealers phone number pondicherry, generators dealer karaikal, sapgen email",
  alternates: {
    canonical: "https://www.sapgene.com/contact",
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
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Generator Maintenance & Sales Support Chennai",
  description: "Get in touch with SAPGEN for Cummins generator sales, professional installation, emergency maintenance, and power backup support in Chennai.",
  keywords: "Generator Maintenance Chennai, sapgen contact, contact shri annamalai power generators, generator dealers phone number, Chennai generator repair",
  alternates: {
    canonical: "https://www.sapgene.com/contact",
  },
  openGraph: {
    title: "Generator Maintenance & Sales Support Chennai | SAPGEN",
    description: "Get in touch with SAPGEN for Cummins generator sales, professional installation, emergency maintenance, and power backup support in Chennai.",
    url: "https://www.sapgene.com/contact",
  },
  twitter: {
    title: "Generator Maintenance & Sales Support Chennai | SAPGEN",
    description: "Get in touch with SAPGEN for Cummins generator sales, professional installation, emergency maintenance, and power backup support in Chennai.",
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
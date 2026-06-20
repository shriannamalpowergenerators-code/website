import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Industrial Generators & Power Backup Tamil Nadu",
  description: "Learn about SAPGEN. With 20+ years of expertise, we are leading industrial generator and power backup solution suppliers in Chennai & Tamil Nadu.",
  keywords: "about sapgen, Industrial Generators Tamil Nadu, Generator Dealers Chennai, Power Backup Solutions Chennai, Cummins Powerica dealer",
  alternates: {
    canonical: "https://www.sapgene.com/about",
  },
  openGraph: {
    title: "Industrial Generators & Power Backup Tamil Nadu | SAPGEN",
    description: "Learn about SAPGEN. With 20+ years of expertise, we are leading industrial generator and power backup solution suppliers in Chennai & Tamil Nadu.",
    url: "https://www.sapgene.com/about",
  },
  twitter: {
    title: "Industrial Generators & Power Backup Tamil Nadu | SAPGEN",
    description: "Learn about SAPGEN. With 20+ years of expertise, we are leading industrial generator and power backup solution suppliers in Chennai & Tamil Nadu.",
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
        "name": "About Us",
        "item": "https://www.sapgene.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
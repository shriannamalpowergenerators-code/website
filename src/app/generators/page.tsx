import type { Metadata } from "next";
import GeneratorsClient from "./GeneratorsClient";

export const metadata: Metadata = {
  title: "Indian Generators & Cummins DG Sets – Buy Near You",
  description: "Browse SAPGEN's full range of Indian generators and Cummins Powerica diesel DG sets from 7.5 kVA to 2750 kVA. Best generator prices near you in Chennai, Pondicherry & Tamil Nadu. Call +91-9442946598.",
  keywords: "indian generators, generators near me, cummins diesel generator, Generator Dealers Chennai, DG Set Prices, power backup, industrial generators, buy generators india, diesel generator sets india",
  alternates: {
    canonical: "https://www.sapgene.com/generators",
  },
  openGraph: {
    title: "Indian Generators & Cummins DG Sets – Buy Near You | SAPGEN",
    description: "Browse SAPGEN's full range of Indian generators and Cummins Powerica diesel DG sets from 7.5 kVA to 2750 kVA. Best prices near you in Chennai, Pondicherry & Tamil Nadu.",
    url: "https://www.sapgene.com/generators",
  },
  twitter: {
    title: "Indian Generators & Cummins DG Sets – Buy Near You | SAPGEN",
    description: "Browse SAPGEN's full range of Indian generators and Cummins Powerica diesel DG sets from 7.5 kVA to 2750 kVA. Best prices in Chennai, Pondicherry & Tamil Nadu.",
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
        "name": "Diesel Generator Sets",
        "item": "https://www.sapgene.com/generators"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GeneratorsClient />
    </>
  );
}
import type { Metadata } from "next";
import GeneratorsClient from "./GeneratorsClient";

export const metadata: Metadata = {
  title: "Cummins Diesel Generator Sets & Prices",
  description: "Explore Cummins Powerica diesel generator sets from 7.5 kVA to 2750 kVA. Get robust power backup solutions, specs, and price quotes in Chennai.",
  keywords: "cummins diesel generator, Generator Dealers Chennai, DG Set Prices, power backup, industrial generators",
  alternates: {
    canonical: "https://www.sapgene.com/generators",
  },
  openGraph: {
    title: "Cummins Diesel Generator Sets & Prices | SAPGEN",
    description: "Explore Cummins Powerica diesel generator sets from 7.5 kVA to 2750 kVA. Get robust power backup solutions, specs, and price quotes in Chennai.",
    url: "https://www.sapgene.com/generators",
  },
  twitter: {
    title: "Cummins Diesel Generator Sets & Prices | SAPGEN",
    description: "Explore Cummins Powerica diesel generator sets from 7.5 kVA to 2750 kVA. Get robust power backup solutions, specs, and price quotes in Chennai.",
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
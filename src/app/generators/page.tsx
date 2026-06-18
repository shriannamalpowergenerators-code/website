import type { Metadata } from "next";
import GeneratorsClient from "./GeneratorsClient";

export const metadata: Metadata = {
  title: "Cummins Powerica Diesel Generator Sets | SAPGEN Authorized Partner",
  description: "Explore Cummins Powerica diesel generator sets from 7.5 kVA to 2750 kVA at SAPGEN. Get clean energy, robust power backup, and download technical spec sheets.",
  keywords: "sapgen, generators, genrators, indians best generators, best generators in india, Shri Annamalai Power Generators, sapgen generators, diesel generator sets, Cummins Powerica, power backup, pondicherry, Karaikal",
  alternates: {
    canonical: "https://www.sapgene.com/generators",
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
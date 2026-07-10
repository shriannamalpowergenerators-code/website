import type { Metadata } from "next";
import GeneratorsClient from "./GeneratorsClient";

export const metadata: Metadata = {
  title: "Diesel Generator & Cummins DG Sets | Best Indian Generators",
  description: "Browse SAPGENE's full range of high-efficiency diesel generator sets and Cummins Powerica DG sets from 7.5 kVA to 2750 kVA. Best Indian generators.",
  keywords: "diesel generator, generators, indian generators, best indian generators, generators near me, cummins diesel generator, Generator Dealers Chennai, DG Set Prices, power backup, industrial generators, buy generators india, diesel generator sets india",
  alternates: {
    canonical: "https://www.sapgene.com/generators",
  },
  openGraph: {
    title: "Diesel Generator & Cummins DG Sets | Best Indian Generators | SAPGENE",
    description: "Browse SAPGENE's full range of high-efficiency diesel generator sets and Cummins Powerica DG sets from 7.5 kVA to 2750 kVA. Best Indian generators.",
    url: "https://www.sapgene.com/generators",
  },
  twitter: {
    title: "Diesel Generator & Cummins DG Sets | Best Indian Generators | SAPGENE",
    description: "Browse SAPGENE's full range of high-efficiency diesel generator sets and Cummins Powerica DG sets from 7.5 kVA to 2750 kVA. Best Indian generators.",
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
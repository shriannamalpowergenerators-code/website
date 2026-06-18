import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Project Gallery | Shri Annamalai Power Generator Installations",
  description: "Explore Shri Annamalai Power Generators (SAPGEN) installation gallery. View our commercial, residential, and industrial diesel generator setups in India.",
  keywords: "sapgen gallery, generator installation pictures, commercial generator setups, industrial generator photos, shri annamalai power generators, cummins dealer gallery",
  alternates: {
    canonical: "https://www.sapgene.com/gallery",
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
        "name": "Project Gallery",
        "item": "https://www.sapgene.com/gallery"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GalleryClient />
    </>
  );
}
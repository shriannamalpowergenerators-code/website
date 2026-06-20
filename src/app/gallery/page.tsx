import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "DG Set Installation Chennai - Project Gallery",
  description: "Browse our project gallery displaying commercial, residential, and industrial Cummins diesel generator installations and site setups across Chennai.",
  keywords: "DG Set Installation Chennai, sapgen gallery, generator installation pictures, commercial generator setups, industrial generator photos",
  alternates: {
    canonical: "https://www.sapgene.com/gallery",
  },
  openGraph: {
    title: "DG Set Installation Chennai - Project Gallery | SAPGEN",
    description: "Browse our project gallery displaying commercial, residential, and industrial Cummins diesel generator installations and site setups across Chennai.",
    url: "https://www.sapgene.com/gallery",
  },
  twitter: {
    title: "DG Set Installation Chennai - Project Gallery | SAPGEN",
    description: "Browse our project gallery displaying commercial, residential, and industrial Cummins diesel generator installations and site setups across Chennai.",
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
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About SAPGEN | Shri Annamalai Power Generators & Power Solutions",
  description: "Learn about SAPGEN (Shri Annamalai Power Generators). With 20+ years of expertise, we deliver premium diesel generators & power systems in South India.",
  keywords: "about sapgen, shri annamalai power generators legacy, indians best generators, generator dealers pondicherry, generator dealers karaikal, cummins powerica distributors",
  alternates: {
    canonical: "https://www.sapgene.com/about",
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
import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Shri Annamalai Power Generators | SAPGEN India",
  description: "Learn about SAPGEN – Shri Annamalai Power Generators, India's trusted generator dealer with 20+ years of expertise in industrial generators, power backup, and Cummins DG sets across Chennai & Tamil Nadu.",
  keywords: "about sapgen, shri annamalai power generators, about shri annamalai, Industrial Generators Tamil Nadu, Generator Dealers Chennai, Power Backup Solutions Chennai, Cummins Powerica dealer, indian generator company",
  alternates: {
    canonical: "https://www.sapgene.com/about",
  },
  openGraph: {
    title: "About Shri Annamalai Power Generators (SAPGEN) | India",
    description: "Learn about SAPGEN – Shri Annamalai Power Generators, India's trusted generator dealer with 20+ years of expertise across Chennai & Tamil Nadu.",
    url: "https://www.sapgene.com/about",
  },
  twitter: {
    title: "About Shri Annamalai Power Generators (SAPGEN) | India",
    description: "Learn about SAPGEN – Shri Annamalai Power Generators, India's trusted generator dealer with 20+ years of expertise across Chennai & Tamil Nadu.",
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
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "SAPGEN | Shri Annamalai Power Generators | Cummins Powerica Dealer",
  description: "Get India's best generators from SAPGEN, authorized Cummins Powerica dealer. We offer top-tier diesel generators & power backup in Pondicherry & Karaikal.",
  keywords: "sapgen, generators, genrators, indians best generators, best generators in india, Shri Annamalai Power Generators, sapgen generators, generator dealers, generators pondicherry, generators karaikal, power backup solutions",
  alternates: {
    canonical: "https://www.sapgene.com",
  },
  openGraph: {
    title: "SAPGEN | Shri Annamalai Power Generators | Cummins Powerica Dealer",
    description: "Get India's best generators from SAPGEN, authorized Cummins Powerica dealer. We offer top-tier diesel generators & power backup in Pondicherry & Karaikal.",
    url: "https://www.sapgene.com",
    siteName: "Shri Annamalai Power Generators",
    images: [
      {
        url: "https://www.sapgene.com/images/SAPG%202026-%20DEALER%20CERTIFICATE-CUMMINS&POWERICA.webp",
        width: 800,
        height: 600,
        alt: "SAPGEN Cummins & Powerica Dealer Certificate",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAPGEN | Shri Annamalai Power Generators | Cummins Powerica Dealer",
    description: "Get India's best generators from SAPGEN, authorized Cummins Powerica dealer. We offer top-tier diesel generators & power backup in Pondicherry & Karaikal.",
    images: ["https://www.sapgene.com/images/SAPG%202026-%20DEALER%20CERTIFICATE-CUMMINS&POWERICA.webp"],
  },
};

export default function Page() {
  return <HomeClient />;
}

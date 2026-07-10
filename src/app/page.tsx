import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best Generators in India | Cummins Diesel Generator Dealer"
  },
  description: "SAPGENE (Shri Annamalai Power Generators) – India's best authorized Cummins Powerica dealer. Buy or rent diesel generators, DG sets & power backup solutions near you in Chennai, Pondicherry & Tamil Nadu. Call: +91-9442946598",
  keywords: "sapgen, sapgen generators, shri annamalai power generators, generators, indian generators, generators near me, cummins generators india, Generator Dealers Chennai, Power Backup Solutions, DG Set Installation Chennai, Industrial Generators Tamil Nadu, Generator Maintenance Chennai, Cummins Powerica, diesel generators, Pondicherry, Karaikal, best generators india",
  alternates: {
    canonical: "https://www.sapgene.com",
  },
  openGraph: {
    title: "Best Generators in India | Cummins Diesel Generator Dealer | SAPGENE",
    description: "SAPGENE (Shri Annamalai Power Generators) – India's best authorized Cummins Powerica dealer for diesel generators, DG sets & power backup solutions.",
    url: "https://www.sapgene.com",
    siteName: "Shri Annamalai Power Generators",
    images: [
      {
        url: "https://www.sapgene.com/images/sapgene-cummins-diesel-generator-india.png",
        width: 1200,
        height: 630,
        alt: "SAPGENE – Shri Annamalai Power Generators Cummins Diesel Generator Set India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Generators in India | Cummins Diesel Generator Dealer | SAPGENE",
    description: "SAPGENE (Shri Annamalai Power Generators) – India's best authorized Cummins Powerica dealer for diesel generators & power backup.",
    images: ["https://www.sapgene.com/images/sapgene-cummins-diesel-generator-india.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}

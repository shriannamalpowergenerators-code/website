import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Cummins Diesel Generator Dealer in Chennai",
  description: "Authorized Cummins Powerica dealer. SAPGEN offers diesel generators, DG set installation, and maintenance services across Chennai, Pondicherry, and Tamil Nadu.",
  keywords: "sapgen, generators, Generator Dealers Chennai, Power Backup Solutions Chennai, DG Set Installation Chennai, Industrial Generators Tamil Nadu, Generator Maintenance Chennai, Cummins Powerica, diesel generators, Pondicherry, Karaikal",
  alternates: {
    canonical: "https://www.sapgene.com",
  },
  openGraph: {
    title: "Cummins Diesel Generator Dealer in Chennai | SAPGEN",
    description: "Authorized Cummins Powerica dealer. SAPGEN offers diesel generators, DG set installation, and maintenance services across Chennai, Pondicherry, and Tamil Nadu.",
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
    title: "Cummins Diesel Generator Dealer in Chennai | SAPGEN",
    description: "Authorized Cummins Powerica dealer. SAPGEN offers diesel generators, DG set installation, and maintenance services across Chennai, Pondicherry, and Tamil Nadu.",
    images: ["https://www.sapgene.com/images/SAPG%202026-%20DEALER%20CERTIFICATE-CUMMINS&POWERICA.webp"],
  },
};

export default function Page() {
  return <HomeClient />;
}

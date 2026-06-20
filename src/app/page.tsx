import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Shri Annamalai Power Generators | Best Generator Dealers India",
  description: "SAPGENE – Shri Annamalai Power Generators. India's #1 authorized Cummins Powerica dealer. Buy or rent diesel generators, DG sets & power backup solutions near you in Chennai, Pondicherry & Tamil Nadu. Call: +91-9442946598",
  keywords: "sapgen, sapgen generators, shri annamalai power generators, generators, indian generators, generators near me, cummins generators india, Generator Dealers Chennai, Power Backup Solutions, DG Set Installation Chennai, Industrial Generators Tamil Nadu, Generator Maintenance Chennai, Cummins Powerica, diesel generators, Pondicherry, Karaikal, best generators india",
  alternates: {
    canonical: "https://www.sapgene.com",
  },
  openGraph: {
    title: "SAPGENE | Shri Annamalai Power Generators - India's Best Generator Dealer",
    description: "SAPGENE – Shri Annamalai Power Generators. India's #1 authorized Cummins Powerica dealer for diesel generators, DG sets & power backup in Chennai, Pondicherry & Tamil Nadu.",
    url: "https://www.sapgene.com",
    siteName: "Shri Annamalai Power Generators",
    images: [
      {
        url: "https://www.sapgene.com/images/sapgene-cummins-powerica-dealer-certificate-india.webp",
        width: 800,
        height: 600,
        alt: "SAPGENE – Shri Annamalai Power Generators Cummins Authorized Dealer Certificate",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAPGENE | Shri Annamalai Power Generators - India's Best Generator Dealer",
    description: "SAPGENE – Shri Annamalai Power Generators. India's #1 authorized Cummins Powerica dealer for diesel generators & power backup in Chennai, Pondicherry & Tamil Nadu.",
    images: ["https://www.sapgene.com/images/sapgene-cummins-powerica-dealer-certificate-india.webp"],
  },
};

export default function Page() {
  return <HomeClient />;
}

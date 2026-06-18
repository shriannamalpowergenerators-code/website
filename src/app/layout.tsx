import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0D1B2A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sapgene.com"),
  title: {
    default: "SAPGEN | Shri Annamalai Power Generators - India's Best Generators",
    template: "%s | SAPGEN - Shri Annamalai Power Generators",
  },
  description: "SAPGEN (Shri Annamalai Power Generators) offers India's best generators and power backup solutions for industrial, commercial, and residential use. Authorized Cummins Powerica dealer in Pondicherry & Karaikal.",
  keywords: "sapgen, generators, genrators, indians best generators, best generators in india, Shri Annamalai Power Generators, sapgen generators, diesel generators, solar power plants, servo stabilizers, online ups",
  applicationName: "Shri Annamalai Power Generators",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.webp", sizes: "32x32", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/logo.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
  openGraph: {
    title: "SAPGEN | Shri Annamalai Power Generators - India's Best Generators",
    description: "SAPGEN (Shri Annamalai Power Generators) offers India's best generators and power backup solutions. Authorized Cummins Powerica dealers.",
    url: "https://www.sapgene.com",
    siteName: "Shri Annamalai Power Generators",
    images: [
      {
        url: "/images/SAPG 2026- DEALER CERTIFICATE-CUMMINS&POWERICA.webp",
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
    title: "SAPGEN | Shri Annamalai Power Generators - India's Best Generators",
    description: "SAPGEN (Shri Annamalai Power Generators) provides CPCB IV+ compliant diesel generators and energy systems across India.",
    images: ["/images/SAPG 2026- DEALER CERTIFICATE-CUMMINS&POWERICA.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.sapgene.com/#organization",
    "name": "Shri Annamalai Power Generators",
    "alternateName": "SAPGEN",
    "url": "https://www.sapgene.com",
    "logo": "https://www.sapgene.com/images/logo.webp",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9442946598",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta"]
      }
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.sapgene.com/#localbusiness",
    "name": "Shri Annamalai Power Generators (SAPGEN)",
    "image": "https://www.sapgene.com/images/SAPG%202026-%20DEALER%20CERTIFICATE-CUMMINS%20AND%20POWERICA.webp",
    "telephone": "+91-9442946598",
    "url": "https://www.sapgene.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No. 4, VOC Street, Pondicherry & Karaikal",
      "addressLocality": "Pondicherry",
      "addressRegion": "Puducherry",
      "postalCode": "605001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.9416,
      "longitude": 79.8083
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sapgene.com/#website",
    "url": "https://www.sapgene.com",
    "name": "Shri Annamalai Power Generators",
    "description": "Authorized Cummins Powerica dealer. India's best generators and power backup solutions in Pondicherry & Karaikal.",
    "publisher": {
      "@id": "https://www.sapgene.com/#organization"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppButton />
        <ScrollToTop />
        <CookieBanner />
      </body>
    </html>
  );
}

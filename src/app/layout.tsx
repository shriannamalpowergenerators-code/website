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
    default: "SAPGEN | Cummins Diesel Generator Dealer Chennai & Tamil Nadu",
    template: "%s | SAPGEN",
  },
  description: "Authorized Cummins Powerica dealer. SAPGEN offers diesel generators, DG set installation, and maintenance services across Chennai, Pondicherry, and Tamil Nadu.",
  keywords: "sapgen, generators, Generator Dealers Chennai, Power Backup Solutions Chennai, DG Set Installation Chennai, Industrial Generators Tamil Nadu, Generator Maintenance Chennai, Cummins Powerica, diesel generators, Pondicherry, Karaikal",
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
  verification: {
    google: "pFw9Za-n9BqMaGGOQMU0kFSjY8uuZyXz4DkNEBTT7xU",
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
    title: "SAPGEN | Cummins Diesel Generator Dealer Chennai & Tamil Nadu",
    description: "Authorized Cummins Powerica dealer. SAPGEN offers diesel generators, DG set installation, and maintenance services across Chennai, Pondicherry, and Tamil Nadu.",
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
    title: "SAPGEN | Cummins Diesel Generator Dealer Chennai & Tamil Nadu",
    description: "Authorized Cummins Powerica dealer. SAPGEN offers diesel generators, DG set installation, and maintenance services across Chennai, Pondicherry, and Tamil Nadu.",
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
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "19B, 6th cross Extension, Anna Nagar",
        "addressLocality": "Pondicherry",
        "addressRegion": "Puducherry",
        "postalCode": "605005",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "14, West St, Mela Oduthurai",
        "addressLocality": "Karaikal",
        "addressRegion": "Puducherry",
        "postalCode": "609602",
        "addressCountry": "IN"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.9416,
      "longitude": 79.8083
    },
    "areaServed": [
      "Chennai",
      "Pondicherry",
      "Karaikal",
      "Tamil Nadu"
    ],
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

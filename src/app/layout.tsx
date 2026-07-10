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
    default: "SAPGENE | Shri Annamalai Power Generators - India's Best Generator Dealer",
    template: "SAPGENE | %s",
  },
  description: "SAPGENE – Shri Annamalai Power Generators. India's trusted dealer for Cummins diesel generators, DG sets, and power backup solutions. Buy or rent generators near you in Chennai, Pondicherry & Tamil Nadu.",
  keywords: "sapgene, sapgen, sapgene generators, shri annamalai power generators, generators, indian generators, generators near me, diesel generators india, Generator Dealers Chennai, Power Backup Solutions Chennai, DG Set Installation Chennai, Industrial Generators Tamil Nadu, Generator Maintenance Chennai, Cummins Powerica, diesel generators, Pondicherry, Karaikal, best generators in india, generator dealers india",
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
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/sapgene-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/sapgene-logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [
      { url: "/images/sapgene-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "SAPGENE | Shri Annamalai Power Generators - India's Best Generator Dealer",
    description: "SAPGENE – Shri Annamalai Power Generators. India's trusted dealer for Cummins diesel generators, DG sets, and power backup solutions. Buy or rent generators near you in Chennai, Pondicherry & Tamil Nadu.",
    url: "https://www.sapgene.com",
    siteName: "SAPGENE – Shri Annamalai Power Generators",
    images: [
      {
        url: "/images/sapgene-cummins-diesel-generator-india.png",
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
    title: "SAPGENE | Shri Annamalai Power Generators - India's Best Generator Dealer",
    description: "SAPGENE – Shri Annamalai Power Generators. India's trusted dealer for Cummins diesel generators, DG sets, and power backup solutions in Chennai, Pondicherry & Tamil Nadu.",
    images: ["/images/sapgene-cummins-diesel-generator-india.png"],
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
    "name": "SAPGENE – Shri Annamalai Power Generators",
    "alternateName": ["SAPGENE", "SAPGEN", "sapgen", "sapgene", "Shri Annamalai Power Generators", "Shri Annamalai Power Generator"],
    "disambiguatingDescription": "SAPGENE (sapgene.com) is an Indian diesel generator company and authorized Cummins Powerica dealer based in Pondicherry, India. SAPGENE provides diesel generators, DG sets, power backup solutions, and generator rental services across Tamil Nadu and Puducherry — not to be confused with SnapGene molecular biology software.",
    "naics": "423610",
    "isicV4": "4659",
    "knowsAbout": ["Diesel Generators", "Power Backup Systems", "DG Sets", "Generator Rental", "Cummins Powerica", "Industrial Generators India", "Servo Stabilizers", "Online UPS Systems", "Solar Infrastructure"],
    "url": "https://www.sapgene.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.sapgene.com/images/sapgene-logo.png",
      "width": 512,
      "height": 512
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://www.sapgene.com/images/sapgene-cummins-diesel-generator-india.png",
      "width": 1200,
      "height": 630,
      "caption": "SAPGENE – Shri Annamalai Power Generators – India's Best Cummins Diesel Generator Dealer"
    },
    "foundingDate": "2003",
    "description": "SAPGENE (Shri Annamalai Power Generators) is India's trusted authorized Cummins Powerica diesel generator dealer serving Chennai, Pondicherry, Tamil Nadu, and Karaikal.",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9442946598",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9442946598",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta"]
      }
    ],
    "sameAs": [
      "https://www.sapgene.com",
      "https://www.facebook.com/sapgene",
      "https://www.instagram.com/sapgene"
    ]
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store", "ElectricalContractor"],
    "@id": "https://www.sapgene.com/#localbusiness",
    "name": "SAPGENE – Shri Annamalai Power Generators",
    "alternateName": ["SAPGENE", "SAPGEN", "Shri Annamalai Power Generators"],
    "disambiguatingDescription": "SAPGENE is an Indian power generator dealership in Pondicherry, India. We sell diesel generators and power backup systems — not DNA software or biology tools.",
    "naics": "423610",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.sapgene.com/images/sapgene-cummins-diesel-generator-india.png",
      "width": 1200,
      "height": 630,
      "caption": "SAPGENE – Shri Annamalai Power Generators, India's authorized Cummins Powerica diesel generator dealer"
    },
    "telephone": "+91-9442946598",
    "email": "info@sapgene.com",
    "url": "https://www.sapgene.com",
    "priceRange": "₹₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "description": "SAPGENE – Shri Annamalai Power Generators. India's best dealer for Cummins diesel generators, DG sets, rental generators, solar infrastructure, and power backup solutions across Tamil Nadu and Puducherry.",
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
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Pondicherry" },
      { "@type": "City", "name": "Karaikal" },
      { "@type": "City", "name": "Cuddalore" },
      { "@type": "City", "name": "Villupuram" },
      { "@type": "City", "name": "Vellore" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "State", "name": "Puducherry" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Generator Products & Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cummins Diesel Generator Sets" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generator Rental Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DG Set Installation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generator AMC & Maintenance" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Online UPS Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Solar Infrastructure" } }
      ]
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.sapgene.com",
      "https://www.facebook.com/sapgene",
      "https://www.instagram.com/sapgene"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sapgene.com/#website",
    "url": "https://www.sapgene.com",
    "name": "SAPGENE – Shri Annamalai Power Generators",
    "alternateName": ["sapgene.com", "SAPGEN", "sapgen"],
    "description": "SAPGENE (Shri Annamalai Power Generators) – India's best dealer for Cummins diesel generators and power backup solutions serving Chennai, Pondicherry & Tamil Nadu.",
    "publisher": {
      "@id": "https://www.sapgene.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.sapgene.com/generators?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SAPGENE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAPGENE (also searched as SAPGEN) is the brand name for Shri Annamalai Power Generators – India's trusted authorized Cummins Powerica diesel generator dealer with 20+ years of experience. Visit sapgene.com. We supply, install, and service diesel generators, online UPS, solar systems, and servo stabilizers across Tamil Nadu, Chennai, Pondicherry, and Karaikal."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find generators near me in Chennai or Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAPGENE (Shri Annamalai Power Generators) serves Chennai and all of Tamil Nadu and Puducherry. Call us at +91-9442946598 or visit our showrooms in Pondicherry (19B, 6th Cross Extension, Anna Nagar – 605005) and Karaikal (14, West St, Mela Oduthurai – 609602) to find generators near you."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best Indian generators for home and industrial use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SAPGENE offers Cummins Powerica diesel generators – the best Indian generators for both home backup and heavy industrial use. Our range covers 7.5 kVA to 2750 kVA, making us the top choice for residential, commercial, and industrial power backup in India."
        }
      },
      {
        "@type": "Question",
        "name": "Does SAPGENE offer generator rental services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SAPGENE (Shri Annamalai Power Generators) offers short-term and long-term rental generators across Tamil Nadu and Puducherry. Our rental fleet includes silent diesel generators from 15 kVA to 1000+ kVA for events, construction sites, and emergency backup deployments."
        }
      },
      {
        "@type": "Question",
        "name": "Is Shri Annamalai Power Generators an authorized Cummins dealer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SAPGENE (Shri Annamalai Power Generators) is an authorized Cummins Powerica dealer in India. We supply genuine Cummins diesel generator sets backed by official warranty, AMC contracts, and factory-trained service engineers across Tamil Nadu and Puducherry. Visit us at sapgene.com."
        }
      }
    ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

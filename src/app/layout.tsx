import type { Metadata } from "next";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "Shri Annamalai Power Generators | Generators",
  description: "Engineering superior power for industrial, commercial, and residential use. Residential generators, home power backup, commercial generator solutions in pondicherry & Karaikal.",
  keywords: "Residential generators, Home power backup, Commercial generator solutions, Industrial generators, Generator sales pondicherry, Solar infrastructure",
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-X56CJ7S8ZR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X56CJ7S8ZR');`}
        </Script>
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

import type { ReactNode } from "react";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shri Annamalai Power Generators - Sapgen| Generators",
  description: "Engineering superior power for industrial, commercial, and residential use.",

  verification: {
    google: "pFw9Za-n9BqMaGGOQMU0kFSjY8uuZyXz4DkNEBTT7xU",
  },

  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

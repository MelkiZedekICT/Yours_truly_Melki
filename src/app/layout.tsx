import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { SITE_META } from "@/lib/data";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
  authors: [{ name: "Bolli Yaswanth Melki" }],
  keywords: [
    "Bolli Yaswanth Melki",
    "software engineer",
    "full-stack developer",
    "embedded systems",
    "data science",
    "portfolio",
    "React",
    "Node.js",
    "Python",
    "C++",
  ],
  robots: "index, follow",
  openGraph: {
    title: SITE_META.title,
    description: SITE_META.description,
    type: "profile",
    locale: SITE_META.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_META.title,
    description: SITE_META.description,
  },
};

import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body text-ink bg-paper antialiased">
        <SmoothScroll>
          <div className="relative min-h-screen overflow-hidden">
            <Header />
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

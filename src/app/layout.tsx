import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroVideo from "@/components/IntroVideo";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "narrativ. | Marketing Agency",
  description:
    "A creative portfolio + marketing powerhouse. We drive measurable outcomes through visual storytelling.",
  keywords: ["marketing agency", "creative portfolio", "visual storytelling", "digital marketing", "brand strategy"],
  authors: [{ name: "narrativ." }],
  creator: "narrativ.",
  publisher: "narrativ.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://narrativ.com",
    title: "narrativ. | Marketing Agency",
    description: "A creative portfolio + marketing powerhouse. We drive measurable outcomes through visual storytelling.",
    siteName: "narrativ.",
  },
  twitter: {
    card: "summary_large_image",
    title: "narrativ. | Marketing Agency",
    description: "A creative portfolio + marketing powerhouse. We drive measurable outcomes through visual storytelling.",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${syne.variable} ${inter.variable} antialiased bg-white text-black font-sans selection:bg-red-600 selection:text-white`}
      >
        <IntroVideo />
        <CustomCursor />

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
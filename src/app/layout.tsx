import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroVideo from "@/components/IntroVideo";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "narrativ. | Marketing Agency",
  description:
    "A creative portfolio + marketing powerhouse. We drive measurable outcomes through visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import OtherNarrativ from "@/components/OtherNarrativ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "the other narrativ. | narrativ.",
  description: "Stories beyond the brief. Editorial content from the narrativ. universe.",
};

export default function TheOtherNarrativPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <OtherNarrativ />
      <Footer />
    </main>
  );
}

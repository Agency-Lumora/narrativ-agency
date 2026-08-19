import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import OtherNarrativ from "@/components/OtherNarrativ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Results />
      <Testimonials />
      <Cta />
      <OtherNarrativ />
      <Footer />
    </main>
  );
}

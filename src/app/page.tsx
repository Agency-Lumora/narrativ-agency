import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AboutPreview from "@/components/AboutPreview";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <AboutPreview />
      <Results />
      <Services />
      <Benefits />
      <Testimonials />
      <Cta />
    </main>
  );
}

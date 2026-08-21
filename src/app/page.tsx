"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/Cta";
import OtherNarrativ from "@/components/OtherNarrativ";
import OtherNarrativJourney from "@/components/OtherNarrativJourney";
import Footer from "@/components/Footer";

export default function Home() {
  const [isJourneyActive, setIsJourneyActive] = useState(false);
  const [scrollToSection, setScrollToSection] = useState(false);

  const handleJourneyTrigger = () => {
    setIsJourneyActive(true);
  };

  const handleJourneyComplete = () => {
    setIsJourneyActive(false);
    setScrollToSection(true);
  };

  const handleJourneySkip = () => {
    setIsJourneyActive(false);
    setScrollToSection(true);
  };

  useEffect(() => {
    if (scrollToSection) {
      const otherNarrativSection = document.getElementById('other-narrativ');
      if (otherNarrativSection) {
        otherNarrativSection.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollToSection(false);
    }
  }, [scrollToSection]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar 
        onJourneyTrigger={handleJourneyTrigger} 
        isJourneyActive={isJourneyActive}
      />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Results />
      <Testimonials />
      <Cta />
      <OtherNarrativ />
      <Footer />
      
      <OtherNarrativJourney
        isActive={isJourneyActive}
        onComplete={handleJourneyComplete}
        onSkip={handleJourneySkip}
      />
    </main>
  );
}

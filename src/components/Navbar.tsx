"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onJourneyTrigger: () => void;
  isJourneyActive: boolean;
}

export default function Navbar({ onJourneyTrigger, isJourneyActive }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOtherNarrativClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if already at the other-narrativ section
    const otherNarrativSection = document.getElementById('other-narrativ');
    if (otherNarrativSection) {
      const rect = otherNarrativSection.getBoundingClientRect();
      const isAtSection = rect.top < 200 && rect.bottom > 0;
      
      if (isAtSection) {
        // Already at section, just scroll smoothly
        otherNarrativSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Trigger the journey animation
        onJourneyTrigger();
      }
    } else {
      // Section not found, trigger journey
      onJourneyTrigger();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold font-heading tracking-tight">
          narrativ<span className="text-brand-red">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 text-sm font-bold tracking-widest uppercase">
          <Link href="#work" className="hover:text-brand-red transition-colors">
            Work
          </Link>
          <Link href="#services" className="hover:text-brand-red transition-colors">
            Services
          </Link>
          <Link href="#results" className="hover:text-brand-red transition-colors">
            Impact
          </Link>
          <button
            onClick={handleOtherNarrativClick}
            disabled={isJourneyActive}
            className="group relative px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white/90 hover:shadow-md hover:border-black/20 transition-all duration-300 ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full group-hover:scale-125 transition-transform duration-300"></span>
              the other narrativ.
            </span>
          </button>
          <Link
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-brand-red transition-colors ml-2"
          >
            Book a Meeting
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-6 flex flex-col gap-6 md:hidden font-bold tracking-widest uppercase text-sm"
        >
          <Link
            href="#work"
            className="hover:text-brand-red transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            href="#services"
            className="hover:text-brand-red transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#results"
            className="hover:text-brand-red transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Impact
          </Link>
          <button
            onClick={(e) => {
              handleOtherNarrativClick(e);
              setIsOpen(false);
            }}
            disabled={isJourneyActive}
            className="group flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/70 backdrop-blur-md border border-black/10 shadow-sm hover:bg-white/90 hover:shadow-md hover:border-black/20 transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="w-1 h-1 bg-brand-red rounded-full group-hover:scale-125 transition-transform duration-300"></span>
            the other narrativ.
          </button>
          <Link
            href="#contact"
            className="bg-black text-white text-center px-6 py-4 rounded-full hover:bg-brand-red transition-colors mt-2"
            onClick={() => setIsOpen(false)}
          >
            Book a Meeting
          </Link>
        </motion.div>
      )}
    </header>
  );
}

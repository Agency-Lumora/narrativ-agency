"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import OtherNarrativJourney from "@/components/OtherNarrativJourney";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isJourneyActive, setIsJourneyActive] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Pages with dark backgrounds need a white navbar from initial load.
  const isDarkHeroPage =
    pathname === "/work" || pathname === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOtherNarrativClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Replay the transition every time
    setIsJourneyActive(true);
  };

  const handleJourneyComplete = () => {
    setIsJourneyActive(false);

    if (pathname !== "/the-other-narrativ") {
      router.push("/the-other-narrativ");
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDarkHeroPage || scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="text-2xl md:text-3xl font-bold font-heading tracking-tight leading-none"
          >
            narrativ<span className="text-brand-red">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9 lg:gap-11 text-sm font-bold tracking-widest uppercase">

            {/* Home */}
            <Link
              href="/"
              className={`relative py-2 transition-colors duration-200 ${
                pathname === "/"
                  ? "text-brand-red"
                  : "hover:text-brand-red"
              }`}
            >
              Home
            </Link>

            {/* Work */}
            <Link
              href="/work"
              className={`relative py-2 transition-colors duration-200 ${
                pathname === "/work"
                  ? "text-brand-red"
                  : "hover:text-brand-red"
              }`}
            >
              Work
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`relative py-2 transition-colors duration-200 ${
                pathname === "/about"
                  ? "text-brand-red"
                  : "hover:text-brand-red"
              }`}
            >
              About
            </Link>

            {/* Connect */}
            <Link
              href="/contact"
              className={`relative py-2 transition-colors duration-200 ${
                pathname === "/contact"
                  ? "text-brand-red"
                  : "hover:text-brand-red"
              }`}
            >
              Connect
            </Link>

            {/* The Other Narrativ */}
            <button
              onClick={handleOtherNarrativClick}
              disabled={isJourneyActive}
              className="
                group
                relative
                ml-1
                px-5
                py-2.5
                rounded-full
                bg-white/80
                backdrop-blur-md
                border
                border-black/10
                shadow-sm
                hover:bg-white
                hover:border-black/20
                hover:shadow-md
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              <span className="flex items-center gap-2.5 whitespace-nowrap">
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-brand-red
                    transition-transform
                    duration-300
                    group-hover:scale-125
                  "
                />

                <span className="normal-case tracking-widest">
                  the other narrativ.
                </span>
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              top-full
              left-0
              right-0
              bg-white
              border-t
              border-black/10
              shadow-lg
              p-6
              flex
              flex-col
              gap-5
              md:hidden
              font-bold
              tracking-widest
              uppercase
              text-sm
            "
          >

            {/* Home */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`py-2 transition-colors ${
                pathname === "/"
                  ? "text-brand-red"
                  : "hover:text-brand-red"
              }`}
            >
              Home
            </Link>

            {/* Work */}
            <Link
              href="/work"
              onClick={closeMobileMenu}
              className={`py-2 transition-colors ${
                pathname === "/work"
                  ? "text-brand-red"
                  : "hover:text-brand-red"
              }`}
            >
              Work
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`py-2 transition-colors ${
                pathname === "/about"
                  ? "text-brand-red"
                  : "hover:text-brand-red"
              }`}
            >
              About
            </Link>

            {/* Connect */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`py-2 transition-colors ${
                pathname === "/contact"
                  ? "text-brand-red"
                  : "hover:text-brand-red"
              }`}
            >
              Connect
            </Link>

            {/* The Other Narrativ */}
            <button
              onClick={(e) => {
                handleOtherNarrativClick(e);
                closeMobileMenu();
              }}
              disabled={isJourneyActive}
              className="
                flex
                items-center
                justify-center
                gap-2.5
                px-5
                py-3
                rounded-full
                bg-white
                border
                border-black/10
                shadow-sm
                hover:border-black/20
                transition-all
                duration-300
                mt-1
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />

              <span className="normal-case tracking-widest">
                the other narrativ.
              </span>
            </button>
          </motion.div>
        )}
      </header>

      {/* Other Narrativ Transition */}
      <OtherNarrativJourney
        isActive={isJourneyActive}
        onComplete={handleJourneyComplete}
        onSkip={handleJourneyComplete}
      />
    </>
  );
}
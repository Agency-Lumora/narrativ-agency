"use client";

import { useState, useEffect } from "react";
import OtherNarrativStage from "@/components/OtherNarrativStage";
import OtherNarrativJourney from "@/components/OtherNarrativJourney";
import OtherNarrativScene from "@/components/OtherNarrativScene";
import OtherNarrativ from "@/components/OtherNarrativ";

export default function TheOtherNarrativPage() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Hide navbar during animation
    const navbar = document.querySelector('nav');
    if (navbar instanceof HTMLElement) {
      navbar.style.opacity = '0';
      navbar.style.pointerEvents = 'none';
    }

    return () => {
      // Cleanup: restore navbar
      const navbar = document.querySelector('nav');
      if (navbar instanceof HTMLElement) {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto';
      }
    };
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    
    // Show navbar
    const navbar = document.querySelector('nav');
    if (navbar instanceof HTMLElement) {
      navbar.style.opacity = '1';
      navbar.style.pointerEvents = 'auto';
    }

    // Brief delay before showing content for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  if (!showContent) {
    return (
      <OtherNarrativStage>
        {!animationComplete ? (
          <OtherNarrativJourney onComplete={handleAnimationComplete} />
        ) : (
          <OtherNarrativScene />
        )}
      </OtherNarrativStage>
    );
  }

  return <OtherNarrativ />;
}

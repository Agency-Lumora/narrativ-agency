"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import OtherNarrativStage from "@/components/OtherNarrativStage";
import OtherNarrativJourney from "@/components/OtherNarrativJourney";
import OtherNarrativScene from "@/components/OtherNarrativScene";

interface OtherNarrativTransitionProps {
  isActive: boolean;
  onNavigate: () => void;
  onComplete: () => void;
  onCancel: () => void;
}

// After the journey settles, hold on the finished title composition briefly
// before handing off to the real (already-navigated) destination page.
const SETTLE_HOLD_MS = 900;

export default function OtherNarrativTransition({
  isActive,
  onNavigate,
  onComplete,
  onCancel,
}: OtherNarrativTransitionProps) {
  const prefersReducedMotion = useReducedMotion();
  // Mounted fresh (via a `key` in Navbar) each time the transition is
  // activated, so starting in the journey phase here is always correct.
  const [phase, setPhase] = useState<"journey" | "settled">("journey");
  const onNavigateRef = useRef(onNavigate);
  const onCompleteRef = useRef(onComplete);
  const onCancelRef = useRef(onCancel);

  useEffect(() => {
    onNavigateRef.current = onNavigate;
    onCompleteRef.current = onComplete;
    onCancelRef.current = onCancel;
  }, [onCancel, onComplete, onNavigate]);

  useEffect(() => {
    if (!isActive) return;

    const page = document.querySelector("body > main") as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const previousOverscroll = document.documentElement.style.overscrollBehavior;
    const previousInert = page?.inert;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    let lockReleased = false;

    const releaseLock = () => {
      if (lockReleased) return;

      lockReleased = true;
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.documentElement.style.overscrollBehavior = previousOverscroll;

      if (page && previousInert !== undefined) {
        page.inert = previousInert;
      }
    };

    const cancelTransition = () => {
      releaseLock();
      onCancelRef.current();
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";

    if (page) {
      page.inert = true;
    }

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // The overlay already fully covers the viewport, so the route can swap
    // underneath immediately without the user ever seeing the raw navigation.
    onNavigateRef.current();
    window.addEventListener("popstate", cancelTransition);

    if (prefersReducedMotion) {
      const quickTimer = window.setTimeout(() => {
        releaseLock();
        onCompleteRef.current();
      }, 360);

      return () => {
        window.clearTimeout(quickTimer);
        window.removeEventListener("popstate", cancelTransition);
        releaseLock();
      };
    }

    return () => {
      window.removeEventListener("popstate", cancelTransition);
      releaseLock();
    };
  }, [isActive, prefersReducedMotion]);

  const handleJourneyComplete = () => {
    setPhase("settled");
    window.setTimeout(() => onCompleteRef.current(), SETTLE_HOLD_MS);
  };

  if (!isActive) return null;

  if (prefersReducedMotion) {
    return (
      <motion.div
        className="fixed inset-0 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        aria-hidden="true"
      >
        <OtherNarrativStage transitionLayer>
          <OtherNarrativScene decorative />
        </OtherNarrativStage>
      </motion.div>
    );
  }

  return (
    <OtherNarrativStage transitionLayer>
      {phase === "journey" ? (
        <OtherNarrativJourney onComplete={handleJourneyComplete} />
      ) : (
        <OtherNarrativScene animated decorative />
      )}
    </OtherNarrativStage>
  );
}

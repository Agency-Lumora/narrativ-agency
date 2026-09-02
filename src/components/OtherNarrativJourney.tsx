"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Configuration - easy to replace with actual assets
const JOURNEY_VIDEO = "/media/other-narrativ-journey.mp4";
const POLAROID_IMAGES = [
  "/media/other-narrativ/polaroid-01.webp",
  "/media/other-narrativ/polaroid-02.webp",
  "/media/other-narrativ/polaroid-03.webp",
  "/media/other-narrativ/polaroid-04.webp",
];

const JOURNEY_CHAPTERS = [
  { chapter: "CHAPTER 01", title: "THE BEGINNING" },
  { chapter: "CHAPTER 02", title: "THE FIRST IDEA" },
  { chapter: "CHAPTER 03", title: "THE FIRST CLIENT" },
  { chapter: "CHAPTER 04", title: "THE LATE NIGHTS" },
  { chapter: "CHAPTER 05", title: "THE FIRST CONVERSATION" },
];

const POLAROID_TEXTS = [
  "The first idea",
  "The first client", 
  "The late nights",
  "The first episode",
];

interface OtherNarrativJourneyProps {
  isActive: boolean;
  onComplete: () => void;
  onSkip: () => void;
}

export default function OtherNarrativJourney({ isActive, onComplete, onSkip }: OtherNarrativJourneyProps) {
  const [progress, setProgress] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentPolaroid, setCurrentPolaroid] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const startJourneyAnimation = useCallback(() => {
    // Reset state
    setProgress(0);
    setCurrentChapter(0);
    setCurrentPolaroid(0);
    
    // Animate train journey (5-7 seconds)
    const journeyDuration = 6000; // 6 seconds
    const startTime = Date.now();

    const animateJourney = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / journeyDuration, 1);
      
      setProgress(newProgress);

      // Update chapters based on progress
      const chapterIndex = Math.min(Math.floor(newProgress * JOURNEY_CHAPTERS.length), JOURNEY_CHAPTERS.length - 1);
      setCurrentChapter(chapterIndex);

      // Update polaroids based on progress
      const polaroidIndex = Math.min(Math.floor(newProgress * POLAROID_TEXTS.length), POLAROID_TEXTS.length - 1);
      setCurrentPolaroid(polaroidIndex);

      if (newProgress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateJourney);
      } else {
        // Journey complete, transition to section
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateJourney);
  }, [onComplete]);

  useEffect(() => {
    if (isActive) {
      if (prefersReducedMotion) {
        // Simple fade transition for reduced motion
        setTimeout(() => {
          onComplete();
        }, 1000);
      } else {
        // Full cinematic animation
        startJourneyAnimation();
      }
    }

    // Cleanup animation frame on unmount or when inactive
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isActive, prefersReducedMotion, onComplete]);

  const handleSkip = () => {
    onSkip();
  };

  if (!isActive) return null;

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
        >
          {/* Skip Button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium tracking-wider uppercase"
          >
            <X size={20} />
            Skip
          </button>

          {/* Background Video or Fallback */}
          <div className="absolute inset-0 opacity-40">
            <video
              ref={videoRef}
              src={JOURNEY_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
              onError={() => {
                // Fallback if video doesn't load - use animated gradient
                console.log('Video not available, using fallback');
              }}
            />
            {/* Fallback animated background when video fails */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  backgroundSize: '200% 200%'
                }}
              />
            </div>
            {/* Film grain overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noise)"/%3E%3C/svg%3E")',
            }} />
          </div>

          {/* Desktop Experience */}
          <div className="hidden md:block absolute inset-0">
            <RailwayTrack progress={progress} />
            <Train progress={progress} />
            <Polaroids progress={progress} />
            <JourneyText currentChapter={currentChapter} />
          </div>

          {/* Mobile Experience */}
          <div className="md:hidden absolute inset-0">
            <MobileRailwayTrack progress={progress} />
            <MobileTrain progress={progress} />
            <MobilePolaroids progress={progress} />
            <MobileJourneyText currentChapter={currentChapter} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Desktop Railway Track Component
function RailwayTrack({ progress }: { progress: number }) {
  const trackPath = "M 0 400 Q 400 300 800 400 T 1600 400 T 2400 400";
  const trackLength = 2400;

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Black track (untraveled) */}
      <path
        d={trackPath}
        stroke="black"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
      />
      
      {/* Red track (traveled) */}
      <path
        d={trackPath}
        stroke="#ff0000"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={trackLength}
        strokeDashoffset={trackLength * (1 - progress)}
        filter="url(#glow)"
        className="transition-all duration-75 ease-linear"
      />
      
      {/* Track details - sleepers */}
      {[...Array(40)].map((_, i) => {
        const t = i / 40;
        const x = t * 1920;
        const y = 400 + Math.sin(t * Math.PI * 2) * 100;
        return (
          <line
            key={i}
            x1={x}
            y1={y - 20}
            x2={x}
            y2={y + 20}
            stroke={t < progress ? "#ff0000" : "black"}
            strokeWidth="4"
            opacity={t < progress ? 0.8 : 0.3}
            className="transition-all duration-75 ease-linear"
          />
        );
      })}
    </svg>
  );
}

// Desktop Train Component
function Train({ progress }: { progress: number }) {
  const trackPath = "M 0 400 Q 400 300 800 400 T 1600 400 T 2400 400";
  
  // Calculate train position along the path
  const trainX = progress * 1800 + 50;
  const trainY = 400 + Math.sin((progress * 1800 + 50) / 400 * Math.PI * 2) * 100;
  
  // Calculate rotation based on path tangent
  const rotation = Math.cos((progress * 1800 + 50) / 400 * Math.PI * 2) * 15;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${trainX}px`,
        top: `${trainY}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      {/* Two-block train */}
      <div className="relative">
        {/* Front car */}
        <div className="w-16 h-8 bg-black rounded-sm shadow-2xl relative">
          {/* Windows */}
          <div className="absolute top-1 left-2 w-3 h-2 bg-white/80 rounded-sm" />
          <div className="absolute top-1 right-2 w-3 h-2 bg-white/80 rounded-sm" />
          {/* Wheels */}
          <div className="absolute -bottom-2 left-2 w-3 h-3 bg-black rounded-full border-2 border-white/20" />
          <div className="absolute -bottom-2 right-2 w-3 h-3 bg-black rounded-full border-2 border-white/20" />
        </div>
        
        {/* Back car */}
        <div className="w-12 h-8 bg-black rounded-sm shadow-2xl absolute -left-10 top-0">
          {/* Windows */}
          <div className="absolute top-1 left-2 w-2 h-2 bg-white/80 rounded-sm" />
          <div className="absolute top-1 right-2 w-2 h-2 bg-white/80 rounded-sm" />
          {/* Wheels */}
          <div className="absolute -bottom-2 left-2 w-3 h-3 bg-black rounded-full border-2 border-white/20" />
          <div className="absolute -bottom-2 right-2 w-3 h-3 bg-black rounded-full border-2 border-white/20" />
        </div>
      </div>
    </motion.div>
  );
}

// Desktop Polaroids Component
function Polaroids({ progress }: { progress: number }) {
  const polaroidPositions = [
    { x: 200, y: 200, rotation: -5, delay: 0.15 },
    { x: 400, y: 350, rotation: 3, delay: 0.35 },
    { x: 600, y: 180, rotation: -2, delay: 0.55 },
    { x: 800, y: 320, rotation: 4, delay: 0.75 },
  ];

  return (
    <>
      {polaroidPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute bg-white p-2 shadow-2xl"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: `rotate(${pos.rotation}deg)`,
            width: '120px',
            height: '140px',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: progress > pos.delay ? 1 : 0,
            scale: progress > pos.delay ? 1 : 0.8,
            y: progress > pos.delay ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-200 w-full h-[100px] flex items-center justify-center overflow-hidden relative">
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
            {/* Placeholder icon/text */}
            <div className="relative z-10 text-gray-500 text-xs text-center p-2 font-medium">
              {POLAROID_TEXTS[index] || `Memory ${index + 1}`}
            </div>
          </div>
          <div className="mt-1 text-center">
            <p className="text-[8px] text-gray-600 font-handwriting">
              {POLAROID_TEXTS[index] || `Memory ${index + 1}`}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
}

// Desktop Journey Text Component
function JourneyText({ currentChapter }: { currentChapter: number }) {
  const chapter = JOURNEY_CHAPTERS[currentChapter] || JOURNEY_CHAPTERS[0];

  return (
    <motion.div
      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
      key={currentChapter}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-brand-red text-sm font-bold tracking-widest uppercase mb-2">
        {chapter.chapter}
      </p>
      <h2 className="text-white text-3xl font-bold font-heading tracking-tighter uppercase">
        {chapter.title}
      </h2>
    </motion.div>
  );
}

// Mobile Railway Track Component
function MobileRailwayTrack({ progress }: { progress: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
      {/* Curved track for mobile */}
      <path
        d="M 50 150 Q 200 250 350 150 T 350 650"
        stroke="black"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
      />
      
      <path
        d="M 50 150 Q 200 250 350 150 T 350 650"
        stroke="#ff0000"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="900"
        strokeDashoffset={900 * (1 - progress)}
        className="transition-all duration-75 ease-linear"
      />
      
      {/* Mobile track sleepers */}
      {[...Array(20)].map((_, i) => {
        const t = i / 20;
        const x = 50 + t * 300;
        const y = 150 + Math.sin(t * Math.PI) * 100 + t * 500;
        return (
          <line
            key={i}
            x1={x - 15}
            y1={y}
            x2={x + 15}
            y2={y}
            stroke={t < progress ? "#ff0000" : "black"}
            strokeWidth="3"
            opacity={t < progress ? 0.8 : 0.3}
            className="transition-all duration-75 ease-linear"
          />
        );
      })}
    </svg>
  );
}

// Mobile Train Component
function MobileTrain({ progress }: { progress: number }) {
  const trainX = 50 + progress * 300;
  const trainY = 150 + Math.sin(progress * Math.PI) * 100 + progress * 500;
  const rotation = Math.cos(progress * Math.PI) * 20;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${trainX}px`,
        top: `${trainY}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
    >
      {/* Smaller train for mobile */}
      <div className="relative">
        <div className="w-12 h-6 bg-black rounded-sm shadow-xl">
          <div className="absolute top-1 left-1 w-2 h-1 bg-white/80 rounded-sm" />
          <div className="absolute top-1 right-1 w-2 h-1 bg-white/80 rounded-sm" />
          <div className="absolute -bottom-1 left-1 w-2 h-2 bg-black rounded-full border-2 border-white/20" />
          <div className="absolute -bottom-1 right-1 w-2 h-2 bg-black rounded-full border-2 border-white/20" />
        </div>
        <div className="w-8 h-6 bg-black rounded-sm shadow-xl absolute -left-6 top-0">
          <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-sm" />
          <div className="absolute top-1 right-1 w-1 h-1 bg-white/80 rounded-sm" />
          <div className="absolute -bottom-1 left-1 w-2 h-2 bg-black rounded-full border-2 border-white/20" />
          <div className="absolute -bottom-1 right-1 w-2 h-2 bg-black rounded-full border-2 border-white/20" />
        </div>
      </div>
    </motion.div>
  );
}

// Mobile Polaroids Component
function MobilePolaroids({ progress }: { progress: number }) {
  const mobilePolaroidPositions = [
    { x: 50, y: 100, rotation: -3, delay: 0.2 },
    { x: 250, y: 250, rotation: 2, delay: 0.5 },
    { x: 100, y: 400, rotation: -1, delay: 0.8 },
  ];

  return (
    <>
      {mobilePolaroidPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="absolute bg-white p-1.5 shadow-xl"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: `rotate(${pos.rotation}deg)`,
            width: '80px',
            height: '100px',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{
            opacity: progress > pos.delay ? 1 : 0,
            scale: progress > pos.delay ? 1 : 0.8,
            y: progress > pos.delay ? 0 : 15,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-200 w-full h-[70px] flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400" />
            <div className="relative z-10 text-gray-500 text-[10px] text-center p-1 font-medium">
              {POLAROID_TEXTS[index] || `Memory ${index + 1}`}
            </div>
          </div>
          <div className="mt-0.5 text-center">
            <p className="text-[6px] text-gray-600">
              {POLAROID_TEXTS[index] || `Memory ${index + 1}`}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
}

// Mobile Journey Text Component
function MobileJourneyText({ currentChapter }: { currentChapter: number }) {
  const chapter = JOURNEY_CHAPTERS[currentChapter] || JOURNEY_CHAPTERS[0];

  return (
    <motion.div
      className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center w-full px-4"
      key={currentChapter}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-brand-red text-xs font-bold tracking-widest uppercase mb-1">
        {chapter.chapter}
      </p>
      <h2 className="text-white text-xl font-bold font-heading tracking-tighter uppercase">
        {chapter.title}
      </h2>
    </motion.div>
  );
}
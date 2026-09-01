"use client";

import { useState, useEffect, useRef } from "react";

export default function IntroVideo() {
  const [isVisible, setIsVisible] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Prevent body scroll when video is playing
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  const handleVideoEnd = () => {
    setIsVisible(false);
    setHasPlayed(true);
  };

  if (!isVisible || hasPlayed) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black md:bg-white transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Video Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover md:h-full md:w-auto md:object-contain lg:h-full lg:w-auto"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
        >
          <source src="/narrativ-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white/20 md:bg-black/10">
          <div
            className="h-full bg-red-600 transition-all duration-300"
            style={{
              width: videoRef.current
                ? `${(videoRef.current.currentTime / videoRef.current.duration) * 100}%`
                : "0%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

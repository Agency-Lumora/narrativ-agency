import React from 'react';

export default function Marquee() {
  const MarqueeContent = () => (
    <div className="flex items-center gap-16 md:gap-24 px-8 animate-marquee whitespace-nowrap min-w-max">
      <img src="/brands/finnetmedia.png" alt="Test Brand" className="h-8 md:h-10 w-auto object-contain" />
      <img src="/brands/finnetmedia.png" alt="Test Brand" className="h-8 md:h-10 w-auto object-contain" />
      <img src="/brands/finnetmedia.png" alt="Test Brand" className="h-8 md:h-10 w-auto object-contain" />
      <img src="/brands/finnetmedia.png" alt="Test Brand" className="h-8 md:h-10 w-auto object-contain" />
      <img src="/brands/finnetmedia.png" alt="Test Brand" className="h-8 md:h-10 w-auto object-contain" />
      <img src="/brands/finnetmedia.png" alt="Test Brand" className="h-8 md:h-10 w-auto object-contain" />
    </div>
  );

  return (
    <div className="w-full bg-white pt-12 pb-8">
      
      {/* Original Single-Line Header */}
      <div className="container mx-auto px-6 md:px-12 mb-6 flex items-center justify-center md:justify-start gap-4">
         <span className="w-2 h-2 bg-red-600 rounded-full"></span>
         <p className="text-black font-bold tracking-widest uppercase text-xs">
           Brands that trust our narrativ.
         </p>
      </div>

      {/* Single Marquee Track */}
      <div className="relative flex overflow-x-hidden border-y border-black/5 py-8 w-full select-none pointer-events-none">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
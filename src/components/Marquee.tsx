export default function Marquee() {
  const MarqueeContent = () => (
    <div className="flex items-center gap-16 md:gap-24 px-8 animate-marquee whitespace-nowrap min-w-max">
      <span className="font-heading text-2xl md:text-4xl font-bold text-black/10 uppercase">TechCorp</span>
      <span className="font-heading text-2xl md:text-4xl font-bold text-black/40 uppercase">FintechX</span>
      <span className="font-heading text-2xl md:text-4xl font-bold text-black/10 uppercase">Lifestyle Co</span>
      <span className="font-heading text-2xl md:text-4xl font-bold text-black/40 uppercase">Global Brands</span>
      <span className="font-heading text-2xl md:text-4xl font-bold text-black/10 uppercase">Venture Capital</span>
    </div>
  );

  return (
    <div className="w-full bg-white pt-12 pb-4">
      <div className="container mx-auto px-6 md:px-12 mb-6 flex items-center justify-center md:justify-start gap-4">
         <span className="w-2 h-2 bg-brand-red rounded-full"></span>
         <p className="text-black font-bold tracking-widest uppercase text-xs">
           Brands that trust our narrativ.
         </p>
      </div>
      <div className="relative flex overflow-x-hidden border-y border-black/5 py-4 md:py-6 mt-0 w-full select-none pointer-events-none">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}

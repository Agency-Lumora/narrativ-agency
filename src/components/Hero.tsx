"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-12 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header + Showreel Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
              <p className="text-brand-red font-bold tracking-widest uppercase text-xs">
                Not an agency. A powerhouse.
              </p>
            </div>
            
            <h1 className="text-[16vw] md:text-[7vw] lg:text-[6vw] leading-[1.1] font-bold tracking-tighter uppercase text-black mb-6">
              WE TURN<br/>
              <span className="outline-text">BRANDS</span><br/>
              INTO<br/>
              CULTURE<span className="text-brand-red">.</span>
            </h1>
            
            <div className="flex items-center gap-4 max-w-xl">
              <Link
                href="#work"
                className="group flex items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-black text-white rounded-full hover:bg-brand-red transition-colors duration-300 shrink-0 shadow-xl"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="font-heading text-base font-bold leading-tight text-center">See<br/>The<br/>Work</span>
                  <ArrowDownRight className="group-hover:rotate-[-45deg] transition-transform duration-300" size={16} />
                </div>
              </Link>
              
              <p className="text-sm md:text-base text-black/60 font-medium">
                Strategic content, paid media, and brand narratives that demand attention and drive undeniable growth.
              </p>
            </div>
          </motion.div>
          
          {/* Right: Video Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-6 relative w-full max-w-full overflow-hidden"
          >
            <div className="relative space-y-2 w-full">
              {/* Video 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-[75%] max-w-[75%] aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000" 
                  alt="Showreel 1" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play size={18} className="ml-1 group-hover:text-brand-red transition-colors" fill="currentColor" />
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-2">
                  <div className="bg-black/50 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Showreel 2026</div>
                </div>
              </motion.div>
              
              {/* Video 2 - Middle Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative w-[70%] max-w-[70%] aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-lg ml-auto"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
                  alt="Case Study" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play size={16} className="ml-1 group-hover:text-brand-red transition-colors" fill="currentColor" />
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-2">
                  <div className="bg-black/50 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Case Study</div>
                </div>
              </motion.div>
              
              {/* Video 3 - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative w-[65%] max-w-[65%] aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
                  alt="Client Story" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play size={16} className="ml-1 group-hover:text-brand-red transition-colors" fill="currentColor" />
                  </div>
                </div>
                
                <div className="absolute bottom-2 left-2">
                  <div className="bg-black/50 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Client Story</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const editorialContent = [
  {
    id: "EP.01",
    title: "BEYOND THE BRIEF",
    description: "Where creativity meets strategy",
    guest: "WITH FOUNDER STORIES",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    layout: "dark",
  },
  {
    id: "EP.02",
    title: "CULTURE CODE",
    description: "Building brands that resonate",
    guest: "WITH INDUSTRY LEADERS",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
    layout: "light",
  },
  {
    id: "EP.03",
    title: "THE GRIND",
    description: "Behind the campaign curtain",
    guest: "WITH CREATIVE DIRECTORS",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
    layout: "dark",
  },
  {
    id: "EP.04",
    title: "NEXT CHAPTER",
    description: "Future of brand storytelling",
    guest: "WITH MARKETING VISIONARIES",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
    layout: "light",
  },
];

export default function OtherNarrativ() {
  return (
    <section id="other-narrativ" className="py-24 md:py-40 bg-white text-black relative overflow-hidden">
      {/* Decorative red dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-16 right-8 md:right-16 w-2 h-2 md:w-3 md:h-3 bg-brand-red rounded-full"
      />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Editorial Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-32"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
            <p className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm">
              Editorial
            </p>
          </div>
          
          <h1 className="text-[12vw] md:text-[6vw] lg:text-[5vw] leading-[1.1] font-bold tracking-tighter uppercase font-heading mb-6">
            the other<br/>
            narrativ<span className="text-brand-red">.</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl font-medium text-black/60 max-w-2xl">
            Stories beyond the brief.
          </p>
        </motion.div>

        {/* Editorial Content Grid */}
        <div className="space-y-12 md:space-y-16">
          {editorialContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative ${item.layout === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} rounded-3xl overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[400px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 lg:bg-transparent group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 ml-1 group-hover:text-brand-red transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
                      {item.id}
                    </p>
                    
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter font-heading mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-current/70 mb-6">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-xs md:text-sm font-medium uppercase tracking-wider">
                        {item.guest}
                      </span>
                      <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={16} />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Red Circle (for light cards) */}
              {item.layout === 'light' && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-red rounded-full blur-3xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 font-heading">
              You know the story.<br/>
              We want to know the <span className="text-brand-red">other narrativ.</span>
            </h2>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-brand-red transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a conversation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative py-12 md:py-16 border-b border-black/10 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-12 max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            WHO IS NARRATIV?
          </motion.p>

          <h2 className="font-heading font-bold tracking-tighter leading-[0.95] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] mb-6">
            WE'RE NOT HERE
            <br />
            TO MAKE YOU
            <br />
            LOOK BUSY
            <br />
            <span className="text-brand-red">ONLINE.</span>
          </h2>

          <p className="text-base md:text-lg text-black/70 leading-relaxed">
            Narrativ is a creative marketing agency built around one idea: your brand should have something worth saying — and every digital touchpoint should say it well.
          </p>
        </motion.div>

        {/* Quick Problems Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 md:mb-12"
        >
          <h3 className="font-heading font-bold tracking-tighter leading-[0.95] text-[24px] sm:text-[32px] md:text-[40px] mb-6">
            YOUR BRAND DOESN'T
            <br />
            NEED MORE CONTENT.
            <br />
            IT NEEDS
            <br />
            <span className="text-brand-red text-[36px] sm:text-[44px] md:text-[56px]">A CLEARER STORY.</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="border-l-2 border-brand-red pl-4">
              <p className="font-semibold text-sm md:text-base mb-1">STRATEGY BEFORE POSTING</p>
              <p className="text-xs md:text-sm text-black/60">Content built around positioning and goals.</p>
            </div>
            <div className="border-l-2 border-brand-red pl-4">
              <p className="font-semibold text-sm md:text-base mb-1">ONE NARRATIVE, EVERY TOUCHPOINT</p>
              <p className="text-xs md:text-sm text-black/60">Social, content, paid media working together.</p>
            </div>
            <div className="border-l-2 border-brand-red pl-4">
              <p className="font-semibold text-sm md:text-base mb-1">WE FIND THE STORY</p>
              <p className="text-xs md:text-sm text-black/60">Turn expertise into content people consume.</p>
            </div>
            <div className="border-l-2 border-brand-red pl-4">
              <p className="font-semibold text-sm md:text-base mb-1">CREATIVE + PERFORMANCE</p>
              <p className="text-xs md:text-sm text-black/60">Move people from attention to action.</p>
            </div>
          </div>
        </motion.div>

        {/* See More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-base md:text-lg font-bold tracking-widest uppercase bg-brand-red text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-300"
          >
            SEE MORE
            <ArrowRight size={20} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

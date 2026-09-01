"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    id: "01",
    problem: "WE'RE POSTING.\nBUT NOTHING IS HAPPENING.",
    response: "STRATEGY\nBEFORE\nPOSTING.",
    description: "We build content around your positioning, audience and business goals — not simply a calendar.",
  },
  {
    id: "02",
    problem: "EVERYTHING FEELS\nDISCONNECTED.",
    response: "ONE NARRATIVE.\nEVERY\nTOUCHPOINT.",
    description: "Social, content, paid media, LinkedIn and your website should feel like the same brand.",
  },
  {
    id: "03",
    problem: "WE DON'T KNOW\nWHAT TO SAY.",
    response: "WE FIND\nTHE STORY.",
    description: "We turn your ideas, expertise and perspective into content people actually want to consume.",
  },
  {
    id: "04",
    problem: "OUR CONTENT\nLOOKS LIKE\nEVERYONE ELSE.",
    response: "BUILD\nRECOGNITION.\nNOT NOISE.",
    description: "We create a distinct creative direction and voice that makes your brand recognisable.",
  },
  {
    id: "05",
    problem: "WE'RE SPENDING\nON ADS,\nBUT THEY'RE NOT\nCONVERTING.",
    response: "CREATIVE\n+\nPERFORMANCE.",
    description: "We connect creative, messaging and paid media to move people from attention to action.",
  },
  {
    id: "06",
    problem: "WE'RE DOING\nEVERYTHING\nOURSELVES.",
    response: "LET NARRATIV\nBUILD THE SYSTEM.",
    description: "Strategy, content, social, paid media, LinkedIn, copy and digital — working together under one narrative.",
  },
];

const principles = [
  {
    id: "01",
    statement: "NO CONTENT\nFOR CONTENT'S\nSAKE.",
    explanation: "Every piece has a reason to exist.",
  },
  {
    id: "02",
    statement: "NO RECYCLED\nPLAYBOOKS.",
    explanation: "Your brand isn't everyone else's brand. Your strategy shouldn't be either.",
  },
  {
    id: "03",
    statement: "NO DISCONNECTED\nCHANNELS.",
    explanation: "Social, content, paid, LinkedIn and digital should work together — not separately.",
  },
  {
    id: "04",
    statement: "NO VANITY\nMETRICS.",
    explanation: "We care about movement that matters to the business, not numbers that simply look good in a report.",
  },
  {
    id: "05",
    statement: "NO AGENCY\nJARGON.",
    explanation: "Clear thinking. Clear communication. Clear work.",
  },
];

export default function About() {
  return (
    <div className="bg-white text-black pt-[40px]">
      
      {/* =========================================
          01 — WHO IS NARRATIV?
      ========================================= */}
      
      <section className="relative py-12 md:py-16 border-b border-black/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center">
            
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-heading font-bold tracking-tighter leading-[0.95] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] mb-6"
              >
                WE'RE NOT HERE
                <br />
                TO MAKE YOU
                <br />
                LOOK BUSY
                <br />
                <span className="text-brand-red">ONLINE.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg text-black/70 leading-relaxed mb-6 max-w-xl"
              >
                Narrativ is a creative marketing agency built around one idea: your brand should have something worth saying — and every digital touchpoint should say it well.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-sm md:text-base font-semibold tracking-widest uppercase text-black/50"
              >
                Strategy. Story. Content. Distribution. Growth.
              </motion.p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
                alt="Narrativ team"
                fill
                className="object-cover grayscale"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          02 — THE PROBLEMS WE SOLVE
      ========================================= */}
      
      <section className="relative py-12 md:py-16 border-b border-black/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
className="mb-12 md:mb-16 max-w-3xl"
          >
            <h2 className="font-heading font-bold tracking-tighter leading-[0.95] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] mb-6">
              YOUR BRAND DOESN'T
              <br />
              NEED MORE CONTENT.
              <br />
              IT NEEDS
              <br />
              <span className="text-brand-red">A CLEARER STORY.</span>
            </h2>
            <p className="text-lg text-black/60 leading-relaxed">
              Because more posts, more ads and more platforms don't automatically create better marketing.
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="space-y-0">
            {problems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
className="group relative border-b border-black/10 py-6 md:py-8 hover:bg-black/1 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  
                  {/* Problem Number */}
                  <div className="md:col-span-1">
                    <span className="text-brand-red font-bold tracking-widest text-xs">
                      {item.id}
                    </span>
                  </div>

                  {/* Problem */}
                  <div className="md:col-span-4">
                    <h3 className="font-heading font-bold text-lg md:text-xl leading-tight text-black/80 group-hover:text-black/50 transition-colors duration-300 whitespace-pre-line">
                      {item.problem}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 flex justify-center">
                    <motion.div
                      className="text-black/30 group-hover:text-brand-red transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>

                  {/* Response */}
                  <div className="md:col-span-4">
                    <h4 className="font-heading font-bold text-lg md:text-xl leading-tight text-black group-hover:text-brand-red transition-colors duration-300 whitespace-pre-line">
                      {item.response}
                    </h4>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <p className="text-sm text-black/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          03 — WHY NARRATIV?
      ========================================= */}
      
      <section className="relative py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
className="mb-12 md:mb-16"
          >
            <h2 className="font-heading font-bold tracking-tighter leading-[0.95] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]">
              WHY
              <br />
              <span className="text-brand-red">NARRATIV?</span>
            </h2>
          </motion.div>

          {/* Principles */}
          <div className="space-y-0 mb-16 md:mb-24">
            {principles.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
className="border-b border-white/10 py-6 md:py-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="text-brand-red font-bold tracking-widest text-xs">
                      {item.id}
                    </span>
                  </div>

                  {/* Statement */}
                  <div className="md:col-span-6">
                    <h3 className="font-heading font-bold text-lg md:text-xl leading-tight whitespace-pre-line">
                      {item.statement}
                    </h3>
                  </div>

                  {/* Explanation */}
                  <div className="md:col-span-5">
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="font-heading font-bold tracking-tighter leading-[0.95] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-12">
              JUST A CLEARER
              <br />
              STORY,
              <br />
              BUILT TO
              <br />
              <span className="text-brand-red">GROW.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================= */}
      
      <section className="relative py-12 md:py-16 bg-white text-black border-t border-black/10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="font-heading font-bold tracking-tighter leading-[0.95] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] mb-6">
              WHAT'S
              <br />
              YOUR NEXT
              <br />
              STORY?
            </h2>
            <p className="text-lg text-black/60 leading-relaxed mb-12">
              Let's build something people remember.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-lg font-bold tracking-widest uppercase bg-brand-red text-white px-8 py-4 rounded-full hover:bg-black transition-colors duration-300"
            >
              LET'S TALK
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "01",
    category: "SOCIAL",
    title: "Social Media Management",
    description: "Strategy, content and community built around your brand's voice.",
  },
  {
    id: "02",
    category: "CONTENT",
    title: "Content Creation",
    description: "Visuals, videos and campaigns designed to stop the scroll.",
  },
  {
    id: "03",
    category: "PERFORMANCE",
    title: "Paid Advertising",
    description: "Creative-led advertising built to turn attention into measurable growth.",
  },
  {
    id: "04",
    category: "AUTHORITY",
    title: "LinkedIn",
    description: "Build a stronger professional presence for your brand and the people behind it.",
  },
  {
    id: "05",
    category: "VOICE",
    title: "Ghostwriting & Copywriting",
    description: "Turn ideas into words that sound unmistakably like you.",
  },
  {
    id: "06",
    category: "DIGITAL",
    title: "Web Development",
    description: "Digital experiences that turn your brand story into something people can interact with.",
  },
];

export default function ServicesEditorial() {
  return (
    <section
      id="services"
      className="relative bg-white text-black overflow-hidden py-16 md:py-20"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs mb-4"
          >
            WHAT WE DO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold tracking-tighter leading-[0.95] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] max-w-[45%]"
          >
            ONE BRAND.
            <br />
            EVERY DIGITAL
            <br />
            <span className="text-brand-red">TOUCHPOINT.</span>
          </motion.h2>
        </div>

        {/* SERVICES GRID */}
        <div className="border-t border-black/10 border-l border-r">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative border-b border-r border-black/10 p-6 md:p-8 cursor-pointer transition-all duration-300 hover:bg-black hover:border-brand-red/30"
              >
                <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="block h-full">
                  {/* Category */}
                  <motion.p
                    className="text-brand-red font-bold tracking-[0.15em] uppercase text-[10px] mb-4"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.category}
                  </motion.p>

                  {/* Title */}
                  <motion.h3
                    className="font-heading font-bold text-lg md:text-xl leading-tight mb-3 text-black transition-colors duration-300 group-hover:text-white"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-sm text-black/60 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-white/70">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.span
                    className="inline-flex items-center text-xs font-semibold tracking-wide text-black/40 group-hover:text-brand-red transition-colors duration-300"
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

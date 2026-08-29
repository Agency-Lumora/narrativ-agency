"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Revenue Generated", value: 15, suffix: "M+", prefix: "$" },
  { label: "Followers Gained", value: 500, suffix: "K+", prefix: "" },
  { label: "Avg. ROI", value: 450, suffix: "%", prefix: "" },
  { label: "Brands Scaled", value: 40, suffix: "+", prefix: "" },
];

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-[36px] md:text-[52px] lg:text-[64px] font-bold tracking-tighter leading-none font-heading text-brand-red">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section id="results" className="py-20 md:py-32 bg-white text-black overflow-hidden border-t border-black/10">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4">The Impact</p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4 font-heading">
            Numbers don't lie<span className="text-brand-red">.</span>
          </h2>
          <p className="text-base md:text-lg text-black/60 font-medium max-w-2xl mx-auto">
            We measure success by the impact on your bottom line. Impressions are vanity, conversions are sanity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center border-y border-black/10 py-12 md:py-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`flex flex-col ${index !== stats.length - 1 ? 'md:border-r border-black/10' : ''}`}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <span className="text-xs md:text-sm font-bold mt-4 uppercase tracking-widest text-black/50">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

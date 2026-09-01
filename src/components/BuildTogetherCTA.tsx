"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BuildTogether() {
  return (
    <section className="bg-black px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-white/15
            bg-[#1a1a1a]
            px-8
            py-12
            text-center
            md:px-12
            md:py-14
          "
        >
          {/* Subtle glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[250px]
              w-[250px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-brand-red/5
              blur-[90px]
            "
          />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div
              className="
                mb-4
                flex
                items-center
                justify-center
                gap-2
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-brand-red
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Got an idea?
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            </div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="
                text-[36px]
                font-bold
                leading-none
                tracking-[-0.045em]
                text-white
                md:text-[52px]
              "
            >
              Let&apos;s make it{" "}
              <span className="text-brand-red">matter.</span>
            </motion.h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-relaxed
                text-white/70
                md:text-base
              "
            >
              Tell us what you&apos;re building, changing, or trying to solve.
              We&apos;ll figure out the rest.
            </p>

            {/* CTA */}
            <div className="mt-7">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-brand-red
                  hover:text-white
                  md:px-7
                  md:py-3.5
                  md:text-base
                "
              >
                Let&apos;s Talk
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Small line */}
            <p
              className="
                mt-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/35
              "
            >
              No pitch deck required.
            </p>
          </div>

          {/* Decorative dots */}
          <span className="absolute bottom-5 left-6 h-2.5 w-2.5 rounded-full bg-brand-red" />
          <span className="absolute right-6 top-5 h-2 w-2 rounded-full bg-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
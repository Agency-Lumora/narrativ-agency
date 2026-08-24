"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Global Tech Launch",
    category: "Paid Ads & Content",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400",
    stats: "+340% ROI",
  },
  {
    id: 2,
    title: "Lifestyle Brand Revamp",
    category: "Social Media Management",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1400",
    stats: "2.5M Views",
  },
  {
    id: 3,
    title: "B2B SaaS Growth",
    category: "LinkedIn & Ghostwriting",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400",
    stats: "15k New Leads",
  },
  {
    id: 4,
    title: "E-Commerce Domination",
    category: "Web Dev & Copywriting",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1400",
    stats: "4x Conversion",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="bg-white text-black pt-12 md:pt-16 pb-16 md:pb-20"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">

        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-10 md:mb-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <p className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
              Case Studies
            </p>

            <h2 className="font-heading font-bold uppercase tracking-tighter leading-[0.9] text-[40px] md:text-[56px] lg:text-[68px]">
              Selected
              <br />
              Narratives
              <span className="text-brand-red">.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:col-start-9 text-sm md:text-base leading-relaxed text-black/60 max-w-md pb-1"
          >
            We don't just create campaigns; we engineer outcomes. Here's what
            happens when strategy meets execution.
          </motion.p>
        </div>

        {/* PROJECT COMPOSITION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-y-12">

          {projects.map((project, index) => {
            return (
              <motion.article
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`
                  group
                  cursor-pointer
                  ${index === 0 ? "md:col-span-5 md:col-start-2" : ""}
                  ${index === 1 ? "md:col-span-5 md:col-start-8 md:mt-10" : ""}
                  ${index === 2 ? "md:col-span-5 md:col-start-2 md:-mt-2" : ""}
                  ${index === 3 ? "md:col-span-5 md:col-start-8 md:mt-8" : ""}
                `}
              >

                {/* IMAGE */}
                <div
                  className="
                    relative
                    w-full
                    aspect-[1.5/1]
                    overflow-hidden
                    rounded-2xl
                    bg-gray-100
                    shadow-[0_8px_30px_-10px_rgba(0,0,0,0.15)]
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.2)]
                  "
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="
                      object-cover
                      grayscale
                      transition-all
                      duration-700
                      group-hover:scale-105
                      group-hover:grayscale-0
                    "
                  />

                  {/* HOVER */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/10
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        bg-white
                        text-black
                        px-5
                        py-2.5
                        rounded-full
                        font-bold
                        text-xs
                        tracking-widest
                        uppercase
                        flex
                        items-center
                        gap-2
                        translate-y-3
                        group-hover:translate-y-0
                        transition-transform
                        duration-300
                      "
                    >
                      View Case Study
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>

                {/* PROJECT INFO */}
                <div className="flex justify-between items-start mt-4 px-1">

                  <div className="min-w-0 pr-4">
                    <h3
                      className="
                        font-heading
                        text-lg
                        md:text-xl
                        lg:text-2xl
                        font-bold
                        leading-tight
                        group-hover:text-brand-red
                        transition-colors
                        duration-300
                      "
                    >
                      {project.title}
                    </h3>

                    <p className="text-black/50 text-xs md:text-sm mt-1">
                      {project.category}
                    </p>
                  </div>

                  <span
                    className="
                      shrink-0
                      font-heading
                      text-base
                      md:text-lg
                      font-bold
                      text-brand-red
                      text-right
                    "
                  >
                    {project.stats}
                  </span>

                </div>
              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
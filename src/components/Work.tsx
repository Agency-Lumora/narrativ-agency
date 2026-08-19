"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Global Tech Launch",
    category: "Paid Ads & Content",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    stats: "+340% ROI",
    offset: false,
  },
  {
    id: 2,
    title: "Lifestyle Brand Revamp",
    category: "Social Media Management",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    stats: "2.5M Views",
    offset: true,
  },
  {
    id: 3,
    title: "B2B SaaS Growth",
    category: "LinkedIn & Ghostwriting",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    stats: "15k New Leads",
    offset: false,
  },
  {
    id: 4,
    title: "E-Commerce Domination",
    category: "Web Dev & Copywriting",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000",
    stats: "4x Conversion",
    offset: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-40 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <p className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">Case Studies</p>
             <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter font-heading leading-[1]">
               Selected <br /> Narratives<span className="text-brand-red">.</span>
             </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-lg max-w-sm text-black/60 font-medium mt-6 md:mt-0 md:pb-2"
          >
            We don't just create campaigns; we engineer outcomes. Here's what happens when strategy meets execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-16 md:gap-y-24 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`group cursor-pointer flex flex-col p-4 md:p-0 border-[1.5px] border-black/10 md:border-0 rounded-2xl md:rounded-none active:border-black/20 active:translate-y-1 md:active:translate-y-0 md:transition-transform md:duration-500 md:hover:-translate-y-4 bg-white transition-all duration-300 ${project.offset ? "md:mt-20" : ""}`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-100 w-full aspect-[4/3] mb-4 md:mb-6 rounded-xl md:rounded-2xl md:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] md:group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 md:filter md:grayscale group-hover:scale-105 group-hover:grayscale-0"
                />
                
                {/* Desktop Hover Overlay Button */}
                <div className="hidden md:flex absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center pointer-events-none">
                    <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Case Study <ArrowUpRight size={18} />
                    </div>
                </div>
              </div>
              
              {/* Text Details */}
              <div className="flex justify-between items-start px-1 md:px-2">
                <div className="flex flex-col">
                  <h3 className="font-heading text-xl md:text-3xl font-bold mb-1 group-hover:text-brand-red transition-colors duration-300">
                      {project.title}
                  </h3>
                  <p className="text-black/50 font-medium text-sm md:text-base">{project.category}</p>
                </div>
                <div className="text-right shrink-0 ml-2 md:ml-4">
                  <span className="block font-heading text-xl md:text-2xl font-bold text-brand-red">
                      {project.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

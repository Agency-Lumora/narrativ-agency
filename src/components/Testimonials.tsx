"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote: "narrativ didn't just grow our accounts. They rebuilt how our audience sees us.",
    author: "Sarah J.",
    role: "CMO, TechFlow",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    quote: "Their creative direction is unmatched. We saw a 3x increase in engagement within a month.",
    author: "Marcus T.",
    role: "Founder, LuxeLife",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                "{t.quote}"
              </h3>
              <div className="flex items-center gap-6 mt-auto">
                <div className="w-16 h-16 rounded-full overflow-hidden relative">
                  <Image src={t.image} alt={t.author} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-bold text-xl">{t.author}</p>
                  <p className="text-black/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

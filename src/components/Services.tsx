"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "01",
    name: "Social Media Management",
    description: "Building engaged communities through strategic, aesthetic, and trend-aware content.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "02",
    name: "Paid Ads (Performance)",
    description: "Data-driven campaigns across Meta and Google engineered for maximum ROAS.",
    longDescription: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://images.unsplash.com/photo-1432888117281-56c63a620b79?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "03",
    name: "Content Creation",
    description: "High-end video, photography, and graphic design that stops the scroll.",
    longDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "04",
    name: "LinkedIn & Ghostwriting",
    description: "Elevating founders and C-suites into industry authorities through powerful writing.",
    longDescription: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "05",
    name: "Web Development",
    description: "Immersive, conversion-optimized digital experiences tailored to your brand.",
    longDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
  },
];

function ServiceRow({ service }: { service: typeof services[0] }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={rowRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      className="group border-b border-white/20 py-6 md:py-8 cursor-pointer flex flex-col justify-center relative bg-black"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 relative z-20 pointer-events-none w-full">
        <h3 className={`font-heading text-xl md:text-2xl lg:text-4xl font-bold transition-colors duration-300 mix-blend-difference ${isExpanded ? 'text-brand-red' : 'group-hover:text-brand-red'}`}>
          {service.name}
        </h3>
        <span className={`text-xs md:text-xs lg:text-sm font-medium max-w-sm text-left md:text-right mix-blend-difference transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
          {service.description}
        </span>
      </div>

      {/* Expandable Content (Mobile & Desktop) */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginTop: isExpanded ? 16 : 0
        }}
        className="overflow-hidden w-full relative"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 md:pl-[30%]">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed md:max-w-2xl">
            {service.longDescription}
          </p>
          <button className="bg-brand-red text-white px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-max shrink-0">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Desktop Floating Image following cursor */}
      <motion.div
        animate={{
          opacity: isHovered && !isExpanded ? 1 : 0,
          scale: isHovered && !isExpanded ? 1 : 0.8,
          x: mousePos.x - 200, // half of 400px width
          y: mousePos.y - 125, // half of 250px height
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
        className="absolute top-0 left-0 pointer-events-none z-0 w-[400px] h-[250px] rounded-xl overflow-hidden hidden md:block"
      >
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-all duration-300"
        />
      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-red rounded-full"></span>
            <p className="text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm">
              Our Arsenal
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-heading leading-none">
            What we do best<span className="text-brand-red">.</span>
          </h2>
        </motion.div>

        <div className="relative border-t border-white/20">
          {services.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

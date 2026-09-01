"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    name: "Social Media",
    shortName: "Social Media",
    description:
      "Building engaged communities through strategic, aesthetic, and trend-aware content that drives real conversations.",
    position: { x: 22, y: 20 },
    path: "M 34 20 C 39 20, 42 28, 46 42",
    side: "left",
  },
  {
    id: "02",
    name: "Content Creation",
    shortName: "Content",
    description:
      "High-end video, photography, and graphic design that stops the scroll and demands attention.",
    position: { x: 17, y: 38 },
    path: "M 29 38 C 36 39, 41 43, 46 47",
    side: "left",
  },
  {
    id: "03",
    name: "Web Development",
    shortName: "Web Dev",
    description:
      "Immersive, conversion-optimized digital experiences tailored to amplify your brand.",
    position: { x: 17, y: 62 },
    path: "M 29 62 C 36 61, 41 57, 46 53",
    side: "left",
  },
  {
    id: "04",
    name: "Brand Strategy",
    shortName: "Strategy",
    description:
      "Comprehensive brand positioning and narrative development that cuts through the noise.",
    position: { x: 22, y: 80 },
    path: "M 34 80 C 39 80, 42 72, 46 58",
    side: "left",
  },
  {
    id: "05",
    name: "Paid Ads",
    shortName: "Paid Ads",
    description:
      "Data-driven campaigns across Meta and Google engineered for maximum ROAS and scalable growth.",
    position: { x: 78, y: 20 },
    path: "M 54 42 C 58 28, 61 20, 66 20",
    side: "right",
  },
  {
    id: "06",
    name: "LinkedIn & Ghostwriting",
    shortName: "Ghostwriting",
    description:
      "Elevating founders and C-suites into industry authorities through powerful, authentic writing.",
    position: { x: 83, y: 38 },
    path: "M 54 47 C 59 43, 64 39, 71 38",
    side: "right",
  },
  {
    id: "07",
    name: "Creative Direction",
    shortName: "Creative",
    description:
      "Visionary creative leadership that transforms brands into cultural movements.",
    position: { x: 83, y: 62 },
    path: "M 54 53 C 59 57, 64 61, 71 62",
    side: "right",
  },
  {
    id: "08",
    name: "Analytics & Insights",
    shortName: "Analytics",
    description:
      "Data-driven insights that inform strategy and optimize performance across all channels.",
    position: { x: 78, y: 80 },
    path: "M 54 58 C 58 72, 61 80, 66 80",
    side: "right",
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black pt-6 pb-8 text-white md:pt-8 md:pb-10"
    >
      <div className="container mx-auto max-w-[1200px] px-6 md:px-12">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-red md:text-sm">
            Services
          </p>

          <h2 className="mb-4 font-heading text-4xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl">
            What We Do Best
            <span className="text-brand-red">.</span>
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-white/60">
            Focused services where we've built real understanding beyond
            briefs, decks, and discovery calls.
          </p>
        </motion.div>

        {/* =========================================
            DESKTOP NETWORK
        ========================================= */}

        <div className="relative mx-auto mt-4 hidden h-[550px] w-full max-w-5xl md:block">

          {/* =======================================
              BACKGROUND ATMOSPHERE
          ======================================== */}

          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/[0.035] blur-[80px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =======================================
              SVG CONNECTION NETWORK
          ======================================== */}

          <svg
            className="pointer-events-none absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>

              {/* Base gradient */}

              <linearGradient
                id="serviceLineBase"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="rgba(239,68,68,0)"
                />

                <stop
                  offset="50%"
                  stopColor="rgba(239,68,68,0.32)"
                />

                <stop
                  offset="100%"
                  stopColor="rgba(239,68,68,0)"
                />
              </linearGradient>

              {/* Animated flowing gradient */}

              {services.map((service) => (
                <linearGradient
                  key={`gradient-${service.id}`}
                  id={`flow-${service.id}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="-20%"
                    stopColor="rgba(239,68,68,0)"
                  >
                    <animate
                      attributeName="offset"
                      values="-20%;80%"
                      dur={`${2.5 + Number(service.id) * 0.15}s`}
                      repeatCount="indefinite"
                    />
                  </stop>

                  <stop
                    offset="0%"
                    stopColor="rgba(239,68,68,0)"
                  >
                    <animate
                      attributeName="offset"
                      values="0%;100%"
                      dur={`${2.5 + Number(service.id) * 0.15}s`}
                      repeatCount="indefinite"
                    />
                  </stop>

                  <stop
                    offset="12%"
                    stopColor="rgba(255,40,40,0.95)"
                  >
                    <animate
                      attributeName="offset"
                      values="12%;112%"
                      dur={`${2.5 + Number(service.id) * 0.15}s`}
                      repeatCount="indefinite"
                    />
                  </stop>

                  <stop
                    offset="24%"
                    stopColor="rgba(239,68,68,0)"
                  >
                    <animate
                      attributeName="offset"
                      values="24%;124%"
                      dur={`${2.5 + Number(service.id) * 0.15}s`}
                      repeatCount="indefinite"
                    />
                  </stop>

                  <stop
                    offset="100%"
                    stopColor="rgba(239,68,68,0)"
                  />
                </linearGradient>
              ))}
            </defs>

            {services.map((service, index) => {
              const isActive = hoveredService === service.id;

              return (
                <g key={service.id}>

                  {/* -----------------------------------
                      STATIC BASE LINE
                  ----------------------------------- */}

                  <motion.path
                    d={service.path}
                    fill="none"
                    stroke={
                      isActive
                        ? "rgba(239,68,68,0.42)"
                        : "rgba(255,255,255,0.12)"
                    }
                    strokeWidth={isActive ? 1.8 : 1}
                    vectorEffect="non-scaling-stroke"
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      pathLength: {
                        duration: 1.2,
                        delay: index * 0.08,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 0.5,
                        delay: index * 0.08,
                      },
                    }}
                  />

                  {/* -----------------------------------
                      FLOWING RED ENERGY
                  ----------------------------------- */}

                  <motion.path
                    d={service.path}
                    fill="none"
                    stroke={`url(#flow-${service.id})`}
                    strokeWidth={isActive ? 3 : 2}
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    animate={{
                      opacity: isActive ? 1 : 0.8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    style={{
                      filter:
                        "drop-shadow(0 0 4px rgba(239,68,68,0.45))",
                    }}
                  />

                  {/* -----------------------------------
                      SMALL FLOW PARTICLE
                  ----------------------------------- */}

                  <circle
                    r={isActive ? "0.7" : "0.45"}
                    fill="#ef4444"
                    opacity={isActive ? "0.9" : "0.55"}
                  >
                    <animateMotion
                      dur={`${3 + index * 0.2}s`}
                      repeatCount="indefinite"
                      path={service.path}
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* =========================================
              CENTRAL NARRATIV HUB
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >

            {/* Outer atmospheric glow */}

            <motion.div
              className="absolute -inset-12 rounded-full bg-brand-red/[0.06] blur-3xl"
              animate={{
                scale: hoveredService
                  ? [1, 1.2, 1]
                  : [1, 1.08, 1],
                opacity: hoveredService
                  ? [0.5, 0.8, 0.5]
                  : [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Pulse ring */}

            <motion.div
              className="absolute -inset-4 rounded-full border border-brand-red/20"
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.45, 0, 0.45],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main hub */}

            <motion.div
              className="
                relative
                group
                flex
                h-[140px]
                w-[140px]
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black
                shadow-[0_0_50px_rgba(239,68,68,0.08)]
                lg:h-[160px]
                lg:w-[160px]
              "
              whileHover={{
                scale: 1.04,
                borderColor: "rgba(239,68,68,0.55)",
                backgroundColor: "white",
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <p className="font-heading text-xl font-bold tracking-wide text-white lg:text-2xl transition-colors duration-300 group-hover:text-black">
                narrativ
                <span className="text-brand-red">.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* =========================================
              SERVICE NODES
          ========================================= */}

          {services.map((service, index) => {
            const isActive = hoveredService === service.id;

            return (
              <div
                key={service.id}
                className="absolute z-20"
                style={{
                  top: `${service.position.y}%`,
                  left: `${service.position.x}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.08,
                    ease: "easeOut",
                  }}
                  onMouseEnter={() =>
                    setHoveredService(service.id)
                  }
                  onMouseLeave={() =>
                    setHoveredService(null)
                  }
                  className="relative cursor-pointer"
                >

                  {/* =================================
                      FLOATING MOTION
                  ================================== */}

                  <motion.div
                    animate={{
                      y: [0, -3, 0, 2, 0],
                      x: [0, 1.5, 0, -1.5, 0],
                      rotate: [0, 0.25, 0, -0.25, 0],
                    }}
                    transition={{
                      duration: 4 + (index % 3) * 0.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.25,
                    }}
                  >

                    {/* =================================
                        NODE GLOW
                    ================================== */}

                    <motion.div
                      className="absolute -inset-[2px] rounded-full bg-brand-red/30 blur-md"
                      animate={{
                        opacity: isActive ? 0.8 : 0,
                        scale: isActive ? 1.08 : 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    />

                    {/* =================================
                        MAIN NODE
                    ================================== */}

                    <motion.div
                      whileHover={{
                        scale: 1.06,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className={`
                        relative
                        flex
                        items-center
                        gap-2.5
                        rounded-full
                        border
                        bg-black/85
                        px-5
                        py-2.5
                        backdrop-blur-md
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              border-brand-red/80
                              shadow-[0_0_30px_rgba(239,68,68,0.25)]
                            `
                            : `
                              border-white/20
                              shadow-[0_8px_30px_rgba(0,0,0,0.4)]
                            `
                        }
                      `}
                    >

                      {/* =================================
                          RED STATUS DOT
                      ================================== */}

                      <motion.span
                        className="relative flex h-[6px] w-[6px] shrink-0"
                        animate={{
                          scale: isActive
                            ? [1, 1.5, 1]
                            : [1, 1.15, 1],
                          opacity: isActive
                            ? [0.8, 1, 0.8]
                            : [0.45, 0.7, 0.45],
                        }}
                        transition={{
                          duration: isActive ? 0.8 : 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="absolute inset-0 rounded-full bg-brand-red" />

                        {isActive && (
                          <span className="absolute -inset-1 rounded-full bg-brand-red/30 blur-[2px]" />
                        )}
                      </motion.span>

                      {/* =================================
                          SERVICE NAME
                      ================================== */}

                      <span
                        className={`
                          whitespace-nowrap
                          text-sm
                          font-medium
                          tracking-wide
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-white"
                              : "text-white/80"
                          }
                        `}
                      >
                        {service.shortName}
                      </span>

                      {/* =================================
                          HOVER ARROW
                      ================================== */}

                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{
                              opacity: 0,
                              x: -5,
                              width: 0,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              width: "auto",
                            }}
                            exit={{
                              opacity: 0,
                              x: -5,
                              width: 0,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="overflow-hidden text-xs text-brand-red"
                          >
                            ↗
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* =================================
                        HOVER DESCRIPTION
                    ================================== */}

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 6,
                            scale: 0.96,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            y: 6,
                            scale: 0.96,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="
                            absolute
                            left-1/2
                            top-full
                            z-50
                            mt-3
                            w-52
                            -translate-x-1/2
                            rounded-xl
                            border
                            border-white/10
                            bg-black/95
                            px-4
                            py-3
                            text-center
                            shadow-[0_15px_50px_rgba(0,0,0,0.6)]
                            backdrop-blur-xl
                          "
                        >
                          <p className="text-[11px] leading-relaxed text-white/55">
                            {service.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* =========================================
            MOBILE
        ========================================= */}

        <div className="relative mx-auto mt-4 flex w-full max-w-sm flex-col items-center gap-5 md:hidden">

          {/* Mobile hub */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            className="relative z-10 mb-2 flex items-center justify-center"
          >
            <motion.div
              className="absolute inset-0 scale-125 rounded-full bg-brand-red/10 blur-xl"
              animate={{
                scale: [1.2, 1.35, 1.2],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <motion.div 
              className="relative group flex h-[110px] w-[110px] items-center justify-center rounded-full border border-white/20 bg-black"
              whileHover={{
                backgroundColor: "white",
                borderColor: "rgba(239,68,68,0.55)",
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <p className="font-heading text-lg font-bold tracking-wide text-white transition-colors duration-300 group-hover:text-black">
                narrativ
                <span className="text-brand-red">.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Mobile services */}

          <div className="relative z-20 flex w-full flex-col gap-3">

            {services.map((service, index) => {
              const isActive =
                hoveredService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  onClick={() =>
                    setHoveredService(
                      isActive ? null : service.id
                    )
                  }
                  className="w-full"
                >

                  <motion.div
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`
                      relative
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2.5
                      rounded-full
                      bg-black/70
                      px-5
                      py-3.5
                      text-center
                      backdrop-blur-md
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            border
                            border-brand-red/70
                            text-white
                            shadow-[0_0_20px_rgba(239,68,68,0.18)]
                          `
                          : `
                            border
                            border-white/20
                            text-white/80
                          `
                      }
                    `}
                  >
                    <motion.span
                      className="h-[6px] w-[6px] rounded-full bg-brand-red"
                      animate={{
                        scale: isActive
                          ? [1, 1.5, 1]
                          : 1,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: isActive ? Infinity : 0,
                      }}
                    />

                    <span className="text-sm font-medium tracking-wide">
                      {service.name}
                    </span>

                    {isActive && (
                      <span className="text-xs text-brand-red">
                        ↗
                      </span>
                    )}
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 py-3 text-center text-xs leading-relaxed text-white/60">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
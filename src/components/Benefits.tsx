"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const doCards = [
  {
    id: "01",
    title: "Strategy First",
    description:
      "We understand the business, audience, positioning and goals before we start producing anything.",
  },
  {
    id: "02",
    title: "Point of View",
    description:
      "We don't make content to fill a calendar. Every idea has a reason to exist.",
  },
  {
    id: "03",
    title: "Business-Aligned",
    description:
      "Creative is tied to outcomes that matter — awareness, demand, trust, leads and growth.",
  },
  {
    id: "04",
    title: "Full Ownership",
    description:
      "Strategy, creative, content and execution work as one system instead of disconnected deliverables.",
  },
  {
    id: "05",
    title: "Built For Your Brand",
    description:
      "No recycled templates or one-size-fits-all playbooks. Your market, voice and audience shape the work.",
  },
];

const dontCards = [
  {
    id: "01",
    title: "No Vanity Marketing",
    description:
      "Likes, impressions and follower counts aren't the finish line. We focus on signals that actually matter.",
  },
  {
    id: "02",
    title: "No Copy-Paste Strategies",
    description:
      "Your business isn't a template. Neither should your marketing be.",
  },
  {
    id: "03",
    title: "No Content For Content's Sake",
    description:
      "We don't produce noise just to keep a content calendar full.",
  },
  {
    id: "04",
    title: "No Agency Silos",
    description:
      "You shouldn't have to coordinate five different teams to get one idea executed properly.",
  },
  {
    id: "05",
    title: "No Short-Term Thinking",
    description:
      "We build positioning, creative and systems that compound instead of chasing the next trend.",
  },
];

const BenefitCard = ({
  card,
  index,
}: {
  card: (typeof doCards)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative
        h-[175px] md:h-[185px]
        rounded-[16px]
        border
        bg-[#fafafa]
        overflow-hidden
        transition-all duration-400
        flex flex-col
        p-6 md:p-7
        ${
          isHovered
            ? "border-brand-red/30 -translate-y-1 shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
            : "border-black/[0.08]"
        }
      `}
    >
      {/* Subtle hover wash */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-br
          from-brand-red/[0.035]
          to-transparent
          pointer-events-none
          transition-opacity duration-500
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Corner marker */}
      <div className="absolute top-7 left-7">
        <div
          className={`
            w-[8px] h-[8px] rounded-[1px]
            transition-all duration-400
            ${
              isHovered
                ? "bg-brand-red scale-110"
                : "bg-black/15"
            }
          `}
        />

        <div
          className={`
            absolute top-0 left-[13px]
            w-[18px] h-px
            transition-all duration-400
            ${
              isHovered
                ? "bg-brand-red/60"
                : "bg-black/15"
            }
          `}
        />

        <div
          className={`
            absolute top-[13px] left-0
            w-px h-[18px]
            transition-all duration-400
            ${
              isHovered
                ? "bg-brand-red/60"
                : "bg-black/15"
            }
          `}
        />
      </div>

      {/* Number */}
      <span
        className={`
          absolute top-7 right-7
          text-[10px] md:text-[11px]
          font-medium
          tracking-[0.18em]
          transition-colors duration-300
          ${
            isHovered
              ? "text-brand-red"
              : "text-black/30"
          }
        `}
      >
        {card.id}
      </span>

      {/* Content */}
      <div className="relative z-10 mt-auto">
        <h3
          className={`
            font-heading
            font-semibold
            text-[19px] md:text-[21px]
            tracking-[-0.025em]
            leading-tight
            mb-3
            transition-colors duration-300
            ${
              isHovered
                ? "text-black"
                : "text-black/90"
            }
          `}
        >
          {card.title}
        </h3>

        <p
          className={`
            text-[13px] md:text-[14px]
            leading-[1.55]
            max-w-[95%]
            transition-colors duration-300
            ${
              isHovered
                ? "text-black/65"
                : "text-black/50"
            }
          `}
        >
          {card.description}
        </p>
      </div>

      {/* Animated red line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[2px]
          bg-brand-red
          origin-left
        "
      />
    </motion.div>
  );
};

export default function Benefits() {
  const [isDo, setIsDo] = useState(true);

  const currentCards = isDo ? doCards : dontCards;

  return (
    <section
      id="benefits"
      className="
        relative
        bg-white
        text-black
        overflow-hidden
        py-14 md:py-16
      "
    >
      {/* Decorative red dots */}
      <div className="absolute left-[7%] top-[32%] w-[9px] h-[9px] rounded-full bg-brand-red opacity-90" />
      <div className="absolute left-[6%] top-[70%] w-[7px] h-[7px] rounded-full bg-brand-red/80" />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1180px]
          px-6 md:px-8
        "
      >
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="
              text-brand-red
              font-bold
              tracking-[0.2em]
              uppercase
              text-[11px] md:text-xs
              mb-4
            "
          >
            Benefits
          </motion.p>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="
              font-heading
              font-semibold
              tracking-[-0.055em]
              leading-[0.95]
              text-[42px]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[60px]
            "
          >
            The Way We Work
            <span className="text-brand-red">.</span>
          </motion.h2>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="
              inline-flex
              items-center
              mt-7
              p-[3px]
              rounded-full
              border border-black/[0.10]
              bg-black/[0.025]
            "
          >
            <button
              onClick={() => setIsDo(true)}
              aria-pressed={isDo}
              className={`
                relative
                min-w-[86px]
                px-5
                py-2
                rounded-full
                text-[13px] md:text-[14px]
                font-semibold
                tracking-wide
                transition-all duration-300
                ${
                  isDo
                    ? "text-white"
                    : "text-black/35 hover:text-black/60"
                }
              `}
            >
              {isDo && (
                <motion.div
                  layoutId="benefits-toggle"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-brand-red
                  "
                  transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.5,
                  }}
                />
              )}

              <span className="relative z-10">
                DO
              </span>
            </button>

            <button
              onClick={() => setIsDo(false)}
              aria-pressed={!isDo}
              className={`
                relative
                min-w-[86px]
                px-5
                py-2
                rounded-full
                text-[13px] md:text-[14px]
                font-semibold
                tracking-wide
                transition-all duration-300
                ${
                  !isDo
                    ? "text-white"
                    : "text-black/35 hover:text-black/60"
                }
              `}
            >
              {!isDo && (
                <motion.div
                  layoutId="benefits-toggle"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-brand-red
                  "
                  transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.5,
                  }}
                />
              )}

              <span className="relative z-10">
                DON'T
              </span>
            </button>
          </motion.div>

          {/* Subheading */}
          <div className="mt-5 h-[24px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={isDo ? "do" : "dont"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="
                  text-[13px]
                  md:text-[14px]
                  text-black/50
                  leading-relaxed
                "
              >
                {isDo
                  ? "A marketing partner that understands the business behind the brand."
                  : "A marketing partner that understands what not to do."
                }
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            md:gap-5
          "
        >
          <AnimatePresence mode="wait">
            {currentCards.map((card, index) => (
              <BenefitCard
                key={`${isDo ? "do" : "dont"}-${card.id}`}
                card={card}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
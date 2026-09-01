"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./OtherNarrativScene.module.css";
import {
  DESKTOP_PATH,
  DESKTOP_VIEWBOX,
  MOBILE_PATH,
  MOBILE_VIEWBOX,
} from "@/components/otherNarrativPaths";

const ease = [0.76, 0, 0.24, 1] as const;

// Fixed mementos left behind once the journey completes. Positions and
// captions intentionally mirror the polaroids revealed along the way in
// OtherNarrativJourney so the final resting composition matches exactly.
export const POLAROIDS = [
  {
    src: "/media/other-narrativ/editorial-01.jpg",
    caption: "the first idea",
    left: "6%",
    top: "32%",
    rotation: -6,
  },
  {
    src: "/media/other-narrativ/editorial-03.jpg",
    caption: "the team",
    left: "80%",
    top: "32%",
    rotation: 4,
  },
  {
    src: "/media/other-narrativ/editorial-04.jpg",
    caption: "late nights",
    left: "63%",
    top: "42%",
    rotation: -3,
  },
  {
    src: "/media/other-narrativ/editorial-02.jpg",
    caption: "first conversation",
    left: "78%",
    top: "58%",
    rotation: 5,
  },
];

interface OtherNarrativSceneProps {
  /** Animates the title/chapter/metadata group in (used right after the journey settles). */
  animated?: boolean;
  decorative?: boolean;
}

/**
 * The settled "the other narrativ." composition: the fully-drawn red curve,
 * the resting polaroids, and the editorial title block. Rendered inside
 * <OtherNarrativStage> both on the real destination page and, briefly, as
 * the closing beat of the transition overlay.
 */
export default function OtherNarrativScene({
  animated = false,
  decorative = false,
}: OtherNarrativSceneProps) {
  return (
    <>
      <motion.div
        className={styles.chapter}
        initial={animated ? { opacity: 0, y: 12 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: animated ? 0.18 : 0, duration: animated ? 0.48 : 0, ease }}
      >
        <span>Chapter 04</span>
        <strong>The first conversation</strong>
      </motion.div>

      <motion.div
        className={styles.metadata}
        initial={animated ? { opacity: 0, x: 14 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: animated ? 0.3 : 0, duration: animated ? 0.42 : 0, ease }}
      >
        <span>Journey complete</span>
        <span>Field notes / 004</span>
      </motion.div>

      <svg
        className={`${styles.curve} ${styles.desktopCurve}`}
        viewBox={DESKTOP_VIEWBOX}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={DESKTOP_PATH} className={styles.curveShadow} />
        <path d={DESKTOP_PATH} className={styles.curveStroke} />
      </svg>

      <svg
        className={`${styles.curve} ${styles.mobileCurve}`}
        viewBox={MOBILE_VIEWBOX}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={MOBILE_PATH} className={styles.curveShadow} />
        <path d={MOBILE_PATH} className={styles.curveStroke} />
      </svg>

      <motion.div
        className={styles.titleBlock}
        initial={animated ? { opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" } : false}
        animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
        transition={{ delay: animated ? 0.42 : 0, duration: animated ? 0.62 : 0, ease }}
      >
        <p className={styles.eyebrow}>An editorial series by narrativ.</p>
        <h1 className={styles.title}>
          the other
          <br />
          narrativ<span>.</span>
        </h1>
        <p className={styles.supporting}>Stories beyond the brief.</p>
      </motion.div>

      <motion.div
        className={styles.frameIndex}
        initial={animated ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: animated ? 0.72 : 0, duration: animated ? 0.36 : 0 }}
      >
        <span>01</span>
        <i />
        <span>06</span>
      </motion.div>

      <div className={styles.polaroidLayer}>
        {POLAROIDS.map((polaroid) => (
          <div
            key={polaroid.caption}
            className={styles.polaroid}
            style={{
              left: polaroid.left,
              top: polaroid.top,
              transform: `rotate(${polaroid.rotation}deg)`,
            }}
          >
            <div className={styles.polaroidPhoto}>
              <Image
                src={polaroid.src}
                alt={decorative ? "" : polaroid.caption}
                fill
                sizes="140px"
                className={styles.polaroidImage}
              />
            </div>
            <span className={styles.polaroidCaption}>{polaroid.caption}</span>
          </div>
        ))}
      </div>
    </>
  );
}

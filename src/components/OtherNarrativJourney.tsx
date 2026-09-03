"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import styles from "./OtherNarrativScene.module.css";
import { POLAROIDS } from "@/components/OtherNarrativScene";
import {
  DESKTOP_PATH,
  DESKTOP_VIEWBOX,
  MOBILE_PATH,
  MOBILE_VIEWBOX,
} from "@/components/otherNarrativPaths";

const JOURNEY_DURATION_MS = 4000; // Slower, more cinematic

const CHAPTERS = [
  { label: "Chapter 01", title: "The first idea" },
  { label: "Chapter 02", title: "Late nights" },
  { label: "Chapter 03", title: "The team" },
  { label: "Chapter 04", title: "The first conversation" },
];

// The train reveals each polaroid as it passes its position along the
// track, so the reveal thresholds are spaced across the journey.
// Bottom-to-top: first idea (bottom-right) → late nights → team → conversation (top-left)
const POLAROID_THRESHOLDS = [0.15, 0.42, 0.68, 0.88];

interface TrainPoint {
  x: number;
  y: number;
  angle: number;
}

function pointOnPath(path: SVGPathElement, progress: number): TrainPoint {
  const length = path.getTotalLength();
  const distance = length * progress;
  const point = path.getPointAtLength(distance);
  const ahead = path.getPointAtLength(Math.min(length, distance + 1));
  const angle = (Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180) / Math.PI;
  return { x: point.x, y: point.y, angle };
}

interface TrainProps {
  point: TrainPoint;
  scale: number;
  progress: number;
}

function Train({ point, scale, progress }: TrainProps) {
  return (
    <g
      className={styles.train}
      transform={`translate(${point.x} ${point.y}) rotate(${point.angle}) scale(${scale * 1.2})`}
    >
      {/* White smoke trail - using CSS animation for better visibility */}
      <ellipse
        cx={-160}
        cy={-8}
        rx={110}
        ry={38}
        fill="white"
        opacity={0.75}
        className={styles.smoke1}
      />
      <ellipse
        cx={-100}
        cy={-5}
        rx={80}
        ry={30}
        fill="white"
        opacity={0.65}
        className={styles.smoke2}
      />
      <ellipse
        cx={-50}
        cy={-2}
        rx={55}
        ry={22}
        fill="white"
        opacity={0.55}
        className={styles.smoke3}
      />
      
      {/* Shadow */}
      <ellipse cx={0} cy={30} rx={90} ry={12} className={styles.trainShadow} />
      
      {/* Caboose (last car) */}
      <rect x={-130} y={-12} width={32} height={26} rx={4} className={styles.trainCarBody} />
      <rect x={-124} y={-5} width={8} height={8} rx={1} className={styles.trainWindow} />
      <rect x={-112} y={-5} width={8} height={8} rx={1} className={styles.trainWindow} />
      <circle cx={-122} cy={16} r={3} fill="#222" />
      <circle cx={-106} cy={16} r={3} fill="#222" />
      
      {/* Passenger car 2 */}
      <rect x={-98} y={-14} width={36} height={28} rx={4} className={styles.trainCarBody} />
      <rect x={-92} y={-6} width={9} height={9} rx={1} className={styles.trainWindow} />
      <rect x={-78} y={-6} width={9} height={9} rx={1} className={styles.trainWindow} />
      <circle cx={-90} cy={16} r={3} fill="#222" />
      <circle cx={-70} cy={16} r={3} fill="#222" />
      
      {/* Passenger car 1 */}
      <rect x={-62} y={-16} width={38} height={30} rx={4} className={styles.trainCarBody} />
      <rect x={-56} y={-7} width={10} height={10} rx={1} className={styles.trainWindow} />
      <rect x={-40} y={-7} width={10} height={10} rx={1} className={styles.trainWindow} />
      <circle cx={-54} cy={16} r={3} fill="#222" />
      <circle cx={-32} cy={16} r={3} fill="#222" />
      
      {/* Coal tender */}
      <rect x={-24} y={-14} width={28} height={26} rx={3} fill="#1a1a1a" stroke="#333" strokeWidth="1.5" />
      <path d="M -22 -14 L -20 -20 L -8 -20 L -6 -14 Z" fill="#0a0a0a" />
      <circle cx={-18} cy={14} r={3} fill="#222" />
      <circle cx={-8} cy={14} r={3} fill="#222" />
      
      {/* Locomotive engine */}
      <rect x={4} y={-18} width={44} height={34} rx={5} className={styles.trainCarBody} />
      {/* Boiler */}
      <ellipse cx={26} cy={0} rx={18} ry={16} fill="#141414" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
      {/* Smokestack */}
      <rect x={8} y={-28} width={8} height={12} rx={2} fill="#1a1a1a" stroke="#333" strokeWidth="1" />
      <ellipse cx={12} cy={-28} rx={5} ry={2} fill="#0a0a0a" />
      {/* Cabin */}
      <rect x={32} y={-12} width={14} height={10} rx={1.5} className={styles.trainWindow} />
      {/* Wheels */}
      <circle cx={12} cy={18} r={4} fill="#222" stroke="#ff0000" strokeWidth="1.5" />
      <circle cx={24} cy={18} r={4} fill="#222" stroke="#ff0000" strokeWidth="1.5" />
      <circle cx={36} cy={18} r={4} fill="#222" stroke="#ff0000" strokeWidth="1.5" />
      
      {/* Headlight with glow */}
      <circle cx={48} cy={2} r={5} fill="#ffeb3b" stroke="#ff9800" strokeWidth="1.5" />
      <circle cx={48} cy={2} r={10} fill="#ff0000" opacity={0.4} style={{ filter: "blur(5px)" }} />
    </g>
  );
}

interface OtherNarrativJourneyProps {
  onComplete: () => void;
}

/**
 * The train-on-track journey: a small train travels the red curve while
 * polaroids pop in behind it and the chapter label advances. Ends by
 * calling onComplete, at which point the parent transition swaps this out
 * for the settled <OtherNarrativScene> content on the same backdrop/curve.
 */
export default function OtherNarrativJourney({ onComplete }: OtherNarrativJourneyProps) {
  const desktopPathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  const [progress, setProgress] = useState(0);
  const [desktopPoint, setDesktopPoint] = useState<TrainPoint>({ x: -120, y: 780, angle: 6 });
  const [mobilePoint, setMobilePoint] = useState<TrainPoint>({ x: -70, y: 820, angle: 12 });

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useAnimationFrame((time) => {
    if (completedRef.current) return;

    if (startTimeRef.current === null) {
      startTimeRef.current = time;
    }

    const elapsed = time - startTimeRef.current;
    const next = Math.min(elapsed / JOURNEY_DURATION_MS, 1);

    setProgress(next);

    if (desktopPathRef.current) {
      setDesktopPoint(pointOnPath(desktopPathRef.current, next));
    }

    if (mobilePathRef.current) {
      setMobilePoint(pointOnPath(mobilePathRef.current, next));
    }

    if (next >= 1 && !completedRef.current) {
      completedRef.current = true;
      onCompleteRef.current();
    }
  });

  // Sync chapter with card reveals - show chapter only when corresponding card appears
  let chapterIndex = 0;
  for (let i = 0; i < POLAROID_THRESHOLDS.length; i++) {
    if (progress >= POLAROID_THRESHOLDS[i]) {
      chapterIndex = i;
    }
  }
  const chapter = CHAPTERS[chapterIndex];
  const showChapter = progress >= POLAROID_THRESHOLDS[0]; // Show chapter only after first card

  return (
    <>
      <svg
        className={`${styles.curve} ${styles.desktopCurve}`}
        viewBox={DESKTOP_VIEWBOX}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path d={DESKTOP_PATH} className={styles.curveShadow} style={{ pathLength: progress }} />
        <motion.path
          ref={desktopPathRef}
          d={DESKTOP_PATH}
          className={styles.curveStroke}
          style={{ pathLength: progress }}
        />
        <Train point={desktopPoint} scale={1} progress={progress} />
      </svg>

      <svg
        className={`${styles.curve} ${styles.mobileCurve}`}
        viewBox={MOBILE_VIEWBOX}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path d={MOBILE_PATH} className={styles.curveShadow} style={{ pathLength: progress }} />
        <motion.path
          ref={mobilePathRef}
          d={MOBILE_PATH}
          className={styles.curveStroke}
          style={{ pathLength: progress }}
        />
        <Train point={mobilePoint} scale={0.62} progress={progress} />
      </svg>

      <div className={styles.polaroidLayer}>
        {POLAROIDS.map((polaroid, index) => (
          <motion.div
            key={polaroid.caption}
            className={styles.polaroid}
            data-polaroid-index={index}
            style={{ left: polaroid.left, top: polaroid.top }}
            initial={{ opacity: 0, scale: 0.82, y: 16, rotate: polaroid.rotation }}
            animate={
              progress >= POLAROID_THRESHOLDS[index]
                ? { opacity: 1, scale: 1, y: 0, rotate: polaroid.rotation }
                : { opacity: 0, scale: 0.82, y: 16, rotate: polaroid.rotation }
            }
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className={styles.polaroidPhoto}>
              <Image src={polaroid.src} alt="" fill sizes="140px" className={styles.polaroidImage} />
            </div>
            <span className={styles.polaroidCaption}>{polaroid.caption}</span>
          </motion.div>
        ))}
      </div>

      {showChapter && (
        <motion.div
          className={styles.chapter}
          key={chapter.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          <span>{chapter.label}</span>
          <strong>{chapter.title}</strong>
        </motion.div>
      )}

      {/* Show title only after last card appears */}
      {progress >= POLAROID_THRESHOLDS[POLAROID_THRESHOLDS.length - 1] && (
        <motion.div
          className={`${styles.titleBlock} ${styles.journeyTitleBlock}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <h1 className={styles.journeyTitle}>
            the other
            <br />
            narrativ<span className={styles.titleDot}>.</span>
          </h1>
          <p className={styles.journeySubtitle}>Stories beyond the brief.</p>
        </motion.div>
      )}

      <div className={styles.progressBar}>
        <div className={styles.progressTrack}>
          <motion.div className={styles.progressFill} style={{ scaleX: progress }} />
        </div>
        <span className={styles.progressLabel}>Transitioning to destination</span>
      </div>
    </>
  );
}

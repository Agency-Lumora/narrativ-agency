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

const JOURNEY_DURATION_MS = 2400;

const CHAPTERS = [
  { label: "Chapter 01", title: "The first idea" },
  { label: "Chapter 02", title: "The team" },
  { label: "Chapter 03", title: "Late nights" },
  { label: "Chapter 04", title: "The first conversation" },
];

// The train reveals each polaroid as it passes its position along the
// track, so the reveal thresholds are spaced across the journey.
const POLAROID_THRESHOLDS = [0.16, 0.42, 0.66, 0.86];

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
}

function Train({ point, scale }: TrainProps) {
  return (
    <g
      className={styles.train}
      transform={`translate(${point.x} ${point.y}) rotate(${point.angle}) scale(${scale})`}
    >
      <ellipse cx={-8} cy={22} rx={40} ry={7} className={styles.trainShadow} />
      {/* trailing car */}
      <rect x={-52} y={-16} width={36} height={30} rx={5} className={styles.trainCarBody} />
      <rect x={-45} y={-8} width={10} height={10} rx={1.5} className={styles.trainWindow} />
      <rect x={-30} y={-8} width={10} height={10} rx={1.5} className={styles.trainWindow} />
      {/* leading car */}
      <rect x={-16} y={-20} width={42} height={38} rx={6} className={styles.trainCarBody} />
      <rect x={-7} y={-10} width={11} height={11} rx={1.5} className={styles.trainWindow} />
      <rect x={10} y={-10} width={11} height={11} rx={1.5} className={styles.trainWindow} />
      {/* headlight beacon */}
      <circle cx={28} cy={4} r={5} className={styles.trainBeacon} />
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
  const [desktopPoint, setDesktopPoint] = useState<TrainPoint>({ x: -120, y: 432, angle: 6 });
  const [mobilePoint, setMobilePoint] = useState<TrainPoint>({ x: -70, y: 396, angle: 12 });

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

  const chapterIndex = Math.min(Math.floor(progress * CHAPTERS.length), CHAPTERS.length - 1);
  const chapter = CHAPTERS[chapterIndex];

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
        <Train point={desktopPoint} scale={1} />
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
        <Train point={mobilePoint} scale={0.62} />
      </svg>

      <div className={styles.polaroidLayer}>
        {POLAROIDS.map((polaroid, index) => (
          <motion.div
            key={polaroid.caption}
            className={styles.polaroid}
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

      <motion.div
        className={styles.chapter}
        key={chapter.label}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span>{chapter.label}</span>
        <strong>{chapter.title}</strong>
      </motion.div>

      <div className={styles.progressBar}>
        <div className={styles.progressTrack}>
          <motion.div className={styles.progressFill} style={{ scaleX: progress }} />
        </div>
        <span className={styles.progressLabel}>Transitioning to destination</span>
      </div>
    </>
  );
}

"use client";

import type { ReactNode } from "react";
import styles from "./OtherNarrativScene.module.css";
import OtherNarrativCollage from "@/components/OtherNarrativCollage";

interface OtherNarrativStageProps {
  transitionLayer?: boolean;
  children: ReactNode;
}

/**
 * Shared full-viewport dark editorial backdrop (blackout + photo collage +
 * vignette + grain). Used underneath both the train journey animation and
 * the settled "the other narrativ." content so the two hand off seamlessly.
 */
export default function OtherNarrativStage({
  transitionLayer = false,
  children,
}: OtherNarrativStageProps) {
  return (
    <section
      className={`${styles.scene} ${transitionLayer ? styles.transitionLayer : ""}`}
      aria-label={transitionLayer ? undefined : "The other narrativ"}
      aria-hidden={transitionLayer || undefined}
    >
      <div className={styles.blackout} />
      <OtherNarrativCollage decorative={transitionLayer} />
      {children}
      <div className={styles.vignette} />
      <div className={styles.grain} />
    </section>
  );
}

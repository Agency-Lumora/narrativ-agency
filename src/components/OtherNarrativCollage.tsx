"use client";

import Image from "next/image";
import styles from "./OtherNarrativScene.module.css";

const images = [
  {
    src: "/media/other-narrativ/editorial-01.jpg",
    alt: "Creative team gathered in conversation",
  },
  {
    src: "/media/other-narrativ/editorial-02.jpg",
    alt: "Editorial team working around a table",
  },
  {
    src: "/media/other-narrativ/editorial-03.jpg",
    alt: "Studio team working behind the scenes",
  },
  {
    src: "/media/other-narrativ/editorial-04.jpg",
    alt: "A working session in progress",
  },
  {
    src: "/media/other-narrativ/editorial-02.jpg",
    alt: "People exchanging ideas in a workshop",
  },
  {
    src: "/media/other-narrativ/editorial-01.jpg",
    alt: "A candid moment from the creative process",
  },
];

interface OtherNarrativCollageProps {
  decorative?: boolean;
}

/**
 * Static dark editorial photo grid used as the backdrop for both the train
 * journey animation and the settled "the other narrativ." scene. Kept
 * static (no entrance animation) so it never has to be re-mounted between
 * the two, avoiding any flash/jump when the journey hands off to the scene.
 */
export default function OtherNarrativCollage({ decorative = false }: OtherNarrativCollageProps) {
  return (
    <div className={styles.collage}>
      {images.map((image, index) => (
        <figure
          className={`${styles.panel} ${styles[`panel${index + 1}`]}`}
          key={`${image.src}-${index}`}
        >
          <Image
            src={image.src}
            alt={decorative ? "" : image.alt}
            fill
            loading="eager"
            sizes={
              index === 2
                ? "(max-width: 767px) 100vw, 34vw"
                : "(max-width: 767px) 54vw, 34vw"
            }
            className={styles.image}
          />
          <div className={styles.panelShade} />
        </figure>
      ))}
    </div>
  );
}

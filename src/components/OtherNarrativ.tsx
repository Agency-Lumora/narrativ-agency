"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import Link from "next/link";

const episodes = [
  {
    number: "EP. 01",
    title: "Building something\nfrom nothing.",
    description: "The early days, the big questions and the risks that built the foundation.",
    image: "/media/other-narrativ/editorial-01.jpg",
    video: "/media/other-narrativ/episode-01.mp4",
    imageAlt: "Creative workspace showing the beginning of a journey"
  },
  {
    number: "EP. 02",
    title: "Ideas, execution\nand everything in between.",
    description: "How strategy turns into real work - and what happens in the middle.",
    image: "/media/other-narrativ/editorial-02.jpg",
    video: "/media/other-narrativ/episode-02.mp4",
    imageAlt: "Strategy and execution in progress"
  },
  {
    number: "EP. 03",
    title: "The creative chaos\nthat works.",
    description: "On finding the right idea, the right people and the right mindset.",
    image: "/media/other-narrativ/editorial-03.jpg",
    video: "/media/other-narrativ/episode-03.mp4",
    imageAlt: "Creative team collaboration"
  },
  {
    number: "EP. 04",
    title: "Lessons from the road\nso far.",
    description: "What we have learned, what we would do differently and what is next.",
    image: "/media/other-narrativ/editorial-04.jpg",
    video: "/media/other-narrativ/episode-04.mp4",
    imageAlt: "Journey and lessons learned"
  },
  {
    number: "EP. 05",
    title: "What's next?",
    description: "The next chapter, bigger dreams and the road ahead.",
    image: "/media/other-narrativ/editorial-01.jpg",
    video: "/media/other-narrativ/episode-05.mp4",
    imageAlt: "Future vision and what's next"
  }
];

const timelinePoints = [
  { number: "01", label: "THE IDEA" },
  { number: "02", label: "THE FIRST STEP" },
  { number: "03", label: "THE HARD PART" },
  { number: "04", label: "THE TURNING POINT" },
  { number: "05", label: "WHAT'S NEXT" }
];

export default function OtherNarrativ() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTimelinePoint, setActiveTimelinePoint] = useState(0);
  const journeyRef = useRef<HTMLElement>(null);
  const journeyInView = useInView(journeyRef, { amount: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      if (!journeyRef.current) return;
      
      const rect = journeyRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const pointIndex = Math.floor(scrollProgress * timelinePoints.length);
      setActiveTimelinePoint(Math.min(pointIndex, timelinePoints.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideoModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="other-narrativ" className="other-narrativ-page">
      {/* HERO SECTION */}
      <motion.div 
        className="other-hero" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="other-hero-copy">
          <motion.p 
            className="other-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            THE OTHER NARRATIV.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            THE STORIES<br />BEHIND<br /><span>THE BRANDS.</span>
          </motion.h1>
          <motion.p 
            className="other-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A podcast about the people, ideas and journeys behind the work.<br />
            Because there's always another story.
          </motion.p>
          <motion.a 
            className="other-red-button" 
            href="#episodes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Watch Episodes <ArrowRight size={13} />
          </motion.a>
        </div>
        
        <div className="other-hero-image">
          <img 
            src="/media/other-narrativ/editorial-01.jpg" 
            alt="Railway tracks disappearing into a dramatic landscape" 
          />
          <div className="hero-ink" />
          
          <motion.div 
            className="polaroid polaroid-one"
            whileHover={{ scale: 1.05, rotate: -6 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/media/other-narrativ/polaroid-01.webp.placeholder" alt="A creative studio" />
          </motion.div>
          
          <motion.div 
            className="polaroid polaroid-two"
            whileHover={{ scale: 1.05, rotate: 9 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/media/other-narrativ/polaroid-02.webp.placeholder" alt="A desk and notebook" />
          </motion.div>
          
          <motion.div 
            className="polaroid polaroid-three"
            whileHover={{ scale: 1.05, rotate: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/media/other-narrativ/polaroid-03.webp.placeholder" alt="A road through the hills" />
          </motion.div>
          
          <p className="hero-handwriting">
            THE JOURNEY<br />
            EP. 01<br />
            THE STORY BEHIND<br />
            THE STORY.
          </p>
        </div>
      </motion.div>

      {/* THE IDEA SECTION */}
      <motion.section 
        className="other-idea-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="idea-container">
          <motion.p 
            className="other-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            WHY THE OTHER NARRATIV?
          </motion.p>
          
          <motion.h2
            className="idea-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            THERE'S ALWAYS<br />
            MORE TO THE STORY.
          </motion.h2>
          
          <motion.p 
            className="idea-copy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            We spend so much time talking about what brands build.<br />
            We wanted to talk about why they built it.<br />
            <br />
            The doubts.<br />
            The decisions.<br />
            The failures.<br />
            The turning points.<br />
            The people behind the work.
          </motion.p>
          
          <motion.div 
            className="idea-statement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            THE OTHER NARRATIV<br />
            IS WHERE WE TALK<br />
            ABOUT EVERYTHING<br />
            THAT HAPPENS<br />
            BEHIND THE SCENES.
          </motion.div>
          
          <div className="red-line" />
        </div>
      </motion.section>

      {/* EPISODES SECTION */}
      <motion.section 
        id="episodes" 
        className="episodes-wrap"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="episodes-heading">
          <div>
            <motion.p 
              className="other-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              EPISODES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              THE JOURNEYS<br />
              BEHIND THE WORK.
            </motion.h2>
          </div>
        </div>
        
        <div className="episode-list">
          {episodes.map((episode, index) => (
            <motion.article 
              className="episode-row" 
              key={episode.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="episode-image">
                <img src={episode.image} alt={episode.title} />
                <button 
                  aria-label={`Play ${episode.title}`}
                  onClick={() => openVideoModal(episode.video)}
                >
                  <Play size={19} fill="currentColor" />
                </button>
              </div>
              <div className="episode-copy">
                <p className="episode-number">{episode.number}</p>
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
              </div>
              <button 
                className="episode-button"
                onClick={() => openVideoModal(episode.video)}
              >
                Watch Episode <ArrowRight size={13} />
              </button>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* FEATURED STORY SECTION */}
      <motion.section 
        className="featured-story"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="featured-background">
          <img 
            src="/media/other-narrativ/editorial-01.jpg" 
            alt="Featured story background"
          />
        </div>
        
        <div className="featured-overlay">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="episode-number">EP. 01</p>
            <h2 className="featured-title">
              BUILDING SOMETHING<br />
              FROM NOTHING.
            </h2>
            <p className="featured-copy">
              Every brand has a beginning.<br />
              This is what happened before anyone was watching.
            </p>
            <button 
              className="featured-cta"
              onClick={() => openVideoModal(episodes[0].video)}
            >
              <div className="play-button">
                <Play size={24} fill="currentColor" />
              </div>
              Watch Episode →
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* THE JOURNEY TIMELINE */}
      <motion.section 
        ref={journeyRef}
        className="journey-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="journey-container">
          <motion.p 
            className="other-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            THE JOURNEY
          </motion.p>
          
          <motion.h2
            className="journey-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            EVERY STORY<br />
            HAS A ROAD.
          </motion.h2>
          
          <div className="timeline">
            <div className="timeline-track">
              <motion.div 
                className="timeline-progress"
                initial={{ width: "0%" }}
                whileInView={{ width: `${((activeTimelinePoint + 1) / timelinePoints.length) * 100}%` }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="timeline-points">
              {timelinePoints.map((point, index) => (
                <motion.div 
                  key={point.number}
                  className={`timeline-point ${index <= activeTimelinePoint ? 'active' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="point-number">{point.number}</span>
                  <span className="point-label">{point.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA SECTION */}
      <motion.section 
        className="final-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            EVERY BRAND<br />
            HAS ANOTHER<br />
            <span>STORY.</span>
          </motion.h2>
          
          <motion.p 
            className="cta-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What's yours?
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact" className="other-red-button">
              Tell Us Your Story <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideoModal}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="video-modal-close"
                onClick={closeVideoModal}
                aria-label="Close video"
              >
                <X size={24} />
              </button>
              
              <div className="video-wrapper">
                <video 
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="video-player"
                  onError={(e) => {
                    console.error('Video loading error:', e);
                    closeVideoModal();
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

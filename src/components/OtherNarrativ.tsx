"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";

const episodes = [
  ["EP. 01", "Building something from nothing.", "The early days, the big questions and the risks that built the foundation.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200"],
  ["EP. 02", "Ideas, execution and everything in between.", "How strategy turns into real work - and what happens in the middle.", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200"],
  ["EP. 03", "The creative chaos that works.", "On finding the right idea, the right people and the right mindset.", "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"],
  ["EP. 04", "Lessons from the road so far.", "What we have learned, what we would do differently and what is next.", "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200"],
  ["EP. 05", "What’s next for Narrativ?", "The next chapter, bigger dreams and the road ahead.", "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=1200"],
];

export default function OtherNarrativ() {
  return (
    <section id="other-narrativ" className="other-narrativ-page">
      <motion.div className="other-hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="other-hero-copy"><p className="other-eyebrow">THE OTHER NARRATIV.</p><h1>THE STORIES<br />BEHIND<br /><span>THE BRANDS.</span></h1><p className="other-intro">A podcast about the journey behind the work. Because there&apos;s always another story.</p><a className="other-red-button" href="#episodes">Watch Episodes <ArrowRight size={13} /></a></div>
        <div className="other-hero-image"><img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=85&w=1800" alt="Railway tracks disappearing into a dramatic landscape" /><div className="hero-ink" /><div className="polaroid polaroid-one"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=500" alt="A creative studio" /></div><div className="polaroid polaroid-two"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=500" alt="A desk and notebook" /></div><div className="polaroid polaroid-three"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=500" alt="A road through the hills" /></div><p className="hero-handwriting">REAL PEOPLE.<br />REAL STORIES.<br />THE OTHER<br />NARRATIV.</p></div>
      </motion.div>
      <div id="episodes" className="episodes-wrap"><div className="episodes-heading"><div><p className="other-eyebrow">EPISODES</p><h2>LISTEN / WATCH <b>|</b> <span>THE JOURNEY.</span></h2></div><div className="episode-controls"><small>01 / 05</small><ArrowLeft size={16} /><ArrowRight size={16} /></div></div><div className="episode-list">{episodes.map(([number, title, description, image], index) => <motion.article className="episode-row" key={number} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}><div className="episode-image"><img src={image} alt={title} /><button aria-label={`Play ${title}`}><Play size={19} fill="currentColor" /></button></div><div className="episode-copy"><p className="episode-number">{number}</p><h3>{title}</h3><p>{description}</p></div><a className="episode-button" href="#">Watch Episode <ArrowRight size={13} /></a></motion.article>)}</div></div>
      <div className="other-closing"><div><h2>THE OTHER<br /><span>NARRATIV.</span></h2></div><div className="closing-divider" /><div className="closing-copy"><p>Real conversations. Unfiltered.<br />The other side of the story.</p><a className="other-red-button" href="#episodes">Watch All Episodes <ArrowRight size={13} /></a></div><p className="closing-handwriting">SAME MISSION.<br />DIFFERENT LENS.</p></div>
    </section>
  );
}
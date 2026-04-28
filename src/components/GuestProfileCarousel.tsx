"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const guests = [
  {
    name: "Ibrahim Hasan Murad",
    role: "President, ILM Fund",
    bio: "Visionary leader with decades of experience in educational philanthropy and institutional development.",
    tag: "Leadership",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90",
  },
  {
    name: "Salman Ahmad Malik",
    role: "Advisor, ILM Fund",
    bio: "Strategic advisor bringing expertise in finance, governance, and educational policy reform.",
    tag: "Advisory",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=90",
  },
  {
    name: "Khazra Shahbaz",
    role: "Portfolio Manager",
    bio: "Manages scholarship portfolios ensuring efficient disbursement to deserving students.",
    tag: "Operations",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=90",
  },
  {
    name: "Waqas Shahid",
    role: "Head, Internal Audit",
    bio: "Ensures complete financial transparency and accountability across all programs.",
    tag: "Finance",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=90",
  },
  {
    name: "Ahmed Khan",
    role: "Operations Manager",
    bio: "Oversees day-to-day operations and student welfare at the center.",
    tag: "Management",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=90",
  },
];

const SLOTS = [
  { xPct: -58, yPct: 20, scale: 0.55, z: 1, opacity: 0.45 },
  { xPct: -28, yPct:  9, scale: 0.75, z: 2, opacity: 0.75 },
  { xPct:   0, yPct:  0, scale: 1.00, z: 5, opacity: 1.00 },
  { xPct: +28, yPct:  9, scale: 0.75, z: 2, opacity: 0.75 },
  { xPct: +58, yPct: 20, scale: 0.55, z: 1, opacity: 0.45 },
];

const CARD_W = 200;
const CARD_H = 360;

export default function GuestProfileCarousel() {
  const [active, setActive] = useState(0);
  const prev = useCallback(() => setActive(a => (a - 1 + guests.length) % guests.length), []);
  const next = useCallback(() => setActive(a => (a + 1) % guests.length), []);

  const slots = [-2, -1, 0, 1, 2].map((offset, si) => {
    const idx = (active + offset + guests.length) % guests.length;
    return { guest: guests[idx], slot: SLOTS[si], isCenter: offset === 0, offset };
  });

  return (
    <section className="relative min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center overflow-hidden py-20 px-4">

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Ghost heading */}
      <div className="absolute top-10 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
        <span className="font-manrope font-black uppercase tracking-widest text-center"
          style={{
            fontSize: "clamp(2rem, 9vw, 7rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            lineHeight: 1,
          }}>
          GUEST PROFILE
        </span>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10 md:mb-14 mt-10">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">Our Guests</span>
        </div>
        <h1 className="font-manrope font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tight">
          Guest Profile
        </h1>
      </div>

      {/* Carousel */}
      <div className="relative z-10 w-full flex items-end justify-center"
        style={{ height: `${CARD_H * 1.5}px` }}>
        {slots.map(({ guest, slot, isCenter, offset }, si) => {
          const w = CARD_W * slot.scale;
          const h = CARD_H * slot.scale;
          const xPx = (slot.xPct / 100) * CARD_W * 3.8;
          const yPx = (slot.yPct / 100) * CARD_H;

          return (
            <motion.div
              key={si}
              className="absolute cursor-pointer"
              style={{ width: w, height: h, zIndex: slot.z, left: "50%", bottom: 0 }}
              animate={{ x: xPx - w / 2, y: -yPx + (CARD_H - h), opacity: slot.opacity }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => { if (offset !== 0) setActive(a => (a + offset + guests.length) % guests.length); }}
              whileHover={!isCenter ? { scale: 1.05, opacity: 0.9 } : {}}
            >
              <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden relative"
                style={{
                  boxShadow: isCenter
                    ? "0 0 0 1px rgba(241,90,36,0.5), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(241,90,36,0.15)"
                    : "0 8px 32px rgba(0,0,0,0.4)",
                }}>
                <img
                  src={guest.img}
                  alt={guest.name}
                  className="w-full h-full object-cover object-top"
                  style={{ filter: isCenter ? "none" : "grayscale(100%) brightness(0.5)" }}
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Tag on center */}
                {isCenter && (
                  <motion.div
                    className="absolute top-3 left-3 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {guest.tag}
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Info card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="relative z-10 mt-8 md:mt-10 w-full max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 text-center">
            <h2 className="font-manrope font-black text-white text-xl md:text-2xl mb-1">
              {guests[active].name}
            </h2>
            <p className="text-primary text-xs uppercase tracking-[0.25em] font-bold mb-3">
              {guests[active].role}
            </p>
            <div className="w-12 h-px bg-white/20 mx-auto mb-3" />
            <p className="text-white/50 text-sm leading-relaxed">
              {guests[active].bio}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="relative z-10 flex items-center gap-5 mt-6 md:mt-8">
        <motion.button onClick={prev}
          className="w-11 h-11 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Previous">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <div className="flex gap-2 items-center">
          {guests.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-8" : "bg-white/25 w-1.5 hover:bg-white/50"}`}
              aria-label={`Go to ${guests[i].name}`} />
          ))}
        </div>

        <motion.button onClick={next}
          className="w-11 h-11 rounded-full bg-white/8 border border-white/15 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Next">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      <p className="relative z-10 text-white/20 text-xs font-mono mt-4 tracking-widest">
        {String(active + 1).padStart(2, "0")} / {String(guests.length).padStart(2, "0")}
      </p>

    </section>
  );
}

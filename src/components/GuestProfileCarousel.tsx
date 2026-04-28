"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const guests = [
  {
    name: "Ibrahim Hasan Murad",
    role: "President, ILM Fund",
    bio: "Visionary leader with decades of experience in educational philanthropy.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Salman Ahmad Malik",
    role: "Advisor, ILM Fund",
    bio: "Strategic advisor bringing expertise in finance and educational policy reform.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    name: "Khazra Shahbaz",
    role: "Assistant Manager Portfolio",
    bio: "Manages scholarship portfolios ensuring efficient disbursement to students.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "Waqas Shahid",
    role: "Head, Internal Audit",
    bio: "Ensures complete financial transparency across all scholarship programs.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
  {
    name: "Ahmed Khan",
    role: "Operations Manager",
    bio: "Oversees day-to-day operations and student welfare at the center.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
];

/*
  5-card fan layout — matches reference:
  Far cards sit lowest, near cards mid, center on top
*/
const SLOTS = [
  { xPct: -58, yPct: 20, scale: 0.55, z: 1, opacity: 0.55 },
  { xPct: -28, yPct:  9, scale: 0.75, z: 2, opacity: 0.80 },
  { xPct:   0, yPct:  0, scale: 1.00, z: 5, opacity: 1.00 },
  { xPct: +28, yPct:  9, scale: 0.75, z: 2, opacity: 0.80 },
  { xPct: +58, yPct: 20, scale: 0.55, z: 1, opacity: 0.55 },
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
    <section className="relative bg-gradient-to-b from-[#e8eaf0] to-[#f4f5f8] min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Ghost heading */}
      <div className="absolute top-12 md:top-16 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
        <span
          className="font-manrope font-black uppercase tracking-widest text-center"
          style={{
            fontSize: "clamp(2rem, 9vw, 6.5rem)",
            color: "transparent",
            WebkitTextStroke: "2px rgba(100,120,180,0.15)",
            lineHeight: 1,
          }}
        >
          GUEST PROFILE
        </span>
      </div>

      {/* Section heading */}
      <div className="relative z-10 text-center mb-10 md:mb-14 mt-14 md:mt-18">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-8 h-px bg-primary" />
          <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Our Guests</span>
          <div className="w-8 h-px bg-primary" />
        </div>
        <h1 className="font-manrope font-black text-[#0c1525] text-3xl md:text-4xl lg:text-5xl tracking-tight">
          Guest Profile
        </h1>
      </div>

      {/* Carousel stage */}
      <div
        className="relative z-10 w-full flex items-end justify-center"
        style={{ height: `${CARD_H * 1.5}px` }}
      >
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
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => { if (offset !== 0) setActive(a => (a + offset + guests.length) % guests.length); }}
              whileHover={!isCenter ? { scale: 1.04 } : {}}
            >
              {/* Card */}
              <div
                className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden relative"
                style={{
                  boxShadow: isCenter
                    ? "0 32px 80px rgba(0,0,0,0.30), 0 0 0 3px rgba(241,90,36,0.4)"
                    : "0 8px 30px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={guest.img}
                  alt={guest.name}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                  style={{ filter: isCenter ? "none" : "grayscale(100%) brightness(0.7)" }}
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Active badge */}
                {isCenter && (
                  <motion.div
                    className="absolute top-3 right-3 bg-primary text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Featured
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Name, role & bio */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="relative z-10 text-center mt-8 md:mt-10 max-w-md mx-auto px-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center justify-center gap-4 mb-1">
            <div className="h-px w-10 bg-[#0c1525]/30" />
            <h2 className="font-manrope font-black text-[#0c1525] text-xl md:text-2xl">
              {guests[active].name}
            </h2>
            <div className="h-px w-10 bg-[#0c1525]/30" />
          </div>
          <p className="text-primary text-xs uppercase tracking-[0.25em] font-bold mb-3">
            {guests[active].role}
          </p>
          <p className="text-[#5e6d82] text-sm leading-relaxed">
            {guests[active].bio}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="relative z-10 flex items-center gap-5 mt-8 md:mt-10">
        <motion.button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:text-white hover:border-primary transition-all"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          aria-label="Previous"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <div className="flex gap-2 items-center">
          {guests.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-8" : "bg-gray-300 w-2 hover:bg-gray-400"}`}
              aria-label={`Go to ${guests[i].name}`}
            />
          ))}
        </div>

        <motion.button
          onClick={next}
          className="w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:text-white hover:border-primary transition-all"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          aria-label="Next"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Counter */}
      <p className="relative z-10 text-[#5e6d82] text-xs font-mono mt-4 tracking-widest">
        {String(active + 1).padStart(2, "0")} / {String(guests.length).padStart(2, "0")}
      </p>

    </section>
  );
}

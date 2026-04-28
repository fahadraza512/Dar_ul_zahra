"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const guests = [
  {
    name: "Ibrahim Hasan Murad",
    role: "President, ILM Fund",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Salman Ahmad Malik",
    role: "Advisor, ILM Fund",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    name: "Khazra Shahbaz",
    role: "Assistant Manager Portfolio",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "Waqas Shahid",
    role: "Head, Internal Audit",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
  {
    name: "Ahmed Khan",
    role: "Operations Manager",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  },
];

/*
  Layout (matches reference image exactly):
  ─────────────────────────────────────────
  Slot  offset  x%      y%    scale  z
   0    -2     -52%    +12%   0.62   1   ← far left,  lowest
   1    -1     -26%    +6%    0.80   2   ← near left, mid
   2     0       0%     0%    1.00   5   ← center,    top
   3    +1     +26%    +6%    0.80   2   ← near right, mid
   4    +2     +52%   +12%    0.62   1   ← far right, lowest
*/
const SLOTS = [
  { xPct: -52, yPct: 12, scale: 0.62, z: 1, opacity: 0.65 },
  { xPct: -26, yPct:  6, scale: 0.80, z: 2, opacity: 0.85 },
  { xPct:   0, yPct:  0, scale: 1.00, z: 5, opacity: 1.00 },
  { xPct: +26, yPct:  6, scale: 0.80, z: 2, opacity: 0.85 },
  { xPct: +52, yPct: 12, scale: 0.62, z: 1, opacity: 0.65 },
];

// Card base dimensions (center card)
const CARD_W = 220; // px
const CARD_H = 300; // px

export default function GuestProfileCarousel() {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive(a => (a - 1 + guests.length) % guests.length), []);
  const next = useCallback(() => setActive(a => (a + 1) % guests.length), []);

  // Build the 5 visible slots from the active index
  const slots = [-2, -1, 0, 1, 2].map((offset, si) => {
    const idx = (active + offset + guests.length) % guests.length;
    return { guest: guests[idx], slot: SLOTS[si], isCenter: offset === 0, offset };
  });

  return (
    <section className="relative bg-[#eef0f3] min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 px-4">

      {/* Ghost heading behind cards */}
      <div className="absolute top-16 md:top-20 left-0 right-0 flex justify-center pointer-events-none select-none z-0">
        <span
          className="font-manrope font-black uppercase tracking-widest"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 7rem)",
            color: "transparent",
            WebkitTextStroke: "2px rgba(100,120,180,0.18)",
            lineHeight: 1,
          }}
        >
          GUEST PROFILE
        </span>
      </div>

      {/* Section heading */}
      <div className="relative z-10 text-center mb-8 md:mb-12 mt-16 md:mt-20">
        <h1 className="font-manrope font-black text-[#0c1525] text-2xl md:text-3xl lg:text-4xl tracking-tight">
          Guest Profile
        </h1>
        <div className="w-16 h-1 bg-primary mx-auto mt-3 rounded-full" />
      </div>

      {/* Carousel stage */}
      <div
        className="relative z-10 flex items-end justify-center w-full"
        style={{ height: `${CARD_H * 1.35}px` }}
      >
        {slots.map(({ guest, slot, isCenter, offset }, si) => {
          const w = CARD_W * slot.scale;
          const h = CARD_H * slot.scale;
          // x: percentage of CARD_W from center
          const xPx = (slot.xPct / 100) * CARD_W * 3.2;
          // y: push non-center cards down
          const yPx = (slot.yPct / 100) * CARD_H;

          return (
            <motion.div
              key={si}
              className="absolute cursor-pointer"
              style={{
                width: w,
                height: h,
                zIndex: slot.z,
                left: "50%",
                bottom: 0,
              }}
              animate={{
                x: xPx - w / 2,
                y: -yPx + (CARD_H - h),
                opacity: slot.opacity,
              }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => {
                if (offset !== 0) setActive(a => (a + offset + guests.length) % guests.length);
              }}
            >
              <div
                className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  boxShadow: isCenter
                    ? "0 24px 60px rgba(0,0,0,0.35)"
                    : "0 8px 24px rgba(0,0,0,0.18)",
                }}
              >
                <img
                  src={guest.img}
                  alt={guest.name}
                  className="w-full h-full object-cover object-top"
                  style={{
                    filter: isCenter ? "none" : "grayscale(100%) brightness(0.75)",
                    transition: "filter 0.5s ease",
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Name & role */}
      <motion.div
        key={active}
        className="relative z-10 text-center mt-8 md:mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex items-center justify-center gap-4 mb-1">
          <div className="h-px w-10 bg-[#0c1525]/40" />
          <h2 className="font-manrope font-black text-[#0c1525] text-lg md:text-xl lg:text-2xl">
            {guests[active].name}
          </h2>
          <div className="h-px w-10 bg-[#0c1525]/40" />
        </div>
        <p className="text-[#5e6d82] text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
          {guests[active].role}
        </p>
      </motion.div>

      {/* Controls */}
      <div className="relative z-10 flex items-center gap-6 mt-8 md:mt-10">
        <button
          onClick={prev}
          className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:text-white hover:border-primary transition-all"
          aria-label="Previous"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {guests.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-7" : "bg-gray-300 w-2"}`}
              aria-label={`Go to ${guests[i].name}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:text-white hover:border-primary transition-all"
          aria-label="Next"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </section>
  );
}

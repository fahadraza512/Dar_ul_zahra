"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Ibrahim Hasan Murad",    role: "President",                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Salman Ahmad Malik",     role: "Advisor",                    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Khazra Shahbaz",         role: "Assistant Manager Portfolio", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
  { name: "Waqas Shahid",           role: "Head, Internal Audit",       img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
  { name: "Ahmed Khan",             role: "Operations Manager",         img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80" },
];

// Slot positions for 5 cards: [-2, -1, 0, 1, 2]
const SLOTS = [
  { x: "-200%", scale: 0.65, z: 1,  opacity: 0.6 },
  { x: "-105%", scale: 0.80, z: 2,  opacity: 0.85 },
  { x: "0%",    scale: 1.00, z: 5,  opacity: 1 },
  { x: "105%",  scale: 0.80, z: 2,  opacity: 0.85 },
  { x: "200%",  scale: 0.65, z: 1,  opacity: 0.6 },
];

export default function ProfileCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + team.length) % team.length);
  const next = () => setActive(a => (a + 1) % team.length);

  // Get the 5 visible members centered on active
  const visible = [-2, -1, 0, 1, 2].map(offset => {
    const idx = (active + offset + team.length) % team.length;
    return { ...team[idx], isActive: offset === 0, slotIdx: offset + 2 };
  });

  return (
    <section className="py-16 md:py-24 bg-[#f0f2f5] overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 w-full">

        {/* Title */}
        <div className="text-center mb-10 md:mb-16 relative">
          <h2
            className="font-manrope font-black tracking-widest uppercase select-none"
            style={{
              fontSize: "clamp(3rem, 12vw, 9rem)",
              color: "transparent",
              WebkitTextStroke: "2px rgba(0,0,0,0.08)",
              lineHeight: 1,
            }}
          >
            OUR TEAM
          </h2>
        </div>

        {/* Cards */}
        <div className="relative flex items-center justify-center" style={{ height: "clamp(320px, 55vw, 520px)" }}>
          {visible.map((member, i) => {
            const slot = SLOTS[member.slotIdx];
            const isActive = member.isActive;

            return (
              <motion.div
                key={`${member.name}-${i}`}
                className="absolute cursor-pointer"
                style={{ zIndex: slot.z }}
                animate={{
                  x: slot.x,
                  scale: slot.scale,
                  opacity: slot.opacity,
                }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => {
                  const offset = member.slotIdx - 2;
                  if (offset !== 0) setActive(a => (a + offset + team.length) % team.length);
                }}
              >
                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                  style={{
                    width: "clamp(160px, 22vw, 260px)",
                    height: "clamp(220px, 32vw, 380px)",
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ filter: isActive ? "none" : "grayscale(100%)" }}
                  />

                  {/* Dark overlay on inactive */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/30" />
                  )}

                  {/* Gradient bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Active glow border */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-3xl ring-4 ring-primary/60 pointer-events-none" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Name & Role — below carousel */}
        <motion.div
          key={active}
          className="text-center mt-8 md:mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-12 bg-primary" />
            <h3 className="font-manrope font-black text-[#0c1525] text-xl md:text-2xl lg:text-3xl">
              {team[active].name}
            </h3>
            <div className="h-px w-12 bg-primary" />
          </div>
          <p className="text-[#5e6d82] text-xs md:text-sm uppercase tracking-[0.25em] font-semibold">
            {team[active].role}
          </p>
        </motion.div>

        {/* Nav arrows */}
        <div className="flex items-center justify-center gap-6 mt-8 md:mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "bg-primary w-8" : "bg-gray-300 w-2"}`}
                aria-label={`Go to ${team[i].name}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:text-white hover:border-primary transition-all"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

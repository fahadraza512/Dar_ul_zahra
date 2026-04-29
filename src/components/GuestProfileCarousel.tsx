"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const guests = [
  {
    name: "Allama Shaikh Jaffer",
    role: "Representative of Grand Ayatullah Syed Ali Sistani",
    year: "2021",
    visitTitle: "Allama Shaikh Jaffer's Visit 2021",
    bio: "Representative of Grand Ayatullah Syed Ali Sistani (Najaf-e-Ashraf) addressed the students of Dar ul Zahra, inspiring them with Islamic teachings and emphasizing the importance of education.",
    tag: "2021",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90",
  },
  {
    name: "Nawab Anwar Naqvi Family",
    role: "Visiting from Canada",
    year: "2022",
    visitTitle: "Nawab Anwar Naqvi Family Visit 2022",
    bio: "Nawab Anwar Naqvi and his family, visiting from Canada, toured the Dar ul Zahra campus and met with students, pledging continued support for the centre.",
    tag: "2022",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=90",
  },
  {
    name: "Agha Syed Muhammad Taqi Naqvi",
    role: "Scholar, Multan",
    year: "2022",
    visitTitle: "Agha Syed Muhammad Taqi Naqvi Visit 2022",
    bio: "Agha Syed Muhammad Taqi Naqvi of Multan visited the centre and delivered an address on the role of education in building a stronger Muslim community.",
    tag: "2022",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=90",
  },
  {
    name: "Allama Syed Shehanshah Naqvi",
    role: "Scholar, Karachi",
    year: "2022",
    visitTitle: "Allama Syed Shehanshah Naqvi Visit 2022",
    bio: "Allama Syed Shehanshah Naqvi of Karachi visited Dar ul Zahra Educational Center and praised the Kazmi family's efforts to provide quality education to underprivileged children.",
    tag: "2022",
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

export default function GuestProfileCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance every 3s, pause on user interaction, resume after 5s
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive(a => (a + 1) % guests.length);
    }, 3000);
    return () => clearInterval(t);
  }, [paused]);

  const handleUserNav = useCallback((fn: () => void) => {
    fn();
  }, []);

  const prev = useCallback(() => handleUserNav(() => setActive(a => (a - 1 + guests.length) % guests.length)), [handleUserNav]);
  const next = useCallback(() => handleUserNav(() => setActive(a => (a + 1) % guests.length)), [handleUserNav]);

  // Fixed card dimensions — no JS vw dependency, no layout shift
  const CARD_W = 260;
  const CARD_H = 360;
  const SPREAD = 3.6;

  const slots = [-2, -1, 0, 1, 2].map((offset, si) => {
    const idx = (active + offset + guests.length) % guests.length;
    return { guest: guests[idx], slot: SLOTS[si], isCenter: offset === 0, offset };
  });

  return (
    <section className="relative bg-white flex flex-col items-center overflow-hidden py-20 px-4" style={{ minHeight: "100vh" }}>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Header */}
      <div className="relative z-10 text-center mb-10 md:mb-14 mt-10">
        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3 block">Honourable Guests</span>
        <h1 className="font-manrope font-black text-[#0c1525] text-3xl md:text-4xl lg:text-5xl tracking-tight">
          Guest Visits
        </h1>
        <p className="text-[#5e6d82] text-sm mt-3 max-w-md mx-auto leading-relaxed">
          Distinguished scholars, leaders, and supporters who have visited and inspired Dar ul Zahra.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative z-10 w-full flex items-end justify-center"
        style={{ height: "540px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slots.map(({ guest, slot, isCenter, offset }, si) => {
          const w = CARD_W * slot.scale;
          const h = CARD_H * slot.scale;
          const xPx = (slot.xPct / 100) * CARD_W * SPREAD;
          const yPx = (slot.yPct / 100) * CARD_H;

          return (
            <motion.div
              key={si}
              className="absolute cursor-pointer"
              style={{ width: w, height: h, zIndex: slot.z, left: "50%", bottom: 0 }}
              animate={{ x: xPx - w / 2, y: -yPx + (CARD_H - h), opacity: slot.opacity }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              onClick={() => { if (offset !== 0) handleUserNav(() => setActive(a => (a + offset + guests.length) % guests.length)); }}
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

      {/* Info card — fixed height container prevents layout shift */}
      <div
        className="relative z-10 mt-8 md:mt-10 w-full max-w-lg mx-auto"
        style={{ minHeight: "200px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-5 md:p-6 text-center">
              <h2 className="font-manrope font-black text-[#0c1525] text-lg md:text-xl mb-1">
                {guests[active].visitTitle}
              </h2>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">
                {guests[active].role}
              </p>
              <div className="w-12 h-px bg-gray-200 mx-auto mb-3" />
              <p className="text-[#5e6d82] text-sm leading-relaxed">
                {guests[active].bio}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="relative z-10 flex items-center gap-5 mt-6 md:mt-8">
        <motion.button onClick={prev}
          className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:border-primary hover:text-white transition-all"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Previous">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <div className="flex gap-2 items-center">
          {guests.map((_, i) => (
            <button key={i} onClick={() => handleUserNav(() => setActive(i))}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-8" : "bg-gray-300 w-1.5 hover:bg-gray-400"}`}
              aria-label={`Go to ${guests[i].name}`} />
          ))}
        </div>

        <motion.button onClick={next}
          className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:border-primary hover:text-white transition-all"
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Next">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      <p className="relative z-10 text-[#5e6d82]/40 text-xs font-mono mt-4 tracking-widest">
        {String(active + 1).padStart(2, "0")} / {String(guests.length).padStart(2, "0")}
      </p>

      {/* Auto-play progress bar — always rendered, opacity only */}
      <div className="relative z-10 w-32 h-0.5 bg-gray-200 rounded-full mt-3 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: paused ? "0%" : "100%" }}
          transition={{ duration: paused ? 0 : 3, ease: "linear" }}
          key={`${active}-${paused}`}
        />
      </div>

    </section>
  );
}

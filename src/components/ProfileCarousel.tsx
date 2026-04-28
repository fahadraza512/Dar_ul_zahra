"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  { name: "Ibrahim Hasan Murad", role: "President, ILM Fund", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
  { name: "Mr. Salman Ahmad Malik", role: "Advisor, ILM Fund", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80" },
  { name: "Khazra Shahbaz", role: "Assistant Manager Portfolio", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" },
  { name: "Waqas Shahid", role: "Head, Internal Audit", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
  { name: "Ahmed Khan", role: "Operations Manager", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80" },
];

export default function ProfileCarousel() {
  const [active, setActive] = useState(2); // Center card

  const prev = () => setActive(a => (a - 1 + team.length) % team.length);
  const next = () => setActive(a => (a + 1) % team.length);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-manrope font-black text-[#0c1525] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            OUR TEAM
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">

          {/* Cards */}
          <div className="relative w-full max-w-5xl h-96 md:h-[500px]">
            {team.map((member, i) => {
              const offset = i - active;
              const absOffset = Math.abs(offset);
              const isActive = offset === 0;

              // Position: center card at 50%, others spread left/right
              const xPos = 50 + offset * 22; // 22% spacing between cards
              const scale = isActive ? 1 : absOffset === 1 ? 0.85 : 0.7;
              const zIndex = 10 - absOffset;
              const opacity = absOffset > 2 ? 0 : 1;

              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    x: `${xPos - 50}%`,
                    y: "-50%",
                    translateX: "-50%",
                    scale,
                    zIndex,
                    opacity,
                  }}
                  animate={{
                    x: `${xPos - 50}%`,
                    scale,
                    opacity,
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  onClick={() => setActive(i)}
                >
                  <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${isActive ? "w-64 h-80 md:w-80 md:h-96" : "w-48 h-64 md:w-64 md:h-80"} transition-all duration-500`}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Info — only visible on active card */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-6 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-white font-black text-xl md:text-2xl mb-1">{member.name}</h3>
                          <div className="w-16 h-0.5 bg-primary mx-auto mb-2 rounded-full" />
                          <p className="text-white/70 text-sm uppercase tracking-wider">{member.role}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:text-white hover:border-primary transition-all z-20"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-[#0c1525] hover:bg-primary hover:text-white hover:border-primary transition-all z-20"
            aria-label="Next"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "bg-primary w-8" : "bg-gray-300 w-2"}`}
              aria-label={`Go to ${team[i].name}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

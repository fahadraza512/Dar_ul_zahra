"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    caption: "Life at Dar ul Zahra",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1600&q=85",
    caption: "Students Learning Together",
  },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/4769411/4769411-uhd_2560_1440_25fps.mp4",
    caption: "Building Futures",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=85",
    caption: "Our Campus",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=85",
    caption: "Every Child Deserves Education",
  },
];

export default function GalleryHero() {
  const [current, setCurrent] = useState(0);
  const [prog, setProg] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 6000;

  const goTo = (idx: number) => {
    setCurrent(idx);
    setProg(0);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  // Progress bar + auto-advance
  useEffect(() => {
    setProg(0);
    let elapsed = 0;
    intervalRef.current = setInterval(() => {
      elapsed += 50;
      setProg(Math.min((elapsed / DURATION) * 100, 100));
      if (elapsed >= DURATION) {
        setCurrent(c => (c + 1) % slides.length);
        elapsed = 0;
        setProg(0);
      }
    }, 50);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [current]);

  // Play video when slide is video
  useEffect(() => {
    if (slides[current].type === "video" && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [current]);

  const slide = slides[current];

  return (
    <section className="fixed top-0 left-0 w-full overflow-hidden bg-[#060c18]" style={{ height: "100vh", zIndex: 0 }}>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {slide.type === "video" ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay muted playsInline loop
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={slide.src}
              alt={slide.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-[#060c18]/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060c18]/60 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 lg:px-20 pb-28">
        <div className="max-w-screen-xl mx-auto w-full">

          {/* Slide type badge */}
          <motion.div
            key={`badge-${current}`}
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              {slide.type === "video" ? "Video" : "Photo"}
            </span>
          </motion.div>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`caption-${current}`}
              className="font-manrope font-black text-white tracking-tighter leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {slide.caption}
            </motion.h2>
          </AnimatePresence>

          {/* Controls row */}
          <div className="flex items-center gap-6">

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-primary hover:bg-primary flex items-center justify-center text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-primary hover:bg-primary flex items-center justify-center text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-3 flex-1">
              {slides.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className="relative h-0.5 flex-1 max-w-[80px] bg-white/15 rounded-full overflow-hidden">
                  {i === current && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-primary rounded-full"
                      style={{ width: `${prog}%` }}
                    />
                  )}
                  {i < current && <div className="absolute inset-0 bg-primary/60 rounded-full" />}
                </button>
              ))}
            </div>

            {/* Counter */}
            <span className="text-white/30 text-xs font-mono">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>


    </section>
  );
}

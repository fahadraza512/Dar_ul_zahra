"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const videos = [
  "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/4769411/4769411-uhd_2560_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/5198697/5198697-uhd_2560_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/6209862/6209862-uhd_2560_1440_25fps.mp4",
];

function VideoLoop() {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.load();
    const play = () => v.play().catch(() => {});
    play();
    v.addEventListener("canplay", play, { once: true });
    return () => v.removeEventListener("canplay", play);
  }, [idx]);

  useEffect(() => {
    const resume = () => { if (!document.hidden) ref.current?.play().catch(() => {}); };
    document.addEventListener("visibilitychange", resume);
    return () => document.removeEventListener("visibilitychange", resume);
  }, []);

  return (
    <motion.video
      ref={ref} key={idx}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay muted playsInline loop={videos.length === 1}
      onEnded={() => setIdx(i => (i + 1) % videos.length)}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
    >
      <source src={videos[idx]} type="video/mp4" />
    </motion.video>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#060c18] min-h-screen">
      <div className="absolute inset-0 z-0">
        <VideoLoop />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(6,12,24,0.96) 0%, rgba(6,12,24,0.80) 45%, rgba(6,12,24,0.65) 70%, rgba(6,12,24,0.55) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to top, rgba(6,12,24,1) 0%, transparent 100%)" }} />
      </div>

      <div className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20 w-full flex flex-col justify-start min-h-screen">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 pt-20 md:pt-24 lg:pt-32 pb-10 md:pb-14">

          {/* LEFT */}
          <div className="flex-1 min-w-0">
            {/* Fix: use fluid font size so headline never wraps awkwardly */}
            <motion.h1
              className="font-nexa font-black leading-tight tracking-wide uppercase mb-5 md:mb-7"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.75rem)" }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">Every Child Has the Right to be </span>
              <span className="text-primary">Educated.</span>
            </motion.h1>

            <motion.div className="w-12 h-0.5 bg-primary mb-5 md:mb-7"
              initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />

            <motion.p
              className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mb-7 md:mb-9 pl-3 border-l-2 border-primary/40"
              style={{ fontWeight: 300 }}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              Dar ul Zahra Educational Center — funding the education of{" "}
              <span className="text-white font-medium">orphans and needy children</span>{" "}
              in Kot Adu, Punjab, Pakistan since 2019.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                className="relative bg-primary text-white font-bold text-sm px-5 md:px-7 py-2.5 md:py-3 rounded-full overflow-hidden shadow-lg shadow-primary/30 flex items-center gap-2 group"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Donate Now</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
              <motion.button
                className="border border-white/25 text-white font-bold text-sm px-5 md:px-7 py-2.5 md:py-3 rounded-full flex items-center gap-2 hover:border-white/50 hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                Sponsor a Child
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-3 pt-5 md:pt-7 border-t border-white/10"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.58 }}
            >
              {[
                { n: "37+", l: "Students Supported" },
                { n: "517/20", l: "Federally Registered" },
                { n: "Est. 2019", l: "Kot Adu, Punjab" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-white font-bold text-sm md:text-base lg:text-lg leading-none">{s.n}</div>
                  <div className="text-white/40 text-[9px] md:text-xs tracking-wide uppercase mt-1 leading-tight">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — desktop only */}
          <motion.div
            className="hidden lg:flex flex-col items-center justify-center shrink-0 gap-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-center">
              <p className="font-nexa leading-snug mb-2 text-2xl xl:text-3xl" dir="rtl" style={{ fontWeight: 600, color: "#f15a24" }}>
                ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ
              </p>
              <p className="text-white/40 text-xs italic tracking-wide">
                "Read in the name of your Lord who created." — Al-Quran 96:1
              </p>
            </div>
            <div className="relative flex items-center justify-center w-64 h-64 xl:w-80 xl:h-80">
              <motion.div className="absolute inset-0 rounded-full" style={{ border: "1.5px dashed rgba(241,90,36,0.25)" }}
                animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute rounded-full" style={{ inset: 20, border: "1px solid rgba(255,255,255,0.07)" }}
                animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
              <div className="absolute inset-8 rounded-full bg-primary/8 blur-2xl pointer-events-none" />
              <div className="relative w-40 h-40 xl:w-48 xl:h-48 rounded-3xl bg-white shadow-2xl flex items-center justify-center z-10"
                style={{ boxShadow: "0 0 0 1px rgba(241,90,36,0.15), 0 24px 48px rgba(0,0,0,0.5)" }}>
                <img src="/logo.png" alt="Dar ul Zahra" className="w-28 xl:w-36 h-auto object-contain" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
        <svg width="22" height="34" viewBox="0 0 24 38" fill="none">
          <rect x="1" y="1" width="22" height="36" rx="11" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
          <motion.rect x="11" y="7" width="2" height="7" rx="1" fill="rgba(255,255,255,0.45)"
            animate={{ y: [0, 8, 0], opacity: [0.8, 0, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
        </svg>
      </motion.div>
    </section>
  );
}

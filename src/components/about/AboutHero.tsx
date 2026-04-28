"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const videos = [
  "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/4769411/4769411-uhd_2560_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/5198697/5198697-uhd_2560_1440_25fps.mp4",
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

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-[#060c18]">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <VideoLoop />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(105deg, rgba(6,12,24,0.95) 0%, rgba(6,12,24,0.80) 60%, rgba(6,12,24,0.65) 100%)"
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{
          background: "linear-gradient(to top, rgba(6,12,24,1) 0%, transparent 100%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20 w-full pt-28 pb-16">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">About Us</span>
          </div>

          {/* Headline */}
          <h1 className="font-nexa font-black text-white leading-tight tracking-wide uppercase mb-6"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}>
            Educating Orphans &<br />
            <span className="text-primary">Needy Children</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/60 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mb-8 pl-4 border-l-2 border-primary/40" style={{ fontWeight: 300 }}>
            Dar ul Zahra Educational Center — a federally registered non-profit charity founded in 2019 by the Kazmi family in Kot Adu, Punjab, Pakistan.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 pt-6 border-t border-white/10">
            {[
              { n: "37+", l: "Students Funded" },
              { n: "2019", l: "Year Founded" },
              { n: "517/20", l: "Reg. No." },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-5">
                <div>
                  <div className="text-white font-bold text-lg leading-none">{s.n}</div>
                  <div className="text-white/40 text-xs tracking-wide uppercase mt-1">{s.l}</div>
                </div>
                {i < 2 && <div className="w-px h-7 bg-white/10" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

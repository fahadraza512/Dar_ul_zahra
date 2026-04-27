"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ─── Looping video background ─────────────────────────────────────────────────
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
      autoPlay muted playsInline
      loop={videos.length === 1}
      onEnded={() => setIdx(i => (i + 1) % videos.length)}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <source src={videos[idx]} type="video/mp4" />
    </motion.video>
  );
}

// ─── Scrolling feature pills ──────────────────────────────────────────────────
const pillItems = [
  { icon: "school",          label: "Need-Based Scholarships" },
  { icon: "emoji_events",    label: "Merit Awards" },
  { icon: "handshake",       label: "Qarz-e-Hasna Loans" },
  { icon: "sports_soccer",   label: "Sports Scholarships" },
  { icon: "account_balance", label: "150+ Partner Institutions" },
  { icon: "groups",          label: "20,000+ Students Supported" },
  { icon: "payments",        label: "PKR 15 Billion Disbursed" },
  { icon: "military_tech",   label: "Alumni Giving Back" },
];

const CARD_H = 52, GAP = 12, STEP = CARD_H + GAP, VISIBLE = 5, CENTER = Math.floor(VISIBLE / 2);

function FeaturePills() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) t = setInterval(() => setIndex(p => p + 1), 3000);
        else clearInterval(t);
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { clearInterval(t); observer.disconnect(); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-96 select-none overflow-hidden"
      style={{ height: VISIBLE * STEP, paddingRight: "20px", paddingTop: "12px", paddingBottom: "12px" }}
      aria-label="Feature carousel"
      role="region"
    >
      {Array.from({ length: VISIBLE + 2 }, (_, i) => {
        const slotOffset = i - 1;
        const itemIdx    = ((index + slotOffset) % pillItems.length + pillItems.length) % pillItems.length;
        const item       = pillItems[itemIdx];
        const dist       = slotOffset - CENTER;
        const absDist    = Math.abs(dist);
        const isActive   = dist === 0;
        const scale      = isActive ? 1 : absDist === 1 ? 0.84 : 0.68;
        const opacity    = isActive ? 1 : absDist === 1 ? 0.7 : absDist === 2 ? 0.4 : 0;
        const topPx      = (CENTER + dist) * STEP + (STEP - CARD_H) / 2;

        return (
          <div
            key={itemIdx}
            className="absolute left-0"
            style={{
              top: topPx, height: CARD_H, width: "calc(100% - 16px)",
              transform: `scale(${scale})`, transformOrigin: "center center",
              opacity, zIndex: VISIBLE - absDist,
              transition: "top 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s ease",
            }}
          >
            <div
              className="absolute inset-0 flex items-center gap-4 px-5 rounded-2xl overflow-hidden"
              style={{
                background: isActive
                  ? "linear-gradient(120deg, rgba(241,90,36,0.18) 0%, rgba(241,90,36,0.06) 100%)"
                  : "rgba(255,255,255,0.04)",
                border: isActive
                  ? "1px solid rgba(241,90,36,0.5)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: isActive
                  ? "0 8px 32px rgba(241,90,36,0.15), inset 0 1px 0 rgba(255,255,255,0.08)"
                  : "none",
                backdropFilter: "blur(8px)",
                transition: "background 0.7s ease, border-color 0.7s ease, box-shadow 0.7s ease",
              }}
            >
              {/* Top shimmer line on active */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(241,90,36,0.6), transparent)",
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.7s ease",
                }}
              />

              {/* Icon container */}
              <div
                className="shrink-0 flex items-center justify-center rounded-lg"
                style={{
                  width: isActive ? 36 : 28,
                  height: isActive ? 36 : 28,
                  background: isActive ? "rgba(241,90,36,0.2)" : "rgba(255,255,255,0.06)",
                  transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontSize: isActive ? "20px" : "15px", transition: "font-size 0.9s cubic-bezier(0.4,0,0.2,1)" }}
                >
                  {item.icon}
                </span>
              </div>

              {/* Label */}
              <span
                className="font-semibold tracking-tight truncate"
                style={{
                  fontSize: isActive ? "15px" : "13px",
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)",
                  transition: "font-size 0.9s cubic-bezier(0.4,0,0.2,1), color 0.7s ease",
                }}
              >
                {item.label}
              </span>
            </div>
            <div
              className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/50 z-20"
              style={{ opacity: isActive ? 1 : 0, transition: "opacity 1s ease" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 -960 960 960" fill="white">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function AboutHero() {
  return (
    <>
      {/* Fixed hero — sits behind scrolling content */}
      <section
        className="fixed top-0 left-0 w-full h-screen flex items-center overflow-hidden bg-[#060c18]"
        style={{ zIndex: 0 }}
      >
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <VideoLoop />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(105deg, rgba(6,12,24,0.92) 0%, rgba(6,12,24,0.75) 50%, rgba(6,12,24,0.55) 100%)"
          }} />
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{
            background: "linear-gradient(to top, rgba(6,12,24,1) 0%, transparent 100%)"
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-24 w-full flex items-center justify-end gap-12">
          <motion.div
            className="hidden lg:flex flex-col items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <FeaturePills />
          </motion.div>
        </div>
      </section>

      {/* Spacer so the page content starts below the fixed hero */}
      <div style={{ height: "100vh" }} />
    </>
  );
}

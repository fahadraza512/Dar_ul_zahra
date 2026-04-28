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

const CARD_H = 52, GAP = 12, STEP = CARD_H + GAP;
// Desktop: 5 visible pills. Mobile: 3 visible pills
const VISIBLE_LG = 5, VISIBLE_SM = 3;
const CENTER_LG = Math.floor(VISIBLE_LG / 2);
const CENTER_SM = Math.floor(VISIBLE_SM / 2);

function FeaturePills({ small = false }: { small?: boolean }) {
  const VISIBLE = small ? VISIBLE_SM : VISIBLE_LG;
  const CENTER  = small ? CENTER_SM  : CENTER_LG;

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
      className="relative w-full select-none overflow-visible"
      style={{
        height: VISIBLE * STEP,
        paddingRight: small ? "12px" : "20px",
        paddingLeft: "4px",
        paddingTop: "8px",
        paddingBottom: "8px",
      }}
      aria-label="Feature carousel"
      role="region"
    >
      {/*
        Key each pill by its itemIdx so each item is a stable DOM node.
        When index advances, each item's topPx changes → CSS transition
        slides the entire block (content + background) smoothly up.
        We render VISIBLE+4 items to have enough off-screen items above/below.
      */}
      {Array.from({ length: VISIBLE + 4 }, (_, i) => {
        const slotOffset = i - 2;
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
              top: topPx,
              height: CARD_H,
              width: small ? "calc(100% - 12px)" : "calc(100% - 20px)",
              transform: `scale(${scale})`,
              transformOrigin: "center center",
              opacity,
              zIndex: VISIBLE - absDist,
              transition: "top 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.7s ease",
            }}
          >
            <div
              className="absolute inset-0 flex items-center gap-3 px-4 rounded-2xl overflow-hidden"
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
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(241,90,36,0.6), transparent)",
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.7s ease",
                }}
              />
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
            {/* Active checkmark badge */}
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

        {/* Content — LEFT text + RIGHT pills */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-6 lg:px-24 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-12 pt-20 pb-4 lg:pb-0 overflow-y-auto lg:overflow-visible" style={{ maxHeight: "calc(100vh - 80px)" }}>

          {/* LEFT — headline */}
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-3 md:mb-5">
              <div className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">About Us</span>
            </div>
            <h1
              className="font-manrope font-black text-white leading-tight uppercase mb-3 md:mb-5"
              style={{ fontSize: "clamp(1.4rem, 4vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              Educating Orphans &<br />
              <span className="text-primary">Needy Children</span>
            </h1>
            <p className="text-white/60 text-xs md:text-base leading-relaxed max-w-md pl-3 md:pl-4 border-l-2 border-primary/40 mb-4 md:mb-8" style={{ fontWeight: 300 }}>
              A federally registered non-profit charity founded in 2019 by the Kazmi family in Kot Adu, Punjab, Pakistan.
            </p>
            <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3 pt-4 md:pt-5 border-t border-white/10">
              {[
                { n: "37+", l: "Students Funded" },
                { n: "2019", l: "Year Founded" },
                { n: "517/20", l: "Reg. No." },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-5">
                  <div>
                    <div className="text-white font-bold text-sm md:text-base leading-none">{s.n}</div>
                    <div className="text-white/40 text-[10px] md:text-xs tracking-wide uppercase mt-1">{s.l}</div>
                  </div>
                  {i < 2 && <div className="w-px h-5 md:h-6 bg-white/10" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — feature pills: 3 visible on mobile, 5 on desktop */}
          <motion.div
            className="shrink-0 w-full lg:w-80 px-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Mobile: 3 pills */}
            <div className="block lg:hidden">
              <FeaturePills small={true} />
            </div>
            {/* Desktop: 5 pills */}
            <div className="hidden lg:block">
              <FeaturePills small={false} />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Spacer so the page content starts below the fixed hero */}
      <div style={{ height: "100vh" }} />
    </>
  );
}

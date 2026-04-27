"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── HeroCanvas (particle field) ─────────────────────────────────────────────
const COLORS = [
  "183, 18, 42", "220, 60, 60", "200, 80, 40",
  "150, 30, 80", "120, 60, 180", "255, 120, 80", "255, 255, 255",
];
const REPEL_RADIUS = 120;
const REPEL_STRENGTH = 3;

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  baseVx: number; baseVy: number;
  radius: number; color: string; opacity: number;
}

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const activeRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 80 : 200;

    const spawn = (): Particle => {
      const bvx = (Math.random() - 0.5) * 1.2;
      const bvy = (Math.random() - 0.5) * 1.2;
      return {
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: bvx, vy: bvy, baseVx: bvx, baseVy: bvy,
        radius: Math.random() * 2.5 + 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.6 + 0.1,
      };
    };

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: COUNT }, spawn);
    };

    const draw = () => {
      if (!activeRef.current) { animId = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      for (const p of particles) {
        const dx = p.x - mx, dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          p.vx += (dx / dist) * force * REPEL_STRENGTH * 0.15;
          p.vy += (dy / dist) * force * REPEL_STRENGTH * 0.15;
        }
        p.vx += (p.baseVx - p.vx) * 0.04;
        p.vy += (p.baseVy - p.vy) * 0.04;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 8) { p.vx = (p.vx / speed) * 8; p.vy = (p.vy / speed) * 8; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    const onMouseMove  = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    const onVisibility = () => { activeRef.current = !document.hidden; };

    const timer = setTimeout(() => { resize(); draw(); }, 50);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full hero-zoom-in delay-100" />;
}

// ─── MagneticText ─────────────────────────────────────────────────────────────
function MagneticText({ children, strength = 25 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId: number;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx, dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = Math.max(rect.width, rect.height);
        if (dist < maxDist && dist > 0) {
          const factor = (1 - dist / maxDist) * strength;
          el.style.transform = `translate(${(-dx / dist) * factor}px, ${(-dy / dist) * factor * 0.5}px)`;
        } else {
          el.style.transform = "translate(0px, 0px)";
        }
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(rafId); };
  }, [strength]);

  return (
    <div ref={ref} style={{ transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)", willChange: "transform", display: "inline-block" }}>
      {children}
    </div>
  );
}

// ─── FeaturePills ─────────────────────────────────────────────────────────────
const pillItems = [
  { icon: "web",           label: "Launch a website" },
  { icon: "move_to_inbox", label: "Transfer WordPress sites" },
  { icon: "speed",         label: "Boost Performance" },
  { icon: "cloud_upload",  label: "Deploy Instantly" },
  { icon: "shield",        label: "Secure Your Site" },
  { icon: "storage",       label: "Managed VPS" },
  { icon: "encrypted",     label: "SSL Protection" },
  { icon: "cloud",         label: "Cloud Hosting" },
];

const CARD_H = 52, GAP = 12, STEP = CARD_H + GAP, VISIBLE = 5, CENTER = Math.floor(VISIBLE / 2);

function FeaturePills() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) t = setInterval(() => setIndex((p) => p + 1), 3000);
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
            <div className="absolute inset-0 flex items-center justify-center gap-3 px-4 rounded-xl bg-white/10 border border-white/10 overflow-hidden">
              <span
                className="material-symbols-outlined text-white shrink-0"
                style={{ fontSize: isActive ? "24px" : "18px", transition: "font-size 0.9s cubic-bezier(0.4,0,0.2,1)" }}
              >
                {item.icon}
              </span>
              <span
                className="text-white font-semibold tracking-tight truncate"
                style={{ fontSize: isActive ? "20px" : "16px", transition: "font-size 0.9s cubic-bezier(0.4,0,0.2,1)" }}
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

// ─── Hero (main export) ───────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      className="hero-reveal fixed top-0 left-0 w-full h-screen min-h-[700px] flex items-center"
      style={{ backgroundColor: "#111111", zIndex: 0 }}
    >
      <HeroCanvas />

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-24 flex items-center justify-between gap-8 pt-16">
        {/* Left — text */}
        <div className="text-left w-full lg:max-w-xl lg:shrink-0">
          <h1 className="hero-zoom-in delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tighter mb-4 sm:mb-6">
            <MagneticText>
              ENGINEERED FOR <br />
              <span className="text-primary italic">MOMENTUM.</span>
            </MagneticText>
          </h1>
          <p className="hero-zoom-in delay-300 text-white/60 text-sm sm:text-base md:text-lg max-w-lg mb-6 sm:mb-8 font-medium">
            High-performance hosting built for scale. Experience the power of enterprise-grade cloud
            architecture with sub-millisecond latency.
          </p>
          <div className="hero-zoom-in delay-400 flex flex-col sm:flex-row items-stretch sm:items-start gap-3">
            <Link
              href="/contact-sales"
              className="bg-primary hover:bg-primary-container text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(183,18,42,0.4)]"
            >
              Accelerate Your Website
            </Link>
            <Link
              href="/network-status"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              View Network Status
            </Link>
          </div>
        </div>

        {/* Right — pills */}
        <div className="hidden lg:flex flex-1 items-center justify-end hero-zoom-in delay-300">
          <FeaturePills />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
        role="button"
        aria-label="Scroll to features"
      >
        <span className="material-symbols-outlined text-white/40 text-3xl">expand_more</span>
      </div>
    </section>
  );
}

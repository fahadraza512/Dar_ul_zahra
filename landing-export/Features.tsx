"use client";

import { useRef, useEffect } from "react";

// ─── WPPreview ────────────────────────────────────────────────────────────────
function WPPreview() {
  const videoRef     = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playRef      = useRef<Promise<void> | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) playRef.current = v.play().catch(() => {});

    let card: HTMLElement | null = containerRef.current;
    while (card && !card.classList.contains("group")) card = card.parentElement;
    if (!card) return;

    const play = () => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = 0;
      playRef.current = v.play().catch(() => {});
    };
    const stop = () => {
      const v = videoRef.current;
      if (!v) return;
      const p = playRef.current;
      if (p) p.then(() => { v.pause(); v.currentTime = 0; }).catch(() => {});
      else { v.pause(); v.currentTime = 0; }
      playRef.current = null;
    };

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", stop);
    return () => { card!.removeEventListener("mouseenter", play); card!.removeEventListener("mouseleave", stop); };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-4 bottom-4 right-4 w-1/2 hidden md:block">
      <div className="w-full h-full bg-white shadow-2xl rounded-lg transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 overflow-hidden border border-neutral-200 p-2">
        <video ref={videoRef} muted playsInline preload="auto" className="w-full h-full object-cover rounded-lg opacity-90" loop>
          <source src="https://static-cdn.siteground.com/img/home/hover-videos/wordpress_hosting_en.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

// ─── BuilderPreview ───────────────────────────────────────────────────────────
const BUILDER_VIDEO = "https://static-cdn.siteground.com/img/home/hover-videos/online_store_en.mp4";
const BUILDER_COVER = "https://static-cdn.siteground.com/img/home/hover-videos/covers/website_builder.jpg";

function BuilderPreview() {
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const p1 = useRef<Promise<void> | null>(null);
  const p2 = useRef<Promise<void> | null>(null);

  useEffect(() => {
    let card: HTMLElement | null = containerRef.current;
    while (card && !card.classList.contains("group")) card = card.parentElement;
    if (!card) return;

    const play = () => {
      [v1Ref, v2Ref].forEach((ref, i) => {
        const v = ref.current; if (!v) return;
        v.currentTime = 0;
        const pr = v.play().catch(() => {});
        if (i === 0) p1.current = pr; else p2.current = pr;
      });
    };
    const stop = () => {
      [[v1Ref, p1], [v2Ref, p2]].forEach(([vr, pr]) => {
        const v = (vr as typeof v1Ref).current;
        const p = (pr as typeof p1).current;
        if (!v) return;
        if (p) p.then(() => { v.pause(); v.currentTime = 0; }).catch(() => {});
        else { v.pause(); v.currentTime = 0; }
        (pr as typeof p1).current = null;
      });
    };

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", stop);
    return () => { card!.removeEventListener("mouseenter", play); card!.removeEventListener("mouseleave", stop); };
  }, []);

  return (
    <div ref={containerRef} className="mt-4 relative h-28 sm:h-32 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-32 h-32 bg-white rounded-lg shadow-md border border-neutral-200 transform -rotate-12 translate-x-4 overflow-hidden">
          <video ref={v1Ref} poster={BUILDER_COVER} muted playsInline preload="auto" className="w-full h-full object-cover">
            <source src={BUILDER_VIDEO} type="video/mp4" />
          </video>
        </div>
        <div className="w-24 h-24 rounded-lg border border-primary/20 transform rotate-6 -translate-x-4 overflow-hidden">
          <video ref={v2Ref} muted playsInline preload="auto" className="w-full h-full object-cover">
            <source src={BUILDER_VIDEO} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

// ─── StorePreview ─────────────────────────────────────────────────────────────
function StorePreview() {
  const videoRef     = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playRef      = useRef<Promise<void> | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) playRef.current = v.play().catch(() => {});

    let card: HTMLElement | null = containerRef.current;
    while (card && !card.classList.contains("group")) card = card.parentElement;
    if (!card) return;

    const play = () => {
      if (!videoRef.current) return;
      videoRef.current.currentTime = 0;
      playRef.current = videoRef.current.play().catch(() => {});
    };
    const stop = () => {
      const v = videoRef.current; if (!v) return;
      const p = playRef.current;
      if (p) p.then(() => { v.pause(); v.currentTime = 0; }).catch(() => {});
      else { v.pause(); v.currentTime = 0; }
      playRef.current = null;
    };

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", stop);
    return () => { card!.removeEventListener("mouseenter", play); card!.removeEventListener("mouseleave", stop); };
  }, []);

  return (
    <div ref={containerRef} className="mt-4 relative h-40 md:absolute md:inset-x-5 md:bottom-5 md:top-[160px] md:h-auto rounded-xl overflow-hidden">
      <video ref={videoRef} muted playsInline loop preload="auto" className="w-full h-full object-cover">
        <source src="https://static-cdn.siteground.com/img/home/hover-videos/online_store_en.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

// ─── Inline mini-previews ─────────────────────────────────────────────────────
const HostingPreview = () => (
  <div className="mt-2 rounded-lg overflow-hidden border border-neutral-100 shadow-sm">
    <div className="bg-neutral-950 px-3 py-1 flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span className="ml-auto font-mono text-[8px] text-emerald-400 font-bold">+85.2% faster</span>
    </div>
    <div className="bg-white px-3 pt-3 pb-2">
      <div className="flex items-end gap-1 h-14">
        {[25,38,30,50,42,62,55,78,68,100].map((h, i) => {
          const color = i < 5 ? "bg-neutral-200" : `bg-primary/${[20,30,50,70,100][i-5]}`;
          return (
            <div key={i} className="flex-1 flex flex-col items-center justify-end">
              <div className={`w-full rounded-t-sm ${color}`} style={{ height: `${h}%` }} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between mt-1.5 border-t border-neutral-100 pt-1">
        <span className="text-[8px] text-neutral-300 font-medium">Jan</span>
        <span className="text-[8px] text-primary font-bold">Now ↑</span>
      </div>
    </div>
  </div>
);

const EmailPreview = () => (
  <div className="mt-2 relative h-20">
    <div className="absolute top-1 right-0 w-24 h-14 bg-neutral-50 rounded-lg border border-neutral-100 rotate-3 overflow-hidden">
      <div className="h-1 w-full bg-primary/20" />
      <div className="p-1.5 space-y-1">
        <div className="h-1 w-3/4 bg-neutral-200 rounded-full" />
        <div className="h-3 bg-primary/10 rounded flex items-center justify-center">
          <span className="text-[6px] font-black text-primary tracking-widest">OPEN →</span>
        </div>
      </div>
    </div>
    <div className="absolute top-0 left-0 w-28 h-16 bg-white rounded-lg border border-neutral-100 shadow-md -rotate-1 overflow-hidden">
      <div className="h-1 w-full bg-primary" />
      <div className="p-1.5 space-y-1">
        <div className="h-1 w-full bg-neutral-100 rounded-full" />
        <div className="h-1 w-2/3 bg-neutral-100 rounded-full" />
        <div className="flex gap-1 mt-1">
          <div className="h-4 w-4 rounded-full bg-primary/20" />
          <div className="h-4 w-4 rounded-full bg-primary/10" />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 bg-neutral-900 text-white rounded-full px-2 py-0.5 flex items-center gap-1 shadow-lg">
      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-[8px] font-bold">42% open rate</span>
    </div>
  </div>
);

// ─── Shared card class helpers ────────────────────────────────────────────────
const lc = "group relative overflow-hidden rounded-xl border border-primary/10 bg-primary/3 transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-800 hover:shadow-lg p-5";
const dc = "group relative overflow-hidden rounded-xl border border-white/5 bg-neutral-900 transition-all duration-300 hover:border-primary/30 hover:shadow-lg p-5";
const Icon = ({ name }: { name: string }) => (
  <span className="material-symbols-outlined text-2xl text-primary group-hover:text-white transition-colors">{name}</span>
);

// ─── Features section (main export) ──────────────────────────────────────────
export default function Features() {
  return (
    <section id="features" className="min-h-screen px-6 py-12 bg-white kinetic-grid-bg flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">

        <div className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-6 bg-primary" />
              <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tighter leading-tight">
              Everything You Need <br />To Scale Fast.
            </h2>
          </div>
          <p className="text-neutral-400 text-xs max-w-xs text-left leading-relaxed">
            One platform. Every tool you need to launch, grow, and scale your online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 auto-rows-auto gap-5">

          {/* WordPress — wide */}
          <div className={`sm:col-span-2 md:col-span-8 ${lc} min-h-[180px]`}>
            <div className="md:w-1/2 relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="php" />
                <span className="text-[9px] font-black px-2 py-0.5 rounded-full border border-primary/40 text-primary tracking-wide">Most Popular</span>
              </div>
              <h3 className="text-base font-black text-neutral-900 group-hover:text-white mb-1">Hosting for WordPress</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-3 group-hover:text-neutral-300">Optimized for speed and security. One-click installs, managed updates, and expert support.</p>
              <button className="text-primary font-black text-[10px] flex items-center gap-1 group-hover:gap-2.5 transition-all tracking-wide">
                LEARN MORE <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </button>
            </div>
            <WPPreview />
          </div>

          {/* Website Builder */}
          <div className={`md:col-span-4 ${lc}`}>
            <Icon name="dashboard_customize" />
            <h3 className="text-base font-black text-neutral-900 group-hover:text-white mt-3 mb-1">Website Builder</h3>
            <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300">Launch a stunning AI-powered website in minutes. No tech skills required.</p>
            <BuilderPreview />
          </div>

          {/* Online Store */}
          <div className={`md:col-span-4 md:row-span-2 ${lc}`}>
            <Icon name="shopping_cart" />
            <h3 className="text-base font-black text-neutral-900 group-hover:text-white mt-3 mb-1">Online Store</h3>
            <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300">Scale your business with powerful e-commerce tools and zero transaction fees.</p>
            <StorePreview />
          </div>

          {/* Web Hosting */}
          <div className={`md:col-span-4 ${lc}`}>
            <Icon name="speed" />
            <h3 className="text-base font-black text-neutral-900 group-hover:text-white mt-3 mb-1">Web Hosting</h3>
            <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300">NVMe-powered servers for any project. Deploy in seconds, scale in minutes.</p>
            <HostingPreview />
          </div>

          {/* Email Marketing */}
          <div className={`md:col-span-4 ${lc}`}>
            <Icon name="alternate_email" />
            <h3 className="text-base font-black text-neutral-900 group-hover:text-white mt-3 mb-1">Email Marketing</h3>
            <p className="text-neutral-400 text-xs leading-relaxed group-hover:text-neutral-300">Convert visitors into loyal customers with high-converting email campaigns.</p>
            <EmailPreview />
          </div>

          {/* Speed Force AI */}
          <div className={`sm:col-span-2 md:col-span-8 md:col-start-5 ${dc} relative`}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent" />
            <div className="flex flex-col md:flex-row h-full gap-6">
              <div className="md:w-56 shrink-0 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-2xl text-white">auto_awesome</span>
                  <span className="bg-primary text-white text-[8px] px-2 py-0.5 rounded-full font-black tracking-widest">NEW</span>
                </div>
                <h3 className="text-base font-black text-white mb-0.5">Speed Force AI</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-2">Predicts traffic spikes and scales resources automatically — before you notice.</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Auto-scaling", "Anomaly detection", "Cost optimizer"].map((t) => (
                    <span key={t} className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">{t}</span>
                  ))}
                </div>
                <button className="text-white font-black text-[10px] flex items-center gap-1 group-hover:gap-2.5 transition-all tracking-wide">
                  TRY BETA <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
              <div className="flex-1 relative min-h-[140px]">
                <div className="absolute inset-0 flex items-center">
                  <div className="bg-[#0d1117] rounded-xl w-full p-3 font-mono text-[11px] border border-white/8 shadow-2xl group-hover:-translate-y-1 transition-transform duration-500 overflow-hidden">
                    <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/8">
                      <div className="flex gap-1.5 shrink-0">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex-1 min-w-0 mx-2 bg-white/5 rounded px-2 py-0.5 text-[9px] text-white/40 text-center tracking-wide truncate">
                        ~/speedforce/autoscale.js
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 text-[9px] font-bold tracking-widest">LIVE</span>
                      </div>
                    </div>
                    <div className="space-y-1 leading-relaxed">
                      {[
                        <><span className="text-violet-400">const </span><span className="text-sky-300">autoScale</span><span className="text-white/50"> = </span><span className="text-violet-400">async</span><span className="text-white/50"> (load) {`=>`} {"{"}</span></>,
                        <span className="pl-3 text-neutral-500 italic">{"// AI-powered threshold detection"}</span>,
                        <><span className="pl-3"><span className="text-amber-300">if </span><span className="text-white/50">(load </span><span className="text-pink-400">{">"} </span><span className="text-sky-300">threshold</span><span className="text-white/50">) {"{"}</span></span></>,
                        <><span className="pl-6"><span className="text-violet-400">await </span><span className="text-white/70">provision(</span><span className="text-emerald-400">node_k8s</span><span className="text-white/70">);</span></span></>,
                        <><span className="pl-6"><span className="text-sky-300">notify</span><span className="text-white/50">(</span><span className="text-orange-300">&quot;Scaled ✓&quot;</span><span className="text-white/50">);</span></span></>,
                        <span className="pl-3 text-white/40">{"}"}</span>,
                        <span className="text-white/40">{"}"}</span>,
                      ].map((line, i) => (
                        <div key={i} className="flex gap-2">
                          <span className="text-white/20 w-3 shrink-0 select-none text-[9px]">{i + 1}</span>
                          <span className="truncate">{line}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-white/8 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        <span className="text-emerald-400 text-[9px] font-bold shrink-0">Node provisioned</span>
                        <span className="text-white/20 text-[9px]">·</span>
                        <span className="text-white/40 text-[9px]">340ms</span>
                        <span className="text-white/20 text-[9px]">·</span>
                        <span className="text-white/40 text-[9px] truncate">k8s-node-07</span>
                      </div>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">✓ OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

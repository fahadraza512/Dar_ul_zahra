/**
 * Landing page — drop this into your Next.js app/page.tsx
 *
 * Required setup:
 *  1. Copy all files from landing-export/ into your project
 *  2. Install: next react react-dom tailwindcss @tailwindcss/postcss
 *  3. Add Google Fonts to layout.tsx: Space_Grotesk + Manrope
 *  4. Copy globals.css → src/styles/globals.css (or wherever your global CSS lives)
 *  5. Download Material Symbols woff2 → public/fonts/material-symbols-outlined.woff2
 *     (or use the Google Fonts CDN link in your <head>)
 *  6. Add to next.config.ts images.remotePatterns for speedforce.agency
 *     (only needed if you keep the logo URL; swap it for your own logo)
 */

import { lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

// Lazy-load below-the-fold sections for faster initial paint
const Features = lazy(() => import("./Features"));
const Stats    = lazy(() => import("./Stats"));
const Pricing  = lazy(() => import("./Pricing"));
const Footer   = lazy(() => import("./Footer"));

export default function LandingPage() {
  return (
    <>
      {/* Scroll reset — optional, prevents browser restoring scroll position */}
      <ScrollReset />

      {/* Transparent navbar that becomes solid on scroll */}
      <Navbar transparent />

      {/* Full-screen hero with particle canvas */}
      <Hero />

      {/* Spacer so the fixed hero is visible before content scrolls in */}
      <div style={{ height: "100vh" }} />

      {/* Content sections slide over the hero */}
      <div className="relative z-10 rounded-t-3xl overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.4)]">
        <Suspense fallback={null}>
          <Features />
          <Stats />
          <Pricing />
          <Footer showBanner />
        </Suspense>
      </div>
    </>
  );
}

// ─── Tiny inline ScrollReset (avoids an extra file) ──────────────────────────
import { useEffect } from "react";

function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return null;
}

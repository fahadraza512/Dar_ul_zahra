"use client";
import { useEffect, useState } from "react";

// Pure CSS animations — GPU compositor thread, zero JS lag
const styles = `
  @keyframes splash-spin-cw  { to { transform: rotate(360deg);  } }
  @keyframes splash-spin-ccw { to { transform: rotate(-360deg); } }
  @keyframes splash-pulse    { 0%,100% { transform: scale(1);   opacity: 0.15; }
                                50%     { transform: scale(1.22); opacity: 0.38; } }
  @keyframes splash-logo     { 0%,100% { transform: scale(1);   opacity: 1;    }
                                50%     { transform: scale(1.08); opacity: 0.88; } }
  @keyframes splash-fade-out { to { opacity: 0; pointer-events: none; visibility: hidden; } }
  @keyframes splash-text-in  { from { opacity: 0; transform: translateY(8px); }
                                to   { opacity: 1; transform: translateY(0);   } }

  #splash-root {
    position: fixed; inset: 0; z-index: 9999;
    background: #f15a24;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    gap: clamp(16px, 4vw, 28px);
  }
  #splash-root.hiding {
    animation: splash-fade-out 0.55s ease-in-out forwards;
  }
  .splash-orbit {
    position: relative;
    width: clamp(140px, 30vw, 200px);
    height: clamp(140px, 30vw, 200px);
  }
  .splash-ring-outer {
    position: absolute; inset: 0; border-radius: 50%;
    border: 2px dashed rgba(255,255,255,0.4);
    animation: splash-spin-cw 8s linear infinite;
    will-change: transform;
  }
  .splash-ring-inner {
    position: absolute; inset: 8%; border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.25);
    animation: splash-spin-ccw 5s linear infinite;
    will-change: transform;
  }
  .splash-pulse-bg {
    position: absolute; inset: 18%; border-radius: 50%;
    background: rgba(255,255,255,0.15);
    animation: splash-pulse 2.4s ease-in-out infinite;
    will-change: transform, opacity;
  }
  .splash-logo-wrap {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
  }
  .splash-logo {
    width: 55%; height: 55%; object-fit: contain;
    animation: splash-logo 1.8s ease-in-out infinite;
    will-change: transform, opacity;
  }
  .splash-text-wrap {
    display: flex; flex-direction: column;
    align-items: center; gap: 6px;
  }
  .splash-title {
    color: #2d5a1b;
    font-size: clamp(14px, 4vw, 22px);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: NexaRustSlab, serif;
    opacity: 0;
    animation: splash-text-in 0.6s ease-out 0.4s forwards;
  }
  .splash-sub {
    color: rgba(255,255,255,0.65);
    font-size: clamp(9px, 2.5vw, 11px);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0;
    animation: splash-text-in 0.6s ease-out 0.6s forwards;
  }
`;

export default function SplashScreen() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHiding(true), 2800);
    const goneTimer = setTimeout(() => setGone(true), 3400);
    return () => { clearTimeout(hideTimer); clearTimeout(goneTimer); };
  }, []);

  if (gone) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div id="splash-root" className={hiding ? "hiding" : ""} suppressHydrationWarning>
        <div className="splash-orbit">
          <div className="splash-ring-outer" />
          <div className="splash-ring-inner" />
          <div className="splash-pulse-bg" />
          <div className="splash-logo-wrap">
            <img src="/logo.png" alt="Dar ul Zahra" className="splash-logo" />
          </div>
        </div>
        <div className="splash-text-wrap">
          <p className="splash-title">DAR-UL-ZAHRA</p>
          <p className="splash-sub">Educational Centre</p>
        </div>
      </div>
    </>
  );
}

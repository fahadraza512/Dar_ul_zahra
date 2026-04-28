"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutScrollSheet({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Only a subtle shadow fade — no y movement, no scale (causes text jitter on mobile)
  const shadow = useTransform(
    scrollY,
    [0, 120],
    ["0 -8px 40px rgba(0,0,0,0)", "0 -8px 60px rgba(0,0,0,0.25)"]
  );

  return (
    <motion.div
      ref={ref}
      className="relative z-10 overflow-hidden"
      style={{ boxShadow: shadow }}
    >
      {children}
    </motion.div>
  );
}

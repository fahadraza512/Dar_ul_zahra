"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AboutScrollSheet({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  // As user scrolls from 0 → 120px, sheet moves up and shadow grows
  const y = useTransform(scrollY, [0, 120], [40, 0]);
  const scale = useTransform(scrollY, [0, 120], [0.98, 1]);
  const shadow = useTransform(
    scrollY,
    [0, 120],
    ["0 -8px 40px rgba(0,0,0,0)", "0 -8px 60px rgba(0,0,0,0.35)"]
  );

  const springY = useSpring(y, { stiffness: 120, damping: 20 });
  const springScale = useSpring(scale, { stiffness: 120, damping: 20 });

  return (
    <motion.div
      ref={ref}
      className="relative z-10 rounded-t-[2.5rem] overflow-hidden"
      style={{
        y: springY,
        scale: springScale,
        boxShadow: shadow,
        transformOrigin: "top center",
      }}
    >
      {children}
    </motion.div>
  );
}

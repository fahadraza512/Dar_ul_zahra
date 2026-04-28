"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutScrollSheet({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Animate border-radius from rounded to flat as user scrolls — same as gallery
  const borderRadius = useTransform(scrollY, [0, 80], ["2.5rem 2.5rem 0 0", "0 0 0 0"]);
  const shadow = useTransform(
    scrollY,
    [0, 120],
    ["0 -8px 40px rgba(0,0,0,0)", "0 -8px 60px rgba(0,0,0,0.25)"]
  );

  return (
    <motion.div
      ref={ref}
      className="relative z-10 overflow-hidden"
      style={{ borderRadius, boxShadow: shadow }}
    >
      {children}
    </motion.div>
  );
}

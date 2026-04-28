"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GalleryScrollSheet({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Only animate shadow — no y/scale springs (they cause the sudden jump)
  const shadow = useTransform(
    scrollY,
    [0, 120],
    ["0 -8px 40px rgba(0,0,0,0)", "0 -8px 60px rgba(0,0,0,0.15)"]
  );

  return (
    <motion.div
      ref={ref}
      className="relative z-10 rounded-t-[2.5rem] overflow-hidden"
      style={{ boxShadow: shadow }}
    >
      {children}
    </motion.div>
  );
}

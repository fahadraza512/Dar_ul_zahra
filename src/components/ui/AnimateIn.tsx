"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimateInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

// Use only y-axis and opacity — never x-axis, to prevent horizontal overflow
const variants = {
  up:    { hidden: { opacity: 0, y: 24 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, y: 16 },  visible: { opacity: 1, y: 0 } },
  right: { hidden: { opacity: 0, y: 16 },  visible: { opacity: 1, y: 0 } },
  none:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

export default function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: AnimateInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

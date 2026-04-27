"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const stats = [
  { value: 37, suffix: "+", label: "Total Students",   prefix: "" },
  { value: 20, suffix: "+", label: "Boys",              prefix: "" },
  { value: 17, suffix: "+", label: "Girls",             prefix: "" },
  { value: 37, suffix: "+", label: "Orphans",           prefix: "" },
];

// Easing function — ease out cubic
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2200;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            setCount(Math.floor(eased * value));

            if (progress < 1) {
              rafRef.current = requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          rafRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-primary py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.12}>
              <motion.div
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
                  <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </p>
                <p className="text-white/80 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

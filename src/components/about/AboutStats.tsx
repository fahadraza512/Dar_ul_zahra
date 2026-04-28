"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

const stats = [
  { value: 15, suffix: "B+", prefix: "PKR ", label: "Scholarships Disbursed", icon: "💰" },
  { value: 20, suffix: "K+", prefix: "", label: "Students Supported", icon: "👨‍🎓" },
  { value: 150, suffix: "+", prefix: "", label: "Partner Institutions", icon: "🏛️" },
  { value: 30, suffix: "+", prefix: "", label: "Years of Excellence", icon: "🏆" },
];

function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const run = (now: number) => {
          const p = Math.min((now - start) / 2200, 1);
          setCount(Math.floor(easeOut(p) * value));
          if (p < 1) raf.current = requestAnimationFrame(run);
          else setCount(value);
        };
        raf.current = requestAnimationFrame(run);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); cancelAnimationFrame(raf.current); };
  }, [value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function AboutStats() {
  return (
    <section className="bg-[#0c1525] py-20 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        <AnimateIn direction="up" className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs font-mono tracking-[0.25em] uppercase">By The Numbers</span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-manrope font-black text-white text-4xl lg:text-5xl">
            Our Impact in <span className="text-primary">Numbers</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.1}>
              <motion.div
                className="bg-white/5 border border-white/8 rounded-2xl p-8 text-center backdrop-blur-sm"
                whileHover={{ backgroundColor: "rgba(241,90,36,0.1)", borderColor: "rgba(241,90,36,0.3)", y: -6 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <p className="text-4xl lg:text-5xl font-black text-white mb-2 tabular-nums">
                  <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </p>
                <p className="text-white/40 text-sm uppercase tracking-wider">{s.label}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const students = [
  { value: 37, suffix: "+", label: "Total Students",  desc: "Funded continuously" },
  { value: 20, suffix: "+", label: "Boys",             desc: "Currently enrolled" },
  { value: 17, suffix: "+", label: "Girls",            desc: "Currently enrolled" },
  { value: 37, suffix: "+", label: "Orphans",          desc: "Supported since 2019" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StudentsStatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-primary py-12 px-6 lg:px-24">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <motion.h2
          className="font-manrope font-black text-white text-2xl lg:text-3xl tracking-tight mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Students We Support.
        </motion.h2>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {students.map((s, i) => (
            <motion.div
              key={i}
              className="px-0 lg:px-8 first:pl-0 last:pr-0 pb-6 lg:pb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-manrope font-black text-white leading-none tracking-tighter mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white font-bold text-sm mb-0.5">{s.label}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

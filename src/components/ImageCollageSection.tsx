"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimateIn from "./ui/AnimateIn";

// Shine card wrapper — diagonal sweep on hover
function ShineCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {/* Diagonal shine sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.5) 50%, transparent 75%)",
          skewX: -10,
        }}
        initial={{ x: "-150%" }}
        animate={hovered ? { x: "150%" } : { x: "-150%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </div>
  );
}

// Counter badge
function CounterBadge() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const target = 30;
          const step = Math.ceil(target / (2000 / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref} className="block text-2xl font-black mt-1">{count}+</span>;
}

export default function ImageCollageSection() {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left — collage (hidden on mobile, shown on md+) */}
          <AnimateIn direction="left" className="hidden md:block">
            <div className="relative h-96 lg:h-[560px]">
              {/* Main large image */}
              <motion.div
                className="absolute top-0 overflow-hidden rounded-3xl shadow-xl"
                style={{ height: "65%", zIndex: 0, left: "18%", right: 0 }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ShineCard className="w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
                    alt="Students studying"
                    className="w-full h-full object-cover"
                  />
                </ShineCard>
              </motion.div>

              {/* Second image */}
              <motion.div
                className="absolute bg-white rounded-3xl p-[20px]"
                style={{ width: "52%", height: "43%", bottom: "10%", left: 0, zIndex: 10 }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <ShineCard className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                    alt="Campus building"
                    className="w-full h-full object-cover"
                  />
                </ShineCard>
              </motion.div>

              {/* Orange badge */}
              <motion.div
                className="absolute bg-primary text-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-center px-4 gap-2"
                style={{ width: "36%", height: "43%", bottom: "10%", right: 0, zIndex: 20 }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" viewBox="0 0 58 52" fill="none" className="text-white/80">
                  <path d="M24.2874 51.4146C23.9518 51.4142 23.6228 51.3233 23.3361 51.1519L15.8347 46.6924C15.4171 46.4435 15.1168 46.0419 14.9997 45.5756C14.8825 45.1093 14.9581 44.6164 15.2099 44.2048L15.3105 44.0427C16.517 41.995 17.2186 39.6976 17.3589 37.3348C18.0312 34.094 19.1657 32.2761 20.7793 30.9299C22.393 29.5836 24.4015 28.7793 26.5122 28.634L34.8066 27.974C35.9655 27.8851 37.1246 28.1429 38.1318 28.7138C39.139 29.2847 39.947 30.1418 40.4499 31.1727L50.3706 22.4005C51.2785 21.5923 52.4499 21.1293 53.6739 21.0948C54.8979 21.0604 56.0942 21.4566 57.0477 22.2124L57.3873 22.4784C57.5035 23.6338 44.9738 38.3143 40.7434 40.8578L34.4686 42.2702C29.1796 45.0571 26.0646 50.1011 24.2874 51.4146Z" fill="currentColor"/>
                  <path d="M30.1631 24.4274C26.4782 24.015 23.1621 22.3809 20.6199 19.7247C20.7848 18.5896 21.9388 18.7518 25.5581 21.7461C28.5648 22.8136 30.1631 22.8058C34.4741 22.8058 38.0883 19.2058 38.0883 12.6966C38.0883 6.18741 34.4741 2.58741 30.1631 2.58741C25.8521 2.58741 22.236 6.18741 22.236 12.6966Z" fill="currentColor"/>
                </svg>
                <p className="font-bold text-xs leading-snug">A Journey of 3 Decades</p>
                <p className="text-2xl font-black">30+</p>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Right — content */}
          <AnimateIn direction="right" delay={0.15}>
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-3 block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0c1525] mb-5 md:mb-6 leading-tight font-manrope">
              Shaping Education <span className="text-primary">Through Generosity</span>
            </h2>
            <p className="text-[#5e6d82] leading-relaxed mb-4 text-base md:text-lg">
              For over three decades, we have been dedicated to breaking financial barriers in education — ensuring no deserving student is denied the opportunity to pursue higher learning.
            </p>
            <p className="text-[#5e6d82] leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Through scholarships, interest-free loans, and partnerships with leading institutions, we have supported thousands of students in achieving their academic and professional goals.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                { value: "PKR 15B+", label: "Scholarships" },
                { value: "20,000+", label: "Students" },
                { value: "30+", label: "Years" },
              ].map((h, i) => (
                <motion.div
                  key={i}
                  className="text-center bg-gray-50 rounded-xl p-3 md:p-4 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#fff7f4" }}
                >
                  <p className="text-base md:text-xl font-bold text-primary">{h.value}</p>
                  <p className="text-xs text-[#5e6d82] mt-1">{h.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-primary text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors inline-flex items-center gap-2 text-sm md:text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

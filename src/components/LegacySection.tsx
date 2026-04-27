"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const stats = [
  { value: "850+", label: "Cities Reached" },
  { value: "1,200+", label: "Partner Schools" },
  { value: "40K+", label: "Alumni Network" },
  { value: "15B", label: "PKR Invested" },
];

const orbitImages = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", alt: "Impact 1" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", alt: "Impact 2" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80", alt: "Impact 3" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80", alt: "Impact 4" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80", alt: "Impact 5" },
];

export default function LegacySection() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          <AnimateIn direction="up">
            {/*
              ORBIT MATH (pure CSS, no JS):
              ─────────────────────────────
              Container = square, side S. Ring radius R = S/2.
              Circle diameter D = 0.2S  →  radius d = 0.1S

              Each circle wrapper sits at the container CENTER (left:50%, top:50%).
              The wrapper rotates around that center (transform-origin: 0 0 after offset).

              Inside the wrapper, the circle is translated by R along the X axis.
              Since the wrapper origin is the container center, translateX(R) puts the
              circle's LEFT EDGE at the ring. We then pull back by d (half circle width)
              so the circle CENTER lands exactly on the ring.

              R = 50% of container. D = 20% of container. d = 10% of container.
              translateX(R - d) = translateX(40%) of container.

              But % in translate is relative to the ELEMENT itself, not the container.
              So we use a zero-size wrapper at the center and translate in px via a
              CSS variable trick — OR we use a known ratio.

              Simplest reliable way: use a wrapper that is the full container size,
              positioned at inset:0. Rotate it. Inside, place the circle at
              top: calc(50% - D/2) = 40% from top (since D=20%, half=10%, 50%-10%=40%)
              left: 0 (left edge of container = ring left = center - R).
              But left:0 puts the circle LEFT EDGE at the container left, which is the ring.
              Circle center would be at left: D/2 = 10% from container left.
              Container center is at 50%. Ring is at 0% (left) and 100% (right).
              Circle center at 10% ≠ ring (0%). Off by D/2.

              CORRECT: left: -D/2 = -10% so circle center = 0% = ring left edge. ✓
              top: 50% - D/2 = 40% so circle center = 50% = ring vertical center. ✓

              Then rotating the full-size wrapper rotates the circle around the container center.
            */}
            <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] mx-auto">

              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />

              {orbitImages.map((img, i) => {
                const startDeg = i * 72; // 360/5 = 72°
                return (
                  // Full-size wrapper rotates around container center
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    style={{ rotate: startDeg }}
                    animate={{ rotate: [startDeg, startDeg + 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {/*
                      Circle positioned so its CENTER is on the ring:
                      - Ring is the border of the container (inset-0)
                      - We want center at top of ring: top=0, left=50%
                      - left: calc(50% - 10%) = 40% (50% - half of 20%)
                      - top: calc(0% - 10%) = -10% (ring top - half circle height)
                      This puts the circle center exactly at (50%, 0%) of container = top of ring
                    */}
                    <motion.div
                      className="absolute rounded-full overflow-hidden border-[2px] border-white shadow-md"
                      style={{
                        width: "20%",
                        aspectRatio: "1/1",
                        left: "40%",
                        top: "-10%",
                      }}
                      // Counter-rotate to keep image upright
                      animate={{ rotate: [-startDeg, -(startDeg + 360)] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[42%] aspect-square bg-white rounded-full shadow-xl flex flex-col items-center justify-center text-center z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
                >
                  <span className="text-[clamp(0.6rem,1.8vw,1.1rem)] font-black text-primary leading-tight px-2">
                    30+ Years
                  </span>
                  <span className="text-[clamp(0.4rem,0.9vw,0.5rem)] font-bold text-gray-400 uppercase tracking-tight mt-0.5">
                    Of Excellence
                  </span>
                </motion.div>
              </div>

            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn direction="up" delay={0.15}>
            <span className="text-primary font-bold text-xs md:text-sm tracking-widest uppercase mb-3 block">Our Legacy</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight font-manrope text-[#0c1525]">
              A Journey of <span className="text-primary">3 Decades</span> of Impact
            </h2>
            <p className="text-sm md:text-base text-[#5e6d82] mb-6 md:mb-8 leading-relaxed">
              Since our inception, we have been committed to the dream of an educated nation. Our footprint spans across every corner of the country, reaching the most marginalized communities.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="stats-border pl-3 md:pl-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <div className="text-xl md:text-2xl lg:text-3xl font-black text-[#0c1525]">{s.value}</div>
                  <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}

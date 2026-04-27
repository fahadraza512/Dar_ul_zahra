"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const stats = [
  { value: "850+", label: "Cities Reached" },
  { value: "1,200+", label: "Partner Schools" },
  { value: "40K+", label: "Alumni Network" },
  { value: "15B", label: "PKR Invested" },
];

// 5 images — 360/5 = 72° apart
const orbitImages = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", alt: "Impact 1" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", alt: "Impact 2" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80", alt: "Impact 3" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80", alt: "Impact 4" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80", alt: "Impact 5" },
];

/*
 * HOW THE CENTERING WORKS:
 * ─────────────────────────
 * Container: square, side S. Ring = border of container, radius = S/2.
 *
 * Each image circle has diameter D = imgPct% of S.
 * We want the image CENTER to sit on the ring (radius = S/2 from container center).
 *
 * Technique — "inset arm":
 *   1. Create an arm div inset by D/2 on all sides.
 *      → arm side = S - D, arm radius = (S - D)/2
 *      → arm top edge is at distance D/2 from container top
 *      → container center to arm top edge = S/2 - D/2 = (S-D)/2 = arm radius ✓
 *   2. Place image at top:0, left:50% on the arm with translateX:-50% translateY:-50%
 *      → image center is at arm's top edge
 *      → arm's top edge is exactly on the ring (S/2 from container center) ✓
 *   3. Rotate the arm → image center travels along the ring.
 *   4. Counter-rotate the image → stays upright.
 *
 * imgPct = 20  →  armInset = 10%
 */
const IMG_PCT = 20;   // image diameter as % of container
const ARM_INSET = `${IMG_PCT / 2}%`;
const IMG_SIZE  = `${IMG_PCT}%`;

export default function LegacySection() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          <AnimateIn direction="up">
            <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] mx-auto">

              {/* Dashed orbit ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />

              {/* 5 orbiting circles — centers exactly on the ring */}
              {orbitImages.map((img, i) => {
                const startDeg = i * 72; // 360 / 5 = 72°
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{ inset: ARM_INSET }}
                    animate={{ rotate: [startDeg, startDeg + 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      className="absolute rounded-full overflow-hidden border-2 border-white shadow-md"
                      style={{
                        width: IMG_SIZE,
                        aspectRatio: "1 / 1",
                        left: "50%",
                        top: "0%",
                        translateX: "-50%",
                        translateY: "-50%",
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

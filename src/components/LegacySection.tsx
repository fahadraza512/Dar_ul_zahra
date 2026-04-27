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
];

/**
 * Correct orbit math:
 * - Container is square, side = S
 * - Ring is the border of the container, radius R = S/2
 * - Image circle diameter = D = 27% of S
 * - To place image CENTER on the ring:
 *   The arm rotates around the container center (S/2, S/2)
 *   We place the image at distance R from center along the arm direction
 *   = top: 0, left: 50% on the arm div (which has inset-0, so top:0 = ring top = center - R)
 *   With translateX:-50% translateY:-50% → image center is at (S/2, 0) = top of ring ✓
 *
 * The image is 27% wide. Half = 13.5% sticks outside the ring visually.
 * To keep center ON the ring and not have overflow, we use overflow-hidden on the parent
 * OR we reduce image size so it looks balanced.
 *
 * Best fix: use a slightly inset arm so the pivot point is the ring center line.
 * Inset the arm by half the image size (13.5% of container = half of 27%).
 * Then place image at top:0 with translateY:0 (top edge at arm top = ring center).
 * This way the image center is exactly on the ring.
 */
export default function LegacySection() {
  // Image size as % of container — keep it reasonable
  const imgSize = "24%";
  // Inset = half of imgSize so the arm's top edge = ring center line
  // Ring is at inset:0, so we inset the arm by half the image size
  const armInset = "12%"; // half of 24%

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          <AnimateIn direction="up">
            <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] mx-auto">

              {/* Dashed orbit ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25" />

              {orbitImages.map((img, i) => {
                const startDeg = i * 120;
                return (
                  // Arm: inset by half the image size so its edge = ring center
                  // Rotating this arm moves the image center along the ring
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{ inset: armInset }}
                    animate={{ rotate: [startDeg, startDeg + 360] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Image: placed at top-center of the inset arm */}
                    {/* top:-50% of imgSize moves center to the arm's top edge = ring */}
                    <motion.div
                      className="absolute rounded-full overflow-hidden border-2 border-white shadow-lg"
                      style={{
                        width: imgSize,
                        aspectRatio: "1",
                        left: "50%",
                        top: "0%",
                        translateX: "-50%",
                        translateY: "-50%",
                      }}
                      animate={{ rotate: [-(startDeg), -(startDeg + 360)] }}
                      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[44%] aspect-square bg-white rounded-full shadow-xl flex flex-col items-center justify-center text-center z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
                >
                  <span className="text-[clamp(0.65rem,2vw,1.2rem)] font-black text-primary leading-tight px-2">
                    30+ Years
                  </span>
                  <span className="text-[clamp(0.45rem,1vw,0.55rem)] font-bold text-gray-400 uppercase tracking-tight mt-0.5">
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

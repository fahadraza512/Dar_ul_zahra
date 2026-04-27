"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

/**
 * Each circle is placed at the container center (50%, 50%).
 * Its transform-origin is also the container center.
 * We use translateX(radius) to push it to the ring, then rotate the whole thing.
 * This guarantees the circle CENTER is exactly on the ring at all times.
 */
function OrbitCircle({ index, total, size }: { index: number; total: number; size: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const r = containerRef.current.offsetWidth / 2;
        setRadius(r);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const startAngle = (index / total) * 360;
  const img = orbitImages[index];

  return (
    <div ref={containerRef} className="absolute inset-0">
      {radius > 0 && (
        <motion.div
          style={{
            position: "absolute",
            // Place at exact center of container
            left: "50%",
            top: "50%",
            // translateX pushes the circle center to the ring
            // translateY centers it vertically on the ring
            x: -size / 2,
            y: -size / 2,
            width: size,
            height: size,
            // transform-origin at the circle center, offset back to container center
            originX: size / 2,
            originY: radius + size / 2,
          }}
          animate={{ rotate: [startAngle, startAngle + 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {/* Counter-rotate so image stays upright */}
          <motion.div
            style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", border: "2px solid white", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
            animate={{ rotate: [-startAngle, -(startAngle + 360)] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default function LegacySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerSize(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const radius = containerSize / 2;
  // Circle diameter = 22% of container
  const circleSize = containerSize * 0.22;

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          <AnimateIn direction="up">
            <div
              ref={containerRef}
              className="relative w-full aspect-square max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] mx-auto"
            >
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />

              {/* 5 circles — each center exactly on the ring */}
              {containerSize > 0 && orbitImages.map((img, i) => {
                const angleDeg = (i / orbitImages.length) * 360;
                const angleRad = (angleDeg - 90) * (Math.PI / 180); // start from top
                // Center of circle = point on ring
                const cx = radius + radius * Math.cos(angleRad); // left position
                const cy = radius + radius * Math.sin(angleRad); // top position

                return (
                  <motion.div
                    key={i}
                    style={{
                      position: "absolute",
                      width: circleSize,
                      height: circleSize,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "2px solid white",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                      // Place so center is at (cx, cy)
                      left: cx - circleSize / 2,
                      top: cy - circleSize / 2,
                      // Rotate around the container center
                      originX: radius - (cx - circleSize / 2),
                      originY: radius - (cy - circleSize / 2),
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 0,
                    }}
                  >
                    <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </motion.div>
                );
              })}

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="bg-white rounded-full shadow-xl flex flex-col items-center justify-center text-center z-10"
                  style={{ width: containerSize * 0.42, height: containerSize * 0.42 }}
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

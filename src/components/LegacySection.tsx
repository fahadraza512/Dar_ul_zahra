"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
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
 * Each image starts on the orbit ring (radius = 50% of container)
 * and its center gradually moves to the container center (radius = 0).
 * While moving inward, it also orbits continuously.
 *
 * Implementation:
 * - `progress` goes 0 → 1 (triggered when section enters view)
 * - radius = lerp(50%, 0%) based on progress
 * - The arm still rotates continuously for the orbit effect
 * - Counter-rotation keeps the image upright
 */
function OrbitImage({
  index,
  src,
  alt,
  progress,
}: {
  index: number;
  src: string;
  alt: string;
  progress: ReturnType<typeof useMotionValue<number>>;
}) {
  const startAngle = index * 120; // 0°, 120°, 240°

  // radius: 50% (on ring) → 0% (center), driven by progress
  const radius = useTransform(progress, [0, 1], ["50%", "0%"]);

  // opacity: stays full until near center, then fades slightly
  const opacity = useTransform(progress, [0, 0.7, 1], [1, 1, 0.85]);

  // scale: grows slightly as it merges into center
  const scale = useTransform(progress, [0, 1], [1, 1.15]);

  return (
    // Arm: rotates continuously for orbit
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ rotate: startAngle }}
      animate={{ rotate: [startAngle, startAngle + 360] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      {/*
        Image container:
        - `top` drives the radial position (50% = on ring, 0% = center)
        - translateX(-50%) centers it horizontally on the arm
        - translateY(-50%) centers it on its own axis
        - counter-rotates to stay upright
      */}
      <motion.div
        className="absolute left-1/2 w-[26%] aspect-square rounded-full overflow-hidden border-2 border-white shadow-lg"
        style={{
          top: radius,
          translateX: "-50%",
          translateY: "-50%",
          rotate: useTransform(progress, (p) => -(startAngle + p * 0) - 0),
          opacity,
          scale,
        }}
        // Counter-rotate to keep image upright while arm spins
        animate={{ rotate: [-startAngle, -(startAngle + 360)] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  );
}

export default function LegacySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10%" });

  // Shared progress value: 0 = on orbit, 1 = at center
  const progress = useMotionValue(0);

  useEffect(() => {
    let ctrl: ReturnType<typeof animate> | null = null;
    if (isInView) {
      // Animate outward first (reset), then inward
      progress.set(0);
      ctrl = animate(progress, 1, {
        duration: 3.5,
        delay: 0.6,
        ease: [0.4, 0, 0.2, 1],
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.5,
      });
    } else {
      progress.set(0);
    }
    return () => ctrl?.stop();
  }, [isInView, progress]);

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Orbital montage */}
          <AnimateIn direction="up">
            <div
              ref={sectionRef}
              className="relative w-full aspect-square max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] mx-auto"
            >
              {/* Dashed orbit ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25" />

              {/* Three orbiting + spiraling image circles */}
              {orbitImages.map((img, i) => (
                <OrbitImage key={i} index={i} src={img.src} alt={img.alt} progress={progress} />
              ))}

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
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

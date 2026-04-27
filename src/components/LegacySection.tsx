"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const stats = [
  { value: "850+", label: "Cities Reached" },
  { value: "1,200+", label: "Partner Schools" },
  { value: "40K+", label: "Alumni Network" },
  { value: "15B", label: "PKR Invested" },
];

// Orbit images use percentage-based positioning so they scale with the container
const images = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", className: "absolute top-0 left-1/2 -translate-x-1/2 w-[30%] aspect-square" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", className: "absolute bottom-[10%] right-0 w-[32%] aspect-square" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80", className: "absolute bottom-[2%] left-[2%] w-[26%] aspect-square" },
];

export default function LegacySection() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

          {/* Circular montage — scales with container */}
          <AnimateIn direction="up">
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto flex items-center justify-center">
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Center badge — percentage-based size */}
              <motion.div
                className="relative z-10 w-[44%] aspect-square bg-white rounded-full shadow-2xl flex flex-col items-center justify-center text-center px-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
              >
                <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-black text-primary leading-tight">30+ Years</span>
                <span className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-tighter mt-0.5">Of Excellence</span>
              </motion.div>

              {/* Orbit images */}
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  className={`${img.className} rounded-full overflow-hidden border-2 md:border-4 border-white shadow-xl`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 160 }}
                >
                  <img src={img.src} alt={`Impact ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn direction="up" delay={0.2}>
            <span className="text-primary font-bold text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">Our Legacy</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight font-manrope text-[#0c1525]">
              A Journey of <span className="text-primary">3 Decades</span> of Impact
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#5e6d82] mb-6 md:mb-10 leading-relaxed">
              Since our inception, we have been committed to the dream of an educated nation. Our footprint spans across every corner of the country, reaching the most marginalized communities.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="stats-border pl-3 md:pl-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#0c1525]">{s.value}</div>
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

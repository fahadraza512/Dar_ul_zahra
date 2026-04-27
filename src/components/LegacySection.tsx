"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const stats = [
  { value: "850+", label: "Cities Reached" },
  { value: "1,200+", label: "Partner Schools" },
  { value: "40K+", label: "Alumni Network" },
  { value: "15B", label: "PKR Invested" },
];

const images = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80", pos: "top-0 left-1/2 -translate-x-1/2", size: "w-48 h-48" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80", pos: "bottom-12 right-0", size: "w-52 h-52" },
  { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80", pos: "bottom-4 left-4", size: "w-40 h-40" },
];

export default function LegacySection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Circular montage */}
          <AnimateIn direction="left">
            <div className="relative w-full aspect-square max-w-xs md:max-w-sm lg:max-w-lg mx-auto flex items-center justify-center">
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* Center badge */}
              <motion.div
                className="relative z-10 w-44 h-44 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
              >
                <span className="text-3xl font-black text-primary">30+ Years</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Of Excellence</span>
              </motion.div>

              {/* Orbit images */}
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${img.pos} ${img.size} rounded-full overflow-hidden border-4 border-white shadow-xl`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 160 }}
                  whileHover={{ scale: 1.07, zIndex: 20 }}
                >
                  <img src={img.src} alt={`Impact ${i + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn direction="right" delay={0.2}>
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Our Legacy</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight font-manrope text-[#0c1525]">
              A Journey of <span className="text-primary">3 Decades</span> of Impact
            </h2>
            <p className="text-base md:text-lg text-[#5e6d82] mb-8 md:mb-12 leading-relaxed">
              Since our inception, we have been committed to the dream of an educated nation. Our footprint spans across every corner of the country, reaching the most marginalized communities.
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="stats-border pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <div className="text-4xl font-black text-[#0c1525]">{s.value}</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

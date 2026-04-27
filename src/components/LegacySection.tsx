"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const stats = [
  { value: "850+", label: "Cities Reached" },
  { value: "1,200+", label: "Partner Schools" },
  { value: "40K+", label: "Alumni Network" },
  { value: "15B", label: "PKR Invested" },
];

export default function LegacySection() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Circular montage — fully percentage-based, no fixed px */}
          <AnimateIn direction="up">
            <div className="relative w-full aspect-square max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] mx-auto">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Center badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[42%] aspect-square bg-white rounded-full shadow-xl flex flex-col items-center justify-center text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
                >
                  <span className="text-[clamp(0.6rem,2vw,1.25rem)] font-black text-primary leading-tight px-1">30+ Years</span>
                  <span className="text-[clamp(0.45rem,1vw,0.6rem)] font-bold text-gray-400 uppercase tracking-tight mt-0.5">Of Excellence</span>
                </motion.div>
              </div>

              {/* Top image */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[28%] aspect-square rounded-full overflow-hidden border-2 border-white shadow-lg"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
              >
                <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80" alt="Impact 1" className="w-full h-full object-cover" />
              </motion.div>

              {/* Bottom-right image */}
              <motion.div
                className="absolute bottom-[8%] right-0 w-[30%] aspect-square rounded-full overflow-hidden border-2 border-white shadow-lg"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, type: "spring", stiffness: 160 }}
              >
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80" alt="Impact 2" className="w-full h-full object-cover" />
              </motion.div>

              {/* Bottom-left image */}
              <motion.div
                className="absolute bottom-[4%] left-[2%] w-[25%] aspect-square rounded-full overflow-hidden border-2 border-white shadow-lg"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 160 }}
              >
                <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80" alt="Impact 3" className="w-full h-full object-cover" />
              </motion.div>
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

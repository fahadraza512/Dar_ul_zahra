"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

function ShineCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {children}
    </div>
  );
}

export default function ImageCollageSection() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left — collage: shown on md+, replaced by single image on mobile */}
          <AnimateIn direction="left">
            {/* Mobile: single image */}
            <div className="block md:hidden rounded-2xl overflow-hidden aspect-video shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
                alt="Students studying"
                className="w-full h-full object-cover"
              />
            </div>

            {/* md+: full collage */}
            <div className="hidden md:block relative h-80 lg:h-[520px]">
              {/* Main large image */}
              <motion.div
                className="absolute top-0 overflow-hidden rounded-3xl shadow-xl"
                style={{ height: "80%", zIndex: 0, left: "18%", right: 0 }}
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
                className="absolute rounded-2xl overflow-hidden"
                style={{ width: "52%", height: "43%", bottom: "8%", left: 0, zIndex: 10, outline: "8px solid white" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <ShineCard className="w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                    alt="Campus building"
                    className="w-full h-full object-cover"
                  />
                </ShineCard>
              </motion.div>

              {/* Orange badge */}
              <motion.div
                className="absolute bg-primary text-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-center px-3 gap-1"
                style={{ width: "28%", height: "20%", bottom: "8%", right: 0, zIndex: 20 }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 180 }}
              >
                <p className="font-bold text-[10px] lg:text-xs leading-snug">A Journey of 3 Decades</p>
                <p className="text-xl lg:text-2xl font-black">30+</p>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Right — content */}
          <AnimateIn direction="right" delay={0.15}>
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-3 block">About Us</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0c1525] mb-4 md:mb-6 leading-tight font-manrope">
              Shaping Education <span className="text-primary">Through Generosity</span>
            </h2>
            <p className="text-[#5e6d82] leading-relaxed mb-4 text-sm md:text-base lg:text-lg">
              For over three decades, we have been dedicated to breaking financial barriers in education — ensuring no deserving student is denied the opportunity to pursue higher learning.
            </p>
            <p className="text-[#5e6d82] leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Through scholarships, interest-free loans, and partnerships with leading institutions, we have supported thousands of students in achieving their academic and professional goals.
            </p>

            {/* Stats — 3 cols on sm+, stays 3 cols but text scales down on very small */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
              {[
                { value: "PKR 15B+", label: "Scholarships" },
                { value: "20,000+", label: "Students" },
                { value: "30+", label: "Years" },
              ].map((h, i) => (
                <motion.div
                  key={i}
                  className="text-center bg-gray-50 rounded-xl p-2 md:p-4 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#fff7f4" }}
                >
                  <p className="text-sm md:text-lg lg:text-xl font-bold text-primary leading-tight">{h.value}</p>
                  <p className="text-[10px] md:text-xs text-[#5e6d82] mt-1">{h.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-primary text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors inline-flex items-center gap-2 text-sm md:text-base"
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

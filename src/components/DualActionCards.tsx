"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

export default function DualActionCards() {
  return (
    <section className="py-8 md:py-12 lg:py-14 bg-white z-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Card 1 */}
          <AnimateIn direction="up" delay={0.1}>
            <motion.div
              className="bg-primary p-5 md:p-8 lg:p-12 rounded-2xl text-white relative overflow-hidden h-full"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative z-10">
                <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 font-manrope">
                  Shahbaz Sharif Merit Scholarship
                </h3>
                <p className="text-white/80 mb-4 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
                  Transforming the academic landscape by providing international standard education to the brightest minds.
                </p>
                <motion.button
                  className="bg-white text-primary px-4 md:px-8 py-2 md:py-3.5 rounded-md font-bold text-xs md:text-sm hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Apply Internationally
                </motion.button>
              </div>
              <svg className="absolute -bottom-8 -right-8 w-32 md:w-48 h-32 md:h-48 opacity-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 11-6-11-6z" />
              </svg>
            </motion.div>
          </AnimateIn>

          {/* Card 3 */}
          <AnimateIn direction="up" delay={0.2}>
            <motion.div
              className="bg-primary p-5 md:p-8 lg:p-12 rounded-2xl text-white relative overflow-hidden h-full"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative z-10">
                <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 font-manrope">
                  Federal Merit Scholarship
                </h3>
                <p className="text-white/80 mb-4 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
                  Empowering talented students nationwide with fully funded opportunities to achieve academic excellence.
                </p>
                <motion.button
                  className="bg-white text-primary px-4 md:px-8 py-2 md:py-3.5 rounded-md font-bold text-xs md:text-sm hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Apply Now
                </motion.button>
              </div>
              <svg className="absolute -bottom-8 -right-8 w-32 md:w-48 h-32 md:h-48 opacity-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 11-6-11-6zM1 9v6l11 6 11-6V9" />
              </svg>
            </motion.div>
          </AnimateIn>

          {/* Card 2 */}
          <AnimateIn direction="up" delay={0.15}>
            <motion.div
              className="bg-[#0c1525] p-5 md:p-8 lg:p-12 rounded-2xl text-white relative overflow-hidden h-full"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="relative z-10">
                <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 font-manrope">
                  9 Billion Merit Scholarship
                </h3>
                <p className="text-white/80 mb-4 md:mb-8 text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
                  Local scholarships designed to bridge the gap between financial constraints and educational excellence across 850 cities.
                </p>
                <motion.button
                  className="bg-primary text-white px-4 md:px-8 py-2 md:py-3.5 rounded-md font-bold text-xs md:text-sm hover:bg-primary-dark transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Apply Locally
                </motion.button>
              </div>
              <svg className="absolute -bottom-8 -right-8 w-32 md:w-48 h-32 md:h-48 opacity-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </motion.div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

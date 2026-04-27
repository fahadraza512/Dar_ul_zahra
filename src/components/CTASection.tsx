"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

export default function CTASection() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-primary relative overflow-hidden">
      <motion.div
        className="absolute -top-16 -left-16 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-48 md:w-72 lg:w-96 h-48 md:h-72 lg:h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20 text-center relative z-10">
        <AnimateIn direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 md:mb-6 lg:mb-8 font-manrope">
            Invest in the Future of Education
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-white/90 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Join thousands of donors who are making education accessible for everyone. Your contribution today creates the leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-5">
            <motion.button
              className="bg-white text-primary px-6 md:px-10 py-3 md:py-4 rounded-md font-black text-base md:text-lg shadow-2xl w-full sm:w-auto"
              whileHover={{ scale: 1.05, backgroundColor: "#0c1525", color: "#fff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              DONATE NOW
            </motion.button>
            <motion.button
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 md:px-10 py-3 md:py-4 rounded-md font-bold text-base md:text-lg w-full sm:w-auto"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              READ STORIES
            </motion.button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center relative z-10">
        <AnimateIn direction="up">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 font-manrope">
            Invest in the Future of Education
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Join thousands of donors who are making education accessible for everyone. Your contribution today creates the leaders of tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              className="bg-white text-primary px-12 py-5 rounded-md font-black text-xl shadow-2xl"
              whileHover={{ scale: 1.05, backgroundColor: "#0c1525", color: "#fff" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              DONATE NOW
            </motion.button>
            <motion.button
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-md font-bold text-xl"
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

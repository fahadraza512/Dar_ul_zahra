"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const partners = [
  "Partner One", "Partner Two", "Partner Three", "Partner Four",
  "Partner Five", "Partner Six", "Partner Seven", "Partner Eight",
];

export default function PartnersSection() {
  return (
    <section className="py-10 md:py-14 bg-gray-50 overflow-hidden">
      <AnimateIn direction="up" className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20 mb-8">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Partners</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0c1525] mt-2">
          Trusted By Leading Organizations
        </h2>
      </AnimateIn>

      {/* Marquee — no gap above, flush with header */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-xl px-5 md:px-8 py-3 md:py-5 flex items-center justify-center min-w-[120px] md:min-w-[160px] shadow-sm"
            >
              <span className="text-gray-500 font-semibold text-xs md:text-sm">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

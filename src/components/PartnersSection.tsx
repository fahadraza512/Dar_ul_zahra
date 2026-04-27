"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const partners = [
  "Partner One", "Partner Two", "Partner Three", "Partner Four",
  "Partner Five", "Partner Six", "Partner Seven", "Partner Eight",
];

export default function PartnersSection() {
  return (
    <section className="py-14 bg-gray-50 overflow-hidden">
      <AnimateIn direction="up" className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Partners</span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c1525] mt-2">
          Trusted By Leading Organizations
        </h2>
      </AnimateIn>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {[...partners, ...partners].map((name, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-xl px-8 py-5 flex items-center justify-center min-w-[160px] shadow-sm"
              whileHover={{ scale: 1.06, borderColor: "#f15a24", boxShadow: "0 4px 20px rgba(241,90,36,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-gray-500 font-semibold text-sm">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

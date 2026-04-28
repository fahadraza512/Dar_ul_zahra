"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";

export default function AboutFooterCTA() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <AnimateIn direction="left">
          <h3 className="font-manrope font-black text-[#0c1525] text-2xl md:text-3xl tracking-tighter mb-2">
            Ready to make a difference?
          </h3>
          <p className="text-[#5e6d82] text-sm font-light">
            Apply for a scholarship or support a student today.
          </p>
        </AnimateIn>

        <AnimateIn direction="right" delay={0.1}>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/scholarships"
                className="relative inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-primary/25 overflow-hidden group"
              >
                <span className="relative z-10">Apply for Scholarship</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <motion.div className="absolute inset-0 bg-white/15" style={{ skewX: -15 }}
                  initial={{ x: "-120%" }} whileHover={{ x: "220%" }} transition={{ duration: 0.45 }} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#0c1525]/20 hover:border-primary text-[#0c1525] hover:text-primary font-bold text-sm px-8 py-3.5 rounded-full transition-all"
              >
                Contact Us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}

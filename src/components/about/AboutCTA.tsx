"use client";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-[#0c1525] overflow-hidden relative">
      {/* Animated blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-screen-xl mx-auto px-8 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left */}
          <AnimateIn direction="left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-mono tracking-[0.25em] uppercase">Get Involved</span>
            </div>
            <h2 className="font-manrope font-black text-white text-4xl lg:text-5xl leading-tight mb-6">
              Be Part of the<br />
              <span className="text-primary">Change</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Whether you are a student seeking support, a donor wanting to give back, or an institution looking to partner — there is a place for you in our mission.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/scholarships"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-sm shadow-2xl shadow-primary/30 group">
                  Apply for Scholarship
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-primary text-white hover:text-primary px-8 py-4 rounded-full font-bold text-sm transition-all">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Right — quick links bento */}
          <AnimateIn direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎓", title: "Students", desc: "Apply for scholarships and financial aid", href: "/scholarships" },
                { icon: "💝", title: "Donors", desc: "Support a student's educational journey", href: "/donate" },
                { icon: "🏫", title: "Institutions", desc: "Partner with us to expand reach", href: "/contact" },
                { icon: "🎖️", title: "Alumni", desc: "Give back through our alumni program", href: "/programs/alumni" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  className="bg-white/5 border border-white/8 rounded-2xl p-6 backdrop-blur-sm block"
                  whileHover={{ backgroundColor: "rgba(241,90,36,0.12)", borderColor: "rgba(241,90,36,0.35)", y: -4 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  // @ts-ignore
                  transition2={{ delay: i * 0.1 }}
                >
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </motion.a>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

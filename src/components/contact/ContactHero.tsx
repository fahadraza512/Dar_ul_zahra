"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative bg-[#0c1525] pt-44 pb-24 px-6 lg:px-24 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(241,90,36,0.4) 50%, transparent 100%)" }} />

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Contact Us</span>
            </div>
            <h1 className="font-manrope font-black text-white leading-[0.95] tracking-tighter"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>
              Get In<br />
              <span className="text-primary">Touch.</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-white/45 text-lg font-light max-w-md lg:text-right leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Whether you want to donate, sponsor a child, visit our centre, or just ask a question — we are here for you.
          </motion.p>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: "Phone",    value: "+92 345 5006512" },
            { label: "WhatsApp", value: "+92 333 6006512" },
            { label: "Email",    value: "Darulzahra72@gmail.com" },
            { label: "Location", value: "Kot Adu, Punjab, Pakistan" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{item.label}</p>
              <p className="text-white font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const lc = "group relative overflow-hidden rounded-xl border border-primary/10 bg-primary/3 transition-all duration-300 hover:bg-neutral-900 hover:border-neutral-800 hover:shadow-xl p-6 cursor-default";
const dc = "group relative overflow-hidden rounded-xl border border-white/5 bg-neutral-900 transition-all duration-300 hover:border-primary/30 hover:shadow-xl p-6 cursor-default";

export default function AboutBento() {
  return (
    <section className="bg-white py-20 px-6"
      style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(241,90,36,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }}>
      <div className="max-w-screen-xl mx-auto">

        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px w-6 bg-primary" />
              <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tighter leading-tight">
              Everything We Do<br />To Empower Students.
            </h2>
          </div>
          <p className="text-neutral-400 text-xs max-w-xs leading-relaxed">
            One mission. Every program you need to access, grow, and complete your education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5">

          {/* Need-Based — wide card */}
          <motion.div className={`sm:col-span-2 md:col-span-8 ${lc} min-h-[200px]`}
            whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 220 }}>
            <div className="md:w-1/2 relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">🎓</span>
                <span className="text-[9px] font-black px-2 py-0.5 rounded-full border border-primary/40 text-primary tracking-wide">Core Program</span>
              </div>
              <h3 className="text-lg font-black text-neutral-900 group-hover:text-white mb-2 transition-colors">Need-Based Scholarships</h3>
              <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                Full and partial scholarships for students who demonstrate academic potential but face financial hardship. No student left behind.
              </p>
              <button className="mt-4 text-primary font-black text-[10px] flex items-center gap-1 hover:gap-2.5 transition-all tracking-wide group-hover:text-primary">
                LEARN MORE
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Mini live widget */}
            <div className="absolute top-6 right-6 hidden md:block">
              <div className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-4 border border-white/10 w-44">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] text-white/60 font-mono">Applications Open</span>
                </div>
                {["Merit Award", "Need-Based", "Sports", "Alumni"].map((t) => (
                  <div key={t} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-[11px] text-white/50">{t}</span>
                    <span className="text-[10px] font-bold text-primary">Active ✓</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Qarz-e-Hasna */}
          <motion.div className={`md:col-span-4 ${lc}`}
            whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 220 }}>
            <span className="text-3xl mb-4 block">🤝</span>
            <h3 className="text-lg font-black text-neutral-900 group-hover:text-white mb-2 transition-colors">Qarz-e-Hasna</h3>
            <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
              Interest-free loans that create a self-sustaining cycle — graduates repay and fund the next generation of students.
            </p>
          </motion.div>

          {/* Alumni */}
          <motion.div className={`md:col-span-4 ${lc}`}
            whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 220 }}>
            <span className="text-3xl mb-4 block">🏆</span>
            <h3 className="text-lg font-black text-neutral-900 group-hover:text-white mb-2 transition-colors">Alumni Giving Back</h3>
            <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
              Empowering graduates to sponsor students and give back to the community that shaped their future.
            </p>
          </motion.div>

          {/* Sports */}
          <motion.div className={`md:col-span-4 ${lc}`}
            whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 220 }}>
            <span className="text-3xl mb-4 block">⚽</span>
            <h3 className="text-lg font-black text-neutral-900 group-hover:text-white mb-2 transition-colors">Sports Scholarships</h3>
            <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
              Supporting talented athletes to pursue both academic and sporting ambitions simultaneously.
            </p>
          </motion.div>

          {/* Transparency — dark featured card */}
          <motion.div className={`sm:col-span-2 md:col-span-8 md:col-start-5 ${dc} relative`}
            whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 220 }}>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <div className="md:w-52 shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">⚖️</span>
                  <span className="bg-primary text-white text-[8px] px-2 py-0.5 rounded-full font-black tracking-widest">VERIFIED</span>
                </div>
                <h3 className="text-lg font-black text-white mb-2">100% Transparency</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Every rupee tracked and audited. Annual impact reports published so donors see exactly where contributions go.
                </p>
              </div>
              <div className="flex-1 flex items-center">
                <div className="bg-[#0d1117] rounded-xl w-full p-4 font-mono text-xs border border-white/8 shadow-2xl">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/8">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-white/30 text-[9px] ml-2">impact-report-2024.json</span>
                    <div className="ml-auto flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400 text-[9px] font-bold">LIVE</span>
                    </div>
                  </div>
                  {[
                    { k: "scholarships_disbursed", v: '"PKR 15B+"', c: "text-primary" },
                    { k: "students_supported", v: '"20,000+"', c: "text-sky-400" },
                    { k: "graduation_rate", v: '"98%"', c: "text-emerald-400" },
                    { k: "partner_institutions", v: '"150+"', c: "text-violet-400" },
                  ].map((r, i) => (
                    <div key={i} className="flex gap-2 py-1 border-b border-white/5 last:border-0">
                      <span className="text-white/30">{r.k}:</span>
                      <span className={`font-black ${r.c}`}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

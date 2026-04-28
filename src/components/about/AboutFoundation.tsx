"use client";
import { motion } from "framer-motion";

const facts = [
  { n: "2019",   l: "Year Founded" },
  { n: "37+",    l: "Children Funded" },
  { n: "517/20", l: "Registration No." },
  { n: "6",      l: "Founding Members" },
];

export default function AboutFoundation() {
  return (
    <section className="bg-white py-24 px-6 lg:px-24 overflow-hidden relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">

          {/* ── LEFT — text ── */}
          <motion.div
            className="flex-1 min-w-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                Founded 2019
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-manrope font-black text-[#0c1525] leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Dar ul Zahra<br />Educational Center
            </h2>

            {/* Body */}
            <div className="space-y-5 text-base leading-relaxed mb-8">
              <p className="text-[#5e6d82] font-light">
                Dar ul Zahra Educational Center is a{" "}
                <span className="text-[#0c1525] font-semibold">non-profit charity foundation</span>{" "}
                established by the{" "}
                <span className="text-[#0c1525] font-semibold">Kazmi family</span>{" "}
                — 5 brothers and 1 sister — in 2019 in{" "}
                <span className="text-[#0c1525] font-semibold">Kot Adu, Punjab, Pakistan</span>.
                We are federally registered vide{" "}
                <span className="text-primary font-bold"># 517/20</span>.
              </p>

              <blockquote className="border-l-2 border-primary pl-5 py-1">
                <p className="text-[#0c1525] font-medium italic leading-relaxed">
                  "Dedicated to improving the future of orphans, poor, and needy children through the power of education."
                </p>
              </blockquote>

              <p className="text-[#5e6d82] font-light">
                So far, we have funded the education of{" "}
                <span className="text-[#0c1525] font-semibold">37 students continuously</span>{" "}
                since January 2019, and aim to expand our reach in the future.
              </p>

              <p className="text-[#5e6d82] font-light">
                Located in <span className="text-[#0c1525] font-semibold">Kot Addu, Muzaffargarh, Punjab</span>,
                our campus provides{" "}
                <span className="text-[#0c1525] font-semibold">education, accommodation, meals, and a safe home</span>{" "}
                for children who have nowhere else to turn.
              </p>
            </div>

            {/* Stats — responsive grid, no border lines */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 py-6 md:py-8">
              {facts.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="text-primary font-black text-2xl leading-none mb-1">{f.n}</div>
                  <div className="text-[#5e6d82] text-xs tracking-wide uppercase">{f.l}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/donate"
                className="relative bg-primary text-white font-bold text-sm px-8 py-3.5 rounded-full overflow-hidden shadow-lg shadow-primary/25 flex items-center gap-2 group"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Support Our Mission</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <motion.div className="absolute inset-0 bg-white/20" style={{ skewX: -15 }}
                  initial={{ x: "-120%" }} whileHover={{ x: "220%" }} transition={{ duration: 0.45 }} />
              </motion.a>

              <motion.a
                href="/students"
                className="border border-[#0c1525]/20 hover:border-primary text-[#0c1525] hover:text-primary font-bold text-sm px-8 py-3.5 rounded-full flex items-center gap-2 group transition-all"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              >
                Meet the Children
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT — image ── */}
          <motion.div
            className="lg:w-[480px] xl:w-[540px] shrink-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-white flex items-center justify-center group">
                <img
                  src="/logo.png"
                  alt="Dar ul Zahra"
                  className="w-full h-auto object-contain relative z-10"
                />
                {/* Shine sweep on hover */}
                <div
                  className="absolute inset-0 z-20 pointer-events-none translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating badge — below image on mobile, overlapping on desktop */}
              <motion.div
                className="mt-3 md:mt-0 md:absolute md:bottom-4 md:left-4 bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3 w-fit"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#0c1525] font-black text-sm md:text-lg leading-none">37+</div>
                  <div className="text-[#5e6d82] text-[10px] md:text-xs mt-0.5">Children Educated</div>
                </div>
              </motion.div>

              {/* Floating badge — top right */}
              <motion.div
                className="absolute top-3 right-3 md:top-4 md:right-4 bg-primary text-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl px-2.5 py-2 md:px-4 md:py-3"
                initial={{ opacity: 0, y: -16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="font-black text-xs md:text-lg leading-none">Est.</div>
                <div className="font-black text-base md:text-2xl leading-none">2019</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const facilities = [
  {
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=85",
    title: "Classrooms",
    badge: "Active Learning",
    desc: "Each classroom accommodates up to 30 students. Bright, well-ventilated spaces with whiteboards and learning materials — ensuring focused, quality education for every child.",
    detail: ["Smart boards", "Proper seating", "Study materials"],
  },
  {
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=85",
    title: "Accommodation",
    badge: "Safe & Comfortable",
    desc: "Clean dormitory-style accommodation for orphans and children from distant areas — providing a true home away from home with round-the-clock supervision.",
    detail: ["Clean bedding", "Secure rooms", "24/7 supervision"],
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=85",
    title: "Meals & Nutrition",
    badge: "3 Meals Daily",
    desc: "Three nutritious meals provided daily to all resident students — ensuring every child is healthy, energised, and ready to learn.",
    detail: ["Breakfast", "Lunch", "Dinner", "Healthy menu"],
  },
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=85",
    title: "Welfare & Care",
    badge: "24/7 Support",
    desc: "Dedicated staff ensure the emotional and physical well-being of every child — providing guidance, support, and a nurturing environment at all times.",
    detail: ["Counselling", "Health checks", "Emotional support"],
  },
  {
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=85",
    title: "Safe Environment",
    badge: "Secure Campus",
    desc: "A secure, gated campus in Kot Addu, Muzaffargarh — giving parents and guardians peace of mind that their children are safe and protected.",
    detail: ["Gated entry", "CCTV", "Trained security staff"],
  },
  {
    img: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=85",
    title: "Qualified Teachers",
    badge: "Dedicated Staff",
    desc: "Experienced and compassionate educators committed to delivering quality education and mentoring each student individually.",
    detail: ["Certified teachers", "Individual attention", "Mentorship"],
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=85",
    title: "Library & Reading",
    badge: "Knowledge Hub",
    desc: "A dedicated reading space stocked with books, educational materials, and resources to encourage a love of learning beyond the classroom.",
    detail: ["Books", "Magazines", "Quiet study space"],
  },
  {
    img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=85",
    title: "Outdoor Activities",
    badge: "Physical Growth",
    desc: "Open outdoor spaces for physical activity, sports, and recreation — promoting healthy development and teamwork among students.",
    detail: ["Sports ground", "Games", "Physical education"],
  },
];

function FacilityRow({ f, i }: { f: typeof facilities[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.5, 1.0]);
  const scale = useSpring(rawScale, { stiffness: 400, damping: 40, mass: 0.2 });

  const isEven = i % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 py-16 border-b border-gray-100 last:border-0 ${!isEven ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg" style={{ height: 360 }}>
        <motion.img
          src={f.img}
          alt={f.title}
          className="w-full h-full object-cover"
          style={{ scale, willChange: "transform" }}
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <span className="inline-block text-[10px] font-black text-primary uppercase tracking-[0.25em] bg-primary/8 px-3 py-1.5 rounded-full mb-4">
          {f.badge}
        </span>
        <h3 className="font-manrope font-black text-[#0c1525] text-3xl lg:text-4xl tracking-tight leading-tight mb-4">
          {f.title}
        </h3>
        <div className="w-10 h-0.5 bg-primary rounded-full mb-5" />
        <p className="text-[#5e6d82] text-base leading-relaxed font-light mb-6">
          {f.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {f.detail.map((d, j) => (
            <span key={j} className="flex items-center gap-1.5 text-xs font-semibold text-[#5e6d82] bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {d}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function FacilitiesPage() {
  return (
    <div className="bg-white pt-28">

      {/* Header */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Our Campus</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <h1 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-6xl tracking-tighter leading-tight">
                Everything a Child<br />
                <span className="text-primary">Needs.</span>
              </h1>
              <p className="text-[#5e6d82] text-base font-light max-w-md lg:text-right leading-relaxed">
                Our campus provides education, accommodation, meals, and a safe home for every child.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Affiliation & Land Donation ── */}
      <section className="px-6 lg:px-24 pb-20">
        <div className="max-w-screen-xl mx-auto">

          {/* Dark hero banner */}
          <motion.div
            className="relative bg-[#0c1525] rounded-3xl overflow-hidden px-8 md:px-14 py-12 md:py-16 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
            {/* Orange glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  <div className="w-4 h-px bg-primary" />
                  Our Facility
                </span>
                <h2 className="font-manrope font-black text-white text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-tight mb-4">
                  Affiliation &amp;<br />
                  <span className="text-primary">Land Donation</span>
                </h2>
                <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                  Built on generosity — every square foot dedicated to education.
                </p>
              </div>

              {/* Big stat */}
              <div className="shrink-0 bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-center backdrop-blur-sm">
                <p className="text-primary font-black text-4xl md:text-5xl mb-1">44,000</p>
                <p className="text-white font-bold text-sm">sq ft of land</p>
                <p className="text-white/50 text-xs mt-1">8 Canals — Total Campus</p>
              </div>
            </div>
          </motion.div>

          {/* Two-column content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — story with timeline */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-0"
            >
              {[
                {
                  step: "01",
                  title: "First Land Donation",
                  body: "A land of 4 canals (approx. 22,000 sq ft) was donated for Dar ul Zahra. On this land, our team constructed a fully functional campus to serve students and residents.",
                },
                {
                  step: "02",
                  title: "Second Plot Secured",
                  body: "A second donated plot of 4 canals directly in front of the current premises will house a dedicated accommodation compound for future students.",
                },
                {
                  step: "03",
                  title: "Combined Campus",
                  body: "Dar ul Zahra now owns 8 canals (44,000 sq ft) of land — a growing foundation dedicated entirely to educational growth and student welfare.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-5 pb-8 last:pb-0"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                >
                  {/* Step line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-xs shrink-0">
                      {item.step}
                    </div>
                    {i < 2 && <div className="w-px flex-1 bg-gray-200 mt-2" />}
                  </div>
                  <div className="pt-1.5">
                    <p className="font-bold text-[#0c1525] text-base mb-1">{item.title}</p>
                    <p className="text-[#5e6d82] text-sm leading-relaxed font-light">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right — facility cards grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { icon: "🏫", label: "3 Classrooms", sub: "Active learning spaces", accent: false },
                { icon: "📋", label: "1 Exam Hall", sub: "Dedicated assessment room", accent: false },
                { icon: "🛏️", label: "6 Accommodation Rooms", sub: "Safe residential quarters", accent: false },
                { icon: "🏢", label: "Office + Kitchen + Laundry", sub: "Full operational support", accent: false },
                { icon: "🏗️", label: "Accommodation Compound", sub: "2nd plot — coming soon", accent: true },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`
                    relative rounded-2xl p-5 flex flex-col gap-3 overflow-hidden
                    ${i === 4 ? "col-span-2 bg-primary text-white" : "bg-gray-50 border border-gray-100"}
                  `}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                  whileHover={{ y: -3, boxShadow: i === 4 ? "0 16px 40px rgba(241,90,36,0.3)" : "0 12px 32px rgba(0,0,0,0.07)" }}
                >
                  {i === 4 && (
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />
                  )}
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <p className={`font-bold text-sm ${i === 4 ? "text-white" : "text-[#0c1525]"}`}>{item.label}</p>
                    <p className={`text-xs mt-0.5 ${i === 4 ? "text-white/70" : "text-[#5e6d82]"}`}>{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Facility rows */}
      <section className="px-6 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          {facilities.map((f, i) => (
            <FacilityRow key={i} f={f} i={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8fafc] py-20 px-6 lg:px-24">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-manrope font-black text-[#0c1525] text-3xl tracking-tighter mb-2">Help Us Do More.</h3>
            <p className="text-[#5e6d82] text-base font-light max-w-lg">
              Your donation helps us maintain and expand our facilities — giving more children access to education, shelter, and care.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4 shrink-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.a href="/how-to-donate"
              className="relative bg-primary text-white font-bold text-sm px-8 py-4 rounded-full overflow-hidden shadow-lg shadow-primary/25 flex items-center gap-2 group"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Donate Now</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <motion.div className="absolute inset-0 bg-white/15" style={{ skewX: -15 }}
                initial={{ x: "-120%" }} whileHover={{ x: "220%" }} transition={{ duration: 0.45 }} />
            </motion.a>
            <motion.a href="/contact"
              className="border border-[#0c1525]/20 hover:border-primary text-[#0c1525] hover:text-primary font-bold text-sm px-8 py-4 rounded-full flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

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

      {/* Facility rows */}
      <section className="px-6 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          {facilities.map((f, i) => (
            <FacilityRow key={i} f={f} i={i} />
          ))}
        </div>
      </section>

      {/* Affiliation & Land Donation */}
      <section className="px-6 lg:px-24 py-20 bg-[#f8fafc]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Our Facility</span>
            </div>
            <h2 className="font-manrope font-black text-[#0c1525] text-3xl lg:text-5xl tracking-tighter leading-tight">
              Affiliation &amp; <span className="text-primary">Land Donation</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-[#5e6d82] text-base leading-relaxed font-light mb-6">
                At the start, a land of <strong className="text-[#0c1525] font-semibold">4 canals (approx. 22,000 sq ft)</strong> was donated for Dar ul Zahra. On this land, our team constructed a fully functional campus to serve students and residents.
              </p>
              <p className="text-[#5e6d82] text-base leading-relaxed font-light mb-6">
                A <strong className="text-[#0c1525] font-semibold">second donated plot of 4 canals</strong> directly in front of the current premises will house a dedicated accommodation compound.
              </p>
              <p className="text-[#5e6d82] text-base leading-relaxed font-light">
                Combined, Dar ul Zahra owns <strong className="text-[#0c1525] font-semibold">8 canals (44,000 sq ft)</strong> of land dedicated to educational growth.
              </p>

              {/* Total land stat */}
              <div className="mt-8 inline-flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-[#0c1525] text-xl">8 Canals — 44,000 sq ft</p>
                  <p className="text-[#5e6d82] text-xs mt-0.5">Total land for educational growth</p>
                </div>
              </div>
            </motion.div>

            {/* Right — what was built */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { icon: "🏫", label: "3 Classrooms", sub: "Active learning spaces" },
                { icon: "📋", label: "1 Exam Hall", sub: "Dedicated assessment room" },
                { icon: "🛏️", label: "6 Accommodation Rooms", sub: "Safe residential quarters" },
                { icon: "🏢", label: "Office + Kitchen + Laundry", sub: "Full operational support" },
                { icon: "🏗️", label: "Accommodation Compound", sub: "2nd plot — coming soon" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={`bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 ${i === 4 ? "sm:col-span-2" : ""}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(0,0,0,0.07)" }}
                >
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-[#0c1525] text-sm">{item.label}</p>
                    <p className="text-[#5e6d82] text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
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

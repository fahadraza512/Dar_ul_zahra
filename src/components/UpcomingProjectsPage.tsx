"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    icon: "🏗️",
    title: "Accommodation Compound",
    desc: "A dedicated residential compound on the second donated plot of 4 canals, directly in front of the current premises — providing safe, comfortable housing for more students.",
    goal: "PKR 5,000,000",
    status: "Planned",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "🖥️",
    title: "Computer Lab Equipment",
    desc: "Setting up a fully equipped computer lab to introduce students to digital literacy, coding, and modern technology skills essential for the future.",
    goal: "PKR 1,200,000",
    status: "Fundraising",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: "📚",
    title: "Library Expansion",
    desc: "Expanding the library with new books, educational materials, and a dedicated quiet study space to encourage a deeper love of learning.",
    goal: "PKR 800,000",
    status: "Fundraising",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: "⚡",
    title: "Solar Energy System",
    desc: "Installing a solar power system to reduce electricity costs and ensure uninterrupted power supply for classrooms, accommodation, and facilities.",
    goal: "PKR 2,500,000",
    status: "Planned",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "🏥",
    title: "Medical & First Aid Room",
    desc: "A dedicated first aid and medical room with basic equipment and supplies to ensure the health and safety of all resident students.",
    goal: "PKR 600,000",
    status: "Planned",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: "🍽️",
    title: "Kitchen Upgrade",
    desc: "Upgrading kitchen equipment and facilities to improve meal quality and capacity as the number of resident students continues to grow.",
    goal: "PKR 900,000",
    status: "Fundraising",
    statusColor: "bg-blue-100 text-blue-700",
  },
];

export default function UpcomingProjectsPage() {
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
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Support Our Growth</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h1 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-6xl tracking-tighter leading-tight mb-4">
                  Upcoming Projects<br />
                  <span className="text-primary">&amp; Equipment</span>
                </h1>
                <p className="text-[#5e6d82] text-base font-light max-w-lg leading-relaxed">
                  Your donations directly fund these projects — helping us expand our campus, improve facilities, and serve more students in need.
                </p>
              </div>
              <Link href="/how-to-donate">
                <motion.div
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-primary/25 flex items-center gap-2 shrink-0 cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Donate Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-6 lg:px-24 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(0,0,0,0.08)" }}
              >
                {/* Icon + status */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-2xl shrink-0">
                    {p.icon}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${p.statusColor}`}>
                    {p.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-manrope font-black text-[#0c1525] text-lg mb-2">{p.title}</h3>
                  <p className="text-[#5e6d82] text-sm leading-relaxed font-light">{p.desc}</p>
                </div>

                {/* Goal */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-[#5e6d82] uppercase tracking-wider font-semibold">Estimated Cost</p>
                    <p className="text-primary font-black text-base mt-0.5">{p.goal}</p>
                  </div>
                  <Link href="/how-to-donate">
                    <motion.div
                      className="bg-primary/8 text-primary text-xs font-bold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Donate
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 lg:px-24 pb-20">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="relative bg-[#0c1525] rounded-3xl overflow-hidden px-8 md:px-14 py-12 md:py-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Make a Difference</p>
              <h2 className="font-manrope font-black text-white text-3xl md:text-4xl tracking-tighter mb-4">
                Every Rupee Builds a Future
              </h2>
              <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed mb-8">
                Your contribution — no matter the size — directly funds classrooms, equipment, and shelter for children who need it most.
              </p>
              <Link href="/how-to-donate">
                <motion.div
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-10 py-4 rounded-full shadow-lg shadow-primary/30 cursor-pointer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Donate Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

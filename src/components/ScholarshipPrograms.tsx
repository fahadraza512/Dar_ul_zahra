"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const programs = [
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    title: "CM Merit Scholarship",
    desc: "Targeting top-tier students for specialized training in science and technology fields.",
    deadline: "Deadline: 30 Sept",
  },
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    title: "Need-Based Assistance",
    desc: "Ensuring that no student is left behind due to financial constraints. Open for all disciplines.",
    deadline: "Deadline: Ongoing",
  },
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Minority Quota Program",
    desc: "Inclusivity at its heart, offering dedicated scholarships for minority communities across the country.",
    deadline: "Deadline: 15 Oct",
  },
];

export default function ScholarshipPrograms() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <AnimateIn direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-3 md:gap-6">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#0c1525] mb-2 md:mb-3 font-manrope">Our Scholarship Programs</h2>
            <p className="text-[#5e6d82] text-sm md:text-base lg:text-lg">Discover the right opportunity for your academic journey.</p>
          </div>
          <motion.a
            href="#"
            className="text-primary font-bold flex items-center gap-2 text-sm md:text-base shrink-0"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View All Programs
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {programs.map((p, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.1}>
              <motion.div
                className="bg-[#fcfdfe] p-4 md:p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col"
                whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 220 }}
              >
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 md:mb-6 text-primary"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {p.icon}
                </motion.div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 font-manrope text-[#0c1525]">{p.title}</h3>
                <p className="text-[#5e6d82] text-sm leading-relaxed flex-1 mb-4 md:mb-6">{p.desc}</p>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-[9px] md:text-[10px] font-black text-gray-400 tracking-widest uppercase">{p.deadline}</span>
                  <motion.a href="#" className="text-primary font-bold text-xs md:text-sm" whileHover={{ x: 3 }}>
                    Details →
                  </motion.a>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

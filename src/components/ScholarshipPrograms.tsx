"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const programs = [
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    title: "Need-Based Scholarships",
    desc: "Financial assistance for deserving students who demonstrate academic potential but face economic hardship.",
    deadline: "Read More",
  },
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Merit Scholarships",
    desc: "Rewarding academic excellence with full and partial scholarships for top-performing students.",
    deadline: "Read More",
  },
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Alumni Giving Back",
    desc: "Empowering alumni to sponsor students and give back to the community that shaped their future.",
    deadline: "Read More",
  },
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Sports Scholarships",
    desc: "Supporting talented athletes with scholarships to pursue both their academic and sporting ambitions.",
    deadline: "Read More",
  },
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: "Qarz-e-Hasna",
    desc: "Interest-free loans enabling students to complete their education and repay after securing employment.",
    deadline: "Read More",
  },
  {
    icon: <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: "Partner Scholarships",
    desc: "Collaborating with esteemed partners to expand scholarship opportunities for more students.",
    deadline: "Read More",
  },
];

export default function ScholarshipPrograms() {
  return (
    <section className="py-10 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <AnimateIn direction="up" className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-3 md:gap-6">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#0c1525] mb-2 md:mb-3 font-manrope">Our Programs</h2>
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

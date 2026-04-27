"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const programs = [
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    title: "Need-Based Scholarships",
    desc: "Financial assistance for deserving students who demonstrate academic potential but face economic hardship.",
    href: "/scholarships/need-based",
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    title: "Merit Scholarships",
    desc: "Rewarding academic excellence with full and partial scholarships for top-performing students.",
    href: "/scholarships/merit",
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: "Alumni Giving Back",
    desc: "Empowering alumni to sponsor students and give back to the community that shaped their future.",
    href: "/programs/alumni",
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>,
    title: "Sports Scholarships",
    desc: "Supporting talented athletes with scholarships to pursue both their academic and sporting ambitions.",
    href: "/scholarships/sports",
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    title: "Qarz-e-Hasna",
    desc: "Interest-free loans enabling students to complete their education and repay after securing employment.",
    href: "/programs/qarz-e-hasna",
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: "Partner Scholarships",
    desc: "Collaborating with esteemed partners to expand scholarship opportunities for more students.",
    href: "/programs/partners",
  },
];

export default function ProgramsSection() {
  return (
    <section className="py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <AnimateIn direction="up" className="mb-10 md:mb-14 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0c1525] mt-2 mb-4">Our Major Support Initiatives</h2>
          <p className="text-[#5e6d82] max-w-2xl mx-auto">
            We offer a range of scholarship and financial assistance programs designed to remove barriers and open doors for deserving students.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.08}>
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 group h-full flex flex-col"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <motion.div
                  className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {p.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-[#0c1525] mb-2">{p.title}</h3>
                <p className="text-[#5e6d82] text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <Link href={p.href} className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1 group/link">
                  Read More
                  <motion.svg
                    className="w-4 h-4"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    animate={{ x: 0 }}
                    whileHover={{ x: 4 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

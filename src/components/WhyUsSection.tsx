"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const features = [
  {
    icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "100% Transparency",
    desc: "Every penny is tracked through an automated auditing system, ensuring funds reach only the deserving candidates.",
  },
  {
    icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: "Government Endorsement",
    desc: "While self-funded, we work closely with national education bodies to align with the country's development goals.",
  },
  {
    icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "End-to-End Tracking",
    desc: "We don't just pay fees — we track graduation rates and career placement to measure real impact.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-[#0c1525] text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left */}
          <AnimateIn direction="left" className="lg:col-span-7">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Why Choose Us</p>
            <h2 className="text-4xl lg:text-5xl font-black mb-16 font-manrope">
              What Makes <span className="text-primary">Us</span> Unique?
            </h2>
            <div className="space-y-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex gap-8 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(241,90,36,0.2)", scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {f.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{f.title}</h4>
                    <p className="text-white/60 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateIn>

          {/* Right image */}
          <AnimateIn direction="right" delay={0.2} className="lg:col-span-5">
            <div className="relative">
              <motion.div
                className="relative rounded-[2rem] overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
                  alt="University"
                  className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1525]/80 to-transparent" />
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 180 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-black text-primary mb-1">98%</div>
                <div className="text-[#0c1525] font-bold text-sm uppercase tracking-wider">Graduation Rate</div>
              </motion.div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const features = [
  {
    icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "100% Transparency",
    desc: "Every penny is tracked through an automated auditing system, ensuring funds reach only the deserving candidates.",
  },
  {
    icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: "Government Endorsement",
    desc: "While self-funded, we work closely with national education bodies to align with the country's development goals.",
  },
  {
    icon: <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "End-to-End Tracking",
    desc: "We don't just pay fees — we track graduation rates and career placement to measure real impact.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#0c1525] text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Left */}
          <AnimateIn direction="up">
            <p className="text-primary font-bold text-xs md:text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 md:mb-10 font-manrope">
              What Makes <span className="text-primary">Us</span> Unique?
            </h2>
            <div className="space-y-5 md:space-y-7">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 md:gap-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base lg:text-lg font-bold mb-1">{f.title}</h4>
                    <p className="text-white/55 text-xs md:text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimateIn>

          {/* Right image — constrained height so it doesn't tower */}
          <AnimateIn direction="up" delay={0.15}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
                  alt="University"
                  className="w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1525]/80 to-transparent" />
              </div>
              {/* Badge — inside the image, bottom-left, no overflow */}
              <motion.div
                className="absolute bottom-3 left-3 bg-white px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
              >
                <div className="text-xl md:text-3xl font-black text-primary leading-none">98%</div>
                <div className="text-[#0c1525] font-bold text-[10px] md:text-xs uppercase tracking-wider mt-0.5">Graduation Rate</div>
              </motion.div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

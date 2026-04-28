"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const impactItems = [
  {
    title: "Alumni Giving Back Program – Sponsor A Student",
    desc: "Alumni understand the challenges students face. Join us in giving back to the next generation.",
    href: "/programs/alumni",
  },
  {
    title: "Need-Based Financial Assistance Program",
    desc: "We evaluate each student's financial situation carefully to provide the right level of support.",
    href: "/scholarships/need-based",
  },
  {
    title: "Merit & Excellence Scholarships",
    desc: "Recognizing and rewarding academic brilliance with scholarships that cover tuition and living expenses.",
    href: "/scholarships/merit",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        <AnimateIn direction="left">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Impact</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0c1525] mt-2 mb-6 leading-tight">
            What We Have Achieved Through Education
          </h2>
          <div className="space-y-4">
            {impactItems.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-4 p-4 rounded-xl border border-transparent"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ backgroundColor: "#f9fafb", borderColor: "#f1f5f9", x: 4 }}
              >
                <motion.div
                  className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold"
                  whileHover={{ backgroundColor: "#f15a24", color: "#fff", scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {i + 1}
                </motion.div>
                <div>
                  <h3 className="font-bold text-[#0c1525] mb-1">{item.title}</h3>
                  <p className="text-[#5e6d82] text-sm leading-relaxed mb-2">{item.desc}</p>
                  <Link href={item.href} className="text-primary text-sm font-semibold hover:underline">
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn direction="right" delay={0.15}>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80"
                alt="Impact"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute bottom-4 left-4 bg-primary text-white rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <p className="text-base md:text-lg font-black leading-none">PKR 15B</p>
                <p className="text-[10px] md:text-xs opacity-90 mt-0.5">in Scholarships</p>
              </div>
            </motion.div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

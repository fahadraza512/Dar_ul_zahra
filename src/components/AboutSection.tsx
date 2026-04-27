"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const highlights = [
  { label: "Scholarships Disbursed", value: "PKR 15B+" },
  { label: "Students Supported", value: "20,000+" },
  { label: "Partner Organizations", value: "50+" },
];

export default function AboutSection() {
  return (
    <section className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Image side */}
        <AnimateIn direction="left">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                alt="Students at Dar ul Zahra"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-5 shadow-xl max-w-[180px]"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm opacity-90 mt-1">Years of Educational Excellence</p>
            </motion.div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 rounded-full" />
          </div>
        </AnimateIn>

        {/* Content side */}
        <AnimateIn direction="right" delay={0.15}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0c1525] mt-2 mb-5 leading-tight">
            Shaping Education Through Generosity
          </h2>
          <p className="text-[#5e6d82] leading-relaxed mb-4">
            We are dedicated to breaking financial barriers in education. Our mission is to ensure that no deserving student is denied the opportunity to pursue higher education due to financial constraints.
          </p>
          <p className="text-[#5e6d82] leading-relaxed mb-8">
            Through a range of scholarship programs, interest-free loans, and partnerships with leading institutions, we have supported thousands of students in achieving their academic and professional goals.
          </p>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                className="text-center bg-gray-50 rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "#fff7f4" }}
              >
                <p className="text-xl font-bold text-primary">{h.value}</p>
                <p className="text-xs text-[#5e6d82] mt-1">{h.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}

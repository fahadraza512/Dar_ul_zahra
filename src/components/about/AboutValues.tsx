"use client";
import { motion } from "framer-motion";

const values = [
  {
    icon: "🌱",
    title: "Individuality",
    desc: "We recognize and value the unique strengths and potential of every child.",
  },
  {
    icon: "📈",
    title: "Growth",
    desc: "We cultivate a supportive environment that encourages intellectual, emotional, and social growth.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "We foster a strong sense of community where students, families, and educators work together.",
  },
  {
    icon: "💛",
    title: "Well-being",
    desc: "We prioritize the well-being of all members of our community, ensuring they feel safe, valued, and happy.",
  },
  {
    icon: "🌍",
    title: "Social Responsibility",
    desc: "We encourage active engagement with the wider community and cultivate a sense of responsibility to support those in need.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-[#f8fafc] py-24 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Our Purpose</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-5xl tracking-tight leading-tight">
              Vision & <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-[#5e6d82] text-base leading-relaxed font-light max-w-xl">
              Dar ul Zahra aspires to be a vibrant learning community where students, families, and educators thrive together — celebrating each individual&apos;s unique talents.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-16" />

        {/* Values — horizontal list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Number + icon row */}
              <div className="flex items-center gap-3">
                <span className="text-primary/30 font-black text-3xl leading-none font-manrope">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl">{v.icon}</span>
              </div>
              {/* Thin line */}
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <h3 className="text-[#0c1525] font-bold text-base">{v.title}</h3>
              <p className="text-[#5e6d82] text-sm leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

export default function AboutMission() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left */}
          <AnimateIn direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=85"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-2xl shadow-primary/30"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
              >
                <p className="text-4xl font-black">30+</p>
                <p className="text-sm opacity-80 mt-1">Years of Excellence</p>
              </motion.div>
              {/* Decorative ring */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 rounded-full" />
            </div>
          </AnimateIn>

          {/* Right */}
          <AnimateIn direction="right" delay={0.15}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="text-primary text-xs font-mono tracking-[0.25em] uppercase">Our Mission</span>
            </div>
            <h2 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-5xl leading-tight mb-6">
              Removing Barriers,<br />
              <span className="text-primary">Unlocking Potential</span>
            </h2>
            <p className="text-[#5e6d82] leading-relaxed mb-5 text-lg">
              Our mission is simple — ensure that no deserving student is denied the opportunity to pursue higher education due to financial constraints. We believe talent is equally distributed, but opportunity is not.
            </p>
            <p className="text-[#5e6d82] leading-relaxed mb-8">
              Through need-based scholarships, merit awards, interest-free loans, and strategic partnerships with leading institutions, we have built a comprehensive support ecosystem that transforms lives and communities.
            </p>

            {/* Mission pillars */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎓", title: "Access", desc: "Equal access to quality education" },
                { icon: "💡", title: "Excellence", desc: "Nurturing academic brilliance" },
                { icon: "🤝", title: "Community", desc: "Building a giving ecosystem" },
                { icon: "🌍", title: "Impact", desc: "Transforming Pakistan's future" },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ backgroundColor: "#fff7f4", borderColor: "#f15a24" }}
                >
                  <span className="text-2xl mb-2 block">{p.icon}</span>
                  <p className="font-bold text-[#0c1525] text-sm">{p.title}</p>
                  <p className="text-[#5e6d82] text-xs mt-1">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

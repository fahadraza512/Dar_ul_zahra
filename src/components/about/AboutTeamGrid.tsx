"use client";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

const team = [
  { name: "Ibrahim Hasan Murad", role: "President", img: "https://ilm.fund/wp-content/uploads/2025/08/abcde.jpg" },
  { name: "Mr. Salman Ahmad Malik", role: "Advisor", img: "https://ilm.fund/wp-content/uploads/2025/08/eee-1-1.jpg" },
  { name: "Khazra Shahbaz", role: "Assistant Manager Portfolio", img: "https://ilm.fund/wp-content/uploads/2025/08/A1.jpg" },
  { name: "Waqas Shahid", role: "Head, Internal Audit", img: "https://ilm.fund/wp-content/uploads/2025/08/waqas.jpg" },
];

export default function AboutTeamGrid() {
  return (
    <section className="py-12 md:py-24 bg-white px-6"
      style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(241,90,36,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }}>
      <div className="max-w-screen-xl mx-auto">

        <AnimateIn direction="up" className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-6 bg-primary" />
            <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">The People</span>
          </div>
          <h2 className="font-manrope font-black text-neutral-900 text-4xl lg:text-5xl tracking-tighter">
            Led by <span className="text-primary">Visionaries</span>
          </h2>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.1}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-neutral-900 hover:border-neutral-800 transition-all duration-300"
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 220 }}
              >
                <div className="aspect-[3/3.2] overflow-hidden">
                  <img src={m.img} alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-neutral-900 group-hover:text-white text-sm mb-1 transition-colors">{m.name}</h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">{m.role}</p>
                </div>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

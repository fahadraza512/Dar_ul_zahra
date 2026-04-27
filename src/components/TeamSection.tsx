"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const team = [
  { name: "Ibrahim Hasan Murad", role: "President, ILM Fund", img: "https://ilm.fund/wp-content/uploads/2025/08/abcde.jpg" },
  { name: "Mr. Salman Ahmad Malik", role: "Advisor, ILM Fund", img: "https://ilm.fund/wp-content/uploads/2025/08/eee-1-1.jpg" },
  { name: "Khazra Shahbaz", role: "Assistant Manager Portfolio", img: "https://ilm.fund/wp-content/uploads/2025/08/A1.jpg" },
  { name: "Waqas Shahid", role: "Head, Internal Audit", img: "https://ilm.fund/wp-content/uploads/2025/08/waqas.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <AnimateIn direction="up" className="mb-12 md:mb-20 text-center">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Our Leadership</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0c1525] mb-4 font-manrope">Led by Visionaries</h2>
          <p className="text-[#5e6d82] max-w-2xl mx-auto text-base md:text-lg">
            Seasoned academics, financial experts, and philanthropists dedicated to educational reform.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {team.map((member, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.1}>
              <motion.div className="group text-center" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 250 }}>
                <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto mb-4 md:mb-6">
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.15, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </div>
                <h4 className="text-sm md:text-base lg:text-lg font-bold text-[#0c1525] mb-1 font-manrope">{member.name}</h4>
                <p className="text-[#5e6d82] text-xs md:text-sm mb-3 md:mb-4">{member.role}</p>
                <div className="flex justify-center gap-3">
                  {["share", "email"].map((type) => (
                    <motion.button
                      key={type}
                      className="w-8 h-8 bg-gray-100 hover:bg-primary hover:text-white text-gray-400 rounded-full flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={type}
                    >
                      {type === "share" ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

const team = [
  { name: "Ibrahim Hasan Murad", role: "President, ILM Fund", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", bio: "Visionary leader with decades of experience in educational philanthropy and institutional development." },
  { name: "Mr. Salman Ahmad Malik", role: "Advisor, ILM Fund", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", bio: "Strategic advisor bringing expertise in finance, governance, and educational policy reform." },
  { name: "Khazra Shahbaz", role: "Assistant Manager Portfolio", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80", bio: "Manages scholarship portfolios and ensures efficient disbursement to deserving students." },
  { name: "Waqas Shahid", role: "Head, Internal Audit", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", bio: "Ensures complete financial transparency and accountability across all scholarship programs." },
];

export default function AboutTeam() {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <AnimateIn direction="up" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs font-mono tracking-[0.25em] uppercase">The People</span>
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-5xl">
            Led by <span className="text-primary">Visionaries</span>
          </h2>
          <p className="text-[#5e6d82] max-w-xl mx-auto mt-4">
            Seasoned academics, financial experts, and philanthropists united by one goal — an educated Pakistan.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <AnimateIn key={i} direction="up" delay={i * 0.1}>
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
                whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 220 }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[3/3.5]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1525]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-manrope font-black text-[#0c1525] text-base mb-1">{member.name}</h3>
                  <p className="text-primary text-xs font-semibold mb-3 uppercase tracking-wide">{member.role}</p>
                  <p className="text-[#5e6d82] text-xs leading-relaxed">{member.bio}</p>

                  {/* Social */}
                  <div className="flex gap-2 mt-4">
                    {["twitter", "linkedin"].map((s) => (
                      <motion.a
                        key={s}
                        href="#"
                        className="w-7 h-7 bg-gray-100 hover:bg-primary hover:text-white text-gray-400 rounded-full flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.15 }}
                        aria-label={s}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          {s === "twitter"
                            ? <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            : <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          }
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

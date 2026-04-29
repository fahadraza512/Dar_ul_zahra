"use client";
import { motion } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const cards = [
  {
    title: "Shahbaz Sharif Merit Scholarship",
    description: "Transforming the academic landscape by providing international standard education to the brightest minds.",
    button: "Apply Internationally",
    bg: "bg-primary",
    btnClass: "bg-white text-primary hover:bg-gray-100",
    delay: 0.1,
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 11-6-11-6z" />
      </svg>
    ),
  },
  {
    title: "Federal Merit Scholarship",
    description: "Empowering talented students nationwide with fully funded opportunities to achieve academic excellence.",
    button: "Apply Now",
    bg: "bg-primary",
    btnClass: "bg-white text-primary hover:bg-gray-100",
    delay: 0.2,
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 3L1 9l11 6 11-6-11-6zM1 15l11 6 11-6M1 9v6m22-6v6" />
      </svg>
    ),
  },
  {
    title: "9 Billion Merit Scholarship",
    description: "Local scholarships designed to bridge the gap between financial constraints and educational excellence across 850 cities.",
    button: "Apply Locally",
    bg: "bg-[#0c1525]",
    btnClass: "bg-primary text-white hover:opacity-90",
    delay: 0.3,
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    title: "School",
    description: "A structured primary and secondary school program providing quality academic education to orphans and underprivileged children.",
    button: "Learn More",
    bg: "bg-primary",
    btnClass: "bg-white text-primary hover:bg-gray-100",
    delay: 0.15,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Hozvi",
    description: "A dedicated Islamic seminary program offering traditional Hozvi education, developing scholars grounded in faith and knowledge.",
    button: "Learn More",
    bg: "bg-[#0c1525]",
    btnClass: "bg-primary text-white hover:opacity-90",
    delay: 0.25,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Hifz",
    description: "A Hifz program dedicated to the memorisation of the Holy Quran, guided by qualified teachers in a spiritually enriching environment.",
    button: "Learn More",
    bg: "bg-primary",
    btnClass: "bg-white text-primary hover:bg-gray-100",
    delay: 0.35,
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function DualActionCards() {
  return (
    <section className="py-8 md:py-12 lg:py-14 bg-white z-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <AnimateIn key={i} direction="up" delay={card.delay}>
              <motion.div
                className={`${card.bg} rounded-2xl text-white relative overflow-hidden`}
                style={{ minHeight: "220px" }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full" style={{ minHeight: "220px" }}>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 font-manrope leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-white/80 mb-6 text-sm md:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <motion.button
                      className={`${card.btnClass} px-6 py-2.5 rounded-md font-bold text-sm transition-colors`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {card.button}
                    </motion.button>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-10 pointer-events-none">
                  {card.icon}
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

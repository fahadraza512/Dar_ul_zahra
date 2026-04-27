"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./ui/AnimateIn";

const testimonials = [
  { name: "Armaghan Rauf", batch: "BS IE – Batch 16", avatar: "https://ilm.fund/wp-content/uploads/2025/08/Armaghan-Rauf-300x300-1.jpg", text: "When I applied for BS Industrial Engineering, financial crisis threatened my studies. The need-based scholarship allowed me to continue without fear. After graduation, I secured a job in manufacturing. This fund helped me build a progressive career." },
  { name: "Bilal Mustafa", batch: "MBA P – Batch 47", avatar: "https://ilm.fund/wp-content/uploads/2025/08/Bilal-Mustafa.jpg", text: "I would have never imagined a life with a great mission of transforming my family and contributing positively to society if I had not been awarded financial assistance. I owe this gratitude for providing me an excellent higher education opportunity." },
  { name: "Laiba Sajjad", batch: "BS Microbiology – Rector Award Winner, Batch 2020", avatar: "https://ilm.fund/wp-content/uploads/2025/08/Picture1-2-256x300-1.jpg", text: "My educational journey faced various blockades due to financial constraints. I had to quit studies for two years. The fully-funded scholarship was my silver lining. I have since won the Rector's Merit Award and the Dean's Merit Award." },
  { name: "Imaan Shurjeel", batch: "Bachelors in Accounting & Finance – Batch 2019", avatar: "https://ilm.fund/wp-content/uploads/2025/08/Picture5-150x150-1.jpg", text: "An academically accomplished student, my family was in no position to afford a private university. I was awarded the scholarship based on my academic and extracurricular performance, and have been thriving ever since." },
  { name: "Kashana Sher", batch: "Bachelors in Aviation Management – Batch 2020", avatar: "https://ilm.fund/wp-content/uploads/2025/08/Picture4-150x150-1.jpg", text: "Hailing from Hunza, I broke through social barriers to pursue education and boxing. Awarded a 100% Sports Scholarship, I have been representing the varsity at national competitions and won the Bronze medal in HEC Intervarsity Boxing Championships 2022." },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-14 md:py-20 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left image */}
        <AnimateIn direction="left" className="hidden md:block">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80"
                alt="Student testimonial"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute bottom-8 left-8 bg-primary text-white rounded-full w-28 h-28 flex items-center justify-center text-center shadow-xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div>
                <p className="text-xl font-bold">20k</p>
                <p className="text-xs opacity-90">Students</p>
              </div>
            </motion.div>
          </div>
        </AnimateIn>

        {/* Right content */}
        <AnimateIn direction="right" delay={0.15}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0c1525] mt-2 mb-8">
            What People Say About Us
          </h2>

          {/* Card with AnimatePresence */}
          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-bold text-[#0c1525] text-sm">{testimonials[active].name}</p>
                    <p className="text-[#5e6d82] text-xs">{testimonials[active].batch}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "bg-primary w-8" : "bg-gray-300 w-2"}`}
                whileHover={{ scale: 1.3 }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

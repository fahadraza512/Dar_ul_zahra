"use client";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

const milestones = [
  { year: "2019", title: "Foundation", desc: "Dar ul Zahra Educational Center was established by the Kazmi family — 5 brothers and 1 sister — in Kot Adu, Punjab, Pakistan, with a vision to fund the education of orphans and needy children." },
  { year: "Jan 2019", title: "First Students", desc: "Began continuously funding the education of the first batch of orphans and needy students in the local area of Kot Adu." },
  { year: "2019", title: "Federal Registration", desc: "Officially registered as a non-profit charity foundation with the federal government, vide registration # 517/20." },
  { year: "2020", title: "Growing Impact", desc: "Expanded support to more students, providing not just education funding but also accommodation, meals, and a safe home for children with nowhere else to turn." },
  { year: "2022", title: "Campus Development", desc: "Strengthened the campus in Kot Addu, Muzaffargarh, Punjab — offering a full support system including education, shelter, and daily meals." },
  { year: "2024", title: "37+ Students Milestone", desc: "Reached 37+ orphans and needy students funded continuously, with growing community support and donor contributions." },
  { year: "2025", title: "Expanding Reach", desc: "Increased outreach efforts across Muzaffargarh district, onboarding new donors and volunteers committed to the cause of child education." },
  { year: "2026", title: "Looking Ahead", desc: "Continuing to grow — with plans to expand the campus, increase student capacity, and bring quality education to even more orphans and needy children across Punjab." },
];

export default function AboutTimeline() {
  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24">

        <AnimateIn direction="up" className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs font-mono tracking-[0.25em] uppercase font-black">Our Journey</span>
          </div>
          <h2 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-5xl tracking-tight">
            Our Journey Since <span className="text-primary">2019</span>
          </h2>
          <p className="text-[#5e6d82] mt-4 max-w-xl text-base leading-relaxed">
            From a family&apos;s vision to a federally registered charity — here&apos;s how Dar ul Zahra has grown since its founding in Kot Adu, Punjab.
          </p>
        </AnimateIn>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <AnimateIn key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                <div className={`flex items-center gap-0 lg:gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                  {/* Content card */}
                  <motion.div
                    className="flex-1 bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
                    whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full border border-primary/20">
                        {m.year}
                      </span>
                      <h3 className="font-manrope font-black text-[#0c1525] text-lg">{m.title}</h3>
                    </div>
                    <p className="text-[#5e6d82] text-sm leading-relaxed">{m.desc}</p>
                  </motion.div>

                  {/* Center dot */}
                  <div className="hidden lg:flex flex-shrink-0 w-12 h-12 bg-primary rounded-full items-center justify-center shadow-lg shadow-primary/30 z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

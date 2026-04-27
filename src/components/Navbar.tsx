"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Pages that start with a dark hero — navbar starts transparent with white text
const darkHeroPages = ["/"];

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Media",      href: "/gallery" },
  { label: "Contact",    href: "/contact" },
];

// Items already in nav are skipped
const moreLinks = [
  { label: "Profile",              href: "/profile",          icon: "👤", category: "About" },
  { label: "Special Guests",       href: "/special-guests",   icon: "⭐", category: "About" },
  { label: "Field Trip",           href: "/field-trip",       icon: "🚌", category: "Activities" },
  { label: "How To Donate",        href: "/how-to-donate",    icon: "💳", category: "Donate" },
  { label: "Ramadhan Relief 2025", href: "/ramadhan-relief",  icon: "🌙", category: "Donate" },
  { label: "USA Donors",           href: "/donors/usa",       icon: "🇺🇸", category: "Donors" },
  { label: "UK Donors",            href: "/donors/uk",        icon: "🇬🇧", category: "Donors" },
  { label: "Canadian Donors",      href: "/donors/canada",    icon: "🇨🇦", category: "Donors" },
  { label: "Worldwide Donors",     href: "/donors/worldwide", icon: "🌍", category: "Donors" },
  { label: "Orison",               href: "/orison",           icon: "📿", category: "Activities" },
  { label: "FAQ's",                href: "/faqs",             icon: "❓", category: "Support" },
];

const moreCategories = ["About", "Activities", "Donate", "Donors", "Support"];

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceScrolled);
  const moreRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const hasDarkHero = darkHeroPages.includes(pathname);

  useEffect(() => {
    if (forceScrolled) return;
    const check = () => setScrolled(window.scrollY > 40);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [forceScrolled, pathname]);

  // On white-bg pages, always act as scrolled (dark text)
  const isScrolled = forceScrolled || !hasDarkHero || scrolled;

  // Close more menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.header
      className="fixed top-0 w-full z-50"
      animate={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.98)" : "rgba(0,0,0,0)",
        boxShadow: isScrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
      }}
      transition={{ duration: 0.3 }}
      style={{ backdropFilter: isScrolled ? "blur(12px)" : "none" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image src="/logo.png" alt="Dar ul Zahra" width={80} height={80} className="object-contain" priority />
          </motion.div>
          <motion.span
            className="text-2xl tracking-widest uppercase font-nexa transition-colors duration-300"
            style={{ color: isScrolled ? "#2d5a1b" : "#ffffff" }}
            whileHover={{ color: "#f15a24" }}
          >
            DAR-AL-ZAHRA
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="relative text-base font-bold group">
              <motion.span
                className="block"
                style={{ color: isScrolled ? "#5e6d82" : "rgba(255,255,255,0.9)" }}
                whileHover={{ color: "#f15a24" }}
                transition={{ duration: 0.2 }}
              >
                {l.label}
              </motion.span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.25 }}
              />
            </Link>
          ))}

          {/* More — full-width mega menu */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(o => !o)}
              onMouseEnter={() => setMoreOpen(true)}
              className="relative text-base font-bold flex items-center gap-1 group"
            >
              <motion.span
                className="block"
                style={{ color: isScrolled ? "#5e6d82" : "rgba(255,255,255,0.9)" }}
                animate={{ color: moreOpen ? "#f15a24" : isScrolled ? "#5e6d82" : "rgba(255,255,255,0.9)" }}
                whileHover={{ color: "#f15a24" }}
                transition={{ duration: 0.2 }}
              >
                More
              </motion.span>
              <motion.svg
                className="w-3.5 h-3.5"
                style={{ color: isScrolled ? "#5e6d82" : "rgba(255,255,255,0.7)" }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                animate={{ rotate: moreOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          </div>
        </nav>

        <motion.button
          className="hidden lg:block bg-primary text-white px-8 py-3 rounded-md font-bold text-base shadow-lg shadow-primary/20"
          whileHover={{ scale: 1.04, backgroundColor: "#d44a1a" }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Donate Now
        </motion.button>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <motion.div animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className={`w-6 h-0.5 mb-1.5 origin-center ${isScrolled ? "bg-[#0c1525]" : "bg-white"}`} />
          <motion.div animate={open ? { opacity: 0 } : { opacity: 1 }} className={`w-6 h-0.5 mb-1.5 ${isScrolled ? "bg-[#0c1525]" : "bg-white"}`} />
          <motion.div animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className={`w-6 h-0.5 origin-center ${isScrolled ? "bg-[#0c1525]" : "bg-white"}`} />
        </button>
      </div>

      {/* Full-width mega menu */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-2xl z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8">
              <div className="flex gap-12">

                {/* Categorised links */}
                <div className="flex-1 grid grid-cols-5 gap-8">
                  {moreCategories.map(cat => (
                    <div key={cat}>
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.25em] mb-3 pb-2 border-b border-gray-100">
                        {cat}
                      </p>
                      <div className="flex flex-col gap-0.5">
                        {moreLinks.filter(l => l.category === cat).map((l, i) => (
                          <Link
                            key={i}
                            href={l.href}
                            onClick={() => setMoreOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-2 rounded-lg text-sm font-medium text-[#5e6d82] hover:text-primary hover:bg-primary/5 transition-all group"
                          >
                            <span className="text-base leading-none">{l.icon}</span>
                            <span className="group-hover:translate-x-0.5 transition-transform">{l.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-px bg-gray-100 self-stretch" />

                {/* CTA card */}
                <div className="shrink-0 w-52 flex flex-col justify-between">
                  <div className="bg-[#0c1525] rounded-2xl p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <p className="text-white font-black text-base leading-tight mb-2">Support a Child Today</p>
                      <p className="text-white/45 text-xs leading-relaxed">Every donation funds education, meals, and shelter for an orphan in need.</p>
                    </div>
                    <Link
                      href="/donate"
                      onClick={() => setMoreOpen(false)}
                      className="mt-4 flex items-center justify-center gap-2 bg-primary text-white text-xs font-bold py-2.5 rounded-xl hover:bg-primary/90 transition-colors group"
                    >
                      Donate Now
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Quick stats */}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {[{ n: "37+", l: "Students" }, { n: "2019", l: "Est." }].map((s, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl px-3 py-2 text-center border border-gray-100">
                        <p className="text-primary font-black text-sm leading-none">{s.n}</p>
                        <p className="text-[#5e6d82] text-[10px] mt-0.5">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {[...navLinks, ...moreLinks].map((l, i) => (
              <motion.div key={l.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                <Link href={l.href} className="text-sm font-bold text-[#5e6d82] hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              className="bg-primary text-white px-6 py-2.5 rounded-md font-bold text-sm text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (navLinks.length + moreLinks.length) * 0.04 }}
            >
              Donate Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

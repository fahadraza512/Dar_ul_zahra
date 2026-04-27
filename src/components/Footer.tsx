"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const pages = [
  { label: "Home",               href: "/" },
  { label: "About",              href: "/about" },
  { label: "Children Portfolio", href: "/children" },
  { label: "Sponsor a Child",    href: "/sponsor" },
  { label: "Gallery",            href: "/gallery" },
  { label: "Contact",            href: "/contact" },
];

const scholarshipLinks = [
  { label: "Major Scholarships",    href: "/scholarships/major" },
  { label: "Need Based Assistance", href: "/scholarships/need-based" },
  { label: "Merit Awards",          href: "/scholarships/merit-awards" },
  { label: "Sports Scholarships",   href: "/scholarships/sports" },
  { label: "Our Partners",          href: "/scholarships/partners" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1525] text-white">
      {/* Top wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" className="w-full h-10 fill-white" preserveAspectRatio="none">
          <path d="M0,40 C360,0 1080,0 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20 pt-10 md:pt-12 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10 lg:gap-12">

          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 inline-flex items-center justify-center shadow-lg shadow-black/20 mb-4">
              <Image src="/logo.png" alt="Dar ul Zahra" width={100} height={100} className="object-contain w-20 h-20 md:w-24 md:h-24" />
            </div>
            <h3 className="text-base tracking-widest uppercase font-nexa text-[#6abf3a] mb-3 whitespace-nowrap">
              DAR-UL-ZAHRA
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-2">
              Non-profit educational charity dedicated to the future of orphans and needy children in Pakistan.
            </p>
            <p className="text-primary text-xs font-semibold mb-6">
              Federally Registered # 517/20
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-base font-bold mb-6 relative inline-block">
              Pages
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3 mt-4">
              {pages.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/donate" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all mt-2">
                  Donate Now →
                </Link>
              </li>
            </ul>
          </div>

          {/* Scholarships */}
          <div>
            <h4 className="text-base font-bold mb-6 relative inline-block">
              Scholarships
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3 mt-4">
              {scholarshipLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate */}
          <div>
            <h4 className="text-base font-bold mb-6 relative inline-block">
              Donate
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <div className="mt-4 space-y-4">
              <div className="bg-white/5 border border-white/8 rounded-xl p-4">
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Bank Al-Habib — IBAN</p>
                <p className="text-white font-mono text-xs font-semibold break-all">PK47-BAHL-0209-0981-0001-3801</p>
                <p className="text-white/50 text-xs mt-1">Syed Sajjad Hussain Kazmi</p>
              </div>
              <div className="bg-white/5 border border-white/8 rounded-xl p-4">
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">JazzCash</p>
                <p className="text-white font-semibold text-sm">+92 333 6006 512</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-white/55 text-sm space-y-0.5">
                  <p>+92 345 5006512</p>
                  <p>+92 333 6006512</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Darulzahra72@gmail.com" className="text-white/55 text-sm hover:text-primary transition-colors break-all">
                  Darulzahra72@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white/55 text-sm leading-relaxed">
                  Basti Shah Wala, near Taunsa Morr,<br />Kot Adu, Punjab, Pakistan
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-20 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Dar ul Zahra Educational Center. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">
            Federally Registered Non-Profit · Reg. # 517/20 · Est. 2019
          </p>
        </div>
      </div>
    </footer>
  );
}

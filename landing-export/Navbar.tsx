"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────
type MegaMenu = {
  cols: { heading: string; items: { icon: string; label: string; desc?: string; href: string }[] }[];
  promo: { eyebrow: string; title: string; desc: string; cta: string; href: string; icon: string };
};

// ─── Mega-menu data ───────────────────────────────────────────────────────────
const megaMenus: Record<string, MegaMenu> = {
  Hosting: {
    cols: [
      {
        heading: "Solutions",
        items: [
          { icon: "web",          label: "Web Hosting",       desc: "Fast, secure hosting for any website",  href: "/web-hosting" },
          { icon: "cloud",        label: "Cloud Hosting",     desc: "Elastic resources that scale with you", href: "/cloud-hosting" },
          { icon: "storage",      label: "VPS Hosting",       desc: "Dedicated power, full root access",     href: "/vps-hosting" },
          { icon: "build_circle", label: "WordPress Hosting", desc: "Optimised stack for WordPress sites",   href: "/wordpress-hosting" },
        ],
      },
    ],
    promo: {
      eyebrow: "Most Popular",
      title: "Cloud Hosting",
      desc: "Deploy in seconds. Scale to millions. Enterprise infrastructure at startup prices.",
      cta: "Explore Plans",
      href: "/cloud-hosting",
      icon: "cloud",
    },
  },
  Security: {
    cols: [
      {
        heading: "Protection",
        items: [
          { icon: "encrypted", label: "SSL Certificates", desc: "Encrypt traffic and build visitor trust",        href: "/ssl-certificates" },
          { icon: "lock",      label: "Website Security", desc: "Real-time threat detection and malware removal", href: "/website-security" },
        ],
      },
    ],
    promo: {
      eyebrow: "Always On",
      title: "Website Security",
      desc: "24/7 monitoring, automatic malware removal, and a web application firewall — all in one.",
      cta: "See Features",
      href: "/website-security",
      icon: "shield",
    },
  },
};

const navLinks = [
  { label: "Hosting",          href: "#",               hasMega: true },
  { label: "Security",         href: "#",               hasMega: true },
  { label: "Agency Solutions", href: "/agency-solutions", hasMega: false },
  { label: "Client Area",      href: "/client-area",      hasMega: false },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled,   setScrolled]   = useState(false);
  const navRef      = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight]   = useState(64);
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection for transparent mode
  useEffect(() => {
    if (!transparent) return;
    setScrolled(window.scrollY > 60);
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setScrolled(window.scrollY > 60); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  // Track nav height for mega-menu positioning
  useEffect(() => {
    if (!navRef.current) return;
    const ro = new ResizeObserver(([entry]) => setNavHeight(entry.contentRect.height));
    ro.observe(navRef.current);
    return () => ro.disconnect();
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);
  const isSolid = !transparent || scrolled || !!activeMenu;

  return (
    <nav
      ref={navRef}
      className={`z-50 transition-colors duration-300 ${
        transparent ? "fixed top-0 left-0 right-0" : "sticky top-0 w-full border-b border-white/8"
      } ${isSolid ? "bg-neutral-900/95 shadow-lg" : "bg-transparent"}`}
    >
      {/* Backdrop overlay to close mega menu on outside click */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-45"
          style={{ top: `${navHeight}px` }}
          onClick={() => setActiveMenu(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center -ml-2">
          <Image
            src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
            alt="Speed Force"
            width={200}
            height={48}
            priority
            style={{ height: "48px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center space-x-5 text-sm font-bold tracking-tight whitespace-nowrap">
          {navLinks.map(({ label, href, hasMega }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => hasMega && handleMouseEnter(label)}
              onMouseLeave={() => hasMega && handleMouseLeave()}
            >
              <Link
                href={href}
                onClick={(e) => { if (hasMega) e.preventDefault(); }}
                className="flex items-center gap-1 text-white/70 hover:text-white transition-colors duration-200 py-4"
              >
                {label}
                {hasMega && (
                  <span
                    className={`material-symbols-outlined text-[14px] transition-transform duration-200 ${
                      activeMenu === label ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                )}
              </Link>

              {/* ── Mega menu dropdown ── */}
              {hasMega && megaMenus[label] && (
                <div
                  onMouseEnter={() => handleMouseEnter(label)}
                  onMouseLeave={() => handleMouseLeave()}
                  className={`fixed left-0 right-0 z-46 transition-all duration-300 ease-out ${
                    activeMenu === label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ top: `${navHeight}px` }}
                >
                  <div className="bg-white border-b border-neutral-200/80 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                    <div className="max-w-7xl mx-auto px-8 py-7 grid grid-cols-[1fr_360px] gap-8 items-start">

                      {/* Left: item cards */}
                      <div>
                        {megaMenus[label].cols.map(({ heading, items }, colIdx) => (
                          <div key={colIdx}>
                            {heading && (
                              <p className="text-[9px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-4">
                                {heading}
                              </p>
                            )}
                            <div className="flex flex-col gap-2">
                              {items.map(({ icon, label: itemLabel, desc, href: itemHref }, itemIdx) => (
                                <Link
                                  key={itemLabel}
                                  href={itemHref}
                                  onClick={() => setActiveMenu(null)}
                                  className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl border border-neutral-100 bg-neutral-50/60 hover:bg-white hover:border-neutral-200 hover:shadow-md transition-all duration-200 ${
                                    activeMenu === label
                                      ? "opacity-100 translate-y-0"
                                      : "opacity-0 translate-y-2"
                                  }`}
                                  style={{
                                    transitionDelay: activeMenu === label ? `${itemIdx * 35}ms` : "0ms",
                                  }}
                                >
                                  <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 shadow-sm flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-all duration-200">
                                    <span className="material-symbols-outlined text-neutral-400 text-[17px] group-hover:text-primary transition-colors duration-200">
                                      {icon}
                                    </span>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-neutral-800 group-hover:text-neutral-900 leading-tight">
                                      {itemLabel}
                                    </p>
                                    {desc && (
                                      <p className="text-[11px] text-neutral-400 leading-snug mt-0.5">{desc}</p>
                                    )}
                                  </div>
                                  <span className="material-symbols-outlined text-[13px] text-neutral-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0">
                                    arrow_forward
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Footer row */}
                        <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                          <p className="text-[11px] text-neutral-400">Need help choosing?</p>
                          <Link
                            href="/contact-sales"
                            onClick={() => setActiveMenu(null)}
                            className="text-[11px] font-black text-primary hover:text-primary/70 transition-colors flex items-center gap-1"
                          >
                            Talk to Sales
                            <span className="material-symbols-outlined text-xs">arrow_forward</span>
                          </Link>
                        </div>
                      </div>

                      {/* Right: promo card */}
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-900 p-6 flex flex-col gap-4 min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-white text-2xl shrink-0">
                            {megaMenus[label].promo.icon}
                          </span>
                          <h3 className="text-base font-black text-white leading-tight">
                            {megaMenus[label].promo.title}
                          </h3>
                        </div>
                        <p className="text-[11px] text-white/50 leading-relaxed">
                          {megaMenus[label].promo.desc}
                        </p>
                        <Link
                          href={megaMenus[label].promo.href}
                          onClick={() => setActiveMenu(null)}
                          className="mt-auto inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-black text-xs transition-all hover:scale-105 w-fit shadow-lg shadow-primary/30"
                        >
                          {megaMenus[label].promo.cta}
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden md:block text-white/70 hover:text-white text-sm font-bold transition-colors"
          >
            Log In
          </Link>
          <Link
            href="/register"
            className="bg-primary hover:bg-primary-container text-white px-5 py-2 rounded-full font-bold transition-all duration-200 hover:scale-105 active:scale-95 text-sm"
          >
            Get Started
          </Link>
          <button
            className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-900 px-6 pb-6 flex flex-col gap-1 border-t border-white/10">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold py-3 border-b border-white/5 text-white/70 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/register"
            className="mt-4 bg-primary text-white px-5 py-3 rounded-full font-bold text-sm w-full text-center block"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

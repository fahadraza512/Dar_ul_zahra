import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    heading: "Hosting",
    links: [
      { label: "Cloud Hosting",      href: "/cloud-hosting" },
      { label: "WordPress Hosting",  href: "/wordpress-hosting" },
      { label: "VPS Hosting",        href: "/vps-hosting" },
      { label: "Dedicated Servers",  href: "#" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "SSL Certificates", href: "/ssl-certificates" },
      { label: "CDN & Security",   href: "#" },
      { label: "Website Security", href: "/website-security" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",  href: "#" },
      { label: "Careers",   href: "#" },
      { label: "Blog",      href: "#" },
      { label: "Press Kit", href: "#" },
      { label: "Partners",  href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center",       href: "#" },
      { label: "Community Forum",   href: "#" },
      { label: "System Status",     href: "/network-status" },
      { label: "Contact Us",        href: "/contact-sales" },
      { label: "Managed Services",  href: "#" },
    ],
  },
];

const socialIcons = [
  { icon: "language", label: "Website", href: "#" },
  { icon: "terminal", label: "GitHub",  href: "#" },
  { icon: "rss_feed", label: "Blog",    href: "#" },
];

const badges = ["SOC 2 Type II", "ISO 27001", "GDPR Ready", "PCI DSS"];

export default function Footer({ showBanner = false }: { showBanner?: boolean }) {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      {showBanner && (
        <div className="bg-primary/10 border-y border-primary/20">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-black text-white tracking-tight mb-1">Ready to accelerate?</h3>
              <p className="text-sm text-neutral-400">30-day money back guarantee. Cancel anytime.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/register" className="bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20">
                Get Started
              </Link>
              <Link href="/contact-sales" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Image
              src="https://speedforce.agency/wp-content/themes/wordpress_dev/build/images/logo.png"
              alt="Speed Force"
              width={200}
              height={56}
              className="mb-3"
            />
            <p className="text-sm leading-relaxed mb-6">
              Enterprise-grade cloud infrastructure built for developers, agencies, and growing businesses.
            </p>
            <div className="flex gap-3 mb-8">
              {socialIcons.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                >
                  <span className="material-symbols-outlined text-white text-sm">{icon}</span>
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="text-[10px] font-bold px-2 py-1 rounded border border-white/10 text-neutral-500 tracking-wide">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-white font-black text-sm tracking-wider mb-4">{heading.toUpperCase()}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Speed Force Hosting, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "SLA"].map((link) => (
              <a key={link} href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useRouter } from "next/navigation";

// ─── Data ─────────────────────────────────────────────────────────────────────
const plans = [
  {
    id: "shared",
    name: "Starter",
    price: "$3.99",
    period: "/mo",
    description: "Perfect for personal projects and small sites.",
    features: ["10 GB SSD Storage", "Free SSL Certificate", "1 Website", "Daily Backups", "24/7 Support"],
    highlight: false,
    cta: "Get Started",
  },
  {
    id: "cloud",
    name: "Growth",
    price: "$7.99",
    period: "/mo",
    description: "For growing businesses that need more power.",
    features: ["30 GB SSD Storage", "Free SSL + CDN", "Unlimited Websites", "Priority Support", "Staging Environment"],
    highlight: true,
    badge: "Most Popular",
    cta: "Get Started",
  },
  {
    id: "vps",
    name: "Scale",
    price: "$14.99",
    period: "/mo",
    description: "Enterprise-grade for high-traffic applications.",
    features: ["100 GB NVMe Storage", "SSL + CDN + WAF", "Unlimited Websites", "Dedicated Support", "Custom Server Config"],
    highlight: false,
    cta: "Contact Sales",
  },
];

const guarantees = [
  { icon: "verified_user",  label: "30-day money back" },
  { icon: "lock",           label: "No lock-in contracts" },
  { icon: "visibility_off", label: "No hidden fees" },
  { icon: "cancel",         label: "Cancel anytime" },
];

// ─── PricingCards ─────────────────────────────────────────────────────────────
function PricingCards() {
  const router = useRouter();

  function handlePlanClick(planId: string) {
    localStorage.setItem("sf_selected_plan", planId);
    router.push("/register");
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {plans.map(({ id, name, price, period, description, features, highlight, badge, cta }) => (
          <div
            key={name}
            className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
              highlight
                ? "bg-neutral-900 border-neutral-800 shadow-2xl shadow-black/20"
                : "bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-md"
            }`}
          >
            {badge && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-primary text-[9px] font-black px-4 py-1 rounded-full tracking-widest border border-primary/40 bg-white">
                {badge}
              </span>
            )}

            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className={`font-black text-base ${highlight ? "text-white" : "text-neutral-900"}`}>{name}</h3>
                {highlight && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
              </div>
              <p className={`text-xs leading-relaxed mb-5 ${highlight ? "text-neutral-400" : "text-neutral-500"}`}>{description}</p>
              <div className="flex items-end gap-1">
                <span className={`text-4xl font-black tracking-tighter ${highlight ? "text-white" : "text-neutral-900"}`}>{price}</span>
                <span className="text-sm text-neutral-500 mb-1">{period}</span>
              </div>
            </div>

            <div className={`h-px mb-5 ${highlight ? "bg-white/10" : "bg-neutral-100"}`} />

            <ul className="space-y-3 mb-8 flex-1">
              {features.map((f) => (
                <li key={f} className={`flex items-center gap-2.5 text-sm ${highlight ? "text-neutral-400" : "text-neutral-600"}`}>
                  <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handlePlanClick(id)}
              className={`block w-full py-3 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02] active:scale-[0.98] ${
                highlight
                  ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                  : "border border-neutral-300 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50"
              }`}
            >
              {cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {guarantees.map(({ icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-neutral-500 text-xs">
            <span className="material-symbols-outlined text-sm text-primary/60">{icon}</span>
            {label}
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Pricing section (main export) ───────────────────────────────────────────
export default function Pricing() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[10px] font-black tracking-[0.25em] text-primary uppercase">Simple Pricing</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter mb-4">
            Plans That Scale <br />With You.
          </h2>
          <p className="text-neutral-500 max-w-xl text-sm leading-relaxed">
            No hidden fees. No lock-in contracts. Cancel anytime.
          </p>
        </div>

        <PricingCards />
      </div>
    </section>
  );
}

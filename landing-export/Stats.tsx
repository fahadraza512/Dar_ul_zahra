import React from "react";

const stats = [
  { value: "99.9%", label: "Uptime SLA",     icon: "verified" },
  { value: "2M+",   label: "Domains Hosted", icon: "language" },
  { value: "<1ms",  label: "Avg. Latency",   icon: "bolt" },
  { value: "24/7",  label: "Expert Support", icon: "support_agent" },
];

const trustedBy = [
  {
    name: "Vercel",
    svg: <svg viewBox="0 0 76 65" className="w-5 h-5"><path fill="#000" d="M37.5274 0L75.0548 65H0L37.5274 0Z"/></svg>,
  },
  {
    name: "Stripe",
    svg: (
      <svg viewBox="0 0 60 25" className="w-12 h-5">
        <path fill="#635BFF" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.87zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"/>
      </svg>
    ),
  },
  {
    name: "Shopify",
    svg: (
      <svg viewBox="0 0 109 124" className="w-5 h-5">
        <path fill="#96BF48" d="M74.7 14.8s-.3 0-.7.1c-.4-1.1-1-2.1-1.8-3-1.8-2.2-4.4-3.3-7.4-3.2-.2 0-.4 0-.6.1-.9-1.1-2-2-3.3-2.6C57.6 4.6 54 4.8 51 6.5c-6 3.4-8.7 10.8-9.6 15.8-2.3.7-3.9 1.2-4.1 1.3-2.5.8-2.6.8-2.9 3.2C34.1 28.7 26 93 26 93l52.5 9.1V14.6c-.6.1-3.8.2-3.8.2zM62.3 18.5l-8.1 2.5c.8-3.2 2.4-6.3 5.1-8.1.9 1.7 1.9 4 3 5.6zm-5.5-9.3c.5 0 1 .1 1.4.3-2.9 2.2-4.8 5.6-5.7 8.9l-6.8 2.1c1.2-4.5 4.5-11.3 11.1-11.3zm2.8 47.4s-2.2-1.2-4.9-1.2c-4 0-4.2 2.5-4.2 3.1 0 3.4 8.9 4.7 8.9 12.7 0 6.3-4 10.3-9.4 10.3-6.5 0-9.8-4-9.8-4l1.7-5.7s3.4 2.9 6.3 2.9c1.9 0 2.6-1.5 2.6-2.5 0-4.4-7.3-4.6-7.3-11.9 0-6.1 4.4-12 13.2-12 3.4 0 5.1.9 5.1.9l-2.2 7.4zM65.4 18c-1-1.7-2.1-3.8-3.3-5.2 3.3.6 5.5 4.2 6.6 6.7L65.4 18z"/>
        <path fill="#5E8E3E" d="M79.5 102.1l22.5-5.6S91.3 26.3 91.2 25.7c-.1-.6-.6-1-1.1-1-.5 0-9.5-.2-9.5-.2s-5.5-5.3-7.6-7.4v84l6.5.0z"/>
      </svg>
    ),
  },
  {
    name: "Notion",
    svg: (
      <svg viewBox="0 0 100 100" className="w-5 h-5">
        <path fill="#000" d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z"/>
        <path fill="white" d="M61.35.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143C69.893.037 68.147-.357 61.35.227z"/>
      </svg>
    ),
  },
  {
    name: "Linear",
    svg: (
      <svg viewBox="0 0 100 100" className="w-5 h-5">
        <path fill="#5E6AD2" d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228zM.00189135 46.8891c-.01764375.2833.08887.5599.28957.7606L52.3503 99.7085c.2007.2007.4773.3072.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.779293 4.5932-.926915 6.9624z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 38 57" className="w-4 h-5">
        <path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
        <path fill="#FF7262" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z"/>
        <path fill="#1ABCFE" d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z"/>
        <path fill="#0ACF83" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
        <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 mx-auto text-center">
          {stats.map(({ value, label, icon }) => (
            <div key={label} className="group flex flex-col items-center border-l-2 border-primary pl-5">
              <div className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter mb-1">{value}</div>
              <div className="text-sm text-neutral-500 font-medium mb-3">{label}</div>
              <div className="flex items-center gap-1 text-primary text-xs font-black cursor-pointer hover:gap-2 transition-all">
                <span className="material-symbols-outlined text-sm">{icon}</span>
                <span>Learn more</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-100 pt-12 mt-8">
          <p className="text-center text-xs text-neutral-400 mb-8">Join 4,000+ companies already growing</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {trustedBy.map(({ name, svg }) => (
              <div key={name} className="flex items-center gap-3 cursor-default opacity-60 hover:opacity-100 transition-opacity duration-300">
                <span className="flex items-center justify-center">{svg}</span>
                <span className="font-black text-lg tracking-tight text-neutral-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

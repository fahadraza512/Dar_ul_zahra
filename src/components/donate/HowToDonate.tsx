"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { n: "01", title: "Choose Your Method",  desc: "Select bank transfer, JazzCash, or international wire — whatever works for you." },
  { n: "02", title: "Make the Transfer",   desc: "Send your donation using the account details below. Use your name as the reference." },
  { n: "03", title: "Send Confirmation",   desc: "WhatsApp or email us your payment screenshot so we can confirm and acknowledge." },
  { n: "04", title: "Your Impact Begins",  desc: "100% of your donation goes directly to a child's education, meals, and shelter." },
];

const methods = [
  {
    id: "bank",
    label: "Bank Transfer",
    badge: "Recommended",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    fields: [
      { label: "Bank Name",    value: "Bank Al-Habib" },
      { label: "Account Name", value: "Syed Sajjad Hussain Kazmi" },
      { label: "IBAN",         value: "PK47-BAHL-0209-0981-0001-3801" },
    ],
  },
  {
    id: "jazzcash",
    label: "JazzCash",
    badge: "Instant",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    fields: [
      { label: "Account Name",  value: "Syed Sajjad Hussain Kazmi" },
      { label: "Mobile Number", value: "+92 333 6006 512" },
    ],
  },
  {
    id: "international",
    label: "International",
    badge: "Worldwide",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    fields: [
      { label: "Bank Name",    value: "Bank Al-Habib" },
      { label: "Account Name", value: "Syed Sajjad Hussain Kazmi" },
      { label: "IBAN",         value: "PK47-BAHL-0209-0981-0001-3801" },
      { label: "SWIFT/BIC",    value: "BAHLPKKA" },
      { label: "Bank Address", value: "Kot Adu Branch, Punjab, Pakistan" },
    ],
  },
];

const faqs = [
  { q: "Is my donation tax deductible?",           a: "Dar ul Zahra is a federally registered non-profit (Reg. # 517/20). Please consult your local tax authority regarding deductibility in your country." },
  { q: "How do I know my donation reached the children?", a: "After confirming your transfer, we send a WhatsApp acknowledgement and periodic updates showing how your donation is being used." },
  { q: "Can I sponsor a specific child?",           a: "Yes. Contact us via WhatsApp or email and we will match you with a child and provide regular updates on their progress." },
  { q: "What is the minimum donation amount?",      a: "There is no minimum. Every rupee counts and goes directly to a child's education, meals, or accommodation." },
  { q: "Can I donate monthly?",                     a: "Absolutely. Set up a standing order or recurring transfer and let us know — we will keep you updated on the ongoing impact of your support." },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="shrink-0 w-8 h-8 rounded-lg bg-primary/8 hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-200">
      {copied
        ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
      }
    </button>
  );
}

export default function HowToDonate() {
  const [activeMethod, setActiveMethod] = useState("bank");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const method = methods.find(m => m.id === activeMethod)!;

  return (
    <div className="bg-white pt-28">

      {/* ── Steps ── */}
      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Simple Process</span>
            </div>
            <h2 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-5xl tracking-tighter">4 Easy Steps.</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-3xl overflow-hidden border border-gray-100">
            {steps.map((s, i) => (
              <motion.div key={i}
                className="bg-white p-8 lg:p-10 hover:bg-primary/3 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <span className="font-manrope font-black text-6xl text-primary/10 leading-none block mb-6 group-hover:text-primary/20 transition-colors">{s.n}</span>
                <h3 className="font-bold text-[#0c1525] text-base mb-3">{s.title}</h3>
                <p className="text-[#5e6d82] text-sm leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment methods ── */}
      <section className="py-24 px-6 lg:px-24 bg-[#f8fafc]">
        <div className="max-w-screen-xl mx-auto">
          <motion.div className="mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Payment Details</span>
            </div>
            <h2 className="font-manrope font-black text-[#0c1525] text-4xl lg:text-5xl tracking-tighter">Donation Methods.</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tabs — horizontal scroll on mobile, vertical on desktop */}
            <div className="flex lg:flex-col gap-2 lg:w-60 shrink-0 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
              {methods.map(m => (
                <button key={m.id} onClick={() => setActiveMethod(m.id)}
                  className={`relative flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold text-left transition-all duration-200 overflow-hidden shrink-0 ${
                    activeMethod === m.id
                      ? "bg-[#0c1525] text-white shadow-xl"
                      : "bg-white text-[#5e6d82] hover:bg-gray-50 border border-gray-100"
                  }`}>
                  <span className={activeMethod === m.id ? "text-primary" : ""}>{m.icon}</span>
                  <span className="whitespace-nowrap">{m.label}</span>
                  {activeMethod === m.id && (
                    <span className="text-[9px] font-black bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wide hidden sm:inline">{m.badge}</span>
                  )}
                </button>
              ))}

              {/* Contact reminder */}
              <div className="mt-2 bg-primary rounded-2xl p-5 text-white">
                <p className="font-bold text-sm mb-1">After donating</p>
                <p className="text-white/70 text-xs leading-relaxed mb-3">Send your screenshot to confirm receipt.</p>
                <a href="https://wa.me/923336006512" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-bold bg-white/15 hover:bg-white/25 px-3 py-2 rounded-xl transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.724.868.936-3.42-.234-.372A9.818 9.818 0 1112 21.818z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Details panel */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div key={activeMethod}
                  className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm h-full"
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary">{method.icon}</div>
                    <div>
                      <h3 className="font-manrope font-black text-[#0c1525] text-lg">{method.label}</h3>
                      <p className="text-[#5e6d82] text-xs">{method.badge} · Use your name as reference</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {method.fields.map((f, i) => (
                      <motion.div key={i}
                        className="flex items-center justify-between bg-[#f8fafc] rounded-2xl px-5 py-4 border border-gray-100 group hover:border-primary/20 transition-colors"
                        initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.05 }}>
                        <div className="min-w-0 flex-1 mr-3">
                          <p className="text-[#5e6d82] text-[10px] uppercase tracking-widest mb-0.5">{f.label}</p>
                          <p className="text-[#0c1525] font-semibold text-sm font-mono truncate">{f.value}</p>
                        </div>
                        <CopyButton text={f.value} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
          <motion.div className="lg:w-80 shrink-0" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-primary" />
              <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">FAQ</span>
            </div>
            <h2 className="font-manrope font-black text-[#0c1525] text-3xl lg:text-4xl tracking-tighter mb-4">Common Questions.</h2>
            <p className="text-[#5e6d82] text-sm font-light leading-relaxed">
              Still have questions? Reach us on WhatsApp or email and we'll respond within 24 hours.
            </p>
            <a href="https://wa.me/923336006512" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-primary font-bold text-sm hover:gap-3 transition-all">
              Chat with us →
            </a>
          </motion.div>

          <div className="flex-1 space-y-3">
            {faqs.map((f, i) => (
              <motion.div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group">
                  <span className={`font-bold text-sm pr-4 transition-colors ${openFaq === i ? "text-primary" : "text-[#0c1525] group-hover:text-primary"}`}>{f.q}</span>
                  <motion.div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? "bg-primary" : "bg-gray-100 group-hover:bg-primary/10"}`}
                    animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <svg className={`w-3.5 h-3.5 ${openFaq === i ? "text-white" : "text-[#5e6d82]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                      transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="px-6 pb-5 text-[#5e6d82] text-sm leading-relaxed font-light border-t border-gray-50 pt-3">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsor a Child ── */}
      <section className="bg-[#0c1525] py-24 px-6 lg:px-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(241,90,36,0.4),transparent)" }} />

        <div className="max-w-screen-xl mx-auto relative z-10">

          {/* Header */}
          <motion.div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Sponsor a Child's Education</span>
              </div>
              <h2 className="font-manrope font-black text-white leading-tight tracking-tighter"
                style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}>
                One Sponsor.<br />One Child.<br />
                <span className="text-primary">A Lifetime of Difference.</span>
              </h2>
            </div>
            <div className="lg:max-w-xs">
              <p className="text-white/50 text-base font-light leading-relaxed mb-6">
                Cover the full costs for one child — education, meals, uniform, and accommodation.
              </p>
              {/* Coverage pills */}
              <div className="flex flex-wrap gap-2">
                {["📚 Books", "👕 Uniform", "🍽️ Meals", "🏠 Shelter"].map((item, i) => (
                  <span key={i} className="text-xs font-semibold text-white/70 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 rounded-3xl overflow-hidden mb-12">
            {[
              { n: "01", title: "Choose to Sponsor",     desc: "Decide to cover the full costs for one child — education, meals, uniform, and accommodation." },
              { n: "02", title: "Transfer Your Donation", desc: "Send your sponsorship via Bank Al-Habib IBAN or JazzCash to our registered account." },
              { n: "03", title: "Confirm & Connect",      desc: "Send your payment confirmation to Darulzahra72@gmail.com. We will connect you with updates about the child." },
            ].map((s, i) => (
              <motion.div key={i} className="bg-white/4 hover:bg-white/8 transition-colors p-8 group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <span className="font-manrope font-black text-5xl text-primary/20 leading-none block mb-5 group-hover:text-primary/40 transition-colors">{s.n}</span>
                <h3 className="font-bold text-white text-base mb-2">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Payment cards */}
          <p className="text-white/30 text-xs font-bold uppercase tracking-[0.25em] mb-5">Send Your Sponsorship</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

            {/* Bank */}
            <motion.div className="bg-white rounded-3xl p-8"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0c1525] text-base">Bank Transfer</h3>
                  <p className="text-[#5e6d82] text-xs">Bank Al-Habib</p>
                </div>
                <span className="ml-auto text-[10px] font-black bg-primary/10 text-primary px-2.5 py-1 rounded-full uppercase tracking-wide">Recommended</span>
              </div>
              <div className="space-y-3 mb-5">
                {[
                  { label: "IBAN",          value: "PK47-BAHL-0209-0981-0001-3801" },
                  { label: "Account Title", value: "Syed Sajjad Hussain Kazmi" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center justify-between bg-[#f8fafc] rounded-xl px-4 py-3 border border-gray-100">
                    <div className="min-w-0 flex-1 mr-3">
                      <p className="text-[#5e6d82] text-[10px] uppercase tracking-widest mb-0.5">{f.label}</p>
                      <p className="text-[#0c1525] font-semibold text-sm font-mono truncate">{f.value}</p>
                    </div>
                    <CopyButton text={f.value} />
                  </div>
                ))}
              </div>
              <p className="text-[#5e6d82] text-xs leading-relaxed">
                After transferring, send confirmation to{" "}
                <a href="mailto:Darulzahra72@gmail.com" className="text-primary font-semibold">Darulzahra72@gmail.com</a>
              </p>
            </motion.div>

            {/* JazzCash */}
            <motion.div className="bg-white rounded-3xl p-8"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0c1525] text-base">JazzCash</h3>
                  <p className="text-[#5e6d82] text-xs">Mobile payment — instant transfer</p>
                </div>
                <span className="ml-auto text-[10px] font-black bg-green-50 text-green-600 px-2.5 py-1 rounded-full uppercase tracking-wide">Instant</span>
              </div>
              <div className="flex items-center justify-between bg-[#f8fafc] rounded-xl px-4 py-3 border border-gray-100 mb-5">
                <div>
                  <p className="text-[#5e6d82] text-[10px] uppercase tracking-widest mb-0.5">JazzCash Number</p>
                  <p className="text-[#0c1525] font-semibold text-sm font-mono">+92 333 6006 512</p>
                </div>
                <CopyButton text="+92 333 6006 512" />
              </div>
              <a href="https://wa.me/923336006512" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all mb-4">
                Open WhatsApp to confirm →
              </a>
              <p className="text-[#5e6d82] text-xs leading-relaxed">
                Send via JazzCash app, then message us on WhatsApp with your transaction ID.
              </p>
            </motion.div>
          </div>

          {/* Questions bar */}
          <motion.div className="flex flex-wrap items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-5"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-white font-semibold text-sm flex-1">Have questions about sponsorship?</p>
            <a href="https://wa.me/923336006512" target="_blank" rel="noreferrer"
              className="bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2">
              WhatsApp Us
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
            <a href="/contact" className="border border-white/20 hover:border-white/50 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors">
              Contact Us
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-manrope font-black text-white text-3xl lg:text-5xl tracking-tighter mb-2">Be the Guardian of an Orphan.</h2>
            <p className="text-white/60 text-base font-light">Your support keeps 37+ children in school. Join the Kazmi family's mission to educate every child in Kot Adu, Punjab.</p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-4 shrink-0" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <motion.a href="https://wa.me/923336006512" target="_blank" rel="noreferrer"
              className="bg-white text-primary font-bold text-sm px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/90 transition-colors shadow-xl"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Donate Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </motion.a>
            <motion.a href="/contact"
              className="border-2 border-white/40 hover:border-white text-white font-bold text-sm px-8 py-4 rounded-full transition-all"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              Sponsor a Child
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

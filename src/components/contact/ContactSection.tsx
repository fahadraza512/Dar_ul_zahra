"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const dialCodes = [
  { flag: "🇵🇰", code: "+92",  country: "Pakistan" },
  { flag: "🇦🇫", code: "+93",  country: "Afghanistan" },
  { flag: "🇦🇱", code: "+355", country: "Albania" },
  { flag: "🇩🇿", code: "+213", country: "Algeria" },
  { flag: "🇦🇩", code: "+376", country: "Andorra" },
  { flag: "🇦🇴", code: "+244", country: "Angola" },
  { flag: "🇦🇬", code: "+1",   country: "Antigua & Barbuda" },
  { flag: "🇦🇷", code: "+54",  country: "Argentina" },
  { flag: "🇦🇲", code: "+374", country: "Armenia" },
  { flag: "🇦🇺", code: "+61",  country: "Australia" },
  { flag: "🇦🇹", code: "+43",  country: "Austria" },
  { flag: "🇦🇿", code: "+994", country: "Azerbaijan" },
  { flag: "🇧🇸", code: "+1",   country: "Bahamas" },
  { flag: "🇧🇭", code: "+973", country: "Bahrain" },
  { flag: "🇧🇩", code: "+880", country: "Bangladesh" },
  { flag: "🇧🇧", code: "+1",   country: "Barbados" },
  { flag: "🇧🇾", code: "+375", country: "Belarus" },
  { flag: "🇧🇪", code: "+32",  country: "Belgium" },
  { flag: "🇧🇿", code: "+501", country: "Belize" },
  { flag: "🇧🇯", code: "+229", country: "Benin" },
  { flag: "🇧🇹", code: "+975", country: "Bhutan" },
  { flag: "🇧🇴", code: "+591", country: "Bolivia" },
  { flag: "🇧🇦", code: "+387", country: "Bosnia & Herzegovina" },
  { flag: "🇧🇼", code: "+267", country: "Botswana" },
  { flag: "🇧🇷", code: "+55",  country: "Brazil" },
  { flag: "🇧🇳", code: "+673", country: "Brunei" },
  { flag: "🇧🇬", code: "+359", country: "Bulgaria" },
  { flag: "🇧🇫", code: "+226", country: "Burkina Faso" },
  { flag: "🇧🇮", code: "+257", country: "Burundi" },
  { flag: "🇨🇻", code: "+238", country: "Cabo Verde" },
  { flag: "🇰🇭", code: "+855", country: "Cambodia" },
  { flag: "🇨🇲", code: "+237", country: "Cameroon" },
  { flag: "🇨🇦", code: "+1",   country: "Canada" },
  { flag: "🇨🇫", code: "+236", country: "Central African Republic" },
  { flag: "🇹🇩", code: "+235", country: "Chad" },
  { flag: "🇨🇱", code: "+56",  country: "Chile" },
  { flag: "🇨🇳", code: "+86",  country: "China" },
  { flag: "🇨🇴", code: "+57",  country: "Colombia" },
  { flag: "🇰🇲", code: "+269", country: "Comoros" },
  { flag: "🇨🇬", code: "+242", country: "Congo" },
  { flag: "🇨🇷", code: "+506", country: "Costa Rica" },
  { flag: "🇭🇷", code: "+385", country: "Croatia" },
  { flag: "🇨🇺", code: "+53",  country: "Cuba" },
  { flag: "🇨🇾", code: "+357", country: "Cyprus" },
  { flag: "🇨🇿", code: "+420", country: "Czech Republic" },
  { flag: "🇩🇰", code: "+45",  country: "Denmark" },
  { flag: "🇩🇯", code: "+253", country: "Djibouti" },
  { flag: "🇩🇴", code: "+1",   country: "Dominican Republic" },
  { flag: "🇪🇨", code: "+593", country: "Ecuador" },
  { flag: "🇪🇬", code: "+20",  country: "Egypt" },
  { flag: "🇸🇻", code: "+503", country: "El Salvador" },
  { flag: "🇬🇶", code: "+240", country: "Equatorial Guinea" },
  { flag: "🇪🇷", code: "+291", country: "Eritrea" },
  { flag: "🇪🇪", code: "+372", country: "Estonia" },
  { flag: "🇸🇿", code: "+268", country: "Eswatini" },
  { flag: "🇪🇹", code: "+251", country: "Ethiopia" },
  { flag: "🇫🇯", code: "+679", country: "Fiji" },
  { flag: "🇫🇮", code: "+358", country: "Finland" },
  { flag: "🇫🇷", code: "+33",  country: "France" },
  { flag: "🇬🇦", code: "+241", country: "Gabon" },
  { flag: "🇬🇲", code: "+220", country: "Gambia" },
  { flag: "🇬🇪", code: "+995", country: "Georgia" },
  { flag: "🇩🇪", code: "+49",  country: "Germany" },
  { flag: "🇬🇭", code: "+233", country: "Ghana" },
  { flag: "🇬🇷", code: "+30",  country: "Greece" },
  { flag: "🇬🇹", code: "+502", country: "Guatemala" },
  { flag: "🇬🇳", code: "+224", country: "Guinea" },
  { flag: "🇬🇼", code: "+245", country: "Guinea-Bissau" },
  { flag: "🇬🇾", code: "+592", country: "Guyana" },
  { flag: "🇭🇹", code: "+509", country: "Haiti" },
  { flag: "🇭🇳", code: "+504", country: "Honduras" },
  { flag: "🇭🇺", code: "+36",  country: "Hungary" },
  { flag: "🇮🇸", code: "+354", country: "Iceland" },
  { flag: "🇮🇳", code: "+91",  country: "India" },
  { flag: "🇮🇩", code: "+62",  country: "Indonesia" },
  { flag: "🇮🇷", code: "+98",  country: "Iran" },
  { flag: "🇮🇶", code: "+964", country: "Iraq" },
  { flag: "🇮🇪", code: "+353", country: "Ireland" },
  { flag: "🇮🇱", code: "+972", country: "Israel" },
  { flag: "🇮🇹", code: "+39",  country: "Italy" },
  { flag: "🇯🇲", code: "+1",   country: "Jamaica" },
  { flag: "🇯🇵", code: "+81",  country: "Japan" },
  { flag: "🇯🇴", code: "+962", country: "Jordan" },
  { flag: "🇰🇿", code: "+7",   country: "Kazakhstan" },
  { flag: "🇰🇪", code: "+254", country: "Kenya" },
  { flag: "🇰🇼", code: "+965", country: "Kuwait" },
  { flag: "🇰🇬", code: "+996", country: "Kyrgyzstan" },
  { flag: "🇱🇦", code: "+856", country: "Laos" },
  { flag: "🇱🇻", code: "+371", country: "Latvia" },
  { flag: "🇱🇧", code: "+961", country: "Lebanon" },
  { flag: "🇱🇸", code: "+266", country: "Lesotho" },
  { flag: "🇱🇷", code: "+231", country: "Liberia" },
  { flag: "🇱🇾", code: "+218", country: "Libya" },
  { flag: "🇱🇮", code: "+423", country: "Liechtenstein" },
  { flag: "🇱🇹", code: "+370", country: "Lithuania" },
  { flag: "🇱🇺", code: "+352", country: "Luxembourg" },
  { flag: "🇲🇬", code: "+261", country: "Madagascar" },
  { flag: "🇲🇼", code: "+265", country: "Malawi" },
  { flag: "🇲🇾", code: "+60",  country: "Malaysia" },
  { flag: "🇲🇻", code: "+960", country: "Maldives" },
  { flag: "🇲🇱", code: "+223", country: "Mali" },
  { flag: "🇲🇹", code: "+356", country: "Malta" },
  { flag: "🇲🇷", code: "+222", country: "Mauritania" },
  { flag: "🇲🇺", code: "+230", country: "Mauritius" },
  { flag: "🇲🇽", code: "+52",  country: "Mexico" },
  { flag: "🇲🇩", code: "+373", country: "Moldova" },
  { flag: "🇲🇨", code: "+377", country: "Monaco" },
  { flag: "🇲🇳", code: "+976", country: "Mongolia" },
  { flag: "🇲🇪", code: "+382", country: "Montenegro" },
  { flag: "🇲🇦", code: "+212", country: "Morocco" },
  { flag: "🇲🇿", code: "+258", country: "Mozambique" },
  { flag: "🇲🇲", code: "+95",  country: "Myanmar" },
  { flag: "🇳🇦", code: "+264", country: "Namibia" },
  { flag: "🇳🇵", code: "+977", country: "Nepal" },
  { flag: "🇳🇱", code: "+31",  country: "Netherlands" },
  { flag: "🇳🇿", code: "+64",  country: "New Zealand" },
  { flag: "🇳🇮", code: "+505", country: "Nicaragua" },
  { flag: "🇳🇪", code: "+227", country: "Niger" },
  { flag: "🇳🇬", code: "+234", country: "Nigeria" },
  { flag: "🇲🇰", code: "+389", country: "North Macedonia" },
  { flag: "🇳🇴", code: "+47",  country: "Norway" },
  { flag: "🇴🇲", code: "+968", country: "Oman" },
  { flag: "🇵🇦", code: "+507", country: "Panama" },
  { flag: "🇵🇬", code: "+675", country: "Papua New Guinea" },
  { flag: "🇵🇾", code: "+595", country: "Paraguay" },
  { flag: "🇵🇪", code: "+51",  country: "Peru" },
  { flag: "🇵🇭", code: "+63",  country: "Philippines" },
  { flag: "🇵🇱", code: "+48",  country: "Poland" },
  { flag: "🇵🇹", code: "+351", country: "Portugal" },
  { flag: "🇶🇦", code: "+974", country: "Qatar" },
  { flag: "🇷🇴", code: "+40",  country: "Romania" },
  { flag: "🇷🇺", code: "+7",   country: "Russia" },
  { flag: "🇷🇼", code: "+250", country: "Rwanda" },
  { flag: "🇸🇦", code: "+966", country: "Saudi Arabia" },
  { flag: "🇸🇳", code: "+221", country: "Senegal" },
  { flag: "🇷🇸", code: "+381", country: "Serbia" },
  { flag: "🇸🇱", code: "+232", country: "Sierra Leone" },
  { flag: "🇸🇬", code: "+65",  country: "Singapore" },
  { flag: "🇸🇰", code: "+421", country: "Slovakia" },
  { flag: "🇸🇮", code: "+386", country: "Slovenia" },
  { flag: "🇸🇴", code: "+252", country: "Somalia" },
  { flag: "🇿🇦", code: "+27",  country: "South Africa" },
  { flag: "🇸🇸", code: "+211", country: "South Sudan" },
  { flag: "🇪🇸", code: "+34",  country: "Spain" },
  { flag: "🇱🇰", code: "+94",  country: "Sri Lanka" },
  { flag: "🇸🇩", code: "+249", country: "Sudan" },
  { flag: "🇸🇷", code: "+597", country: "Suriname" },
  { flag: "🇸🇪", code: "+46",  country: "Sweden" },
  { flag: "🇨🇭", code: "+41",  country: "Switzerland" },
  { flag: "🇸🇾", code: "+963", country: "Syria" },
  { flag: "🇹🇼", code: "+886", country: "Taiwan" },
  { flag: "🇹🇯", code: "+992", country: "Tajikistan" },
  { flag: "🇹🇿", code: "+255", country: "Tanzania" },
  { flag: "🇹🇭", code: "+66",  country: "Thailand" },
  { flag: "🇹🇱", code: "+670", country: "Timor-Leste" },
  { flag: "🇹🇬", code: "+228", country: "Togo" },
  { flag: "🇹🇹", code: "+1",   country: "Trinidad & Tobago" },
  { flag: "🇹🇳", code: "+216", country: "Tunisia" },
  { flag: "🇹🇷", code: "+90",  country: "Turkey" },
  { flag: "🇹🇲", code: "+993", country: "Turkmenistan" },
  { flag: "🇺🇬", code: "+256", country: "Uganda" },
  { flag: "🇺🇦", code: "+380", country: "Ukraine" },
  { flag: "🇦🇪", code: "+971", country: "United Arab Emirates" },
  { flag: "🇬🇧", code: "+44",  country: "United Kingdom" },
  { flag: "🇺🇸", code: "+1",   country: "United States" },
  { flag: "🇺🇾", code: "+598", country: "Uruguay" },
  { flag: "🇺🇿", code: "+998", country: "Uzbekistan" },
  { flag: "🇻🇪", code: "+58",  country: "Venezuela" },
  { flag: "🇻🇳", code: "+84",  country: "Vietnam" },
  { flag: "🇾🇪", code: "+967", country: "Yemen" },
  { flag: "🇿🇲", code: "+260", country: "Zambia" },
  { flag: "🇿🇼", code: "+263", country: "Zimbabwe" },
];

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+92 345 5006512",
    href: "tel:+923455006512",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.724.868.936-3.42-.234-.372A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+92 333 6006512",
    href: "https://wa.me/923336006512",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "Darulzahra72@gmail.com",
    href: "mailto:Darulzahra72@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Basti Shah Wala, near Taunsa Morr, Kot Adu, Punjab, Pakistan",
    href: "https://maps.google.com/?q=GWCP+799+Dar+ul+Zahra+Education+Center+Kot+Addu+Pakistan",
  },
];

export default function ContactSection() {
  const [dialCode, setDialCode] = useState("+92");
  const [dialOpen, setDialOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dialRef.current && !dialRef.current.contains(e.target as Node)) {
        setDialOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24 py-16">

        {/* Page heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Contact Us</span>
          </div>
          <h1 className="font-manrope font-black text-[#0c1525] tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Get In Touch.
          </h1>
          <p className="text-[#5e6d82] text-base font-light mt-2 max-w-xl">
            We welcome questions, donations, volunteers, and visitors. Reach us any time.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── LEFT ── */}
          <motion.div
            className="lg:w-[420px] shrink-0 flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Contact items */}
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 bg-[#f8fafc] rounded-2xl px-5 py-4 border border-gray-100 hover:border-primary/30 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#5e6d82] text-[10px] uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="text-[#0c1525] font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {item.value}
                  </p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-primary shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* Map */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100" style={{ height: 300 }}>
              <iframe
                title="Dar ul Zahra Education Center"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=GWCP%2B799+Dar+ul+Zahra+Education+Center+Kot+Addu+Pakistan&z=17&output=embed"
              />
              {/* Overlay label */}
              <a
                href="https://maps.google.com/?q=GWCP+799+Dar+ul+Zahra+Education+Center+Kot+Addu+Pakistan"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-t border-gray-100 hover:bg-white transition-colors group"
              >
                <div>
                  <p className="text-[#0c1525] font-bold text-sm">Dar ul Zahra Education Center</p>
                  <p className="text-[#5e6d82] text-xs">GWCP+799 · Kot Addu, Punjab, Pakistan</p>
                </div>
                <span className="flex items-center gap-1 text-primary text-xs font-bold group-hover:gap-2 transition-all">
                  Directions
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT — form ── */}
          <motion.div
            className="flex-1 bg-[#f8fafc] rounded-3xl p-8 lg:p-10 border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="font-manrope font-black text-[#0c1525] text-2xl tracking-tight mb-1">
              Send a Message.
            </h2>
            <p className="text-[#5e6d82] text-sm font-light mb-8">
              Fill in the form and we'll get back to you as soon as possible.
            </p>

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-20 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0c1525] text-xl mb-2">Message Sent!</h3>
                <p className="text-[#5e6d82] text-sm">We'll be in touch with you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-primary text-sm font-semibold hover:underline">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0c1525] uppercase tracking-wider mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input type="text" required placeholder="Ahmed Khan"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0c1525] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0c1525] uppercase tracking-wider mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input type="email" required placeholder="you@example.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0c1525] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0c1525] uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-2 w-full">
                    {/* Custom dial code picker */}
                    <div ref={dialRef} className="relative shrink-0">
                      <button
                        type="button"
                        onClick={() => setDialOpen(o => !o)}
                        className="bg-white border border-gray-200 rounded-xl px-3 py-3.5 text-sm text-[#0c1525] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all flex items-center gap-1.5 w-[90px]"
                      >
                        <span className="font-semibold truncate">{dialCode}</span>
                        <svg className={`w-3 h-3 text-gray-400 shrink-0 transition-transform ${dialOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {dialOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-y-auto" style={{ maxHeight: 220, minWidth: 200 }}>
                          {dialCodes.map((d, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => { setDialCode(d.code); setDialOpen(false); }}
                              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary/5 hover:text-primary transition-colors flex items-center justify-between gap-3 ${dialCode === d.code ? "bg-primary/5 text-primary font-semibold" : "text-[#0c1525]"}`}
                            >
                              <span className="truncate">{d.country}</span>
                              <span className="text-[#5e6d82] text-xs shrink-0">{d.code}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input type="tel" placeholder="300 1234567"
                      className="min-w-0 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0c1525] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0c1525] uppercase tracking-wider mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea required rows={6} placeholder="How can we help you?"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-[#0c1525] placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none" />
                </div>

                <motion.button
                  type="submit"
                  className="relative w-full bg-primary text-white font-bold text-sm py-4 rounded-xl overflow-hidden flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <motion.div className="absolute inset-0 bg-white/15" style={{ skewX: -15 }}
                    initial={{ x: "-120%" }} whileHover={{ x: "220%" }} transition={{ duration: 0.45 }} />
                </motion.button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

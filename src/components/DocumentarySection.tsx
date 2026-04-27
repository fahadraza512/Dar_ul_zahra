"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DocumentarySection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative w-full">
      {/* Main image with overlay */}
      <div className="relative w-full h-64 md:h-96 lg:h-[480px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
          alt="Documentary"
          className="w-full h-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0c1525]/55" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center">
          <motion.h2
            className="text-white text-xl md:text-2xl lg:text-4xl font-bold max-w-2xl leading-snug"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Documentary: A Ray of Hope for Passionate Individuals
          </motion.h2>

          {/* Play button */}
          <motion.button
            onClick={() => setPlaying(true)}
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Play documentary"
          >
            {/* Pulse ring */}
            <motion.span
              className="absolute inset-0 rounded-full bg-primary/40"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
        </div>

        {/* Enhanced curve — layered waves for depth */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 160" className="w-full h-36 fill-white" preserveAspectRatio="none">
            {/* Back layer — subtle shadow wave */}
            <path
              d="M0,80 C200,140 400,20 600,80 C800,140 1000,20 1200,80 C1300,110 1380,100 1440,90 L1440,160 L0,160 Z"
              fill="rgba(241,90,36,0.08)"
            />
            {/* Front layer — main white wave */}
            <path d="M0,100 C180,40 360,140 540,90 C720,40 900,140 1080,90 C1200,55 1340,110 1440,80 L1440,160 L0,160 Z" />
          </svg>
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {playing && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlaying(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Documentary"
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-3 right-3 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your actual YouTube video ID
const VIDEO_ID = "LXb3EKWsInQ";

export default function DocumentarySection() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
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

          {/* Content — z-20 so it's always above wave */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 md:gap-8 px-6 text-center z-20">
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
              className="relative flex items-center gap-3 md:gap-4 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Play documentary"
              type="button"
            >
              <div className="relative">
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/30"
                  animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="text-white font-bold text-sm md:text-base drop-shadow">Watch Documentary</span>
            </motion.button>
          </div>

          {/* Wave — pointer-events-none so it never blocks clicks */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
            <svg viewBox="0 0 1440 160" className="w-full h-36 fill-white" preserveAspectRatio="none">
              <path
                d="M0,80 C200,140 400,20 600,80 C800,140 1000,20 1200,80 C1300,110 1380,100 1440,90 L1440,160 L0,160 Z"
                fill="rgba(241,90,36,0.08)"
              />
              <path d="M0,100 C180,40 360,140 540,90 C720,40 900,140 1080,90 C1200,55 1340,110 1440,80 L1440,160 L0,160 Z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Modal — rendered outside section so nothing can block it */}
      <AnimatePresence>
        {playing && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 md:p-6"
            style={{ zIndex: 99999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPlaying(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/*
                On mobile, autoplay is blocked by browsers.
                We use allow="autoplay" + muted workaround.
                The user tapped the button = user gesture = autoplay should work.
              */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Documentary"
              />
              {/* Close button */}
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-3 right-3 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
                type="button"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted so we can fade in the React splash smoothly
    setMounted(true);

    // Remove the static HTML blocker immediately — React splash is now ready
    const blocker = document.getElementById("__splash_blocker");
    if (blocker) {
      // Instant remove — React splash is already rendered and covers it
      blocker.style.display = "none";
    }

    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: mounted ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#f15a24",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(16px, 4vw, 28px)",
          }}
        >
          {/* Circle + Logo */}
          <div style={{
            position: "relative",
            width: "clamp(140px, 30vw, 200px)",
            height: "clamp(140px, 30vw, 200px)",
          }}>

            {/* Outer dashed spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px dashed rgba(255,255,255,0.4)",
              }}
            />

            {/* Inner solid ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: "8%",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />

            {/* Pulse */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: "18%",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            />

            {/* Logo — no pulsing animation, just clean appear */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/logo.png"
                alt="Dar ul Zahra"
                style={{
                  width: "55%",
                  height: "55%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </motion.div>
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <motion.p
              className="font-nexa"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                color: "#2d5a1b",
                fontSize: "clamp(14px, 4vw, 22px)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                margin: 0,
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              DAR-UL-ZAHRA
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "clamp(9px, 2.5vw, 11px)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                margin: 0,
                textAlign: "center",
              }}
            >
              Educational Centre
            </motion.p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the static blocker only after React has painted this component
    // Use requestAnimationFrame to ensure we're past the first paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const blocker = document.getElementById("__splash_blocker");
        if (blocker) blocker.style.display = "none";
      });
    });

    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          // Start fully visible — no fade-in, no scale-in
          // The static blocker was already showing this exact layout
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
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
            {/* Logo — starts fully visible, no entrance animation */}
            <div
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
            </div>
          </div>

          {/* Text — starts fully visible */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <p
              className="font-nexa"
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
            </p>
            <p
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
            </p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}

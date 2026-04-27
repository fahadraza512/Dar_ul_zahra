"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#f15a24",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28,
          }}
        >
          {/* Circle + Logo */}
          <div style={{ position: "relative", width: 200, height: 200 }}>

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
                inset: 16,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />

            {/* Pulse */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.4, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 32,
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            />

            {/* Logo — dead center using flex on the whole 200x200 box */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 160, damping: 14 }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Pulsing logo */}
              <motion.img
                src="/logo.png"
                alt="Dar ul Zahra"
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.85, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 110,
                  height: 110,
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
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{
                color: "#2d5a1b",
                fontSize: 22,
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 11,
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

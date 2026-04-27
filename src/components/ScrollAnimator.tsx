"use client";
import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    // Mark document as JS-ready so animations can start hidden
    document.documentElement.classList.add("js-loaded");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return null;
}

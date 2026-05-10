"use client";
import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] origin-left"
      style={{
        scaleX,
        height: "3px",
        background: "linear-gradient(90deg, #8B1A1A, #C9A84C, #FFD700, #C9A84C, #8B1A1A)",
        boxShadow: "0 0 12px rgba(201,168,76,0.8), 0 0 24px rgba(201,168,76,0.4)",
      }}
    />
  );
}

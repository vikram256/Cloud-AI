"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowColor?: string;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 8,
  glowColor = "rgba(201,168,76,0.3)",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 200, damping: 28 });
  const y = useSpring(rawY, { stiffness: 200, damping: 28 });

  const rotateY  = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);
  const rotateX  = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);
  const glowX    = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY    = useTransform(y, [-0.5, 0.5], [0, 100]);

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative glass-card rounded-sm ${className}`}
      >
        {/* Dynamic highlight glow following cursor */}
        <motion.div
          className="absolute inset-0 rounded-sm pointer-events-none z-10"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([lx, ly]) =>
                `radial-gradient(circle at ${lx}% ${ly}%, ${glowColor} 0%, transparent 60%)`
            ),
          }}
        />

        {/* Depth layer illusion */}
        <div
          className="absolute inset-0 rounded-sm pointer-events-none"
          style={{
            transform: "translateZ(-8px) scale(1.02)",
            background: "rgba(201,168,76,0.06)",
            border: "1px solid rgba(201,168,76,0.1)",
          }}
        />

        <div style={{ transform: "translateZ(0px)" }} className="relative z-20">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

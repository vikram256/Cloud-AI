"use client";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  shape: "circle" | "diamond" | "star";
}

const SHAPES = ["circle", "diamond", "star"] as const;

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const list: Particle[] = Array.from({ length: 55 }, (_, i) => ({
      id: i,
      left: (i * 1.87 + Math.sin(i * 0.9) * 15 + 50) % 100,
      size: 1.5 + (i % 7) * 0.6,
      duration: 8 + (i % 9) * 1.4,
      delay: (i * 0.37) % 12,
      opacity: 0.2 + (i % 5) * 0.1,
      shape: SHAPES[i % 3],
    }));
    setParticles(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0"
          style={{
            left: `${p.left}%`,
            animation: `particleRise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          {p.shape === "circle" && (
            <div
              style={{
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                background: `radial-gradient(circle, #FFD700, #C9A84C)`,
                opacity: p.opacity,
                boxShadow: `0 0 ${p.size * 3}px rgba(201,168,76,0.6)`,
              }}
            />
          )}
          {p.shape === "diamond" && (
            <div
              style={{
                width: p.size * 1.2,
                height: p.size * 1.2,
                background: "#C9A84C",
                opacity: p.opacity * 0.8,
                transform: "rotate(45deg)",
                boxShadow: `0 0 ${p.size * 2}px rgba(201,168,76,0.4)`,
              }}
            />
          )}
          {p.shape === "star" && (
            <svg
              width={p.size * 2.5}
              height={p.size * 2.5}
              viewBox="0 0 10 10"
              style={{ opacity: p.opacity * 0.9 }}
            >
              <polygon
                points="5,0 6.2,3.8 10,3.8 7,6.2 8.1,10 5,7.7 1.9,10 3,6.2 0,3.8 3.8,3.8"
                fill="#E8C84A"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

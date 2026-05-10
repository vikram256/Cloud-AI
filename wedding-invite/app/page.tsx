"use client";
import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import GaneshaSVG from "@/components/GaneshaSVG";
import AudioPlayer from "@/components/AudioPlayer";
import ParticleField from "@/components/ParticleField";
import Mandala from "@/components/Mandala";
import TiltCard from "@/components/TiltCard";
import ScrollProgress from "@/components/ScrollProgress";

/* ══════════════════════════════════════════════════════════
   Animation helpers
══════════════════════════════════════════════════════════ */
function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right" | "scale";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    bottom: { hidden: { opacity: 0, y: 60, rotateX: -12 },   visible: { opacity: 1, y: 0, rotateX: 0 } },
    left:   { hidden: { opacity: 0, x: -60, rotateY: 15 },   visible: { opacity: 1, x: 0, rotateY: 0 } },
    right:  { hidden: { opacity: 0, x: 60,  rotateY: -15 },  visible: { opacity: 1, x: 0, rotateY: 0 } },
    scale:  { hidden: { opacity: 0, scale: 0.85, rotateX: 8 }, visible: { opacity: 1, scale: 1, rotateX: 0 } },
  };

  return (
    <div ref={ref} style={{ perspective: "1000px" }}>
      <motion.div
        variants={variants[from]}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

function StaggerReveal({ children, className = "" }: { children: React.ReactNode[]; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Decorative SVG divider
══════════════════════════════════════════════════════════ */
function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 my-8 px-4 ${className}`}>
      <div className="divider-line flex-1" />
      <svg width="52" height="20" viewBox="0 0 52 20" fill="none">
        <path d="M26 2 L30 10 L26 18 L22 10 Z" fill="#C9A84C" opacity="0.9" />
        <path d="M4 10 Q15 2 26 10 Q15 18 4 10Z" fill="#C9A84C" opacity="0.45" />
        <path d="M48 10 Q37 2 26 10 Q37 18 48 10Z" fill="#C9A84C" opacity="0.45" />
        <circle cx="26" cy="10" r="3" fill="#FFD700" />
        <circle cx="2"  cy="10" r="1.5" fill="#C9A84C" opacity="0.5" />
        <circle cx="50" cy="10" r="1.5" fill="#C9A84C" opacity="0.5" />
      </svg>
      <div className="divider-line flex-1" />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Madhubani corner frame
══════════════════════════════════════════════════════════ */
function CornerFrame({ className = "" }: { className?: string }) {
  const corner = (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M2 2 L24 2 L2 24Z"     fill="#C9A84C" opacity="0.18" />
      <path d="M2 2 L16 2 L2 16Z"     fill="#C9A84C" opacity="0.30" />
      <circle cx="2"  cy="2"  r="2.5" fill="#C9A84C" opacity="0.6" />
      <circle cx="10" cy="10" r="1.5" fill="#E8C84A" opacity="0.4" />
      <path d="M2 2 L26 2"  stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
      <path d="M2 2 L2 26"  stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0">{corner}</div>
      <div className="absolute top-0 right-0 scale-x-[-1]">{corner}</div>
      <div className="absolute bottom-0 left-0 scale-y-[-1]">{corner}</div>
      <div className="absolute bottom-0 right-0 scale-[-1]">{corner}</div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Section wrapper
══════════════════════════════════════════════════════════ */
function Section({ children, id, className = "" }: {
  children: React.ReactNode; id?: string; className?: string;
}) {
  return (
    <section id={id} className={`relative w-full max-w-2xl mx-auto px-4 ${className}`}>
      {children}
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Info row
══════════════════════════════════════════════════════════ */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-2 border-b border-dashed"
      style={{ borderColor: "rgba(201,168,76,0.15)" }}
    >
      <span className="text-xs sm:text-sm hindi" style={{ color: "var(--cream-dim)" }}>{label}</span>
      <span className="text-xs sm:text-sm font-medium text-right hindi" style={{ color: "var(--cream)" }}>{value}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   Event data
══════════════════════════════════════════════════════════ */
const EVENTS = [
  { date: "02-07-2026", day: "गुरुवार",  event: "तिलक",                                                           highlight: false },
  { date: "05-07-2026", day: "रविवार",   event: "हल्दी-लेपन · पनेति",                                              highlight: false },
  { date: "06-07-2026", day: "सोमवार",   event: "मंडप पूजन · कुल देव-देवी पूजन · बारात · शुभ विवाह",             highlight: true  },
  { date: "07-07-2026", day: "मंगलवार",  event: "प्रीतिभोज (संध्या 6:30 बजे से)",                                  highlight: false },
];

/* ══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════ */
export default function WeddingPage() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const mandalaY     = useTransform(scrollY, [0, 600], [0, -80]);
  const mandalaScale = useTransform(scrollY, [0, 600], [1, 1.15]);
  const heroTextY    = useTransform(scrollY, [0, 400], [0, -60]);
  const heroOpacity  = useTransform(scrollY, [0, 350], [1, 0]);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
      <ScrollProgress />
      <ParticleField />
      <AudioPlayer />

      {/* ══════════════════════════════════════════════
          HERO — full viewport
      ══════════════════════════════════════════════ */}
      <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Rotating mandala background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ y: mandalaY, scale: mandalaScale }}
        >
          <div
            style={{
              width: "clamp(340px, 90vw, 600px)",
              animation: "mandalaSpin 60s linear infinite",
              opacity: 0.18,
            }}
          >
            <Mandala className="w-full h-auto" />
          </div>
        </motion.div>

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, rgba(8,2,6,0.7) 100%)",
          }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-6"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          {/* Invocation */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.4em", y: -20 }}
            animate={{ opacity: 1, letterSpacing: "0.25em", y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-base sm:text-lg font-medium mb-6 gold-pulse hindi tracking-widest"
            style={{ color: "var(--gold)" }}
          >
            ॥ श्री गणेशाय नमः ॥
          </motion.p>

          {/* Ganesha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="float-anim ganesha-glow mb-6"
            style={{ width: "clamp(150px, 40vw, 210px)" }}
          >
            <GaneshaSVG className="w-full h-auto" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl font-bold gold-shimmer hindi mb-4"
            style={{ lineHeight: 1.2 }}
          >
            शुभ विवाह
          </motion.h1>

          {/* Horizontal rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="divider-line w-48 mb-6"
          />

          {/* Names */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            className="space-y-1 mb-2"
          >
            <p className="text-2xl sm:text-3xl font-semibold hindi" style={{ color: "var(--cream)" }}>
              बिनोद राणा
            </p>
            <p className="text-xl sm:text-2xl font-light hindi" style={{ color: "var(--gold)" }}>
              ❀ संग ❀
            </p>
            <p className="text-2xl sm:text-3xl font-semibold hindi" style={{ color: "var(--cream)" }}>
              ज्योति कुमारी
            </p>
          </motion.div>

          {/* Date badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-4 mb-8 px-5 py-2 rounded-full border hindi text-sm font-medium"
            style={{
              borderColor: "var(--gold-dim)",
              color: "var(--gold)",
              background: "rgba(201,168,76,0.08)",
              letterSpacing: "0.08em",
            }}
          >
            06 जुलाई 2026 · देवघर, झारखण्ड
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#invitation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(201,168,76,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-sm font-medium hindi text-base"
            style={{
              background: "linear-gradient(135deg, #7A1A1A 0%, #B83A5A 100%)",
              color: "var(--cream)",
              border: "1px solid rgba(201,168,76,0.4)",
              boxShadow: "0 4px 24px rgba(122,26,26,0.5)",
            }}
          >
            आमंत्रण देखें ↓
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ color: "var(--gold)", opacity: 0.5 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════
          2. INVITATION MESSAGE
      ══════════════════════════════════════════════ */}
      <Section id="invitation" className="py-4">
        <GoldDivider />
        <Reveal from="scale" delay={0.1}>
          <TiltCard className="px-6 py-8 sm:px-10 sm:py-10 inset-gold-border">
            <CornerFrame />
            <div className="relative z-10 text-center space-y-4">
              {/* Ornament row */}
              <div className="flex justify-center gap-5 mb-4">
                {["🪔", "🌸", "🪷", "🌸", "🪔"].map((icon, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity }}
                    className="text-xl"
                  >
                    {icon}
                  </motion.span>
                ))}
              </div>

              <p className="text-base sm:text-lg leading-loose font-medium hindi"
                style={{ color: "var(--cream-dim)" }}>
                विनम्र निवेदन है कि हमारे पुत्र / पुत्री के शुभ विवाह के अवसर पर
                आप{" "}
                <span className="font-semibold" style={{ color: "var(--cream)" }}>
                  सपरिवार पधारकर वर-वधू को आशीर्वाद प्रदान करें
                </span>{" "}
                और अपनी शुभ उपस्थिति से हमें अनुगृहीत करें।
              </p>

              <p className="text-sm hindi" style={{ color: "var(--gold)", opacity: 0.7 }}>
                — आपका स्वागत हमारे लिए अमूल्य है —
              </p>
            </div>
          </TiltCard>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════════════
          3. GROOM  &  4. BRIDE
      ══════════════════════════════════════════════ */}
      <Section className="py-4">
        <GoldDivider />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Groom card */}
          <Reveal from="left" delay={0.1}>
            <TiltCard className="px-5 py-6 h-full">
              <div className="text-center mb-4">
                <motion.div
                  className="text-4xl mb-2"
                  animate={{ rotateY: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  🪔
                </motion.div>
                <p className="text-xs tracking-widest mb-2 hindi" style={{ color: "var(--gold)", opacity: 0.8 }}>
                  ✦ वर-परिचय ✦
                </p>
                <h2 className="text-lg sm:text-xl font-bold hindi" style={{ color: "var(--cream)" }}>
                  आयुष्मान् बिनोद राणा
                </h2>
              </div>
              <div className="divider-line mb-4 opacity-40" />
              <div className="space-y-0.5">
                <InfoRow label="सुपुत्र" value="स्व० जगेश्वर राणा एवं स्व० सोनामुखी देवी" />
                <InfoRow label="द्वितीय सुपुत्र" value="श्री सरयु राणा एवं श्रीमती शांति देवी" />
                <InfoRow label="ग्राम" value="आराजोरी (महराजगंज)" />
                <InfoRow label="पोस्ट" value="बाभनगांमा" />
                <InfoRow label="थाना" value="सारठ" />
                <InfoRow label="जिला" value="देवघर (झारखण्ड)" />
              </div>
            </TiltCard>
          </Reveal>

          {/* Bride card */}
          <Reveal from="right" delay={0.2}>
            <TiltCard className="px-5 py-6 h-full">
              <div className="text-center mb-4">
                <motion.div
                  className="text-4xl mb-2"
                  animate={{ rotateY: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                >
                  🌸
                </motion.div>
                <p className="text-xs tracking-widest mb-2 hindi" style={{ color: "var(--gold)", opacity: 0.8 }}>
                  ✦ वधू-परिचय ✦
                </p>
                <h2 className="text-lg sm:text-xl font-bold hindi" style={{ color: "var(--cream)" }}>
                  आयुष्मती ज्योति कुमारी
                </h2>
              </div>
              <div className="divider-line mb-4 opacity-40" />
              <div className="space-y-0.5">
                <InfoRow label="ज्येष्ठ सुपुत्री" value="श्री रामलाल राणा" />
                <InfoRow label="माता" value="श्रीमती गुड़िया देवी" />
                <InfoRow label="ग्राम" value="सोंधीगी" />
                <InfoRow label="पोस्ट" value="चतरो" />
                <InfoRow label="थाना + जिला" value="गिरिडीह (झारखण्ड)" />
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════
          5. EVENTS TIMELINE
      ══════════════════════════════════════════════ */}
      <Section className="py-4">
        <GoldDivider />
        <Reveal from="bottom">
          <p className="text-center text-xs tracking-widest mb-6 hindi" style={{ color: "var(--gold)", opacity: 0.8 }}>
            ✦ विवाह कार्यक्रम ✦
          </p>
        </Reveal>

        <div className="relative">
          {/* Central vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden sm:block"
            style={{ background: "linear-gradient(180deg, transparent, var(--gold), var(--gold), transparent)", opacity: 0.3 }}
          />

          <div className="space-y-4">
            {EVENTS.map((ev, i) => {
              const isRight = i % 2 === 0;
              return (
                <Reveal key={ev.date} from={isRight ? "left" : "right"} delay={i * 0.12}>
                  <div className={`flex ${isRight ? "sm:justify-start" : "sm:justify-end"}`}>
                    <div className="w-full sm:w-[calc(50%-1.5rem)]">
                      <div style={{ perspective: "800px" }}>
                        <motion.div
                          whileHover={{ scale: 1.02, rotateY: isRight ? -3 : 3 }}
                          transition={{ type: "spring", stiffness: 200, damping: 25 }}
                          className={`glass-card rounded-sm px-5 py-4 relative ${ev.highlight ? "border-maroon-bright" : ""}`}
                          style={{
                            border: ev.highlight
                              ? "1px solid rgba(196,64,95,0.5)"
                              : "1px solid var(--glass-border)",
                            boxShadow: ev.highlight
                              ? "0 0 30px rgba(184,58,90,0.2), 0 8px 40px rgba(0,0,0,0.5)"
                              : undefined,
                          }}
                        >
                          {ev.highlight && (
                            <div className="absolute inset-0 rounded-sm pointer-events-none"
                              style={{ background: "linear-gradient(135deg, rgba(184,58,90,0.06), rgba(201,168,76,0.04))" }} />
                          )}

                          <div className="flex items-start gap-3">
                            <div
                              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-base"
                              style={{
                                background: ev.highlight
                                  ? "linear-gradient(135deg, #7A1A1A, #B83A5A)"
                                  : "linear-gradient(135deg, #1A0A06, #2A1208)",
                                border: `1px solid ${ev.highlight ? "rgba(196,64,95,0.5)" : "rgba(201,168,76,0.3)"}`,
                              }}
                            >
                              {ev.highlight ? "💐" : i === 0 ? "🪔" : i === 1 ? "🌿" : "🎊"}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                <span className="font-bold text-sm hindi"
                                  style={{ color: ev.highlight ? "#E8C84A" : "var(--gold)" }}>
                                  {ev.date}
                                </span>
                                <span className="text-xs px-2 py-0.5 rounded-full hindi"
                                  style={{
                                    background: ev.highlight ? "rgba(184,58,90,0.15)" : "rgba(201,168,76,0.1)",
                                    color: ev.highlight ? "#E8A0B0" : "var(--gold)",
                                  }}>
                                  {ev.day}
                                </span>
                              </div>
                              <p className="text-sm leading-relaxed hindi" style={{ color: "var(--cream-dim)" }}>
                                {ev.event}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════
          6. SPECIAL NOTICE
      ══════════════════════════════════════════════ */}
      <Section className="py-4">
        <GoldDivider />
        <Reveal from="scale" delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-sm px-6 py-6 sm:px-8 text-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(122,26,26,0.35), rgba(184,58,90,0.15), rgba(122,26,26,0.25))",
              border: "1px solid rgba(184,58,90,0.35)",
              boxShadow: "0 0 40px rgba(122,26,26,0.2), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(184,58,90,0.12), transparent 70%)" }} />

            <CornerFrame />
            <div className="relative z-10">
              <div className="flex justify-center items-center gap-3 mb-3">
                <span className="text-xl">🪔</span>
                <h3 className="text-base font-bold hindi tracking-wider" style={{ color: "var(--gold)" }}>
                  विशेष सूचना
                </h3>
                <span className="text-xl">🪔</span>
              </div>
              <p className="text-sm sm:text-base leading-loose hindi" style={{ color: "var(--cream-dim)" }}>
                दिनांक{" "}
                <strong style={{ color: "#E8C84A" }}>06-07-2026 (सोमवार)</strong>{" "}
                ग्राम-आराजोरी से सोंदीघी के लिए{" "}
                <strong style={{ color: "#E8C84A" }}>सांय 5 बजे</strong>{" "}
                बारात प्रस्थान करेगी एवं{" "}
                <strong style={{ color: "#E8C84A" }}>रात्रि में शुभ विवाह</strong>{" "}
                सम्पन्न होगा।
              </p>
            </div>
          </motion.div>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════════════
          7. FAMILY
      ══════════════════════════════════════════════ */}
      <Section className="py-4">
        <GoldDivider />
        <Reveal from="bottom">
          <TiltCard className="px-6 py-8 sm:px-10" intensity={5}>
            <CornerFrame />
            <div className="relative z-10">
              <p className="text-center text-xs tracking-widest mb-6 hindi" style={{ color: "var(--gold)", opacity: 0.8 }}>
                ✦ परिवारजन ✦
              </p>

              <StaggerReveal className="space-y-7">
                {[
                  {
                    label: "दर्शनाभिलाषी",
                    content: "सर्वश्री मिश्री राणा, गोविंद राणा, हरि राणा, अर्जुन, मुन्ना, कार्तिक, मनोज, उमेश, सुरज, पिंटु, धीरज, पुजा, राहुल, राजीव, रोशन, मनीष, सोनु, मोनु, आदर्श, सौरभ",
                    suffix: "एवं समस्त राणा परिवार",
                  },
                  {
                    label: "स्वागताकांक्षी",
                    content: "श्री संतोष शर्मा, श्रीमती कविता शर्मा",
                  },
                  {
                    label: "आकांक्षी",
                    content: "संजय, रमेश, संतोष, विक्रम, श्री रूपलाल राणा",
                  },
                ].map(({ label, content, suffix }) => (
                  <div key={label} className="text-center">
                    <p className="text-xs tracking-widest mb-2 hindi" style={{ color: "var(--gold)" }}>
                      — {label} —
                    </p>
                    <p className="text-sm sm:text-base leading-loose hindi" style={{ color: "var(--cream-dim)" }}>
                      {content}{suffix && <span style={{ color: "var(--gold)", opacity: 0.8 }}> {suffix}</span>}
                    </p>
                    {label !== "आकांक्षी" && <div className="divider-line w-2/3 mx-auto mt-6" />}
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </TiltCard>
        </Reveal>
      </Section>

      {/* ══════════════════════════════════════════════
          8. FOOTER
      ══════════════════════════════════════════════ */}
      <Section className="py-4 pb-16">
        <GoldDivider />
        <Reveal from="scale" delay={0.1}>
          <footer className="text-center py-8 relative">
            {/* Small rotating mandala in footer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-8">
              <div style={{ width: 180, animation: "mandalaSpin 40s linear infinite reverse", opacity: 0.08 }}>
                <Mandala className="w-full h-auto" />
              </div>
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-3xl mb-4"
              >
                🪷
              </motion.div>

              <p className="text-xl font-bold hindi mb-1" style={{ color: "var(--cream)" }}>
                राणा परिवार
              </p>
              <p className="text-sm hindi mb-4" style={{ color: "var(--cream-dim)" }}>
                ग्राम : आराजोरी (महराजगंज), जिला : देवघर (झारखण्ड)
              </p>

              <div className="divider-line w-40 mx-auto mb-4" />

              <p className="text-xs tracking-widest hindi gold-pulse" style={{ color: "var(--gold)", opacity: 0.7 }}>
                ॥ शुभम् भवतु ॥
              </p>
            </div>
          </footer>
        </Reveal>
      </Section>

      {/* Bottom gradient fade */}
      <div
        className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none z-40"
        style={{ background: "linear-gradient(to top, var(--bg-deep), transparent)" }}
      />
    </main>
  );
}

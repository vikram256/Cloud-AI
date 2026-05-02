"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GaneshaSVG from "@/components/GaneshaSVG";
import AudioPlayer from "@/components/AudioPlayer";
import {
  MadhubaniDivider,
  LotusIcon,
  KalashIcon,
  DiyaIcon,
  MadhubaniFrame,
  DoliIcon,
} from "@/components/Ornaments";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BorderStrip() {
  return (
    <div
      className="w-full h-5 opacity-40"
      style={{
        background:
          "repeating-linear-gradient(90deg, #7A1F1F 0px, #7A1F1F 6px, transparent 6px, transparent 12px, #B8860B 12px, #B8860B 18px, transparent 18px, transparent 24px)",
      }}
    />
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full max-w-2xl mx-auto px-4 py-2 ${className}`}>
      {children}
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`section-card rounded-sm px-5 py-6 sm:px-8 sm:py-8 ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xl sm:text-2xl font-semibold text-center mb-4 tracking-wide"
      style={{ fontFamily: "'Noto Serif Devanagari', serif", color: "#7A1F1F" }}
    >
      {children}
    </h2>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 py-1.5 border-b border-dashed"
      style={{ borderColor: "rgba(184,134,11,0.25)" }}
    >
      <span
        className="text-sm opacity-70"
        style={{ color: "#7A1F1F", fontFamily: "'Noto Serif Devanagari', serif" }}
      >
        {label}
      </span>
      <span
        className="text-sm font-medium text-right"
        style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
      >
        {value}
      </span>
    </div>
  );
}

const EVENTS = [
  { date: "02-07-2026", day: "गुरुवार", event: "तिलक", icon: "🪔", highlight: false },
  { date: "05-07-2026", day: "रविवार", event: "हल्दी-लेपन, पनेति", icon: "🌿", highlight: false },
  {
    date: "06-07-2026",
    day: "सोमवार",
    event: "मंडप पूजन · कुल देव-देवी पूजन · बारात · शुभ विवाह",
    icon: "💐",
    highlight: true,
  },
  { date: "07-07-2026", day: "मंगलवार", event: "प्रीतिभोज (संध्या 6:30 बजे से)", icon: "🎊", highlight: false },
];

export default function WeddingPage() {
  return (
    <main className="min-h-screen w-full pb-16" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
      <AudioPlayer />
      <BorderStrip />

      {/* ── 1. HERO ── */}
      <Section id="hero" className="pt-10 pb-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4"
          >
            <p
              className="text-lg sm:text-xl font-semibold tracking-widest mb-6"
              style={{ color: "#B8860B", fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              ॥ श्री गणेशाय नमः ॥
            </p>
            <div className="float-anim ganesha-glow mx-auto" style={{ width: "clamp(160px, 44vw, 220px)" }}>
              <GaneshaSVG className="w-full h-auto" />
            </div>
          </motion.div>

          <FadeUp delay={0.3}>
            <p
              className="text-4xl sm:text-5xl font-bold my-3 gold-shimmer"
              style={{ fontFamily: "'Noto Serif Devanagari', serif", lineHeight: 1.3 }}
            >
              शुभ विवाह
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="mt-4 mb-6">
              <p className="text-2xl sm:text-3xl font-semibold" style={{ color: "#3D0C0C" }}>
                बिनोद राणा
              </p>
              <p className="text-xl sm:text-2xl my-2" style={{ color: "#B8860B" }}>
                ❀ संग ❀
              </p>
              <p className="text-2xl sm:text-3xl font-semibold" style={{ color: "#3D0C0C" }}>
                ज्योति कुमारी
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.7}>
            <a
              href="#invitation"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-sm text-base font-medium transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #7A1F1F, #A0302B)",
                color: "#FDF6E3",
                boxShadow: "0 4px 18px rgba(122,31,31,0.4)",
                border: "1px solid rgba(184,134,11,0.4)",
                fontFamily: "'Noto Serif Devanagari', serif",
              }}
            >
              आमंत्रण देखें ↓
            </a>
          </FadeUp>
        </div>
      </Section>

      <MadhubaniDivider />

      {/* ── 2. INVITATION MESSAGE ── */}
      <Section id="invitation" className="py-3">
        <FadeUp>
          <Card>
            <MadhubaniFrame className="p-2">
              <div className="flex justify-center gap-5 mb-5">
                <KalashIcon size={44} />
                <LotusIcon size={32} />
                <DiyaIcon size={32} />
                <LotusIcon size={32} />
                <KalashIcon size={44} />
              </div>
              <p
                className="text-center text-base sm:text-lg leading-loose font-medium"
                style={{ color: "#7A1F1F", fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                विनम्र निवेदन है कि हमारे पुत्र / पुत्री के शुभ विवाह के अवसर पर
                आप{" "}
                <strong style={{ color: "#3D0C0C" }}>
                  सपरिवार पधारकर वर-वधू को आशीर्वाद प्रदान करें
                </strong>{" "}
                और अपनी शुभ उपस्थिति से हमें अनुगृहीत करें।
              </p>
              <p
                className="text-center text-sm mt-4 opacity-60"
                style={{ color: "#7A1F1F", fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                — आपका स्वागत हमारे लिए अमूल्य है —
              </p>
            </MadhubaniFrame>
          </Card>
        </FadeUp>
      </Section>

      <MadhubaniDivider />

      {/* ── 3. GROOM DETAILS ── */}
      <Section className="py-3">
        <FadeUp>
          <Card>
            <div className="flex items-center justify-center gap-3 mb-4">
              <LotusIcon size={26} />
              <SectionTitle>वर-परिचय</SectionTitle>
              <LotusIcon size={26} />
            </div>
            <p
              className="text-center text-xl sm:text-2xl font-bold mb-5"
              style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              आयुष्मान् बिनोद राणा
            </p>
            <InfoRow label="सुपुत्र" value="स्व० जगेश्वर राणा एवं स्व० सोनामुखी देवी" />
            <InfoRow label="द्वितीय सुपुत्र" value="श्री सरयु राणा एवं श्रीमती शांति देवी" />
            <InfoRow label="ग्राम" value="आराजोरी (महराजगंज)" />
            <InfoRow label="पोस्ट" value="बाभनगांमा" />
            <InfoRow label="थाना" value="सारठ" />
            <InfoRow label="जिला" value="देवघर (झारखण्ड)" />
          </Card>
        </FadeUp>
      </Section>

      {/* Doli divider */}
      <FadeUp>
        <div className="flex justify-center items-center py-5 gap-4">
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg, transparent, #B8860B)" }} />
          <DoliIcon size={80} />
          <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg, #B8860B, transparent)" }} />
        </div>
      </FadeUp>

      {/* ── 4. BRIDE DETAILS ── */}
      <Section className="py-3">
        <FadeUp>
          <Card>
            <div className="flex items-center justify-center gap-3 mb-4">
              <LotusIcon size={26} />
              <SectionTitle>वधू-परिचय</SectionTitle>
              <LotusIcon size={26} />
            </div>
            <p
              className="text-center text-xl sm:text-2xl font-bold mb-5"
              style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              आयुष्मती ज्योति कुमारी
            </p>
            <InfoRow label="ज्येष्ठ सुपुत्री" value="श्री रामलाल राणा" />
            <InfoRow label="माता" value="श्रीमती गुड़िया देवी" />
            <InfoRow label="ग्राम" value="सोंधीगी" />
            <InfoRow label="पोस्ट" value="चतरो" />
            <InfoRow label="थाना + जिला" value="गिरिडीह (झारखण्ड)" />
          </Card>
        </FadeUp>
      </Section>

      <MadhubaniDivider />

      {/* ── 5. EVENTS TIMELINE ── */}
      <Section className="py-3">
        <FadeUp>
          <Card>
            <SectionTitle>विवाह कार्यक्रम</SectionTitle>
            <div className="relative mt-4">
              <div
                className="absolute left-5 top-0 bottom-0 w-0.5"
                style={{ background: "linear-gradient(180deg, #B8860B, #7A1F1F, #B8860B)" }}
              />
              <div className="space-y-5 pl-14">
                {EVENTS.map((ev, i) => (
                  <FadeUp key={ev.date} delay={i * 0.1}>
                    <div className="relative">
                      <div
                        className="absolute -left-9 top-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: ev.highlight
                            ? "linear-gradient(135deg, #7A1F1F, #A0302B)"
                            : "linear-gradient(135deg, #B8860B, #D4A017)",
                          border: "2px solid #FDF6E3",
                          boxShadow: ev.highlight ? "0 0 12px rgba(122,31,31,0.5)" : "none",
                          fontSize: "9px",
                        }}
                      >
                        {ev.icon}
                      </div>
                      <div
                        className="rounded-sm px-4 py-3"
                        style={{
                          background: ev.highlight
                            ? "linear-gradient(135deg, rgba(122,31,31,0.08), rgba(184,134,11,0.06))"
                            : "rgba(253,246,227,0.5)",
                          border: ev.highlight
                            ? "1px solid rgba(122,31,31,0.3)"
                            : "1px solid rgba(184,134,11,0.15)",
                        }}
                      >
                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                          <span
                            className="font-bold text-base"
                            style={{
                              color: ev.highlight ? "#7A1F1F" : "#B8860B",
                              fontFamily: "'Noto Serif Devanagari', serif",
                            }}
                          >
                            {ev.date}
                          </span>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{
                              background: ev.highlight ? "rgba(122,31,31,0.1)" : "rgba(184,134,11,0.1)",
                              color: ev.highlight ? "#7A1F1F" : "#8B6914",
                              fontFamily: "'Noto Serif Devanagari', serif",
                            }}
                          >
                            {ev.day}
                          </span>
                        </div>
                        <p
                          className="text-sm sm:text-base leading-relaxed"
                          style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
                        >
                          {ev.event}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </Card>
        </FadeUp>
      </Section>

      <MadhubaniDivider />

      {/* ── 6. SPECIAL NOTICE ── */}
      <Section className="py-3">
        <FadeUp>
          <div
            className="rounded-sm px-5 py-5 sm:px-7 sm:py-6 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(122,31,31,0.1), rgba(61,12,12,0.06))",
              border: "2px solid rgba(122,31,31,0.28)",
              boxShadow: "0 4px 20px rgba(122,31,31,0.1)",
            }}
          >
            <div className="flex justify-center items-center gap-3 mb-3">
              <DiyaIcon size={26} />
              <span
                className="text-lg font-bold"
                style={{ color: "#7A1F1F", fontFamily: "'Noto Serif Devanagari', serif" }}
              >
                विशेष सूचना
              </span>
              <DiyaIcon size={26} />
            </div>
            <p
              className="text-sm sm:text-base leading-loose font-medium"
              style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              दिनांक{" "}
              <strong style={{ color: "#7A1F1F" }}>06-07-2026 (सोमवार)</strong>{" "}
              ग्राम-आराजोरी से सोंदीघी के लिए{" "}
              <strong style={{ color: "#7A1F1F" }}>सांय 5 बजे</strong> बारात
              प्रस्थान करेगी एवं{" "}
              <strong style={{ color: "#7A1F1F" }}>रात्रि में शुभ विवाह</strong>{" "}
              सम्पन्न होगा।
            </p>
          </div>
        </FadeUp>
      </Section>

      <MadhubaniDivider />

      {/* ── 7. FAMILY SECTION ── */}
      <Section className="py-3">
        <FadeUp>
          <Card>
            <SectionTitle>परिवारजन</SectionTitle>
            <div className="space-y-6">
              {/* Darshanaabhilashi */}
              <div>
                <p
                  className="text-center text-sm font-semibold mb-2 tracking-widest"
                  style={{ color: "#B8860B", fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  ✦ दर्शनाभिलाषी ✦
                </p>
                <p
                  className="text-center text-sm sm:text-base leading-loose"
                  style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  सर्वश्री मिश्री राणा, गोविंद राणा, हरि राणा, अर्जुन, मुन्ना,
                  कार्तिक, मनोज, उमेश, सुरज, पिंटु, धीरज, पुजा, राहुल, राजीव,
                  रोशन, मनीष, सोनु, मोनु, आदर्श, सौरभ{" "}
                  <span style={{ color: "#B8860B" }}>एवं समस्त राणा परिवार</span>
                </p>
              </div>

              <div
                className="h-px w-3/4 mx-auto"
                style={{ background: "linear-gradient(90deg, transparent, #B8860B, transparent)" }}
              />

              {/* Swagatakanshi */}
              <div>
                <p
                  className="text-center text-sm font-semibold mb-2 tracking-widest"
                  style={{ color: "#B8860B", fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  ✦ स्वागताकांक्षी ✦
                </p>
                <p
                  className="text-center text-sm sm:text-base leading-loose"
                  style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  श्री संतोष शर्मा, श्रीमती कविता शर्मा
                </p>
              </div>

              <div
                className="h-px w-3/4 mx-auto"
                style={{ background: "linear-gradient(90deg, transparent, #B8860B, transparent)" }}
              />

              {/* Akankshi */}
              <div>
                <p
                  className="text-center text-sm font-semibold mb-2 tracking-widest"
                  style={{ color: "#B8860B", fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  ✦ आकांक्षी ✦
                </p>
                <p
                  className="text-center text-sm sm:text-base leading-loose"
                  style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                  संजय, रमेश, संतोष, विक्रम, श्री रूपलाल राणा
                </p>
              </div>
            </div>
          </Card>
        </FadeUp>
      </Section>

      <MadhubaniDivider />

      {/* ── 8. FOOTER ── */}
      <Section className="py-3">
        <FadeUp>
          <footer className="text-center pb-4">
            <div className="flex justify-center gap-4 mb-4">
              <KalashIcon size={36} />
              <LotusIcon size={28} />
              <DiyaIcon size={28} />
              <LotusIcon size={28} />
              <KalashIcon size={36} />
            </div>
            <p
              className="text-xl font-bold mb-1"
              style={{ color: "#3D0C0C", fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              राणा परिवार
            </p>
            <p
              className="text-sm opacity-80"
              style={{ color: "#7A1F1F", fontFamily: "'Noto Serif Devanagari', serif" }}
            >
              ग्राम : आराजोरी (महराजगंज), जिला : देवघर (झारखण्ड)
            </p>
            <p className="text-xs mt-4 opacity-40" style={{ color: "#7A1F1F" }}>
              ॥ शुभम् भवतु ॥
            </p>
          </footer>
        </FadeUp>
      </Section>

      <BorderStrip />
    </main>
  );
}

"use client";
import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Show after short delay
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setPlaying(true);
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Using a free shehnai-style audio from a CDN — replace src with actual audio if needed */}
      <audio ref={audioRef} loop preload="none">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play music"}
        className="fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #B8860B, #D4A017)",
          border: "2px solid rgba(253,246,227,0.5)",
          boxShadow: "0 4px 20px rgba(122,31,31,0.35)",
        }}
      >
        {playing ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        {/* Music note indicator */}
        {playing && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs"
            style={{ background: "#7A1F1F", color: "#FDF6E3" }}>
            ♪
          </span>
        )}
      </button>
    </>
  );
}

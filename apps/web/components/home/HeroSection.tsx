'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const WAVE_HEIGHTS = [30,50,20,70,45,85,35,65,25,80,40,60,30,75,45,55,20,90,35,70,50,40,65,25,80]

function Waveform() {
  return (
    <div className="flex items-center gap-[3px] h-10 mb-4">
      {WAVE_HEIGHTS.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-sm animate-wave ${i < 10 ? 'bg-amber' : 'bg-ink-10'}`}
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.06}s`,
            animationDuration: `${0.8 + (i % 5) * 0.18}s`,
          }}
        />
      ))}
    </div>
  )
}

function BookPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="w-[320px] bg-white rounded-3xl border border-ink-10 shadow-[0_32px_80px_rgba(26,24,20,0.10),0_4px_12px_rgba(26,24,20,0.05)] overflow-hidden animate-floatCard">
      {/* Cover */}
      <div
        className="h-[220px] relative flex items-end p-5 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#2A3A3A 0%,#1A2A2A 100%)' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)',
          }}
        />
        <span className="absolute top-4 right-4 text-[10px] font-medium bg-amber text-white px-2.5 py-1 rounded-full tracking-wide z-10">
          Cantonese
        </span>
        <div className="relative z-10">
          <p className="text-[10px] font-medium tracking-widest text-amber uppercase mb-2">粤語繪本</p>
          <p className="font-serif text-[22px] leading-tight text-white tracking-tight" style={{ fontFamily: "'DM Serif Display', Georgia, serif", textShadow: '0 0 1px rgba(255,255,255,0.3)' }}>
            Little Dragon's<br />Big Journey
          </p>
        </div>
      </div>

      {/* Player body */}
      <div className="p-5">
        <Waveform />
        <div className="flex items-center justify-between">
          <span className="text-xs text-ink-60 tracking-wide">04:22</span>
          <button
            onClick={() => setPlaying(p => !p)}
            className="w-11 h-11 bg-ink rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#2E2B24] hover:scale-105 active:scale-100"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="4" y="3" width="3" height="10" rx="1" fill="#F5F2EA"/>
                <rect x="9" y="3" width="3" height="10" rx="1" fill="#F5F2EA"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 3L13 8L5 13V3Z" fill="#F5F2EA"/>
              </svg>
            )}
          </button>
          <span className="text-[11px] font-medium tracking-wide text-teal">粵語 · Azure TTS</span>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="min-h-screen pt-[140px] pb-20 px-12 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      {/* Text */}
      <div className="max-w-[560px]">
        <span className="animate-fadeUp-1 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.08em] uppercase text-amber mb-7 before:block before:w-5 before:h-px before:bg-amber">
          AI-Powered TTS Platform
        </span>

        <h1 className="animate-fadeUp-2 font-serif text-[clamp(48px,5.5vw,76px)] leading-[1.05] tracking-[-1.5px] text-ink mb-7" style={{ fontFamily: "'DM Serif Display', Georgia, serif", textShadow: '0 0 1px rgba(26,24,20,0.5)' }}>
          Books that<br />
          <em className="text-amber italic" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>speak</em> to you
        </h1>

        <p className="animate-fadeUp-3 text-[17px] font-light leading-[1.7] text-ink-60 max-w-[420px] mb-11">
          Upload any ebook and get a studio-quality audiobook in minutes — powered by AI voices that understand the language, tone, and rhythm of your text.
        </p>

        <div className="animate-fadeUp-4 flex gap-4 items-center flex-wrap">
          <Link
            href="https://github.com/pu873967671-code/bookclaw"
            className="
              inline-flex items-center gap-2
              text-[15px] font-medium
              px-7 py-3.5
              bg-ink text-cream rounded-full no-underline
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(26,24,20,0.18)]
              active:translate-y-0
            "
          >
            Start for free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link
            href="#how"
            className="group inline-flex items-center gap-1.5 text-[15px] text-ink-60 no-underline hover:text-ink transition-colors duration-200"
          >
            See how it works
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Visual */}
      <div className="animate-fadeIn-hero flex justify-center items-center">
        <div className="relative">
          {/* Badge top */}
          <div className="animate-badge1 absolute -top-4 -right-6 z-10 bg-white rounded-xl border border-ink-10 shadow-[0_8px_24px_rgba(26,24,20,0.10)] px-3.5 py-2.5 flex items-center gap-2 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
            <span className="text-ink text-xs font-medium">Processing chapter 3…</span>
          </div>

          <BookPlayer />

          {/* Badge bottom */}
          <div className="animate-badge2 absolute bottom-8 -left-8 z-10 bg-white rounded-xl border border-ink-10 shadow-[0_8px_24px_rgba(26,24,20,0.10)] px-3.5 py-2.5 flex items-center gap-2 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-amber flex-shrink-0" />
            <span className="text-ink text-xs font-medium">12 chapters · 3h 24m</span>
          </div>
        </div>
      </div>
    </section>
  )
}

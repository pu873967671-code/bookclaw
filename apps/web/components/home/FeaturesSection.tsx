'use client'

import { useState, useEffect, useRef } from 'react'

const FEATURES = [
  {
    title: 'Azure Neural TTS',
    body: 'Connect to Azure Cognitive Services for high-quality neural voices. Set MOCK_TTS=false and provide your API key to switch from dev to production in seconds.',
  },
  {
    title: 'Smart chapter splitting',
    body: 'Automatic chapter detection for both .txt and .epub formats. Each chapter is processed independently with quota management and parallel job queuing via BullMQ.',
  },
  {
    title: 'S3-compatible storage',
    body: 'Store audiobooks locally or in MinIO/S3. The download endpoint returns a signed URL in object storage mode with configurable expiry, or streams the file directly.',
  },
  {
    title: 'Quota management',
    body: 'Built-in reserve/consume/refund flow per user prevents quota abuse. Each TTS job reserves quota upfront and refunds on failure — safe for production deployments.',
  },
  {
    title: 'One-command CI smoke test',
    body: 'Run the full end-to-end pipeline with a single shell script. GitHub Actions workflow included for both filesystem and object storage modes on every push.',
  },
]

const VOICES = [
  { name: 'Xiaoxiao', lang: 'zh-CN' },
  { name: 'HiuMaan',  lang: 'zh-HK 粵語' },
  { name: 'Jenny',    lang: 'en-US' },
]

const CHAPTERS = [
  { num: '01', title: '第一章 · 出發',    duration: '18:24' },
  { num: '02', title: '第二章 · 遇見朋友', duration: '22:11' },
  { num: '03', title: '第三章 · 挑戰',    duration: '19:55' },
  { num: '04', title: '第四章 · 歸途',    duration: '24:07' },
]

function TTSWave() {
  return (
    <div className="h-12 bg-cream rounded-[10px] flex items-center gap-[2px] px-3 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm bg-amber animate-ttsWave"
          style={{
            animationDelay: `${i * 0.04}s`,
            animationDuration: `${0.8 + (i % 5) * 0.18}s`,
          }}
        />
      ))}
    </div>
  )
}

function DemoCard({ children, title }: { children: React.ReactNode; title: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="demo-card bg-white rounded-[20px] border border-ink-10 overflow-hidden">
      <div className="px-5 py-4 border-b border-ink-10 flex items-center gap-2.5">
        <div className="flex gap-[5px]">
          {[0,1,2].map(i => <div key={i} className="w-2 h-2 rounded-full bg-ink-10" />)}
        </div>
        <span className="text-xs text-ink-30 ml-1.5">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export function FeaturesSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [selectedVoice, setSelectedVoice] = useState(0)
  const [playingChapter, setPlayingChapter] = useState(1)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="features" className="max-w-[1280px] mx-auto px-12 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">

        {/* Left sticky */}
        <div className="lg:sticky lg:top-24">
          <div ref={headerRef} className="reveal">
            <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-30 mb-4">Capabilities</p>
            <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-1px] text-ink max-w-[480px] mb-5">
              Built for the<br />whole pipeline
            </h2>
            <p className="text-base font-light leading-[1.7] text-ink-60 max-w-[400px]">
              From parsing to playback, ClawRead covers every step with production-grade tooling and developer-first APIs.
            </p>
          </div>

          {/* Accordion */}
          <div className="mt-12">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`py-5 border-t border-ink-10 cursor-pointer last:border-b ${i === activeIdx ? 'last:border-b' : ''}`}
                onClick={() => setActiveIdx(i === activeIdx ? -1 : i)}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-[15px] font-medium transition-colors duration-200 ${i === activeIdx ? 'text-amber' : 'text-ink'}`}>
                    {f.title}
                  </span>
                  <span className={`
                    w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0
                    text-sm transition-all duration-300
                    ${i === activeIdx
                      ? 'bg-amber border-amber text-white'
                      : 'border-ink-30 text-ink-30'
                    }
                  `}>
                    {i === activeIdx ? '−' : '+'}
                  </span>
                </div>
                <div className={`feature-body text-[13px] leading-[1.7] font-light text-ink-60 ${i === activeIdx ? 'open' : ''}`}>
                  {f.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right demo cards */}
        <div className="grid grid-rows-[auto_auto] gap-4">
          {/* Voice selector */}
          <DemoCard title="Voice selection · Azure Neural">
            <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink-30 mb-3">
              Available voices
            </p>
            <div className="grid grid-cols-3 gap-2 mb-5">
              {VOICES.map((v, i) => (
                <button
                  key={v.name}
                  onClick={() => setSelectedVoice(i)}
                  className={`
                    p-2.5 rounded-[10px] border text-center cursor-pointer transition-all duration-200 text-left
                    ${i === selectedVoice
                      ? 'bg-amber border-amber text-white'
                      : 'border-ink-10 hover:border-amber'
                    }
                  `}
                >
                  <div className="text-xs font-medium">{v.name}</div>
                  <div className={`text-[10px] mt-0.5 ${i === selectedVoice ? 'text-white/70' : 'text-ink-60'}`}>
                    {v.lang}
                  </div>
                </button>
              ))}
            </div>
            <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink-30 mb-2">
              Live preview
            </p>
            <TTSWave />
          </DemoCard>

          {/* Chapter list */}
          <DemoCard title="Chapter queue · 小龍的大旅程.epub">
            <div className="flex flex-col gap-1">
              {CHAPTERS.map((ch, i) => (
                <div
                  key={ch.num}
                  onClick={() => setPlayingChapter(i)}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-[10px] cursor-pointer transition-colors duration-200
                    ${i === playingChapter ? 'bg-amber-light' : 'hover:bg-cream'}
                  `}
                >
                  <span className="text-[11px] text-ink-30 w-5 text-right flex-shrink-0">{ch.num}</span>
                  <span className="text-[13px] flex-1">{ch.title}</span>
                  <span className="text-[11px] text-ink-30">{ch.duration}</span>
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-[8px] flex-shrink-0
                    ${i === playingChapter ? 'bg-amber text-white' : 'bg-ink text-cream'}
                  `}>
                    ▶
                  </div>
                </div>
              ))}
            </div>
          </DemoCard>
        </div>
      </div>
    </section>
  )
}

'use client';

import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="min-h-screen pt-36 pb-20 px-12 max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">
      <div className="max-w-[560px]">
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.08em] uppercase text-amber mb-7 animate-fade-up [animation-delay:0.3s]">
          <span className="w-5 h-px bg-amber" />
          AI-Powered TTS Platform
        </span>
        
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] tracking-[-1.5px] text-ink mb-7 animate-fade-up [animation-delay:0.45s]">
          Books that<br/><em className="text-amber italic">speak</em> to you
        </h1>
        
        <p className="text-[17px] font-light leading-[1.7] text-ink-60 max-w-[420px] mb-11 animate-fade-up [animation-delay:0.6s]">
          Upload any ebook and get a studio-quality audiobook in minutes — powered by AI voices that understand the language, tone, and rhythm.
        </p>
        
        <div className="flex gap-4 items-center animate-fade-up [animation-delay:0.75s]">
          <Link href="https://github.com/pu873967671-code/bookclaw" className="text-[15px] font-medium px-7 py-3.5 bg-ink text-cream rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Start for free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a href="#how" className="text-[15px] font-normal text-ink-60 inline-flex items-center gap-2 hover:text-ink transition-colors group">
            See how it works
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
      
      <div className="flex justify-center items-center animate-fade-in [animation-delay:0.5s]">
        <div className="relative">
          {/* Floating badge - top */}
          <div className="absolute -top-4 -right-6 bg-white rounded-xl border border-ink-10 shadow-lg px-3.5 py-2.5 text-xs font-medium flex items-center gap-2 whitespace-nowrap z-10 animate-badge-float-1">
            <span className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
            <span className="text-ink">Processing chapter 3…</span>
          </div>
          
          {/* Book player card */}
          <div className="w-[320px] bg-white rounded-3xl border border-ink-10 shadow-2xl overflow-hidden animate-float-card">
            <div className="h-[220px] bg-gradient-to-br from-[#2A3A3A] to-[#1A2A2A] relative overflow-hidden flex items-end p-5">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_12px)]" />
              <span className="absolute top-4 right-4 text-[10px] font-medium bg-amber text-white px-2.5 py-1 rounded-full tracking-[0.05em]">Cantonese</span>
              <div className="relative z-10">
                <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-amber mb-2">粤语绘本</div>
                <div className="font-serif text-[22px] leading-tight text-white tracking-[-0.3px]">Little Dragon&apos;s<br/>Big Journey</div>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-end gap-[3px] h-10 mb-4">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-[2px] ${i < 10 ? 'bg-amber' : 'bg-ink-10'}`}
                    style={{ 
                      height: `${[30,50,20,70,45,85,35,65,25,80,40,60,30,75,45,55,20,90,35,70,50,40,65,25,80][i]}%`,
                      animation: 'wave 1.2s ease-in-out infinite',
                      animationDelay: `${i * 0.06}s`
                    }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-ink-60 tracking-[0.03em]">04:22</span>
                <button className="w-11 h-11 bg-ink rounded-full flex items-center justify-center hover:bg-ink/90 hover:scale-110 transition-all">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M5 3L13 8L5 13V3Z" fill="#F5F2EA"/>
                  </svg>
                </button>
                <span className="text-[11px] text-teal font-medium tracking-[0.04em]">粵語 · Azure TTS</span>
              </div>
            </div>
          </div>
          
          {/* Floating badge - bottom */}
          <div className="absolute bottom-8 -left-8 bg-white rounded-xl border border-ink-10 shadow-lg px-3.5 py-2.5 text-xs font-medium flex items-center gap-2 whitespace-nowrap z-10 animate-badge-float-2 [animation-delay:0.8s]">
            <span className="w-2 h-2 rounded-full bg-amber flex-shrink-0" />
            <span className="text-ink">12 chapters · 3h 24m</span>
          </div>
        </div>
      </div>
    </section>
  );
}

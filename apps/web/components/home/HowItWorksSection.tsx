'use client'

const STEPS = [
  {
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14V5a1 1 0 011-1h8l3 3v7a1 1 0 01-1 1H5a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M13 4v3h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Upload your ebook',
    desc: 'Drop in a .txt or .epub file. Our parser automatically detects chapters and structures the content for narration.',
  },
  {
    num: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M7 10 Q10 6 13 10 Q10 14 7 10Z" fill="currentColor"/>
      </svg>
    ),
    title: 'Choose a voice',
    desc: 'Pick from Azure Neural voices or enable mock TTS for local development. Supports Cantonese, Mandarin, English, and more.',
  },
  {
    num: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Download & listen',
    desc: 'Your audiobook renders as a single MP3 via ffmpeg concat. Download directly or stream via signed URL from object storage.',
  },
]

export function HowItWorksSection() {
  return (
    <>
      <hr className="border-t border-ink-10 max-w-[1280px] mx-auto" />
      <section id="how" className="max-w-[1280px] mx-auto px-12 py-20">
        <div>
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-30 mb-4">Process</p>
          <h2 style={{fontFamily: '"DM Serif Display", Georgia, serif'}} className="text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-1px] text-ink max-w-[560px] mb-5">
            Three steps from book to audio
          </h2>
          <p className="text-base font-light leading-[1.7] text-ink-60 max-w-[480px]">
            Upload, process, and listen. ClawRead handles everything in between — chapter splitting, voice synthesis, and rendering.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-10 rounded-[20px] overflow-hidden">
          {STEPS.map((step) => (
            <div key={step.num} className="bg-cream p-10 transition-colors duration-300 hover:bg-[#EFEBDF] group cursor-default">
              <p style={{fontFamily: '"DM Serif Display", Georgia, serif'}} className="text-[56px] leading-none text-ink-10 group-hover:text-ink-30 transition-colors duration-300 mb-6">
                {step.num}
              </p>
              <div className="w-10 h-10 rounded-[10px] bg-ink-10 group-hover:bg-amber-light flex items-center justify-center mb-5 transition-colors duration-300 text-ink">
                {step.icon}
              </div>
              <h3 style={{fontFamily: '"DM Serif Display", Georgia, serif'}} className="text-[22px] font-normal tracking-tight mb-3">{step.title}</h3>
              <p className="text-sm font-light leading-[1.7] text-ink-60">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

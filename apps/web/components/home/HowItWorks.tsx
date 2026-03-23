'use client';

const steps = [
  {
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 14V5a1 1 0 011-1h8l3 3v7a1 1 0 01-1 1H5a1 1 0 01-1-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M13 4v3h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
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
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" fill="none"/>
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
        <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    title: 'Download & listen',
    desc: 'Your audiobook renders as a single MP3 via ffmpeg concat. Download directly or stream via signed URL from object storage.',
  },
];

export function HowItWorks() {
  return (
    <>
      <hr className="divider" />
      <section id="how" className="section">
        <div className="reveal">
          <div className="section-label">Process</div>
          <h2 className="section-title">Three steps from book to audio</h2>
          <p className="section-sub">
            Upload, process, and listen. ClawRead handles everything in between — chapter splitting, voice synthesis, and rendering.
          </p>
        </div>
        
        <div className="steps-grid reveal">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-num">{step.num}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

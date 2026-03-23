'use client';

const features = [
  {
    title: 'Azure Neural TTS',
    desc: 'Connect to Azure Cognitive Services for high-quality neural voices. Set MOCK_TTS=false and provide your API key to switch from dev to production in seconds.',
  },
  {
    title: 'Smart chapter splitting',
    desc: 'Automatic chapter detection for both .txt and .epub formats. Each chapter is processed independently with quota management and parallel job queuing via BullMQ.',
  },
  {
    title: 'S3-compatible storage',
    desc: 'Store audiobooks locally or in MinIO/S3. The download endpoint returns a signed URL in object storage mode with configurable expiry, or streams the file directly.',
  },
  {
    title: 'Quota management',
    desc: 'Built-in reserve/consume/refund flow per user prevents quota abuse. Each TTS job reserves quota upfront and refunds on failure — safe for production deployments.',
  },
  {
    title: 'One-command CI smoke test',
    desc: 'Run the full end-to-end pipeline with a single shell script. GitHub Actions workflow included for both filesystem and object storage modes on every push.',
  },
];

const chapters = [
  { num: '01', title: '第一章 · 出發', duration: '18:24' },
  { num: '02', title: '第二章 · 遇見朋友', duration: '22:11', playing: true },
  { num: '03', title: '第三章 · 挑戰', duration: '19:55' },
  { num: '04', title: '第四章 · 歸途', duration: '24:07' },
];

export function FeaturesSection() {
  return (
    <section id="features" style={{paddingTop: 0}}>
      <div className="features-layout">
        <div className="features-sticky">
          <div className="section-label reveal">Capabilities</div>
          <h2 className="section-title reveal">Built for the<br/>whole pipeline</h2>
          <p className="section-sub reveal">
            From parsing to playback, ClawRead covers every step with production-grade tooling and developer-first APIs.
          </p>
          
          <div className="feature-list">
            {features.map((f, i) => (
              <div key={f.title} className={`feature-item ${i === 0 ? 'active' : ''}`}>
                <div className="feature-item-header">
                  <span className="feature-item-title">{f.title}</span>
                  <span className="feature-toggle">{i === 0 ? '−' : '+'}</span>
                </div>
                <div className="feature-item-body">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="features-demo">
          {/* Voice selection card */}
          <div className="demo-card">
            <div className="demo-card-header">
              <div className="demo-card-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <span className="demo-card-title">Voice selection · Azure Neural</span>
            </div>
            <div className="demo-card-body">
              <div style={{fontSize: '12px', color: 'var(--ink-30)', marginBottom: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em'}}>
                Available voices
              </div>
              <div className="tts-voice-grid">
                <div className="voice-chip selected">
                  <div className="voice-name">Xiaoxiao</div>
                  <div className="voice-lang">zh-CN</div>
                </div>
                <div className="voice-chip">
                  <div className="voice-name">HiuMaan</div>
                  <div className="voice-lang">zh-HK 粵語</div>
                </div>
                <div className="voice-chip">
                  <div className="voice-name">Jenny</div>
                  <div className="voice-lang">en-US</div>
                </div>
              </div>
              <div style={{fontSize: '12px', color: 'var(--ink-30)', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em'}}>
                Live preview
              </div>
              <div className="tts-waveform">
                {Array.from({length: 40}).map((_, i) => (
                  <div key={i} className="tts-bar" style={{animationDelay: `${i * 0.04}s`}} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Chapter list card */}
          <div className="demo-card">
            <div className="demo-card-header">
              <div className="demo-card-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <span className="demo-card-title">Chapter queue · 小龍的大旅程.epub</span>
            </div>
            <div className="demo-card-body">
              <div className="chapter-list">
                {chapters.map((ch) => (
                  <div key={ch.num} className={`chapter-row ${ch.playing ? 'playing' : ''}`}>
                    <span className="ch-num">{ch.num}</span>
                    <span className="ch-title">{ch.title}</span>
                    <span className="ch-duration">{ch.duration}</span>
                    <div className="ch-play">▶</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

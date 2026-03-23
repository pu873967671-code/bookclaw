'use client'

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
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start', padding: '100px 48px 0', maxWidth: '1280px', margin: '0 auto'}}>
        <div style={{position: 'sticky', top: '100px'}}>
          <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-30 mb-4">Capabilities</p>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-1px] text-ink max-w-[560px] mb-5">
            Built for the<br/>whole pipeline
          </h2>
          <p className="text-base font-light leading-[1.7] text-ink-60 max-w-[480px]">
            From parsing to playback, ClawRead covers every step with production-grade tooling and developer-first APIs.
          </p>
          
          <div style={{marginTop: '48px'}}>
            {features.map((f, i) => (
              <div key={f.title} style={{
                padding: '20px 0',
                borderTop: '1px solid rgba(26, 24, 20, 0.08)',
                cursor: 'pointer'
              }}>
                <h3 style={{fontSize: '15px', fontWeight: 500, color: '#1A1814', marginBottom: '12px'}}>{f.title}</h3>
                <p style={{fontSize: '13px', lineHeight: 1.7, color: 'rgba(26, 24, 20, 0.6)', fontWeight: 300}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          {/* Voice selection card */}
          <div style={{
            background: '#fff',
            borderRadius: '20px',
            border: '1px solid rgba(26, 24, 20, 0.08)',
            overflow: 'hidden'
          }}>
            <div style={{padding: '16px 20px', borderBottom: '1px solid rgba(26, 24, 20, 0.08)', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{display: 'flex', gap: '5px'}}>
                <div style={{width: 8, height: 8, borderRadius: '50%', background: 'rgba(26, 24, 20, 0.08)'}}></div>
                <div style={{width: 8, height: 8, borderRadius: '50%', background: 'rgba(26, 24, 20, 0.08)'}}></div>
                <div style={{width: 8, height: 8, borderRadius: '50%', background: 'rgba(26, 24, 20, 0.08)'}}></div>
              </div>
              <span style={{fontSize: '12px', color: 'rgba(26, 24, 20, 0.3)', marginLeft: '6px'}}>Voice selection · Azure Neural</span>
            </div>
            <div style={{padding: '20px'}}>
              <div style={{fontSize: '12px', color: 'rgba(26, 24, 20, 0.3)', marginBottom: '12px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em'}}>
                Available voices
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px'}}>
                <div style={{padding: '8px 10px', borderRadius: '10px', border: '1px solid #C8853A', background: '#C8853A', textAlign: 'center', color: '#fff'}}>
                  <div style={{fontWeight: 500, fontSize: '12px'}}>Xiaoxiao</div>
                  <div style={{fontSize: '10px', opacity: 0.7}}>zh-CN</div>
                </div>
                <div style={{padding: '8px 10px', borderRadius: '10px', border: '1px solid rgba(26, 24, 20, 0.08)', textAlign: 'center'}}>
                  <div style={{fontWeight: 500, fontSize: '12px'}}>HiuMaan</div>
                  <div style={{fontSize: '10px', color: 'rgba(26, 24, 20, 0.6)'}}>zh-HK 粵語</div>
                </div>
                <div style={{padding: '8px 10px', borderRadius: '10px', border: '1px solid rgba(26, 24, 20, 0.08)', textAlign: 'center'}}>
                  <div style={{fontWeight: 500, fontSize: '12px'}}>Jenny</div>
                  <div style={{fontSize: '10px', color: 'rgba(26, 24, 20, 0.6)'}}>en-US</div>
                </div>
              </div>
              <div style={{fontSize: '12px', color: 'rgba(26, 24, 20, 0.3)', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em'}}>
                Live preview
              </div>
              <div style={{
                height: '48px',
                background: '#F5F2EA',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                padding: '0 12px',
                overflow: 'hidden'
              }}>
                {Array.from({length: 40}).map((_, i) => (
                  <div key={i} style={{
                    width: 3,
                    borderRadius: 2,
                    background: '#C8853A',
                    animation: 'ttsWave 1.4s ease-in-out infinite',
                    animationDelay: `${i * 0.04}s`
                  }} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Chapter list card */}
          <div style={{
            background: '#fff',
            borderRadius: '20px',
            border: '1px solid rgba(26, 24, 20, 0.08)',
            overflow: 'hidden'
          }}>
            <div style={{padding: '16px 20px', borderBottom: '1px solid rgba(26, 24, 20, 0.08)', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{display: 'flex', gap: '5px'}}>
                <div style={{width: 8, height: 8, borderRadius: '50%', background: 'rgba(26, 24, 20, 0.08)'}}></div>
                <div style={{width: 8, height: 8, borderRadius: '50%', background: 'rgba(26, 24, 20, 0.08)'}}></div>
                <div style={{width: 8, height: 8, borderRadius: '50%', background: 'rgba(26, 24, 20, 0.08)'}}></div>
              </div>
              <span style={{fontSize: '12px', color: 'rgba(26, 24, 20, 0.3)', marginLeft: '6px'}}>Chapter queue · 小龍的大旅程.epub</span>
            </div>
            <div style={{padding: '20px'}}>
              {chapters.map((ch) => (
                <div key={ch.num} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  background: ch.playing ? '#F0D9B8' : 'transparent',
                  marginBottom: '4px'
                }}>
                  <span style={{fontSize: '11px', color: 'rgba(26, 24, 20, 0.3)', width: '20px', textAlign: 'right'}}>{ch.num}</span>
                  <span style={{fontSize: '13px', fontWeight: 400, flex: 1}}>{ch.title}</span>
                  <span style={{fontSize: '11px', color: 'rgba(26, 24, 20, 0.3)'}}>{ch.duration}</span>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: ch.playing ? '#C8853A' : '#1A1814',
                    color: '#F5F2EA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '8px'
                  }}>▶</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

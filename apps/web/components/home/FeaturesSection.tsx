'use client';

const features = [
  {
    title: 'Azure Neural TTS',
    desc: 'Connect to Azure Cognitive Services for high-quality neural voices. Set MOCK_TTS=false and provide your API key to switch from dev to production.',
  },
  {
    title: 'Smart chapter splitting',
    desc: 'Automatic chapter detection for both .txt and .epub formats. Each chapter is processed independently with quota management and parallel job queuing.',
  },
  {
    title: 'S3-compatible storage',
    desc: 'Store audiobooks locally or in MinIO/S3. The download endpoint returns a signed URL in object storage mode with configurable expiry.',
  },
  {
    title: 'Quota management',
    desc: 'Built-in reserve/consume/refund flow per user prevents quota abuse. Each TTS job reserves quota upfront and refunds on failure.',
  },
  {
    title: 'One-command CI smoke test',
    desc: 'Run the full end-to-end pipeline with a single shell script. GitHub Actions workflow included for both filesystem and object storage modes.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-[1fr_1.4fr] gap-20 items-start pt-24">
        <div className="sticky top-28">
          <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-30 mb-4 reveal">Capabilities</div>
          <h2 className="font-serif text-4xl lg:text-[48px] leading-[1.1] tracking-[-1px] text-ink max-w-[480px] mb-5 reveal">
            Built for the<br/>whole pipeline
          </h2>
          <p className="text-base font-light leading-[1.7] text-ink-60 max-w-[480px] reveal">
            From parsing to playback, ClawRead covers every step with production-grade tooling and developer-first APIs.
          </p>
        </div>
        
        <div className="space-y-4 reveal">
          {features.map((f, i) => (
            <div key={f.title} className="p-5 border border-ink-10 rounded-2xl hover:border-amber transition-colors">
              <h3 className="text-base font-medium text-ink mb-2">{f.title}</h3>
              <p className="text-sm font-light leading-[1.7] text-ink-60">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

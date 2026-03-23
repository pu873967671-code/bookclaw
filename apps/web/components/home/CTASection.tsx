import Link from 'next/link'

export function CTASection() {
  return (
    <section id="cta" style={{textAlign: 'center', padding: '80px 48px 120px'}}>
      <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-30 mb-4">Open source · MIT</p>
      <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-1px] text-ink max-w-[640px] mx-auto mb-6">
        Ready to give your library a voice?
      </h2>
      <p className="text-base font-light leading-[1.7] text-ink-60 max-w-[480px] mx-auto mb-12">
        Self-host in minutes with Docker. Full source on GitHub — no vendor lock-in, no paywalls.
      </p>
      
      <div style={{display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
        <Link 
          href="https://github.com/pu873967671-code/bookclaw"
          className="inline-flex items-center gap-2 text-[15px] font-medium px-7 py-3.5 bg-ink text-cream rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(26,24,20,0.18)] active:translate-y-0"
        >
          View on GitHub
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </Link>
        <Link 
          href="https://github.com/pu873967671-code/bookclaw/blob/main/README.md"
          className="group inline-flex items-center gap-1.5 text-[15px] text-ink-60 no-underline hover:text-ink transition-colors duration-200"
        >
          Deploy docs
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
      
      <div style={{fontSize: '12px', color: 'rgba(26, 24, 20, 0.3)', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center'}}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="7" cy="7" r="6"/>
          <path d="M7 6v4M7 4.5v.5" strokeLinecap="round"/>
        </svg>
        Docker Compose included · PostgreSQL · Redis · MinIO
      </div>
    </section>
  )
}

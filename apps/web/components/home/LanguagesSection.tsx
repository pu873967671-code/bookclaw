'use client'

const langs = [
  { flag: '🇭🇰', name: '粵語', code: 'zh-HK', featured: true },
  { flag: '🇨🇳', name: '普通話', code: 'zh-CN', featured: true },
  { flag: '🇺🇸', name: 'English', code: 'en-US' },
  { flag: '🇬🇧', name: 'English', code: 'en-GB' },
  { flag: '🇯🇵', name: '日本語', code: 'ja-JP' },
  { flag: '🇰🇷', name: '한국어', code: 'ko-KR' },
  { flag: '🇫🇷', name: 'Français', code: 'fr-FR' },
  { flag: '🇩🇪', name: 'Deutsch', code: 'de-DE' },
  { flag: '🇪🇸', name: 'Español', code: 'es-ES' },
  { flag: '🇵🇹', name: 'Português', code: 'pt-BR' },
  { flag: '🇮🇳', name: 'हिन्दी', code: 'hi-IN' },
  { flag: '🇦🇪', name: 'العربية', code: 'ar-AE' },
  { flag: '🇮🇹', name: 'Italiano', code: 'it-IT' },
  { flag: '🇳🇱', name: 'Nederlands', code: 'nl-NL' },
  { flag: '🇷🇺', name: 'Русский', code: 'ru-RU' },
  { flag: '🇹🇷', name: 'Türkçe', code: 'tr-TR' },
]

export function LanguagesSection() {
  return (
    <div style={{padding: '0 48px', maxWidth: '1280px', margin: '0 auto 80px'}}>
      <div 
        id="languages"
        style={{
          background: '#1A1814',
          borderRadius: '28px',
          padding: '60px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            fontFamily: 'DM Serif Display, Georgia, serif',
            fontSize: '180px',
            lineHeight: 1,
            color: 'rgba(255,255,255,0.03)',
            top: '-20px',
            right: '-20px',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          語
        </div>
        
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/30 mb-4">Supported languages</p>
        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-1px] text-white max-w-[560px] mb-5">
          Every story, every tongue
        </h2>
        <p className="text-base font-light leading-[1.7] text-white/50 max-w-[480px] mb-10">
          Built with Cantonese at the core — and expanding. ClawRead works with any Azure Neural TTS language out of the box.
        </p>
        
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
          {langs.map((l, i) => (
            <div 
              key={l.code}
              style={{
                padding: '8px 18px',
                borderRadius: '100px',
                border: l.featured ? '1px solid rgba(200,133,58,0.5)' : '1px solid rgba(255,255,255,0.12)',
                fontSize: '13px',
                color: l.featured ? '#C8853A' : 'rgba(255,255,255,0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'default',
                transition: 'all 0.3s'
              }}
            >
              <span style={{fontSize: '16px'}}>{l.flag}</span>
              {l.name}
              <span style={{opacity: 0.4, fontSize: '11px'}}>{l.code}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'

const LANGUAGES = [
  { flag: '🇭🇰', name: '粵語',      code: 'zh-HK', featured: true },
  { flag: '🇨🇳', name: '普通話',    code: 'zh-CN', featured: true },
  { flag: '🇺🇸', name: 'English',   code: 'en-US' },
  { flag: '🇬🇧', name: 'English',   code: 'en-GB' },
  { flag: '🇯🇵', name: '日本語',    code: 'ja-JP' },
  { flag: '🇰🇷', name: '한국어',    code: 'ko-KR' },
  { flag: '🇫🇷', name: 'Français',  code: 'fr-FR' },
  { flag: '🇩🇪', name: 'Deutsch',   code: 'de-DE' },
  { flag: '🇪🇸', name: 'Español',   code: 'es-ES' },
  { flag: '🇵🇹', name: 'Português', code: 'pt-BR' },
  { flag: '🇮🇳', name: 'हिन्दी',    code: 'hi-IN' },
  { flag: '🇦🇪', name: 'العربية',   code: 'ar-AE' },
  { flag: '🇮🇹', name: 'Italiano',  code: 'it-IT' },
  { flag: '🇳🇱', name: 'Nederlands',code: 'nl-NL' },
  { flag: '🇷🇺', name: 'Русский',   code: 'ru-RU' },
  { flag: '🇹🇷', name: 'Türkçe',    code: 'tr-TR' },
]

export function LanguagesSection() {
  const { ref } = useScrollReveal()

  return (
    <div id="languages" className="px-12 max-w-[1280px] mx-auto mb-20">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal bg-ink rounded-[28px] px-16 py-16 relative overflow-hidden"
      >
        {/* Decorative bg character */}
        <span
          className="absolute font-serif text-[180px] leading-none select-none pointer-events-none top-[-20px] right-[-20px]"
          style={{ color: 'rgba(255,255,255,0.03)' }}
          aria-hidden
        >
          語
        </span>

        <p className="text-[11px] font-medium tracking-[0.1em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Supported languages
        </p>
        <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-[-1px] text-white max-w-[560px] mb-5">
          Every story, every tongue
        </h2>
        <p className="text-base font-light leading-[1.7] max-w-[480px] mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Built with Cantonese at the core — and expanding. ClawRead works with any Azure Neural TTS language out of the box.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {LANGUAGES.map((lang, i) => (
            <div
              key={lang.code}
              className={`
                flex items-center gap-2 px-[18px] py-2 rounded-full border text-[13px] cursor-default
                transition-all duration-300 hover:bg-amber/10
                ${lang.featured
                  ? 'text-amber border-amber/50 hover:border-amber/80'
                  : 'text-white/60 border-white/12 hover:text-amber hover:border-amber/60'
                }
              `}
              style={{
                animation: `pillarFadeIn 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.04 + 0.2}s both`,
              }}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span>{lang.name}</span>
              <span className="opacity-40 text-[11px]">{lang.code}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

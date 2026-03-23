'use client';

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
];

export function LanguagesSection() {
  return (
    <div className="px-12 max-w-7xl mx-auto mb-20">
      <div id="languages" className="bg-ink rounded-[28px] p-16 relative overflow-hidden reveal">
        <div className="absolute font-serif text-[180px] leading-none text-white/[0.03] -top-5 -right-5 pointer-events-none select-none">語</div>
        
        <div className="text-[11px] font-medium tracking-[0.1em] uppercase text-white/30 mb-4">Supported languages</div>
        <h2 className="font-serif text-4xl lg:text-[48px] leading-[1.1] tracking-[-1px] text-white max-w-[560px] mb-5">
          Every story, every tongue
        </h2>
        <p className="text-base font-light leading-[1.7] text-white/50 max-w-[480px] mb-10">
          Built with Cantonese at the core — and expanding. ClawRead works with any Azure Neural TTS language out of the box.
        </p>
        
        <div className="flex flex-wrap gap-2.5">
          {langs.map((l, i) => (
            <div key={l.code} className={`px-4 py-2 rounded-full border text-sm flex items-center gap-2 transition-all hover:border-amber/60 hover:text-amber hover:bg-amber/[0.08] ${l.featured ? 'border-amber/50 text-amber' : 'border-white/12 text-white/60'}`}>
              <span className="text-base">{l.flag}</span>
              {l.name}
              <span className="opacity-40 text-[11px]">{l.code}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

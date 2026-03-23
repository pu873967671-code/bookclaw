'use client';

import Link from 'next/link';

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex items-center justify-between backdrop-blur-lg bg-cream/85 border-b border-ink-10 animate-slide-down">
      <div className="flex items-center gap-2.5 font-serif text-[22px] text-ink tracking-[-0.3px]">
        <div className="w-7 h-7 bg-ink rounded-lg flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M4 12C4 8 8 8 8 5C8 2 5 1 3 3" stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M8 12C8 8.5 11 8.5 11 6C11 3.5 9 2.5 7.5 4" stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M12 12C12 9 14 8 13 6C12.2 4.5 10.5 4.5 10 6" stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <line x1="3" y1="12.5" x2="13" y2="12.5" stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        ClawRead
      </div>
      
      <ul className="flex gap-8 list-none">
        <li><a href="#how" className="text-sm font-normal text-ink-60 hover:text-ink transition-colors">How it works</a></li>
        <li><a href="#features" className="text-sm font-normal text-ink-60 hover:text-ink transition-colors">Features</a></li>
        <li><a href="#languages" className="text-sm font-normal text-ink-60 hover:text-ink transition-colors">Languages</a></li>
        <li><a href="https://github.com/pu873967671-code/bookclaw" className="text-sm font-normal text-ink-60 hover:text-ink transition-colors">GitHub</a></li>
      </ul>
      
      <a href="#cta" className="text-sm font-medium px-5 py-2.5 bg-ink text-cream rounded-full hover:bg-ink/90 transition-all hover:-translate-y-0.5">
        Get started free
      </a>
    </nav>
  );
}

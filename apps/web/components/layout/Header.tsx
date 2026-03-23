'use client'

import Link from 'next/link'

const ClawIcon = () => (
  <div className="w-7 h-7 bg-ink rounded-lg flex items-center justify-center flex-shrink-0">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 C4 8, 8 8, 8 5 C8 2, 5 1, 3 3"
        stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M8 12 C8 8.5, 11 8.5, 11 6 C11 3.5, 9 2.5, 7.5 4"
        stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 12 C12 9, 14 8, 13 6 C12.2 4.5, 10.5 4.5, 10 6"
        stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="3" y1="12.5" x2="13" y2="12.5"
        stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>
)

export function Header() {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-12 py-5
        border-b border-ink-10
        backdrop-blur-md
        animate-slideDown
      "
      style={{ background: 'rgba(245,242,234,0.85)' }}
    >
      <Link href="/" className="flex items-center gap-2.5 font-serif text-[22px] text-ink tracking-tight no-underline">
        <ClawIcon />
        ClawRead
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {[
          { href: '#how',       label: 'How it works' },
          { href: '#features',  label: 'Features' },
          { href: '#languages', label: 'Languages' },
          { href: 'https://github.com/pu873967671-code/bookclaw', label: 'GitHub' },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-ink-60 no-underline hover:text-ink transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#cta"
        className="
          text-sm font-medium
          px-5 py-2.5
          bg-ink text-cream
          rounded-full no-underline
          transition-all duration-200
          hover:-translate-y-0.5 hover:bg-[#2E2B24]
          active:translate-y-0
        "
      >
        Get started free
      </Link>
    </nav>
  )
}

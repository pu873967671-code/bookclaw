'use client';

import Link from 'next/link';

export function Header() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <div className="logo-claw">
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M4 12C4 8 8 8 8 5C8 2 5 1 3 3" stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M8 12C8 8.5 11 8.5 11 6C11 3.5 9 2.5 7.5 4" stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M12 12C12 9 14 8 13 6C12.2 4.5 10.5 4.5 10 6" stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <line x1="3" y1="12.5" x2="13" y2="12.5" stroke="#F5F2EA" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        ClawRead
      </div>
      
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="https://github.com/pu873967671-code/bookclaw">GitHub</a></li>
      </ul>
      
      <a href="#cta" className="nav-cta">Get started free</a>
    </nav>
  );
}

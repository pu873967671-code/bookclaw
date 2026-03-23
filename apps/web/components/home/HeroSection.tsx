'use client';

import Link from 'next/link';

const heights = [30,50,20,70,45,85,35,65,25,80,40,60,30,75,45,55,20,90,35,70,50,40,65,25,80];

export function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-text">
        <span className="hero-eyebrow">AI-Powered TTS Platform</span>
        <h1 className="hero-h1">Books that<br/><em>speak</em> to you</h1>
        <p className="hero-sub">
          Upload any ebook and get a studio-quality audiobook in minutes — powered by AI voices that understand the language, tone, and rhythm.
        </p>
        <div className="hero-actions">
          <Link href="https://github.com/pu873967671-code/bookclaw" className="btn-primary">
            Start for free
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a href="#how" className="btn-secondary">
            See how it works
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="hero-visual-wrap">
          <div className="floating-badge badge-top">
            <span className="badge-dot"></span>
            <span>Processing chapter 3…</span>
          </div>
          
          <div className="book-player">
            <div className="book-cover">
              <div className="cover-pattern"></div>
              <span className="cover-tag">Cantonese</span>
              <div className="cover-title-wrap">
                <div className="cover-cat">粤语绘本</div>
                <div className="cover-title">Little Dragon&apos;s<br/>Big Journey</div>
              </div>
            </div>
            <div className="player-body">
              <div className="waveform">
                {heights.map((h, i) => (
                  <div 
                    key={i} 
                    className={`waveform-bar ${i < 10 ? 'played' : ''}`}
                    style={{ 
                      height: `${h}%`,
                      animationDelay: `${i * 0.06}s`
                    }}
                  />
                ))}
              </div>
              <div className="player-controls">
                <span className="player-time">04:22</span>
                <button className="play-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 3L13 8L5 13V3Z" fill="#F5F2EA"/>
                  </svg>
                </button>
                <span className="player-lang">粵語 · Azure TTS</span>
              </div>
            </div>
          </div>
          
          <div className="floating-badge badge-bot">
            <span className="badge-dot amber"></span>
            <span>12 chapters · 3h 24m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

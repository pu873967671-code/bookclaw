import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-ink-10 max-w-[1280px] mx-auto px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
      <span className="font-serif text-lg text-ink">ClawRead</span>

      <ul className="flex gap-7 list-none flex-wrap justify-center">
        {[
          { href: 'https://github.com/pu873967671-code/bookclaw',              label: 'GitHub' },
          { href: 'https://github.com/pu873967671-code/bookclaw/blob/main/README.md', label: 'Docs' },
          { href: 'https://github.com/pu873967671-code/bookclaw/blob/main/DEPLOY.md', label: 'Deploy' },
          { href: 'https://github.com/pu873967671-code/bookclaw/blob/main/LICENSE',   label: 'MIT License' },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[13px] text-ink-60 no-underline hover:text-ink transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <span className="text-xs text-ink-30">© 2025 ClawRead</span>
    </footer>
  )
}

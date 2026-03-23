export function Footer() {
  return (
    <footer className="border-t border-ink-10 px-12 py-8 flex items-center justify-between max-w-7xl mx-auto">
      <div className="font-serif text-lg">ClawRead</div>
      <ul className="flex gap-7 list-none">
        <li><a href="https://github.com/pu873967671-code/bookclaw" className="text-sm text-ink-60 hover:text-ink transition-colors">GitHub</a></li>
        <li><a href="https://github.com/pu873967671-code/bookclaw/blob/main/README.md" className="text-sm text-ink-60 hover:text-ink transition-colors">Docs</a></li>
        <li><a href="https://github.com/pu873967671-code/bookclaw/blob/main/LICENSE" className="text-sm text-ink-60 hover:text-ink transition-colors">MIT License</a></li>
      </ul>
      <span className="text-xs text-ink-30">© 2025 ClawRead</span>
    </footer>
  );
}

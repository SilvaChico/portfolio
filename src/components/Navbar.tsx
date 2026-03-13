const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Fit", href: "#fit" },
  { label: "Career", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(244,239,230,0.88)] backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <a href="#top" className="space-y-1">
          <p className="type-mono text-[11px] text-[color:var(--accent)]">
            Francisco Silva
          </p>
          <p className="text-sm text-[color:var(--ink-soft)]">
            Software engineer
          </p>
        </a>

        <div className="flex items-center gap-5 overflow-x-auto pb-1 text-sm text-[color:var(--ink-soft)] lg:pb-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-link whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          <a
            href="mailto:franciscocrosilva@gmail.com"
            className="focus-ring ml-auto shrink-0 border border-[color:var(--line-strong)] px-4 py-2 font-medium text-[color:var(--ink)] transition-colors duration-200 hover:border-[color:var(--ink)] lg:ml-3"
          >
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}

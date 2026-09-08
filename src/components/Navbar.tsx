import { useState } from "react";
import { Link } from "react-router-dom";
import { common } from "../siteConfig";
import { useLanguage } from "../LanguageContext";
import Rune from "./Rune";

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-widest ${className}`}>
      {(["lv", "en"] as const).map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="text-ink-muted/40">/</span>}
          <button
            onClick={() => setLang(l)}
            className={
              lang === l ? "text-ink" : "text-ink-muted transition-colors hover:text-sage-700"
            }
            aria-pressed={lang === l}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#home", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-ink">
          <Rune className="h-7 w-7" strokeWidth={9} />
          <span className="text-lg font-semibold tracking-widest2">{common.companyName}</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-xs font-medium uppercase tracking-widest text-ink-soft transition-colors hover:text-sage-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="h-4 w-px bg-ink-muted/30" />
          <LangToggle />
        </div>

        <div className="flex items-center gap-5 md:hidden">
          <LangToggle />
          <button
            className="text-ink"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="container flex flex-col gap-1 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-wider text-ink-soft hover:bg-sage-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

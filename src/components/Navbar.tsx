import { useState } from "react";
import { site } from "../siteConfig";
import Rune from "./Rune";

const links = [
  { href: "#home", label: "Sākums" },
  { href: "#about", label: "Par mums" },
  { href: "#services", label: "Pakalpojumi" },
  { href: "#contact", label: "Kontakti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-ink">
          <Rune className="h-7 w-7" strokeWidth={9} />
          <span className="text-lg font-semibold tracking-widest2">{site.companyName}</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
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

        <button
          className="text-ink md:hidden"
          aria-label="Izvēlne"
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

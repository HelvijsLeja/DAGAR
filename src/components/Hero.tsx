import { site } from "../siteConfig";
import Rune from "./Rune";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sage-100"
    >
      {/* Smalks fona rūnas ūdenszīme */}
      <Rune
        className="pointer-events-none absolute -right-16 bottom-[-6rem] h-[34rem] w-[34rem] text-sage-200/60"
        strokeWidth={3}
      />

      <div className="container relative flex flex-col items-center py-28 text-center">
        <Rune className="h-16 w-16 text-ink md:h-20 md:w-20" strokeWidth={6} />

        <h1 className="mt-8 font-serif text-6xl font-semibold tracking-[0.22em] text-ink sm:text-7xl md:text-8xl">
          {site.companyName}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-ink-muted">
          <span className="h-px w-10 bg-ink-muted/40" />
          <span className="text-xs font-medium uppercase tracking-widest2">
            {site.tagline}
          </span>
          <span className="h-px w-10 bg-ink-muted/40" />
        </div>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft">
          {site.heroLead}
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-ink px-8 py-3 text-xs font-semibold uppercase tracking-widest text-sage-50 transition-colors hover:bg-sage-800"
          >
            Sazināties
          </a>
          <a
            href="#services"
            className="rounded-full border border-ink/20 px-8 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:border-ink/50"
          >
            Pakalpojumi
          </a>
        </div>
      </div>
    </section>
  );
}

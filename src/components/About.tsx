import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-sage-50 py-28">
      <div className="container grid gap-14 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-4">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-sage-600">
            {t.about.lead}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {t.about.heading}
          </h2>
        </div>

        <div className="md:col-span-8">
          <p className="text-2xl font-light leading-relaxed text-ink sm:text-3xl">
            {t.about.intro}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{t.about.body}</p>

          <div className="mt-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              {t.about.marketsLabel}
            </span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {t.about.markets.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-sage-300 bg-white px-4 py-1.5 text-sm text-ink-soft"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

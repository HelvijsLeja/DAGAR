import { useEffect } from "react";
import { Link } from "react-router-dom";
import { privacyContent } from "../siteConfig";
import { useLanguage } from "../LanguageContext";

export default function PrivacyPolicy() {
  const { lang, t } = useLanguage();
  const p = privacyContent[lang];

  useEffect(() => {
    document.title = p.title + " — DAGAR";
  }, [p]);

  return (
    <section className="bg-sage-50 pt-32 pb-28">
      <div className="container max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sage-600 transition-colors hover:text-sage-800"
        >
          <span aria-hidden>←</span> {t.footer.backHome}
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-semibold text-ink sm:text-5xl">
          {p.title}
        </h1>
        <p className="mt-3 text-sm text-ink-muted">{p.updated}</p>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft">{p.intro}</p>

        <div className="mt-12 space-y-10">
          {p.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-semibold text-ink">{s.heading}</h2>
              {s.paragraphs?.map((para, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink-soft marker:text-sage-400">
                  {s.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from "../LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="bg-white py-28">
      <div className="container max-w-3xl">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-sage-600">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
            {t.faq.heading}
          </h2>
        </div>

        <div className="divide-y divide-sage-200 border-y border-sage-200">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink transition-colors hover:text-sage-700">
                {item.q}
                <span className="shrink-0 text-sage-500 transition-transform duration-200 group-open:rotate-45">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 pr-8 leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

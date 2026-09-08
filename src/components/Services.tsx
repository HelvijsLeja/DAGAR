import { useLanguage } from "../LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const items = t.services.items;

  return (
    <section id="services" className="bg-white py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-sage-600">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
            {t.services.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{t.services.lead}</p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-sage-200 bg-sage-200 sm:grid-cols-2">
          {items.map((s, i) => {
            const isLastOdd = i === items.length - 1 && items.length % 2 === 1;
            return (
              <div
                key={s.title}
                className={`group bg-white p-8 transition-colors hover:bg-sage-50 sm:p-10 ${
                  isLastOdd ? "sm:col-span-2" : ""
                }`}
              >
                <span className="font-serif text-2xl text-sage-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

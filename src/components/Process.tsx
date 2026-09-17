import { useLanguage } from "../LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="bg-sage-50 py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-sage-600">
            {t.process.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
            {t.process.heading}
          </h2>
        </div>

        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="font-serif text-3xl text-sage-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-4 h-px w-10 bg-sage-300" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

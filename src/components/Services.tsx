import { site } from "../siteConfig";

export default function Services() {
  return (
    <section id="services" className="bg-white py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest2 text-sage-600">
            Ko mēs darām
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-ink sm:text-5xl">
            Pakalpojumi
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Pilna cikla ekspertīze šādās jomās:
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-sage-200 bg-sage-200 sm:grid-cols-2">
          {site.services.map((s, i) => (
            <div key={s.title} className="group bg-white p-8 transition-colors hover:bg-sage-50 sm:p-10">
              <span className="font-serif text-2xl text-sage-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

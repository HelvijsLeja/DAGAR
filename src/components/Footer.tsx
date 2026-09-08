import { common } from "../siteConfig";
import { useLanguage } from "../LanguageContext";
import Rune from "./Rune";

export default function Footer() {
  const { t } = useLanguage();
  const tel = common.contact.phone.replace(/\s/g, "");

  return (
    <footer id="contact" className="bg-sage-900 text-sage-100">
      <div className="container py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Kreisā puse — zīmols */}
          <div>
            <Rune className="h-14 w-14 text-sage-100" strokeWidth={6} />
            <h2 className="mt-8 font-serif text-5xl font-semibold tracking-[0.18em]">
              {common.companyName}
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-sage-300">{t.heroLead}</p>
          </div>

          {/* Labā puse — kontakti (vizītkarte) */}
          <div className="md:justify-self-end">
            <span className="text-xs font-semibold uppercase tracking-widest2 text-sage-400">
              {t.footer.contact}
            </span>

            <p className="mt-6 text-2xl font-semibold text-white">{common.contact.person}</p>

            <dl className="mt-6 space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <dt className="w-20 text-xs uppercase tracking-widest text-sage-400">
                  {t.footer.phone}
                </dt>
                <dd>
                  <a href={`tel:${tel}`} className="transition-colors hover:text-white">
                    {common.contact.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="w-20 text-xs uppercase tracking-widest text-sage-400">
                  {t.footer.email}
                </dt>
                <dd>
                  <a href={`mailto:${common.contact.email}`} className="transition-colors hover:text-white">
                    {common.contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="w-20 text-xs uppercase tracking-widest text-sage-400">
                  {t.footer.address}
                </dt>
                <dd>{t.footer.location}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-sage-800 pt-8 text-sm text-sage-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {t.companyLegal}. {t.footer.rights}
          </span>
          <span className="tracking-widest">{common.marketsCode}</span>
        </div>
      </div>
    </footer>
  );
}

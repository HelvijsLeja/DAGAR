import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, common, type Content, type Lang } from "./siteConfig";

interface LanguageValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Content;
  common: typeof common;
}

const LanguageContext = createContext<LanguageValue | null>(null);

function detectInitialLang(): Lang {
  try {
    const stored = localStorage.getItem("dagar-lang");
    if (stored === "lv" || stored === "en") return stored;
  } catch {
    /* localStorage nav pieejams */
  }
  if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("en")) {
    return "en";
  }
  return "lv";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("dagar-lang", l);
    } catch {
      /* ignorē */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], common }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

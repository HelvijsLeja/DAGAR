import { useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "DAGAR — " + t.tagline;
  }, [t]);

  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
}

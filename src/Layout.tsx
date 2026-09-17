import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // ļauj pārlūkam ritināt uz enkuru (#about u.c.)
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

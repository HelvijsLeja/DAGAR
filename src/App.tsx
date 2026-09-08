import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // ļauj pārlūkam ritināt uz enkuru (#about u.c.)
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privatuma-politika" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { TEL } from "@/components/skypka/constants";
import FormModal from "@/components/skypka/FormModal";
import HeroSection from "@/components/skypka/HeroSection";
import ContentSections from "@/components/skypka/ContentSections";
import ContactsFooter from "@/components/skypka/ContactsFooter";

export default function Index() {
  const [modal, setModal] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = useCallback((l = "") => setModal(l), []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className="min-h-screen relative" style={{ background: "#0e0e0e" }}>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(14,14,14,0.96)" : "rgba(14,14,14,0.3)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(255,215,0,0.12)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-black tracking-tight" style={{ fontFamily: "'Montserrat',sans-serif" }}>
            <span className="gold-shimmer">СКУПКА</span><span className="text-white">24</span>
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {[["Главная","#home"],["Что покупаем","#categories"],["Контакты","#contacts"]].map(([l,h]) => (
              <a key={h} href={h} className="text-white/50 hover:text-yellow-400 transition-all duration-300 text-sm font-semibold relative group">
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300" style={{ background: "#FFD700" }} />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${TEL}`} className="hidden sm:flex items-center gap-1.5 text-white/50 hover:text-yellow-400 transition-all text-sm font-medium">
              <Icon name="Phone" size={13} />{TEL}
            </a>
            <button onClick={() => open()} className="btn-gold px-6 py-2.5 rounded-xl text-sm">
              Продать
            </button>
          </div>
        </div>
      </header>

      <HeroSection open={open} />
      <ContentSections open={open} />
      <ContactsFooter open={open} />

      {modal !== null && <FormModal category={modal} onClose={() => setModal(null)} />}
    </div>
  );
}
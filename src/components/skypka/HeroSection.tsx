import Icon from "@/components/ui/icon";
import { HERO, TEL, heroZones, goWA, goTG } from "./constants";

interface HeroSectionProps {
  open: (label?: string) => void;
}

export default function HeroSection({ open }: HeroSectionProps) {
  return (
    <>
      <section id="home" className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <img src={HERO} alt="Скупка24 — покупаем технику дороже всех в Калуге"
            className="w-full h-auto block" style={{ minHeight: "60vh", objectFit: "cover" }} />
          <div className="absolute inset-0">
            {heroZones.map((z, i) => (
              <button key={i} onClick={() => open(z.l)}
                className="absolute cursor-pointer group"
                style={{ top: z.t, left: z.left, width: z.w, height: z.h }}>
                <div className="w-full h-full rounded-2xl transition-all duration-300 group-hover:bg-black/20 group-hover:backdrop-blur-[3px] group-hover:scale-105 flex items-end justify-center pb-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 text-xs sm:text-sm font-black px-3 py-1.5 rounded-lg shadow-lg"
                    style={{ background: "linear-gradient(135deg,#FFE033,#DAA520)", color: "#111" }}>
                    {z.l} →
                  </span>
                </div>
              </button>
            ))}
            <button onClick={() => open()} className="absolute cursor-pointer group"
              style={{ top: "25%", left: "20%", width: "60%", height: "22%" }}>
              <div className="w-full h-full rounded-3xl transition-all duration-300 group-hover:bg-black/15 group-hover:backdrop-blur-[2px] flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 text-lg sm:text-2xl font-black px-8 py-4 rounded-2xl shadow-2xl animate-glow"
                  style={{ background: "linear-gradient(135deg,#FFE033,#DAA520)", color: "#0e0e0e" }}>
                  ⚡ Оставить заявку
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="relative w-full py-6 px-4" style={{ background: "linear-gradient(180deg, #0e0e0e, #111)" }}>
          <div className="gold-line w-full absolute top-0 left-0" />
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-4xl mx-auto">
            <button onClick={() => open()} className="btn-gold px-8 py-3.5 rounded-2xl text-base flex items-center gap-2 animate-pulse-gold">
              <Icon name="Zap" size={18} /> Оставить заявку
            </button>
            <button onClick={goWA}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
              💬 WhatsApp
            </button>
            <button onClick={goTG}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)" }}>
              ✈️ Telegram
            </button>
            <a href={`tel:${TEL}`}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105"
              style={{ color: "#FFD700", border: "1px solid rgba(255,215,0,0.3)" }}>
              <Icon name="Phone" size={16} /> {TEL}
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden py-3 relative" style={{ background: "#0a0a0a" }}>
        <div className="gold-line absolute top-0 left-0 w-full" />
        <div className="gold-line absolute bottom-0 left-0 w-full" />
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} className="inline-flex gap-8 pr-8">
              {["🍎 Техника Apple","💻 Ноутбуки","📱 Смартфоны","🎮 Консоли","🏺 Антиквариат","💎 Ювелирка","🫖 Фарфор","🖥️ Мониторы","📷 Фото","⌚ Часы","🏠 Бытовая техника","💰 Покупаем дорого"].map((t, i) => (
                <span key={i} className="font-bold text-sm whitespace-nowrap tracking-wide" style={{ color: "#FFD700" }}>
                  {t} <span className="text-yellow-800 mx-3">◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

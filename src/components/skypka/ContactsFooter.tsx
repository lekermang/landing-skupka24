import Icon from "@/components/ui/icon";
import { useAppear, TEL, HOT, goWA, goTG } from "./constants";

interface ContactsFooterProps {
  open: (label?: string) => void;
}

export default function ContactsFooter({ open }: ContactsFooterProps) {
  const refAddr = useAppear();

  return (
    <>
      {/* КОНТАКТЫ */}
      <section id="contacts" ref={refAddr} className="py-20 px-4 relative noise" style={{ background: "#0e0e0e" }}>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 appear">
            <div className="gold-line w-16 mx-auto mb-5" />
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Наши <span className="gold-shimmer">адреса</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              { t: "Филиал 1", a: "ул. Кирова, 7/47", n: "Центр города" },
              { t: "Филиал 2", a: "ул. Кирова, 11",   n: "Рядом с центром" },
            ].map((a, i) => (
              <div key={i} className={`appear stagger-${i + 1} card-premium rounded-3xl p-8`} style={{ borderColor: "rgba(255,215,0,0.15)" }}>
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl btn-gold flex items-center justify-center mb-4">
                    <Icon name="MapPin" size={18} />
                  </div>
                  <div className="text-yellow-500 font-bold text-sm mb-1">{a.t}</div>
                  <div className="text-white text-3xl font-black mb-1" style={{ fontFamily: "'Montserrat',sans-serif" }}>{a.a}</div>
                  <div className="text-white/50 font-medium">г. Калуга</div>
                  <div className="text-white/25 text-sm mt-1">{a.n}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <a href={`tel:${TEL}`} className="appear stagger-3 card-premium rounded-2xl p-6 flex items-center gap-4">
              <div className="w-13 h-13 rounded-xl btn-gold flex items-center justify-center relative z-10">
                <Icon name="Phone" size={20} />
              </div>
              <div className="relative z-10">
                <div className="text-white/40 text-xs mb-1 font-medium">Основной номер</div>
                <div className="text-white text-xl font-black" style={{ fontFamily: "'Montserrat',sans-serif" }}>{TEL}</div>
              </div>
            </a>
            <a href={`tel:${HOT}`} className="appear stagger-4 card-premium rounded-2xl p-6 flex items-center gap-4">
              <div className="w-13 h-13 rounded-xl flex items-center justify-center relative z-10" style={{ background: "linear-gradient(135deg,#22c55e,#15803d)" }}>
                <Icon name="PhoneCall" size={20} className="text-white" />
              </div>
              <div className="relative z-10">
                <div className="text-white/40 text-xs mb-1 font-medium">Горячая линия (бесплатно)</div>
                <div className="text-white text-xl font-black" style={{ fontFamily: "'Montserrat',sans-serif" }}>8 (800) 600-68-33</div>
              </div>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 appear stagger-5">
            <button onClick={goWA} className="flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-[1.03] hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
              💬 Написать в WhatsApp
            </button>
            <button onClick={goTG} className="flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-[1.03] hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)" }}>
              ✈️ Написать в Telegram
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 circuit-bg relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-4 text-3d leading-tight"
            style={{ fontFamily: "'Montserrat',sans-serif", color: "#1A1A1A" }}>
            Продай сегодня —<br />получи деньги сегодня!
          </h2>
          <p className="font-semibold mb-10" style={{ color: "rgba(0,0,0,0.5)", fontSize: "clamp(16px,2.5vw,20px)" }}>
            Не откладывай — техника теряет в цене каждый день
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => open()}
              className="px-10 py-4 rounded-2xl text-lg font-black transition-all hover:scale-105"
              style={{ background: "#0e0e0e", color: "#FFD700", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", fontFamily: "'Montserrat',sans-serif" }}>
              Оставить заявку
            </button>
            <a href={`tel:${TEL}`}
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-lg font-black transition-all hover:scale-105"
              style={{ background: "#0e0e0e", color: "#FFD700", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", fontFamily: "'Montserrat',sans-serif" }}>
              <Icon name="Phone" size={20} /> Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 relative" style={{ background: "#080808" }}>
        <div className="gold-line w-full absolute top-0 left-0" />
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black tracking-tight" style={{ fontFamily: "'Montserrat',sans-serif" }}>
            <span className="gold-shimmer">СКУПКА</span><span className="text-white">24</span>
          </span>
          <span className="text-white/20 text-sm font-medium">г. Калуга · skypka24.com · {new Date().getFullYear()}</span>
          <div className="flex gap-3">
            <button onClick={goWA} className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110 hover:shadow-lg" style={{ background: "#25D366" }}>💬</button>
            <button onClick={goTG} className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110 hover:shadow-lg" style={{ background: "#0088cc" }}>✈️</button>
          </div>
        </div>
      </footer>

      {/* FLOATING */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button onClick={goTG} className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all" style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)", boxShadow: "0 4px 20px rgba(0,136,204,0.4)" }}>✈️</button>
        <button onClick={goWA} className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}>💬</button>
      </div>
    </>
  );
}

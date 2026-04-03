import { useState } from "react";
import Icon from "@/components/ui/icon";
import { WA, TG } from "./constants";

export default function FormModal({ category, onClose }: { category: string; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [device, setDevice] = useState(category ? `Хочу продать: ${category}` : "");
  const msg = () => encodeURIComponent(`Привет! Хочу продать технику.\nИмя: ${name}\nТел: ${phone}\nТехника: ${device}`);

  const inputCls = "w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-white/20 outline-none transition-all duration-300";
  const inputSt = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" style={{ animation: "fadeIn .2s ease" }} />
      <div className="relative w-full max-w-md rounded-3xl p-8"
        style={{ background: "linear-gradient(160deg, #1a1a1a, #111)", border: "1px solid rgba(255,215,0,0.25)", boxShadow: "0 0 80px rgba(255,215,0,0.08)", animation: "bounceIn .4s ease-out" }}
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors">
          <Icon name="X" size={20} />
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl btn-gold flex items-center justify-center">
            <Icon name="Zap" size={18} />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">Оставить заявку</h3>
            <p className="text-white/40 text-xs">Ответим за 5 минут</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-white/50 text-xs mb-1.5 block font-medium">Имя</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Ваше имя"
              className={inputCls} style={inputSt}
              onFocus={e => { e.target.style.borderColor = "#FFD700"; e.target.style.boxShadow = "0 0 20px rgba(255,215,0,0.1)"; }}
              onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }} />
          </div>
          <div>
            <label className="text-white/50 text-xs mb-1.5 block font-medium">Телефон</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7 (999) 000-00-00"
              className={inputCls} style={inputSt}
              onFocus={e => { e.target.style.borderColor = "#FFD700"; e.target.style.boxShadow = "0 0 20px rgba(255,215,0,0.1)"; }}
              onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }} />
          </div>
          <div>
            <label className="text-white/50 text-xs mb-1.5 block font-medium">Что продаёте?</label>
            <textarea value={device} onChange={e => setDevice(e.target.value)}
              placeholder="iPhone 15 Pro, 256GB..." rows={3}
              className={inputCls + " resize-none"} style={inputSt}
              onFocus={e => { e.target.style.borderColor = "#FFD700"; e.target.style.boxShadow = "0 0 20px rgba(255,215,0,0.1)"; }}
              onBlur={e => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }} />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button onClick={() => { window.open(`https://wa.me/${WA}?text=${msg()}`, "_blank"); onClose(); }}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
            💬 WhatsApp
          </button>
          <button onClick={() => { window.open(`https://t.me/${TG}?text=${msg()}`, "_blank"); onClose(); }}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)" }}>
            ✈️ Telegram
          </button>
        </div>
      </div>
    </div>
  );
}

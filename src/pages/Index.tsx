import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const WHATSAPP_NUMBER = "79929990333";
const TELEGRAM_USERNAME = "skypka24";
const PHONE_MAIN = "89929990333";
const PHONE_HOTLINE = "88006006833";

// Категории — точно как на картинке, с позициями
const ITEMS = [
  // Верхний ряд
  { label: "Техника Apple",   emoji: "🍎",  items: ["🎧","📱","🖥"],   top: "7%",  left: "4%",   w: "18%" },
  { label: "Ноутбуки",        emoji: "💻",  items: ["💻","🖱"],         top: "5%",  left: "27%",  w: "15%" },
  { label: "Смартфоны",       emoji: "📱",  items: ["📱","📱"],         top: "5%",  left: "50%",  w: "14%" },
  { label: "Настольные ПК",   emoji: "🖥️", items: ["🖥️","⌨️"],        top: "5%",  left: "69%",  w: "16%" },
  // Левый средний
  { label: "Мониторы",        emoji: "🖥",  items: ["🖥","🖥"],          top: "52%", left: "1%",   w: "17%" },
  // Центр нижний
  { label: "Игровые консоли", emoji: "🎮",  items: ["🕹️","🎮","🎯"],   top: "52%", left: "25%",  w: "20%" },
  { label: "Бытовая техника", emoji: "🏠",  items: ["🫧","❄️","🤖"],   top: "52%", left: "49%",  w: "18%" },
  // Правый средний
  { label: "Антиквариат",     emoji: "🏺",  items: ["🕰️","📻","🏺"],   top: "52%", left: "72%",  w: "16%" },
  // Нижний ряд
  { label: "Фарфор",          emoji: "🫖",  items: ["🫖","🍵"],          top: "78%", left: "4%",   w: "13%" },
  { label: "Ювелирные изделия",emoji: "💎", items: ["💍","📿","💎"],    top: "78%", left: "24%",  w: "14%" },
  { label: "Высокая оценка",  emoji: "🔍",  items: ["🔍","🪙","💵"],    top: "78%", left: "43%",  w: "15%" },
  { label: "Покупаем дорого", emoji: "💰",  items: ["💰","📈"],          top: "78%", left: "63%",  w: "14%" },
];

const whyItems = [
  { icon: "Trophy",   title: "Платим больше всех в Калуге", desc: "Мониторим рынок ежедневно. Перебьём любое предложение конкурентов." },
  { icon: "Clock",    title: "Деньги за 15 минут",          desc: "Быстрая диагностика без очередей. Приехали — уехали с деньгами." },
  { icon: "FileText", title: "Официальный договор",         desc: "Выдаём договор купли-продажи. Всё законно и прозрачно." },
  { icon: "Repeat",   title: "Любое состояние",             desc: "Принимаем технику со сломанным экраном и нерабочие устройства." },
];

const steps = [
  { num: "01", title: "Напишите нам",       desc: "Фото в WhatsApp или Telegram — оценка за 5 минут" },
  { num: "02", title: "Приезжайте",          desc: "В любой филиал в удобное время. Диагностика на месте" },
  { num: "03", title: "Получайте деньги",    desc: "Наличные или перевод на карту — сразу при визите" },
];

function FormModal({ category, onClose }: { category: string; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [device, setDevice] = useState(category ? `Хочу продать: ${category}` : "");

  const msg = () =>
    encodeURIComponent(`Привет! Хочу продать технику.\nИмя: ${name}\nТел: ${phone}\nТехника: ${device}`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-3xl p-8"
        style={{ background: "#1C1C1C", border: "2px solid #FFD700", animation: "bounceIn .4s ease-out" }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
          <Icon name="X" size={22} />
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#FFD700" }}>
            <Icon name="Zap" size={18} />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">Оставить заявку</h3>
            <p className="text-white/50 text-xs">Ответим за 5 минут</p>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-white/60 text-xs mb-1 block">Имя</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Ваше имя"
              className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              onFocus={e => (e.target.style.borderColor = "#FFD700")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
          <div>
            <label className="text-white/60 text-xs mb-1 block">Телефон</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+7 (999) 000-00-00"
              className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              onFocus={e => (e.target.style.borderColor = "#FFD700")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
          <div>
            <label className="text-white/60 text-xs mb-1 block">Что продаёте?</label>
            <textarea value={device} onChange={e => setDevice(e.target.value)}
              placeholder="iPhone 15 Pro, 256GB..." rows={3}
              className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none resize-none"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              onFocus={e => (e.target.style.borderColor = "#FFD700")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button onClick={() => { window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg()}`, "_blank"); onClose(); }}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
            💬 WhatsApp
          </button>
          <button onClick={() => { window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${msg()}`, "_blank"); onClose(); }}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)" }}>
            ✈️ Telegram
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [modal, setModal] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const openWA = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  const openTG = () => window.open(`https://t.me/${TELEGRAM_USERNAME}`, "_blank");
  const openModal = (label = "") => setModal(label);

  return (
    <div className="min-h-screen" style={{ background: "#111" }}>

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(17,17,17,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,215,0,0.2)" : "none",
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-black" style={{ color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>
            СКУПКА<span className="text-white">24</span>
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {[["Главная","#home"],["Что покупаем","#categories"],["Контакты","#contacts"]].map(([l,h]) => (
              <a key={h} href={h} className="text-white/60 hover:text-yellow-400 transition-colors text-sm font-semibold">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_MAIN}`} className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-yellow-400 transition-colors text-sm font-medium">
              <Icon name="Phone" size={13} />{PHONE_MAIN}
            </a>
            <button onClick={() => openModal()} className="px-5 py-2 rounded-xl text-sm font-black transition-all hover:scale-105"
              style={{ background: "#FFD700", color: "#111" }}>
              Продать
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO — точно как на картинке
          Жёлтый фон + 3D логотип по центру
          + кликабельные блоки категорий вокруг
      ══════════════════════════════════════════ */}
      <section id="home" className="relative overflow-hidden circuit-bg"
        style={{ minHeight: "100svh", paddingTop: "72px" }}>

        {/* Декоративные монеты по углам */}
        <div className="absolute top-24 right-8 text-4xl animate-float-slow pointer-events-none opacity-60 hidden lg:block">🪙</div>
        <div className="absolute top-36 right-24 text-3xl animate-float-rev pointer-events-none opacity-50 hidden lg:block" style={{animationDelay:"0.7s"}}>💲</div>
        <div className="absolute bottom-20 left-6 text-3xl animate-float-slow pointer-events-none opacity-50 hidden lg:block">₽</div>
        <div className="absolute top-32 left-8 text-3xl animate-float-rev pointer-events-none opacity-40 hidden lg:block" style={{animationDelay:"1.1s"}}>$</div>
        <div className="absolute bottom-16 right-10 text-2xl animate-float-slow pointer-events-none opacity-40 hidden lg:block" style={{animationDelay:"0.5s"}}>🪙</div>

        {/* ── Сетка блоков — ВЕРХНИЙ РЯД ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-3 pt-4">

          {/* Верхние 4 категории */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-2 sm:mb-3">
            {ITEMS.slice(0, 4).map((item, i) => (
              <button key={i} onClick={() => openModal(item.label)}
                className="group rounded-2xl p-2 sm:p-3 text-center transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
                style={{ background: "rgba(0,0,0,0.08)", border: "2px solid transparent", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.border = "2px solid rgba(0,0,0,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.border = "2px solid transparent")}
              >
                <div className="flex justify-center gap-0.5 mb-1 sm:mb-2">
                  {item.items.map((em, j) => (
                    <span key={j} className="text-2xl sm:text-3xl md:text-4xl transition-transform group-hover:scale-110" style={{animationDelay:`${j*0.1}s`}}>{em}</span>
                  ))}
                </div>
                <div className="font-black text-xs sm:text-sm text-3d-sm" style={{ color: "#1A1A1A", fontFamily: "'Montserrat',sans-serif" }}>
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          {/* ── ЦЕНТР: ЛОГОТИП ── */}
          <div className="relative flex items-center justify-center py-2 sm:py-4">
            {/* Левая категория */}
            <button onClick={() => openModal(ITEMS[4].label)}
              className="group absolute left-0 w-[17%] rounded-2xl p-2 sm:p-3 text-center transition-all hover:scale-105 active:scale-95 hidden sm:block"
              style={{ background: "rgba(0,0,0,0.08)", border: "2px solid transparent" }}
              onMouseEnter={e => (e.currentTarget.style.border = "2px solid rgba(0,0,0,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.border = "2px solid transparent")}
            >
              <div className="flex justify-center gap-0.5 mb-1">
                {ITEMS[4].items.map((em, j) => (
                  <span key={j} className="text-2xl sm:text-3xl transition-transform group-hover:scale-110">{em}</span>
                ))}
              </div>
              <div className="font-black text-xs text-3d-sm" style={{ color: "#1A1A1A", fontFamily: "'Montserrat',sans-serif" }}>{ITEMS[4].label}</div>
            </button>

            {/* Правая категория */}
            <button onClick={() => openModal(ITEMS[7].label)}
              className="group absolute right-0 w-[16%] rounded-2xl p-2 sm:p-3 text-center transition-all hover:scale-105 active:scale-95 hidden sm:block"
              style={{ background: "rgba(0,0,0,0.08)", border: "2px solid transparent" }}
              onMouseEnter={e => (e.currentTarget.style.border = "2px solid rgba(0,0,0,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.border = "2px solid transparent")}
            >
              <div className="flex justify-center gap-0.5 mb-1">
                {ITEMS[7].items.map((em, j) => (
                  <span key={j} className="text-2xl sm:text-3xl transition-transform group-hover:scale-110">{em}</span>
                ))}
              </div>
              <div className="font-black text-xs text-3d-sm" style={{ color: "#1A1A1A", fontFamily: "'Montserrat',sans-serif" }}>{ITEMS[7].label}</div>
            </button>

            {/* ГЛАВНЫЙ ЛОГОТИП */}
            <div className="text-center px-2 sm:px-20">
              <h1
                className="font-black leading-none text-3d"
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "clamp(56px, 13vw, 160px)",
                  color: "#1A1A1A",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                Скупка<span>24</span>
              </h1>
            </div>
          </div>

          {/* Средний ряд: 3 категории (на мобиле — все 4 включая Мониторы) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 sm:hidden mb-2">
            {ITEMS.slice(4, 8).map((item, i) => (
              <button key={i} onClick={() => openModal(item.label)}
                className="group rounded-2xl p-2 text-center transition-all hover:scale-105 active:scale-95"
                style={{ background: "rgba(0,0,0,0.08)", border: "2px solid transparent" }}
                onMouseEnter={e => (e.currentTarget.style.border = "2px solid rgba(0,0,0,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.border = "2px solid transparent")}
              >
                <div className="flex justify-center gap-0.5 mb-1">
                  {item.items.map((em, j) => (
                    <span key={j} className="text-2xl transition-transform group-hover:scale-110">{em}</span>
                  ))}
                </div>
                <div className="font-black text-xs text-3d-sm" style={{ color: "#1A1A1A", fontFamily: "'Montserrat',sans-serif" }}>{item.label}</div>
              </button>
            ))}
          </div>

          {/* Средний ряд (десктоп): 3 блока между боковых */}
          <div className="hidden sm:grid grid-cols-3 gap-3 mb-2 sm:mb-3 mx-[18%]">
            {ITEMS.slice(4, 8).filter((_, i) => i !== 0 && i !== 3).map((item, i) => (
              <button key={i} onClick={() => openModal(item.label)}
                className="group rounded-2xl p-2 sm:p-3 text-center transition-all hover:scale-105 active:scale-95"
                style={{ background: "rgba(0,0,0,0.08)", border: "2px solid transparent" }}
                onMouseEnter={e => (e.currentTarget.style.border = "2px solid rgba(0,0,0,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.border = "2px solid transparent")}
              >
                <div className="flex justify-center gap-0.5 mb-1 sm:mb-2">
                  {item.items.map((em, j) => (
                    <span key={j} className="text-2xl sm:text-3xl transition-transform group-hover:scale-110">{em}</span>
                  ))}
                </div>
                <div className="font-black text-xs sm:text-sm text-3d-sm" style={{ color: "#1A1A1A", fontFamily: "'Montserrat',sans-serif" }}>{item.label}</div>
              </button>
            ))}
          </div>

          {/* Нижний ряд — 4 категории */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {ITEMS.slice(8).map((item, i) => (
              <button key={i} onClick={() => openModal(item.label)}
                className="group rounded-2xl p-2 sm:p-3 text-center transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
                style={{ background: "rgba(0,0,0,0.08)", border: "2px solid transparent" }}
                onMouseEnter={e => (e.currentTarget.style.border = "2px solid rgba(0,0,0,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.border = "2px solid transparent")}
              >
                <div className="flex justify-center gap-0.5 mb-1 sm:mb-2">
                  {item.items.map((em, j) => (
                    <span key={j} className="text-2xl sm:text-3xl md:text-4xl transition-transform group-hover:scale-110">{em}</span>
                  ))}
                </div>
                <div className="font-black text-xs sm:text-sm text-3d-sm" style={{ color: "#1A1A1A", fontFamily: "'Montserrat',sans-serif" }}>
                  {item.label}
                </div>
              </button>
            ))}
          </div>

          {/* CTA под сеткой */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pb-8">
            <button onClick={() => openModal()}
              className="font-black px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg flex items-center gap-2 transition-all hover:scale-105 animate-pulse-gold"
              style={{ background: "#1A1A1A", color: "#FFD700", fontFamily: "'Montserrat',sans-serif", border: "2px solid #1A1A1A" }}>
              <Icon name="Zap" size={18} />
              Оставить заявку
            </button>
            <button onClick={openWA}
              className="flex items-center gap-2 px-6 py-3 sm:py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105"
              style={{ background: "#25D366" }}>
              💬 WhatsApp
            </button>
            <button onClick={openTG}
              className="flex items-center gap-2 px-6 py-3 sm:py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105"
              style={{ background: "#0088cc" }}>
              ✈️ Telegram
            </button>
          </div>

        </div>
      </section>

      {/* ── БЕГУЩАЯ СТРОКА ── */}
      <div className="overflow-hidden py-3" style={{ background: "#1A1A1A", borderTop: "3px solid #FFD700", borderBottom: "3px solid #FFD700" }}>
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} className="inline-flex gap-8 pr-8">
              {["🍎 Техника Apple","💻 Ноутбуки","📱 Смартфоны","🎮 Консоли","🏺 Антиквариат","💎 Ювелирка","🫖 Фарфор","🖥️ Мониторы","📷 Фото","⌚ Часы","🏠 Бытовая техника"].map((t, i) => (
                <span key={i} className="font-bold text-sm whitespace-nowrap" style={{ color: "#FFD700" }}>
                  {t} <span style={{ color: "rgba(255,215,0,0.3)", marginLeft: "16px" }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── СТАТИСТИКА ── */}
      <section className="py-14 px-4" style={{ background: "#111" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { val: "до 90%", label: "от рыночной стоимости", icon: "TrendingUp" },
            { val: "15 мин", label: "оценка и выдача денег", icon: "Clock" },
            { val: "2", label: "филиала в центре Калуги", icon: "MapPin" },
            { val: "10 лет", label: "работаем в городе", icon: "Shield" },
          ].map((s, i) => (
            <div key={i} className="card-black rounded-2xl p-6 text-center">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "#FFD700" }}>
                <Icon name={s.icon} size={20} />
              </div>
              <div className="text-2xl font-black mb-1" style={{ color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>{s.val}</div>
              <div className="text-white/50 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ЧТО ПОКУПАЕМ (раздел) ── */}
      <section id="categories" className="py-16 px-4" style={{ background: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "#FFD700" }} />
            <h2 className="text-4xl font-black text-white mb-2" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Что мы <span style={{ color: "#FFD700" }}>покупаем</span>
            </h2>
            <p className="text-white/45 text-sm">Нажмите на категорию — мгновенно оставите заявку</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {ITEMS.map((item, i) => (
              <button key={i} onClick={() => openModal(item.label)}
                className="card-black rounded-2xl p-5 text-left group transition-all">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform inline-block">{item.emoji}</div>
                <div className="text-white font-bold text-sm">{item.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ МЫ ── */}
      <section className="py-16 px-4" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-1 rounded-full mb-4" style={{ background: "#FFD700" }} />
            <h2 className="text-4xl font-black text-white mb-6" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Почему именно<br /><span style={{ color: "#FFD700" }}>Скупка24?</span>
            </h2>
            <div className="space-y-4">
              {whyItems.map((item, i) => (
                <div key={i} className="card-black rounded-2xl p-5 flex gap-4">
                  <div className="w-10 h-10 min-w-10 rounded-xl flex items-center justify-center" style={{ background: "#FFD700" }}>
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <div className="text-white font-bold mb-1">{item.title}</div>
                    <div className="text-white/50 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ border: "3px solid #FFD700" }}>
              <img
                src="https://cdn.poehali.dev/projects/8c10b732-2c19-482b-8e87-8dddcca34bde/bucket/c2eb5ee2-5948-4946-9e40-88d7c70b7960.jpg"
                alt="Скупка24"
                className="w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl p-4 text-center animate-pulse-gold"
              style={{ background: "#FFD700", border: "3px solid #1A1A1A" }}>
              <div className="text-3xl font-black" style={{ color: "#111", fontFamily: "'Montserrat',sans-serif" }}>90%</div>
              <div className="text-xs font-bold" style={{ color: "rgba(0,0,0,0.6)" }}>от рыночной<br />цены</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── КАК РАБОТАЕТ ── */}
      <section className="py-16 px-4" style={{ background: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "#FFD700" }} />
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Как это <span style={{ color: "#FFD700" }}>работает</span>
            </h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="card-black rounded-2xl p-5 flex gap-5 items-start">
                <div className="w-14 h-14 min-w-14 rounded-xl flex items-center justify-center" style={{ background: "#FFD700" }}>
                  <span className="font-black text-xl" style={{ color: "#111" }}>{step.num}</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-1">{step.title}</div>
                  <div className="text-white/50">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => openModal()}
              className="font-black px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105 animate-pulse-gold"
              style={{ background: "#FFD700", color: "#111", fontFamily: "'Montserrat',sans-serif" }}>
              Отправить заявку сейчас
            </button>
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section id="contacts" className="py-16 px-4" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "#FFD700" }} />
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Наши <span style={{ color: "#FFD700" }}>адреса</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            {[
              { title: "Филиал 1", addr: "ул. Кирова, 7/47", city: "г. Калуга", note: "Центр города" },
              { title: "Филиал 2", addr: "ул. Кирова, 11",   city: "г. Калуга", note: "Рядом с центром" },
            ].map((a, i) => (
              <div key={i} className="card-black rounded-2xl p-7" style={{ borderColor: "rgba(255,215,0,0.3)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "#FFD700" }}>
                  <Icon name="MapPin" size={18} />
                </div>
                <div className="text-yellow-400 font-bold text-sm mb-1">{a.title}</div>
                <div className="text-white text-2xl font-black mb-1" style={{ fontFamily: "'Montserrat',sans-serif" }}>{a.addr}</div>
                <div className="text-white/60">{a.city}</div>
                <div className="text-white/35 text-sm">{a.note}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <a href={`tel:${PHONE_MAIN}`} className="card-black rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#FFD700" }}>
                <Icon name="Phone" size={20} />
              </div>
              <div>
                <div className="text-white/50 text-xs mb-1">Основной номер</div>
                <div className="text-white text-xl font-black" style={{ fontFamily: "'Montserrat',sans-serif" }}>{PHONE_MAIN}</div>
              </div>
            </a>
            <a href={`tel:${PHONE_HOTLINE}`} className="card-black rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#22c55e,#15803d)" }}>
                <Icon name="PhoneCall" size={20} className="text-white" />
              </div>
              <div>
                <div className="text-white/50 text-xs mb-1">Горячая линия (бесплатно)</div>
                <div className="text-white text-xl font-black" style={{ fontFamily: "'Montserrat',sans-serif" }}>8 (800) 600-68-33</div>
              </div>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <button onClick={openWA} className="flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
              <span className="text-2xl">💬</span> Написать в WhatsApp
            </button>
            <button onClick={openTG} className="flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)" }}>
              <span className="text-2xl">✈️</span> Написать в Telegram
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 circuit-bg relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-4 text-3d"
            style={{ fontFamily: "'Montserrat',sans-serif", color: "#1A1A1A" }}>
            Продай сегодня —<br />получи деньги сегодня!
          </h2>
          <p className="text-black/60 text-xl font-semibold mb-10">Не откладывай — техника теряет в цене каждый день</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openModal()}
              className="px-10 py-4 rounded-2xl text-lg font-black transition-all hover:scale-105"
              style={{ background: "#1A1A1A", color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>
              Оставить заявку
            </button>
            <a href={`tel:${PHONE_MAIN}`}
              className="flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-lg font-black transition-all hover:opacity-80"
              style={{ background: "#1A1A1A", color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>
              <Icon name="Phone" size={20} /> Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-4" style={{ background: "#0A0A0A", borderTop: "2px solid rgba(255,215,0,0.15)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black" style={{ color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>
            СКУПКА<span className="text-white">24</span>
          </span>
          <span className="text-white/25 text-sm">г. Калуга · skypka24.com · {new Date().getFullYear()}</span>
          <div className="flex gap-3">
            <button onClick={openWA} className="w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110" style={{ background: "#25D366" }}>💬</button>
            <button onClick={openTG} className="w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110" style={{ background: "#0088cc" }}>✈️</button>
          </div>
        </div>
      </footer>

      {/* ── ПЛАВАЮЩИЕ КНОПКИ ── */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button onClick={openTG} className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition-all" style={{ background: "#0088cc" }}>✈️</button>
        <button onClick={openWA} className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl hover:scale-110 transition-all" style={{ background: "#25D366" }}>💬</button>
      </div>

      {modal !== null && <FormModal category={modal} onClose={() => setModal(null)} />}
    </div>
  );
}

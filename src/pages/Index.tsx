import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const WHATSAPP_NUMBER = "79929990333";
const TELEGRAM_USERNAME = "skypka24";
const PHONE_MAIN = "89929990333";
const PHONE_HOTLINE = "88006006833";

const categories = [
  { icon: "Smartphone", label: "Техника Apple", emoji: "🍎" },
  { icon: "Laptop", label: "Ноутбуки", emoji: "💻" },
  { icon: "Smartphone", label: "Смартфоны", emoji: "📱" },
  { icon: "Monitor", label: "Настольные ПК", emoji: "🖥️" },
  { icon: "Monitor", label: "Мониторы", emoji: "🖥" },
  { icon: "Gamepad2", label: "Игровые консоли", emoji: "🎮" },
  { icon: "Tv", label: "Бытовая техника", emoji: "🏠" },
  { icon: "Clock", label: "Антиквариат", emoji: "🏺" },
  { icon: "Coffee", label: "Фарфор", emoji: "🫖" },
  { icon: "Gem", label: "Ювелирные изделия", emoji: "💎" },
  { icon: "Search", label: "Высокая оценка", emoji: "🔍" },
  { icon: "TrendingUp", label: "Покупаем дорого", emoji: "💰" },
];

const whyItems = [
  { icon: "Trophy", title: "Платим больше всех в Калуге", desc: "Мониторим рынок ежедневно — предлагаем максимальную цену. Перебьём любое предложение конкурентов." },
  { icon: "Clock", title: "Деньги за 15 минут", desc: "Быстрая диагностика без очередей. Приехали — уехали с деньгами." },
  { icon: "FileText", title: "Официальный договор", desc: "Выдаём договор купли-продажи. Всё законно и прозрачно." },
  { icon: "Repeat", title: "Любое состояние", desc: "Принимаем технику со сломанным экраном и нерабочие устройства." },
];

const steps = [
  { num: "01", title: "Напишите нам", desc: "Отправьте фото в WhatsApp или Telegram — оценка за 5 минут" },
  { num: "02", title: "Приезжайте", desc: "В любой филиал в удобное время. Диагностика на месте" },
  { num: "03", title: "Получайте деньги", desc: "Наличные или перевод на карту — сразу при визите" },
];

function FormModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [device, setDevice] = useState("");

  const msg = () => encodeURIComponent(`Привет! Хочу продать технику.\nИмя: ${name}\nТел: ${phone}\nТехника: ${device}`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-3xl p-8 animate-bounce-in"
        style={{ background: "#1C1C1C", border: "2px solid #FFD700" }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
          <Icon name="X" size={22} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl btn-yellow flex items-center justify-center">
            <Icon name="Zap" size={18} />
          </div>
          <div>
            <h3 className="text-xl font-black text-white">Оставить заявку</h3>
            <p className="text-white/50 text-xs">Ответим за 5 минут</p>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { val: name, set: setName, ph: "Ваше имя", label: "Имя" },
            { val: phone, set: setPhone, ph: "+7 (999) 000-00-00", label: "Телефон" },
          ].map(({ val, set, ph, label }) => (
            <div key={label}>
              <label className="text-white/60 text-xs mb-1 block">{label}</label>
              <input
                value={val}
                onChange={e => set(e.target.value)}
                placeholder={ph}
                className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                onFocus={e => (e.target.style.borderColor = "#FFD700")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
          ))}
          <div>
            <label className="text-white/60 text-xs mb-1 block">Что продаёте?</label>
            <textarea
              value={device}
              onChange={e => setDevice(e.target.value)}
              placeholder="iPhone 15 Pro, 256GB, хорошее состояние..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder-white/25 outline-none resize-none transition-all"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              onFocus={e => (e.target.style.borderColor = "#FFD700")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            onClick={() => { window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg()}`, "_blank"); onClose(); }}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
          >
            💬 WhatsApp
          </button>
          <button
            onClick={() => { window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${msg()}`, "_blank"); onClose(); }}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)" }}
          >
            ✈️ Telegram
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const openWA = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  const openTG = () => window.open(`https://t.me/${TELEGRAM_USERNAME}`, "_blank");

  return (
    <div className="min-h-screen" style={{ background: "#111" }}>

      {/* ── NAVBAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(17,17,17,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,215,0,0.2)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black" style={{ color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>
              СКУПКА<span className="text-white">24</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {[["Главная","#home"],["Что покупаем","#categories"],["Контакты","#contacts"]].map(([l,h])=>(
              <a key={h} href={h} className="text-white/60 hover:text-yellow-400 transition-colors text-sm font-semibold">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_MAIN}`} className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-yellow-400 transition-colors text-sm font-medium">
              <Icon name="Phone" size={13} />{PHONE_MAIN}
            </a>
            <button onClick={() => setModalOpen(true)} className="btn-yellow px-5 py-2 rounded-xl text-sm">
              Продать
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO — главный экран на жёлтом фоне как картинка ── */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden circuit-bg pt-20">

        {/* Декоративные элементы углов — имитация разброса техники */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Верхний левый */}
          <div className="absolute top-24 left-4 md:left-12 animate-float-slow opacity-80">
            <div className="text-5xl">🖥️</div>
          </div>
          <div className="absolute top-44 left-8 md:left-20 animate-float-rev opacity-70">
            <div className="text-4xl">🎧</div>
          </div>
          <div className="absolute top-16 left-32 md:left-56 animate-float-slow opacity-60" style={{animationDelay:"0.8s"}}>
            <div className="text-3xl">📟</div>
          </div>
          {/* Верхний правый */}
          <div className="absolute top-20 right-6 md:right-16 animate-float-rev opacity-80">
            <div className="text-5xl">⌚</div>
          </div>
          <div className="absolute top-40 right-12 md:right-32 animate-float-slow opacity-70" style={{animationDelay:"1.2s"}}>
            <div className="text-4xl">🖨️</div>
          </div>
          <div className="absolute top-16 right-36 md:right-64 animate-float-rev opacity-60" style={{animationDelay:"0.5s"}}>
            <div className="text-3xl">📷</div>
          </div>
          {/* Левый средний */}
          <div className="absolute top-1/2 left-2 md:left-8 animate-float-slow opacity-70" style={{animationDelay:"0.3s"}}>
            <div className="text-5xl">📻</div>
          </div>
          {/* Правый средний */}
          <div className="absolute top-1/2 right-2 md:right-8 animate-float-rev opacity-70" style={{animationDelay:"1s"}}>
            <div className="text-4xl">🕰️</div>
          </div>
          {/* Нижний левый */}
          <div className="absolute bottom-32 left-6 md:left-14 animate-float-rev opacity-80">
            <div className="text-5xl">🫖</div>
          </div>
          <div className="absolute bottom-16 left-24 md:left-44 animate-float-slow opacity-60" style={{animationDelay:"0.7s"}}>
            <div className="text-3xl">💍</div>
          </div>
          {/* Нижний правый */}
          <div className="absolute bottom-28 right-6 md:right-16 animate-float-slow opacity-80">
            <div className="text-5xl">🎻</div>
          </div>
          <div className="absolute bottom-14 right-32 md:right-52 animate-float-rev opacity-60" style={{animationDelay:"0.9s"}}>
            <div className="text-3xl">💰</div>
          </div>
          {/* Монеты */}
          <div className="absolute top-1/3 left-1/4 animate-float-slow opacity-50" style={{animationDelay:"0.4s"}}>
            <div className="text-2xl">🪙</div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-rev opacity-50" style={{animationDelay:"1.1s"}}>
            <div className="text-2xl">💵</div>
          </div>
        </div>

        {/* Центральный контент */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold mb-6 animate-slide-up"
            style={{ background: "#1A1A1A", color: "#FFD700", border: "2px solid #FFD700" }}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Принимаем технику прямо сейчас · г. Калуга
          </div>

          {/* Главный заголовок — имитация 3D букв как на картинке */}
          <h1
            className="font-black leading-none mb-2 animate-slide-up delay-1 text-3d"
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: "clamp(64px, 14vw, 180px)",
              color: "#1A1A1A",
              letterSpacing: "-2px",
            }}
          >
            Скупка<span style={{ color: "#1A1A1A" }}>24</span>
          </h1>

          <p className="text-xl md:text-2xl font-black mb-2 animate-slide-up delay-2 text-3d-sm"
            style={{ color: "#1A1A1A", fontFamily: "'Montserrat',sans-serif" }}>
            Покупаем дороже всех в Калуге
          </p>

          <p className="text-base md:text-lg font-semibold mb-8 animate-slide-up delay-3"
            style={{ color: "rgba(0,0,0,0.65)" }}>
            Apple, ноутбуки, консоли, антиквариат, ювелирка и всё кроме одежды
          </p>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-4">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-yellow px-8 py-4 rounded-2xl text-lg flex items-center gap-2 animate-pulse-gold"
            >
              <Icon name="Zap" size={20} />
              Оставить заявку
            </button>
            <button onClick={openWA}
              className="flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105"
              style={{ background: "#25D366" }}>
              💬 WhatsApp
            </button>
            <button onClick={openTG}
              className="flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-white text-base transition-all hover:scale-105"
              style={{ background: "#0088cc" }}>
              ✈️ Telegram
            </button>
          </div>

          {/* Доверие */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slide-up delay-5">
            {[
              { icon: "Shield", text: "Официальный договор" },
              { icon: "Clock", text: "Деньги за 15 мин" },
              { icon: "MapPin", text: "2 филиала в центре" },
              { icon: "Banknote", text: "Наличные / перевод" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm"
                style={{ background: "rgba(0,0,0,0.12)", color: "#1A1A1A" }}>
                <Icon name={b.icon} size={15} />
                {b.text}
              </div>
            ))}
          </div>
        </div>

        {/* Стрелка вниз */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ color: "rgba(0,0,0,0.4)" }}>
          <span className="text-xs font-semibold">листайте вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* ── БЕГУЩАЯ СТРОКА ── */}
      <div className="overflow-hidden py-3" style={{ background: "#1A1A1A", borderTop: "3px solid #FFD700", borderBottom: "3px solid #FFD700" }}>
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
          {[...Array(2)].map((_, r) => (
            <span key={r} className="inline-flex gap-8 pr-8">
              {["🍎 Техника Apple","💻 Ноутбуки","📱 Смартфоны","🎮 Игровые консоли","🏺 Антиквариат","💎 Ювелирка","🫖 Фарфор","🖥️ Мониторы","📷 Фотоаппараты","⌚ Часы","🏠 Бытовая техника"].map((t, i) => (
                <span key={i} className="font-bold text-sm" style={{ color: "#FFD700" }}>
                  {t} <span style={{ color: "rgba(255,215,0,0.3)", marginLeft: "16px" }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── СТАТИСТИКА ── */}
      <section className="py-16 px-4" style={{ background: "#111" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { val: "до 90%", label: "от рыночной стоимости", icon: "TrendingUp" },
            { val: "15 мин", label: "оценка и выдача денег", icon: "Clock" },
            { val: "2", label: "филиала в центре Калуги", icon: "MapPin" },
            { val: "10 лет", label: "работаем в городе", icon: "Shield" },
          ].map((s, i) => (
            <div key={i} className="card-black rounded-2xl p-6 text-center">
              <div className="w-11 h-11 rounded-xl btn-yellow flex items-center justify-center mx-auto mb-3">
                <Icon name={s.icon} size={20} />
              </div>
              <div className="text-2xl font-black mb-1" style={{ color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>{s.val}</div>
              <div className="text-white/50 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ЧТО ПОКУПАЕМ ── */}
      <section id="categories" className="py-20 px-4" style={{ background: "#0D0D0D" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "#FFD700" }} />
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-3" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Что мы <span style={{ color: "#FFD700" }}>покупаем</span>
            </h2>
            <p className="text-white/50">Нажмите на категорию — мгновенно оставите заявку</p>
          </div>

          {/* Сетка категорий как на картинке */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setModalOpen(true)}
                className="card-black rounded-2xl p-5 text-left group"
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform inline-block">{cat.emoji}</div>
                <div className="text-white font-bold text-sm">{cat.label}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ МЫ ── */}
      <section className="py-20 px-4" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="w-12 h-1 rounded-full mb-4" style={{ background: "#FFD700" }} />
            <h2 className="text-4xl font-black text-white mb-8" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Почему именно<br /><span style={{ color: "#FFD700" }}>Скупка24?</span>
            </h2>
            <div className="space-y-4">
              {whyItems.map((item, i) => (
                <div key={i} className="card-black rounded-2xl p-5 flex gap-4">
                  <div className="w-10 h-10 min-w-10 rounded-xl btn-yellow flex items-center justify-center">
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

          {/* Правая часть — жёлтый блок с картинкой */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden" style={{ border: "3px solid #FFD700" }}>
              <img
                src="https://cdn.poehali.dev/projects/8c10b732-2c19-482b-8e87-8dddcca34bde/bucket/c2eb5ee2-5948-4946-9e40-88d7c70b7960.jpg"
                alt="Скупка24 — покупаем дороже всех"
                className="w-full object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl p-4 text-center animate-pulse-gold"
              style={{ background: "#FFD700", border: "3px solid #1A1A1A" }}>
              <div className="text-3xl font-black text-black" style={{ fontFamily: "'Montserrat',sans-serif" }}>90%</div>
              <div className="text-black/70 text-xs font-bold">от рыночной<br />цены</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── КАК ЭТО РАБОТАЕТ ── */}
      <section className="py-20 px-4" style={{ background: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "#FFD700" }} />
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Как это <span style={{ color: "#FFD700" }}>работает</span>
            </h2>
          </div>
          <div className="space-y-5">
            {steps.map((step, i) => (
              <div key={i} className="card-black rounded-2xl p-6 flex gap-5 items-start">
                <div className="w-14 h-14 min-w-14 rounded-xl btn-yellow flex items-center justify-center">
                  <span className="font-black text-xl">{step.num}</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg mb-1">{step.title}</div>
                  <div className="text-white/50">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setModalOpen(true)} className="btn-yellow px-10 py-4 rounded-2xl text-lg animate-pulse-gold">
              Отправить заявку сейчас
            </button>
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section id="contacts" className="py-20 px-4" style={{ background: "#111" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "#FFD700" }} />
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Наши <span style={{ color: "#FFD700" }}>адреса</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              { title: "Филиал 1", addr: "ул. Кирова, 7/47", city: "г. Калуга", note: "Центр города" },
              { title: "Филиал 2", addr: "ул. Кирова, 11", city: "г. Калуга", note: "Рядом с центром" },
            ].map((a, i) => (
              <div key={i} className="card-black rounded-2xl p-7" style={{ borderColor: "#FFD70040" }}>
                <div className="w-10 h-10 rounded-xl btn-yellow flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={18} />
                </div>
                <div className="text-yellow-400 font-bold text-sm mb-1">{a.title}</div>
                <div className="text-white text-2xl font-black mb-1" style={{ fontFamily: "'Montserrat',sans-serif" }}>{a.addr}</div>
                <div className="text-white/60">{a.city}</div>
                <div className="text-white/35 text-sm">{a.note}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <a href={`tel:${PHONE_MAIN}`} className="card-black rounded-2xl p-6 flex items-center gap-4 hover:border-yellow-400 transition-colors">
              <div className="w-12 h-12 rounded-xl btn-yellow flex items-center justify-center">
                <Icon name="Phone" size={20} />
              </div>
              <div>
                <div className="text-white/50 text-xs mb-1">Основной номер</div>
                <div className="text-white text-xl font-black" style={{ fontFamily: "'Montserrat',sans-serif" }}>{PHONE_MAIN}</div>
              </div>
            </a>
            <a href={`tel:${PHONE_HOTLINE}`} className="card-black rounded-2xl p-6 flex items-center gap-4 hover:border-yellow-400 transition-colors">
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
            <button onClick={openWA} className="flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
              <span className="text-2xl">💬</span> Написать в WhatsApp
            </button>
            <button onClick={openTG} className="flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105" style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)" }}>
              <span className="text-2xl">✈️</span> Написать в Telegram
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA БАННЕР — жёлтый как на картинке ── */}
      <section className="py-20 px-4 circuit-bg relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black mb-4 text-3d" style={{ fontFamily: "'Montserrat',sans-serif", color: "#1A1A1A" }}>
            Продай сегодня —<br />получи деньги сегодня!
          </h2>
          <p className="text-black/60 text-xl font-semibold mb-10">Не откладывай — техника теряет в цене каждый день</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setModalOpen(true)}
              className="btn-black px-10 py-4 rounded-2xl text-lg">
              Оставить заявку
            </button>
            <a href={`tel:${PHONE_MAIN}`}
              className="flex items-center justify-center gap-2 bg-black text-yellow-400 border-2 border-black font-bold px-10 py-4 rounded-2xl text-lg hover:bg-black/80 transition-all">
              <Icon name="Phone" size={20} /> Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-4" style={{ background: "#0A0A0A", borderTop: "2px solid #FFD70030" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black" style={{ color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>
            СКУПКА<span className="text-white">24</span>
          </span>
          <span className="text-white/25 text-sm">г. Калуга · skypka24.com · {new Date().getFullYear()}</span>
          <div className="flex gap-4">
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

      {modalOpen && <FormModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

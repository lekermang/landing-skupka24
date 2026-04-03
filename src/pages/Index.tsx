import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const WHATSAPP_NUMBER = "79929990333";
const TELEGRAM_USERNAME = "skypka24";
const PHONE_MAIN = "89929990333";
const PHONE_HOTLINE = "88006006833";

const categories = [
  { icon: "Smartphone", label: "iPhone", sub: "Все модели" },
  { icon: "Monitor", label: "MacBook", sub: "Air & Pro" },
  { icon: "Tablet", label: "iPad", sub: "Все серии" },
  { icon: "Watch", label: "Apple Watch", sub: "Series 1–9" },
  { icon: "Headphones", label: "AirPods", sub: "Все модели" },
  { icon: "Gamepad2", label: "PlayStation", sub: "PS4 / PS5" },
  { icon: "Laptop", label: "Ноутбуки", sub: "Любые бренды" },
  { icon: "Camera", label: "Фотоаппараты", sub: "Зеркалки, беззерк." },
  { icon: "Tv", label: "Телевизоры", sub: "Smart TV" },
  { icon: "Speaker", label: "Колонки", sub: "JBL, Marshall..." },
  { icon: "Cpu", label: "Комплектующие", sub: "Видеокарты, RAM" },
  { icon: "Package", label: "Другая техника", sub: "Всё кроме одежды" },
];

const advantages = [
  { value: "до 90%", label: "от рыночной стоимости", icon: "TrendingUp" },
  { value: "15 мин", label: "оценка и выдача денег", icon: "Clock" },
  { value: "2", label: "филиала в центре Калуги", icon: "MapPin" },
  { value: "10 лет", label: "работаем и не подводим", icon: "Shield" },
];

const steps = [
  { num: "01", title: "Напишите нам", desc: "Отправьте фото и описание техники в WhatsApp или Telegram — получите предварительную оценку за 5 минут" },
  { num: "02", title: "Приезжайте", desc: "Приходите в любой из наших филиалов в удобное время. Проводим диагностику на месте" },
  { num: "03", title: "Получайте деньги", desc: "Согласовываем цену, подписываем договор — вы уходите с наличными или переводом на карту" },
];

const addresses = [
  { title: "Филиал 1", address: "ул. Кирова, 7/47", city: "г. Калуга", metro: "Центр города", icon: "Building2" },
  { title: "Филиал 2", address: "ул. Кирова, 11", city: "г. Калуга", metro: "Рядом с центром", icon: "Building" },
];

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FormModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [device, setDevice] = useState("");

  const buildMessage = () =>
    encodeURIComponent(`Привет! Хочу продать технику.\nИмя: ${name}\nТелефон: ${phone}\nТехника: ${device}`);

  const sendWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`, "_blank");
    onClose();
  };

  const sendTelegram = () => {
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${buildMessage()}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md rounded-2xl p-8 animate-slide-up"
        style={{ background: "linear-gradient(145deg, #1A1A2E, #16213E)", border: "1px solid rgba(255,107,0,0.3)" }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
          <Icon name="X" size={24} />
        </button>
        <div className="mb-6">
          <div className="w-12 h-1 rounded-full mb-4" style={{ background: "linear-gradient(90deg, #FF6B00, #E8003D)" }} />
          <h3 className="text-2xl font-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>Оставить заявку</h3>
          <p className="text-white/60 mt-1 text-sm">Мы свяжемся в течение 5 минут</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-white/70 text-sm mb-1 block">Ваше имя</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Иван"
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              onFocus={e => (e.target.style.borderColor = "rgba(255,107,0,0.6)")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
          <div>
            <label className="text-white/70 text-sm mb-1 block">Телефон</label>
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="+7 (999) 000-00-00"
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              onFocus={e => (e.target.style.borderColor = "rgba(255,107,0,0.6)")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
          <div>
            <label className="text-white/70 text-sm mb-1 block">Что хотите продать?</label>
            <textarea
              value={device}
              onChange={e => setDevice(e.target.value)}
              placeholder="iPhone 14 Pro, 256GB, хорошее состояние..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 outline-none resize-none transition-all"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              onFocus={e => (e.target.style.borderColor = "rgba(255,107,0,0.6)")}
              onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={sendWhatsApp}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <span>💬</span> WhatsApp
          </button>
          <button
            onClick={sendTelegram}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #0088cc, #005fa3)" }}
          >
            <span>✈️</span> Telegram
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statsRef = useInView(0.2);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const openWhatsApp = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  const openTelegram = () => window.open(`https://t.me/${TELEGRAM_USERNAME}`, "_blank");

  return (
    <div className="min-h-screen" style={{ background: "#0D0D14", fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(13,13,20,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,107,0,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)" }}>
              <span className="text-white font-black text-sm">24</span>
            </div>
            <span className="text-white font-black text-xl tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              СКУПКА<span className="shimmer-text">24</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {[["Главная", "#home"], ["Что покупаем", "#categories"], ["Контакты", "#contacts"]].map(([label, href]) => (
              <a key={href} href={href} className="text-white/70 hover:text-white transition-colors text-sm font-medium">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE_MAIN}`} className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm">
              <Icon name="Phone" size={14} />
              <span>{PHONE_MAIN}</span>
            </a>
            <button
              onClick={() => setModalOpen(true)}
              className="text-white font-bold px-5 py-2 rounded-xl text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)", fontFamily: "'Montserrat', sans-serif" }}
            >
              Продать
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0D0D14 0%, #1A0A2E 30%, #2D0A1A 60%, #0D0D14 100%)" }} />
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(255,107,0,0.3) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 20% 80%, rgba(232,0,61,0.2) 0%, transparent 60%)" }} />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 animate-float" style={{ background: "radial-gradient(circle, rgba(255,107,0,0.4) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full opacity-15 animate-float" style={{ background: "radial-gradient(circle, rgba(232,0,61,0.5) 0%, transparent 70%)", filter: "blur(30px)", animationDelay: "1.5s" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: "rgba(255,107,0,0.15)", border: "1px solid rgba(255,107,0,0.3)", color: "#FF9A50" }}>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Принимаем технику прямо сейчас</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <span className="text-white">ПРОДАЙ</span><br />
              <span className="shimmer-text">ДОРОЖЕ</span><br />
              <span className="text-white/90 text-4xl sm:text-5xl lg:text-6xl">всех в Калуге</span>
            </h1>

            <p className="text-white/60 text-lg mb-8 max-w-lg">
              Скупаем Apple, ноутбуки, игровые приставки, фотоаппараты и любую электронику. Оценка за 15 минут — деньги сразу на руки.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="text-white font-black px-8 py-4 rounded-2xl text-lg transition-all animate-pulse-glow flex items-center justify-center gap-2 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)", fontFamily: "'Montserrat', sans-serif" }}
              >
                <Icon name="Zap" size={20} />
                Оставить заявку
              </button>
              <div className="flex gap-3">
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all hover:scale-105"
                  style={{ background: "rgba(37,211,102,0.15)", border: "1px solid rgba(37,211,102,0.4)", color: "#25D366" }}
                >
                  <span>💬</span> WhatsApp
                </button>
                <button
                  onClick={openTelegram}
                  className="flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all hover:scale-105"
                  style={{ background: "rgba(0,136,204,0.15)", border: "1px solid rgba(0,136,204,0.4)", color: "#0088cc" }}
                >
                  <span>✈️</span> TG
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Icon name="Shield" size={16} className="text-green-400" />
                Официальный договор
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Icon name="Banknote" size={16} className="text-yellow-400" />
                Наличные / перевод
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute -inset-4 rounded-3xl opacity-50" style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.3), rgba(232,0,61,0.3))", filter: "blur(20px)" }} />
              <img
                src="https://cdn.poehali.dev/projects/8c10b732-2c19-482b-8e87-8dddcca34bde/files/03f705da-5dd5-4cd9-82be-073d6c471091.jpg"
                alt="Продать iPhone и Apple технику в Калуге"
                className="relative rounded-3xl w-full object-cover"
                style={{ aspectRatio: "1/1", border: "1px solid rgba(255,107,0,0.2)" }}
              />
              <div className="absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 animate-pulse-glow" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="text-3xl font-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>до <span className="shimmer-text">90%</span></div>
                <div className="text-white/60 text-sm">от рыночной цены</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs">листайте вниз</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.08), rgba(232,0,61,0.08))" }} />
        <div ref={statsRef.ref} className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <div key={i} className="text-center p-6 rounded-2xl card-hover" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)" }}>
                <Icon name={a.icon } size={22} className="text-white" />
              </div>
              <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{a.value}</div>
              <div className="text-white/50 text-sm">{a.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "linear-gradient(90deg, #FF6B00, #E8003D)" }} />
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Что мы <span className="shimmer-text">покупаем</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Принимаем любую электронику и гаджеты — всё кроме одежды</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setModalOpen(true)}
                className="p-5 rounded-2xl text-left card-hover group cursor-pointer"
                style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all group-hover:scale-110" style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.2), rgba(232,0,61,0.2))", border: "1px solid rgba(255,107,0,0.3)" }}>
                  <Icon name={cat.icon} size={18} className="text-orange-400" />
                </div>
                <div className="text-white font-semibold text-sm mb-1">{cat.label}</div>
                <div className="text-white/40 text-xs">{cat.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(255,107,0,0.04), transparent)" }} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="w-12 h-1 rounded-full mb-4" style={{ background: "linear-gradient(90deg, #FF6B00, #E8003D)" }} />
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Почему именно<br /><span className="shimmer-text">Скупка24?</span>
            </h2>
            <div className="space-y-4">
              {[
                { icon: "Trophy", title: "Платим больше всех в Калуге", desc: "Мониторим рынок каждый день и предлагаем максимальную цену. Можем перебить любое предложение конкурентов." },
                { icon: "Clock", title: "Деньги за 15 минут", desc: "Быстрая диагностика, никаких очередей. Приезжаете — уезжаете с деньгами в тот же визит." },
                { icon: "FileText", title: "Официальный договор", desc: "Работаем прозрачно — выдаём договор купли-продажи. Всё законно и без рисков для вас." },
                { icon: "Repeat", title: "Любое состояние", desc: "Принимаем технику со сломанным экраном, в нерабочем состоянии. Звоните — оценим." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl card-hover" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-10 h-10 min-w-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)" }}>
                    <Icon name={item.icon} size={18} className="text-white" />
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
            <div className="absolute -inset-4 rounded-3xl opacity-30" style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.2), rgba(232,0,61,0.2))", filter: "blur(30px)" }} />
            <img
              src="https://cdn.poehali.dev/projects/8c10b732-2c19-482b-8e87-8dddcca34bde/files/9b34241c-9480-4b4c-a5c6-c47b11ea6dff.jpg"
              alt="Скупаем технику дороже всех"
              className="relative rounded-3xl w-full object-cover"
              style={{ border: "1px solid rgba(255,107,0,0.2)" }}
            />
            <div className="absolute -top-6 -right-6 rounded-2xl p-5 text-center animate-pulse-glow" style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="text-4xl font-black shimmer-text" style={{ fontFamily: "'Montserrat', sans-serif" }}>90%</div>
              <div className="text-white/60 text-xs mt-1">от рыночной<br />цены</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "linear-gradient(90deg, #FF6B00, #E8003D)" }} />
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Как это <span className="shimmer-text">работает</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden sm:block" style={{ background: "linear-gradient(to bottom, rgba(255,107,0,0.8), rgba(232,0,61,0.8))" }} />
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-16 h-16 min-w-16 rounded-2xl flex items-center justify-center relative z-10" style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)" }}>
                    <span className="text-white font-black text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>{step.num}</span>
                  </div>
                  <div className="flex-1 p-5 rounded-2xl card-hover" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="text-white font-bold text-lg mb-2">{step.title}</div>
                    <div className="text-white/50">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setModalOpen(true)}
              className="text-white font-black px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105 animate-pulse-glow"
              style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)", fontFamily: "'Montserrat', sans-serif" }}
            >
              Отправить заявку сейчас
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="w-12 h-1 rounded-full mx-auto mb-4" style={{ background: "linear-gradient(90deg, #FF6B00, #E8003D)" }} />
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Наши <span className="shimmer-text">адреса</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {addresses.map((addr, i) => (
              <div key={i} className="p-8 rounded-3xl card-hover" style={{ background: "linear-gradient(145deg, rgba(255,107,0,0.08), rgba(232,0,61,0.05))", border: "1px solid rgba(255,107,0,0.2)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)" }}>
                    <Icon name={addr.icon} size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-orange-400 font-bold text-sm mb-1">{addr.title}</div>
                    <div className="text-white text-2xl font-black mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{addr.address}</div>
                    <div className="text-white/60">{addr.city}</div>
                    <div className="text-white/40 text-sm mt-1">{addr.metro}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <a href={`tel:${PHONE_MAIN}`} className="flex items-center gap-4 p-6 rounded-2xl card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)" }}>
                <Icon name="Phone" size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white/50 text-sm">Основной номер</div>
                <div className="text-white text-2xl font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>{PHONE_MAIN}</div>
              </div>
            </a>
            <a href={`tel:${PHONE_HOTLINE}`} className="flex items-center gap-4 p-6 rounded-2xl card-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
                <Icon name="PhoneCall" size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white/50 text-sm">Горячая линия (бесплатно)</div>
                <div className="text-white text-2xl font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>8 (800) 600-68-33</div>
              </div>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <span className="text-2xl">💬</span> Написать в WhatsApp
            </button>
            <button
              onClick={openTelegram}
              className="flex items-center justify-center gap-3 py-5 rounded-2xl font-bold text-white text-lg transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #0088cc, #005fa3)" }}
            >
              <span className="text-2xl">✈️</span> Написать в Telegram
            </button>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient" style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D, #FF4500, #FF6B00)", backgroundSize: "300% 300%" }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Продай сегодня —<br />получи деньги сегодня!
          </h2>
          <p className="text-white/80 text-xl mb-10">Не откладывай — техника теряет в цене каждый день</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white font-black px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105 hover:shadow-2xl"
              style={{ color: "#E8003D", fontFamily: "'Montserrat', sans-serif" }}
            >
              Оставить заявку
            </button>
            <a
              href={`tel:${PHONE_MAIN}`}
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:bg-white/20"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <Icon name="Phone" size={20} />
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 sm:px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00, #E8003D)" }}>
              <span className="text-white font-black text-xs">24</span>
            </div>
            <span className="text-white font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>СКУПКА24</span>
          </div>
          <div className="text-white/30 text-sm">г. Калуга · skypka24.com · {new Date().getFullYear()}</div>
          <div className="flex items-center gap-4">
            <button onClick={openWhatsApp} className="text-white/40 hover:text-green-400 transition-colors text-2xl">💬</button>
            <button onClick={openTelegram} className="text-white/40 hover:text-blue-400 transition-colors text-2xl">✈️</button>
            <a href={`tel:${PHONE_MAIN}`} className="text-white/40 hover:text-orange-400 transition-colors">
              <Icon name="Phone" size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && <FormModal onClose={() => setModalOpen(false)} />}

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button
          onClick={openTelegram}
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl transition-all hover:scale-110 active:scale-95"
          style={{ background: "linear-gradient(135deg, #0088cc, #005fa3)" }}
          title="Telegram"
        >✈️</button>
        <button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl transition-all hover:scale-110 active:scale-95"
          style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          title="WhatsApp"
        >💬</button>
      </div>
    </div>
  );
}
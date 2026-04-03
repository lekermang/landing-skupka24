import { useState, useEffect, useRef, useCallback } from "react";
import Icon from "@/components/ui/icon";

const WA = "79929990333";
const TG = "skypka24";
const TEL = "89929990333";
const HOT = "88006006833";
const HERO = "https://cdn.poehali.dev/projects/8c10b732-2c19-482b-8e87-8dddcca34bde/bucket/c2eb5ee2-5948-4946-9e40-88d7c70b7960.jpg";
const PHOTO = "https://cdn.poehali.dev/projects/8c10b732-2c19-482b-8e87-8dddcca34bde/files/e785236f-12df-4407-8fa6-1bed345cf091.jpg";

const cats = [
  { l: "Техника Apple",    ic: "Laptop" },
  { l: "Ноутбуки",         ic: "Laptop" },
  { l: "Смартфоны",        ic: "Smartphone" },
  { l: "Настольные ПК",    ic: "Monitor" },
  { l: "Мониторы",         ic: "MonitorSmartphone" },
  { l: "Игровые консоли",  ic: "Gamepad2" },
  { l: "Бытовая техника",  ic: "Tv" },
  { l: "Антиквариат",      ic: "Clock" },
  { l: "Фарфор",           ic: "Coffee" },
  { l: "Ювелирные изделия",ic: "Gem" },
  { l: "Высокая оценка",   ic: "Search" },
  { l: "Покупаем дорого",  ic: "TrendingUp" },
];

const heroZones = [
  { l: "Техника Apple",    t: "2%", left: "5%", w: "18%", h: "18%" },
  { l: "Ноутбуки",         t: "1%", left: "27%", w: "16%", h: "20%" },
  { l: "Смартфоны",        t: "1%", left: "47%", w: "18%", h: "20%" },
  { l: "Настольные ПК",    t: "1%", left: "70%", w: "22%", h: "20%" },
  { l: "Мониторы",         t: "52%", left: "0%", w: "16%", h: "18%" },
  { l: "Игровые консоли",  t: "48%", left: "22%", w: "20%", h: "22%" },
  { l: "Бытовая техника",  t: "48%", left: "46%", w: "20%", h: "22%" },
  { l: "Антиквариат",      t: "48%", left: "70%", w: "22%", h: "22%" },
  { l: "Фарфор",           t: "76%", left: "0%", w: "16%", h: "20%" },
  { l: "Ювелирные изделия",t: "76%", left: "20%", w: "16%", h: "20%" },
  { l: "Высокая оценка",   t: "76%", left: "40%", w: "18%", h: "20%" },
  { l: "Покупаем дорого",  t: "76%", left: "60%", w: "18%", h: "20%" },
];

function useAppear() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.querySelectorAll('.appear,.appear-left,.appear-right,.appear-scale').forEach(c => c.classList.add('in')); obs.unobserve(el); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const step = to / 40;
        let cur = 0;
        const t = setInterval(() => { cur = Math.min(cur + step, to); setV(Math.floor(cur)); if (cur >= to) clearInterval(t); }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function FormModal({ category, onClose }: { category: string; onClose: () => void }) {
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

export default function Index() {
  const [modal, setModal] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = useCallback((l = "") => setModal(l), []);
  const refStats = useAppear();
  const refCats  = useAppear();
  const refWhy   = useAppear();
  const refSteps = useAppear();
  const refAddr  = useAppear();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const goWA = () => window.open(`https://wa.me/${WA}`, "_blank");
  const goTG = () => window.open(`https://t.me/${TG}`, "_blank");

  return (
    <div className="min-h-screen relative" style={{ background: "#0e0e0e" }}>

      {/* ── NAVBAR ── */}
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

      {/* ══════════════════════════════════════
          HERO — картинка + кликабельные зоны
      ══════════════════════════════════════ */}
      <section id="home" className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <img src={HERO} alt="Скупка24 — покупаем технику дороже всех в Калуге"
            className="w-full h-auto block" style={{ minHeight: "60vh", objectFit: "cover" }} />

          {/* Кликабельные зоны */}
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
            {/* Центральная кнопка */}
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

        {/* CTA под картинкой */}
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

      {/* ── БЕГУЩАЯ СТРОКА ── */}
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

      {/* ── СТАТИСТИКА ── */}
      <section ref={refStats} className="py-16 px-4 relative noise" style={{ background: "#0e0e0e" }}>
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { val: 90, suf: "%", pre: "до ", label: "от рыночной стоимости", ic: "TrendingUp" },
            { val: 15, suf: " мин", pre: "", label: "оценка и выдача денег", ic: "Clock" },
            { val: 2, suf: "", pre: "", label: "филиала в центре Калуги", ic: "MapPin" },
            { val: 10, suf: " лет", pre: "", label: "работаем в городе", ic: "Shield" },
          ].map((s, i) => (
            <div key={i} className={`appear stagger-${i + 1} card-premium rounded-2xl p-7 text-center`}>
              <div className="w-12 h-12 rounded-xl btn-gold flex items-center justify-center mx-auto mb-4">
                <Icon name={s.ic} size={20} />
              </div>
              <div className="text-3xl font-black mb-1" style={{ color: "#FFD700", fontFamily: "'Montserrat',sans-serif" }}>
                {s.pre}<Counter to={s.val} suffix={s.suf} />
              </div>
              <div className="text-white/40 text-xs font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ЧТО ПОКУПАЕМ ── */}
      <section id="categories" ref={refCats} className="py-20 px-4 relative noise" style={{ background: "#090909" }}>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12 appear">
            <div className="gold-line w-16 mx-auto mb-5" />
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-3" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Что мы <span className="gold-shimmer">покупаем</span>
            </h2>
            <p className="text-white/35 font-medium">Нажмите на категорию — мгновенно оставите заявку</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cats.map((c, i) => (
              <button key={i} onClick={() => open(c.l)}
                className={`appear-scale stagger-${i + 1} card-premium rounded-2xl p-6 text-left group`}>
                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.15)" }}>
                  <Icon name={c.ic} size={22} className="text-yellow-500 group-hover:text-yellow-300 transition-colors" />
                </div>
                <div className="relative z-10 text-white font-bold text-sm group-hover:text-yellow-400 transition-colors">{c.l}</div>
                <div className="relative z-10 text-white/20 text-xs mt-1 font-medium group-hover:text-white/40 transition-colors">Оставить заявку →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ МЫ ── */}
      <section ref={refWhy} className="py-20 px-4 relative noise" style={{ background: "#0e0e0e" }}>
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="appear-left">
            <div className="gold-line w-16 mb-5" />
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-tight" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Почему именно<br /><span className="gold-shimmer">Скупка24?</span>
            </h2>
            <div className="space-y-4">
              {[
                { ic: "Trophy",   t: "Платим больше всех в Калуге", d: "Мониторим рынок ежедневно. Перебьём любое предложение конкурентов." },
                { ic: "Clock",    t: "Деньги за 15 минут",          d: "Быстрая диагностика без очередей. Приехали — уехали с деньгами." },
                { ic: "FileText", t: "Официальный договор",         d: "Выдаём договор купли-продажи. Всё законно и прозрачно." },
                { ic: "Repeat",   t: "Любое состояние",             d: "Принимаем со сломанным экраном и нерабочие устройства." },
              ].map((item, i) => (
                <div key={i} className={`appear stagger-${i + 1} card-premium rounded-2xl p-5 flex gap-4`}>
                  <div className="w-11 h-11 min-w-11 rounded-xl btn-gold flex items-center justify-center relative z-10">
                    <Icon name={item.ic} size={18} />
                  </div>
                  <div className="relative z-10">
                    <div className="text-white font-bold mb-1">{item.t}</div>
                    <div className="text-white/40 text-sm">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="appear-right relative">
            <div className="absolute -inset-6 rounded-[32px] opacity-40" style={{ background: "radial-gradient(circle at center, rgba(255,215,0,0.15), transparent 70%)", filter: "blur(30px)" }} />
            <div className="rounded-3xl overflow-hidden relative" style={{ border: "2px solid rgba(255,215,0,0.2)", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
              <img src={PHOTO} alt="Скупка24 Apple техника" className="w-full object-cover" style={{ maxHeight: "420px" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl p-5 text-center animate-glow"
              style={{ background: "linear-gradient(145deg, #FFE033, #DAA520)", border: "3px solid #0e0e0e" }}>
              <div className="text-4xl font-black" style={{ color: "#0e0e0e", fontFamily: "'Montserrat',sans-serif" }}>90%</div>
              <div className="text-xs font-bold" style={{ color: "rgba(0,0,0,0.5)" }}>от рыночной<br />цены</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── КАК РАБОТАЕТ ── */}
      <section ref={refSteps} className="py-20 px-4 relative noise" style={{ background: "#090909" }}>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12 appear">
            <div className="gold-line w-16 mx-auto mb-5" />
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Montserrat',sans-serif" }}>
              Как это <span className="gold-shimmer">работает</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[31px] top-0 bottom-0 w-px hidden sm:block" style={{ background: "linear-gradient(to bottom, #FFD700, rgba(255,215,0,0.1))" }} />
            <div className="space-y-5">
              {[
                { n: "01", t: "Напишите нам",    d: "Фото в WhatsApp или Telegram — оценка за 5 минут" },
                { n: "02", t: "Приезжайте",       d: "В любой филиал в удобное время. Диагностика на месте" },
                { n: "03", t: "Получайте деньги", d: "Наличные или перевод на карту — сразу при визите" },
              ].map((s, i) => (
                <div key={i} className={`appear stagger-${i + 1} card-premium rounded-2xl p-6 flex gap-5 items-start`}>
                  <div className="w-16 h-16 min-w-16 rounded-2xl btn-gold flex items-center justify-center relative z-10">
                    <span className="font-black text-xl" style={{ fontFamily: "'Montserrat',sans-serif" }}>{s.n}</span>
                  </div>
                  <div className="relative z-10">
                    <div className="text-white font-bold text-lg mb-1">{s.t}</div>
                    <div className="text-white/40">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10 appear stagger-4">
            <button onClick={() => open()} className="btn-gold px-12 py-4 rounded-2xl text-lg animate-pulse-gold">
              Отправить заявку сейчас
            </button>
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
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

      {/* ── CTA ── */}
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

      {/* ── FOOTER ── */}
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

      {/* ── FLOATING ── */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        <button onClick={goTG} className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all" style={{ background: "linear-gradient(135deg,#0088cc,#005fa3)", boxShadow: "0 4px 20px rgba(0,136,204,0.4)" }}>✈️</button>
        <button onClick={goWA} className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all" style={{ background: "linear-gradient(135deg,#25D366,#128C7E)", boxShadow: "0 4px 20px rgba(37,211,102,0.4)" }}>💬</button>
      </div>

      {modal !== null && <FormModal category={modal} onClose={() => setModal(null)} />}
    </div>
  );
}

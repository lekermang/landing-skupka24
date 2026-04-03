import Icon from "@/components/ui/icon";
import { useAppear, Counter, cats, PHOTO } from "./constants";

interface ContentSectionsProps {
  open: (label?: string) => void;
}

export default function ContentSections({ open }: ContentSectionsProps) {
  const refStats = useAppear();
  const refCats  = useAppear();
  const refWhy   = useAppear();
  const refSteps = useAppear();

  return (
    <>
      {/* СТАТИСТИКА */}
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

      {/* ЧТО ПОКУПАЕМ */}
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

      {/* ПОЧЕМУ МЫ */}
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

      {/* КАК РАБОТАЕТ */}
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
    </>
  );
}

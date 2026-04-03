import { useState, useEffect, useRef } from "react";

export const WA = "79929990333";
export const TG = "skypka24";
export const TEL = "89929990333";
export const HOT = "88006006833";
export const HERO = "https://cdn.poehali.dev/projects/8c10b732-2c19-482b-8e87-8dddcca34bde/bucket/c2eb5ee2-5948-4946-9e40-88d7c70b7960.jpg";
export const PHOTO = "https://cdn.poehali.dev/projects/8c10b732-2c19-482b-8e87-8dddcca34bde/files/e785236f-12df-4407-8fa6-1bed345cf091.jpg";

export const cats = [
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

export const heroZones = [
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

export function useAppear() {
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

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
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

export const goWA = () => window.open(`https://wa.me/${WA}`, "_blank");
export const goTG = () => window.open(`https://t.me/${TG}`, "_blank");

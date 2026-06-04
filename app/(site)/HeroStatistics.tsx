"use client";

import CountUp from "react-countup";
import { Building2, Star, Clock } from "lucide-react";

const stats = [
  {
    icon: Building2,
    end: 1000,
    suffix: "+",
    label: "בתי עסק מרוצים",
  },
  {
    icon: Star,
    end: 4000,
    suffix: "+",
    label: "דירוגי 5 כוכבים בגוגל",
  },
  {
    icon: Clock,
    value: "24/6",
    label: "שירות זמין",
  },
];

export default function HeroStatistics() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-800 via-brand-blue-700 to-brand-blue-900 py-20">
      <div className="absolute inset-0 bg-grid-white/[0.04]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <h2 className="mb-14 text-center text-4xl font-bold tracking-tight text-white">
          שיפינג במספרים
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand-orange/40 hover:bg-white/10"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange transition-transform group-hover:scale-110">
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-5xl font-extrabold text-brand-orange-400">
                {stat.value ? (
                  stat.value
                ) : (
                  <CountUp
                    end={stat.end!}
                    start={0}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="mt-3 text-lg text-brand-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Star, Target, Zap, Award } from "lucide-react";

const items = [
  {
    icon: <Star className="w-8 h-8" />,
    title: "Kvalita",
    desc: "Overené produkty a služby na vysokej úrovni",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Presnosť",
    desc: "Dodržiavanie ISO štandardov a presné merania",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rýchlosť",
    desc: "Efektívne spracovanie a rýchle dodanie",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Skúsenosti",
    desc: "Viac ako 30 rokov praxe v odbore",
  },
];

const WhyUs = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-30">
      <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-4">
        Prečo Si Vybrať Nás
      </h2>

      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Spoľahlivosť, presnosť a dlhoročné skúsenosti sú základom našej práce.
      </p>

      <div className="grid md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="group p-8 rounded-2xl border bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-5 group-hover:bg-sky-500 group-hover:text-white transition">
              {item.icon}
            </div>

            <h3 className="text-lg font-bold text-sky-900 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
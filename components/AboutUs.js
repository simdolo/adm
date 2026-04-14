"use client";

import React, { useState, useEffect } from "react";
import { Award } from "lucide-react";

const AboutUs = () => {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        years: prev.years < 30 ? prev.years + 1 : 30,
        clients: prev.clients < 150 ? prev.clients + 3 : 150,
        projects: prev.projects < 500 ? prev.projects + 5 : 500,
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const clients = [
    { name: "Karl KOCH", category: "Nemecký výrobca", logo: "🔬" },
    { name: "TFA Dostmann", category: "Kvalitné prístroje", logo: "📏" },
    { name: "Greisinger", category: "Meracia technika", logo: "⚙️" },
    { name: "HACCP", category: "Certifikované", logo: "✓" },
  ];

  const milestones = [
    {
      year: "1995",
      title: "Založenie ADM",
      desc: "Začiatok predaja elektronických súčiastok",
    },
    {
      year: "2000",
      title: "Rozšírenie portfólia",
      desc: "Partnerstvo s nemeckými výrobcami",
    },
    {
      year: "2008",
      title: "Kalibračné laboratórium",
      desc: "Vybudovanie laboratória pre teplotu a vlhkosť",
    },
    {
      year: "2020",
      title: "ISO/IEC Akreditácia",
      desc: "Osvedčenie č. K-138 podľa normy ISO/IEC 17025:2017",
    },
  ];

  return (
    <div className="font-sans bg-white">
      {/* HERO */}
      <section className="bg-linear-to-br from-white to-sky-50 py-40 text-center relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-100 h-100 bg-sky-200/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-sky-900 mb-4">
            Metrológia a Kalibrácia s Tradíciou
          </h1>
          {/* <h2 className="text-xl text-sky-500 font-semibold mb-3">
            Viac ako 30 rokov skúseností na slovenskom trhu v oblasti meracích prístrojov a kalibrácií
          </h2> */}
          <p className="text-gray-600 leading-relaxed">
            Viac ako 30 rokov skúseností na slovenskom trhu v oblasti meracích
            prístrojov a kalibrácií
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 py-16">
        {[
          { value: counters.years, label: "Rokov Skúsenosti" },
          { value: counters.clients, label: "Klientov" },
          { value: counters.projects, label: "Projektov" },
        ].map((item, i) => (
          <div
            key={i}
            className="text-center p-8 rounded-xl border bg-linear-to-br from-sky-50 to-white hover:shadow-xl transition"
          >
            <div className="text-5xl font-extrabold text-sky-500 mb-2">
              {item.value}+
            </div>
            <p className="text-gray-600 font-semibold">{item.label}</p>
          </div>
        ))}
      </section>

      {/* ABOUT TEXT */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-sky-900 mb-6">
          O Spoločnosti
        </h2>

        <div className="space-y-5 text-gray-600 leading-relaxed">
          <p>
            <strong className="text-sky-900">ADM s.r.o.</strong> pôsobí na trhu
            už viac ako <strong>30 rokov</strong>.
          </p>
          <p>
            Začínali sme predajom elektronických súčiastok a postupne sme sa
            špecializovali na meraciu techniku.
          </p>
          <p>Ponúkame kvalitné značky, poradenstvo aj servis.</p>
          <p>
            V roku 2008 sme vybudovali kalibračné laboratórium a v roku 2020
            získali ISO/IEC 17025.
          </p>
        </div>

        {/* BADGE */}
        <div className="mt-10 p-6 bg-sky-50 border-2 border-sky-400 rounded-xl text-center">
          <Award className="mx-auto text-sky-500 mb-3" size={40} />
          <h3 className="font-bold text-sky-700 text-lg">ISO/IEC 17025:2017</h3>
          <p className="text-gray-600">Osvedčenie č. K-138</p>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-sky-900 text-center mb-12">
          Partneri
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {clients.map((c, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl text-center hover:shadow-xl hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-3">{c.logo}</div>
              <h3 className="font-bold text-sky-900">{c.name}</h3>
              <p className="text-sky-500 text-sm">{c.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-sky-900 text-center mb-16">
          Naša História
        </h2>

        <div className="relative border-l-2 border-sky-300 pl-8 space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-4.25 top-1 w-8 h-8 bg-sky-500 rounded-full border-4 border-white shadow"></div>

              <div className="bg-white p-6 rounded-lg border hover:shadow-xl hover:translate-x-2 transition">
                <div className="text-sky-500 font-bold text-lg">{m.year}</div>
                <h3 className="font-bold text-sky-900">{m.title}</h3>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

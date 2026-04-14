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
      {/* ABOUT SECTION */}
      <section className="max-w-5xl mx-auto px-4 pt-20 scroll-mt-24" id="about">
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-sky-900">
            O spoločnosti
          </h2>
        </div>

        {/* content card - FULL WIDTH */}
        <div className="bg-white border border-sky-100 shadow-sm rounded-2xl md:p-14 w-full">
          <div className="space-y-6 text-gray-600 leading-relaxed text-center">
            <p className="text-lg">
              <span className="font-bold text-sky-900">ADM s.r.o.</span> pôsobí
              na trhu viac ako{" "}
              <span className="font-semibold text-sky-900">30 rokov</span>.
            </p>

            <p>
              Začínali sme ako distribútor elektronických súčiastok a postupne
              sme sa špecializovali na presnú meraciu techniku a kalibrácie.
            </p>

            <p>
              Dnes ponúkame komplexné riešenia – od predaja zariadení, cez
              odborné poradenstvo až po servis a kalibrácie.
            </p>

            <p>
              V roku 2008 sme vybudovali vlastné kalibračné laboratórium a v
              roku 2020 sme získali certifikáciu{" "}
              <span className="font-semibold text-sky-900">ISO/IEC 17025</span>.
            </p>
          </div>

          {/* badge */}
          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-2 bg-sky-50 border border-sky-200 rounded-xl px-8 py-6">
              <Award className="text-sky-500" size={40} />
              <h3 className="font-bold text-sky-800">ISO/IEC 17025:2017</h3>
              <p className="text-gray-500 text-sm">Osvedčenie č. K-138</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 pt-30">
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

      {/* CLIENTS */}
      <section className="max-w-5xl mx-auto px-4 pt-30">
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

      {/* STATS */}
      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 pt-5">
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
    </div>
  );
};

export default AboutUs;

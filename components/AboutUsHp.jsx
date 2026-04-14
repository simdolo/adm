"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
      <section id="about" className="max-w-5xl mx-auto px-4 pt-24 scroll-mt-24">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-sky-900">
            O spoločnosti
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Tradícia, presnosť a moderné technológie v jednom mieste
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT - TEXT */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">
              <span className="font-bold text-sky-900">ADM s.r.o.</span> pôsobí
              na trhu viac ako{" "}
              <span className="font-semibold text-sky-900">30 rokov</span>.
            </p>

            <p>
              Začínali sme ako distribútor elektroniky a postupne sme sa
              prepracovali k presnej meracej technike a kalibráciám.
            </p>

            <p>
              Dnes zabezpečujeme kompletné riešenia – predaj, servis aj odborné
              poradenstvo.
            </p>

            <p>
              Vlastné kalibračné laboratórium máme od roku 2008 a od roku 2020
              fungujeme podľa normy{" "}
              <span className="font-semibold text-sky-900">ISO/IEC 17025</span>.
            </p>

            {/* BADGE */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-3 bg-sky-50 border border-sky-200 rounded-xl px-5 py-4">
                <Award className="text-sky-600" size={26} />

                <div>
                  <p className="font-bold text-sky-800">ISO/IEC 17025:2017</p>
                  <p className="text-sm text-gray-500">
                    Certifikované laboratórium
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - VISUAL STACK */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/lab.png"
                alt="laboratory"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* FLOATING IMAGE */}
            <div className="hidden md:block absolute -bottom-10 -left-10 w-48 rounded-xl overflow-hidden shadow-xl border">
              <Image
                src="/celzius.png"
                alt="measurement"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-3xl mx-auto px-4 pt-30">
        <h2 className="text-4xl font-extrabold text-sky-900 text-center mb-16">
          Naša História
        </h2>

        <div className="relative border-l-2 border-sky-300 pl-8 space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-12.25 top-1 w-8 h-8 bg-sky-500 rounded-full border-4 border-white shadow"></div>

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
    </div>
  );
};

export default AboutUs;

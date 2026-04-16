"use client";

import { AlertCircle, Users, CheckCircle, Wrench } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Kontrola Prístrojov",
    icon: <AlertCircle size={40} />,
    description:
      "Pri podozrení na nesprávne výsledky prístroj premeriame a porovnáme s etalónmi.",
    features: ["Presná analýza", "Porovnanie s etalónmi", "Detailný report"],
  },
  {
    id: 2,
    title: "Konzultácie",
    icon: <Users size={40} />,
    description: "Pomôžeme pri otázkach v oblasti merania teploty a vlhkosti.",
    features: [
      "Odborné rady",
      "Dlhoročné skúsenosti",
      "Personalizované riešenia",
    ],
  },
  {
    id: 3,
    title: "Odborný Názor",
    icon: <CheckCircle size={40} />,
    description:
      "Možnosť vystavenia odborného názoru alebo interpretácie výsledkov.",
    features: ["Certifikované názory", "Interpretácia dát", "Dokument"],
  },
  {
    id: 4,
    title: "Opravy a Servis",
    icon: <Wrench size={40} />,
    description:
      "Kontrola, oprava a servis meracích prístrojov vrátane záruky.",
    features: ["Servis", "Záruka", "Výmena zariadení"],
  },
];

const ServicesList = () => {
  return (
    <section className="pt-30" id="services">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-12">
          Profesionálne Služby
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-sm sm:max-w-none mx-auto">
          {services.map((s) => (
            <div
              key={s.id}
              className="p-6 rounded-xl border bg-linear-to-br from-sky-50 to-white hover:shadow-xl hover:-translate-y-2 transition group text-center sm:text-left"
            >
              {/* ICON */}
              <div className="flex justify-center sm:justify-start text-sky-300 group-hover:text-sky-500 mb-4 transition">
                {s.icon}
              </div>

              <h3 className="font-bold text-sky-900 mb-2">{s.title}</h3>

              <p className="text-gray-600 text-sm mb-4">{s.description}</p>

              {/* FEATURES */}
              <ul className="space-y-2">
                {s.features.map((f, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
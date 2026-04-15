"use client";

import React from "react";
import Image from "next/image";
import { Star, Target, Zap, Award } from "lucide-react";
import {
  ShoppingCart,
  AlertCircle,
  Users,
  Wrench,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const Services = () => {
  const router = useRouter();
  const pathname = usePathname();

  // 🔥 rovnaká logika ako navbar
  const scrollToSection = (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const shops = [
    {
      id: 1,
      name: "Celzius.sk",
      category: "E-predajňa spotrebných prístrojov",
      description:
        "Špecializovaný e-shop pre meraciu techniku v rámci spotrebných prístrojov",
      items: ["Teplomery", "Vlhkomery", "Meteo stanice", "Hodiny", "Minútky"],
      img: "/celziusEshop.png",
      url: "https://celzius.sk",
    },
    {
      id: 2,
      name: "ADMshop.sk",
      category: "E-predajňa meracích prístrojov",
      description:
        "Špecializovaný e-shop pre meraciu techniku a kalibračných služieb",
      items: [
        "Teplomery",
        "Vlhkomery",
        "Barometre",
        "Kalibrované prístroje",
        "HACCP prístroje",
      ],
      img: "/admEshop.png",
      url: "https://admshop.sk",
    },
  ];

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
      description:
        "Pomôžeme pri otázkach v oblasti merania teploty a vlhkosti.",
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

  return (
    <div className="font-sans bg-white">
      {/* HERO */}
      <section className="bg-linear-to-br from-white to-sky-50 py-40 text-center relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-100 h-100 bg-sky-200/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-sky-900 mb-4">
            Naše Služby a Obchody
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Komplexný sortiment meracej techniky a profesionálnych služieb
          </p>
        </div>
      </section>

      {/* SHOPS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-4">
          Online Obchody
        </h2>
        <p className="text-center text-gray-600 mb-12">
          E-shopy s meracími prístrojmi
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="p-6 rounded-xl border bg-linear-to-br from-sky-50 to-white hover:shadow-xl hover:-translate-y-2 transition"
            >
              {/* IMAGE */}
              <div className="w-full h-48 relative mb-5 rounded-lg overflow-hidden border bg-white">
                <Image
                  src={shop.img}
                  alt={shop.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-2xl font-bold text-sky-900">{shop.name}</h3>

              <p className="text-sky-500 font-semibold mb-3">{shop.category}</p>

              <p className="text-gray-600 mb-5">{shop.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {shop.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-sky-100 text-sky-600 rounded-md border"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-600 transition"
              >
                <ShoppingCart size={18} />
                Navštíviť
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-12">
            Profesionálne Služby
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.id}
                className="p-6 rounded-xl border bg-linear-to-br from-sky-50 to-white hover:shadow-xl hover:-translate-y-2 transition group"
              >
                <div className="text-sky-300 group-hover:text-sky-500 mb-4 transition">
                  {s.icon}
                </div>

                <h3 className="font-bold text-sky-900 mb-2">{s.title}</h3>

                <p className="text-gray-600 text-sm mb-4">{s.description}</p>

                <ul className="space-y-1">
                  {s.features.map((f, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-extrabold text-center text-sky-900 mb-4">
          Prečo Si Vybrať Nás
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Spoľahlivosť, presnosť a dlhoročné skúsenosti sú základom našej práce.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {[
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
          ].map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-sky-100 text-sky-600 mb-5 group-hover:bg-sky-500 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* TEXT */}
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

      {/* CTA */}
      <section className="bg-sky-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4">
            Máte otázky ohľadom našich služieb?
          </h2>

          <p className="text-gray-600 mb-8">
            Neváhajte nás kontaktovať – radi vám poradíme.
          </p>

          <button
            onClick={() => scrollToSection("contact")}
            className="inline-block bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition"
          >
            Kontaktovať nás
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;

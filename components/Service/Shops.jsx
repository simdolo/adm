"use client";

import Image from "next/image";
import { ShoppingCart, ExternalLink } from "lucide-react";

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

const Shops = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-30">
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
            <div className="w-full h-48 relative mb-5 rounded-lg overflow-hidden border bg-white">
              <Image
                src={shop.img}
                alt={shop.name}
                fill
                className="object-cover object-top"
              />
            </div>

            <h3 className="text-2xl font-bold text-sky-900">
              {shop.name}
            </h3>

            <p className="text-sky-500 font-semibold mb-3">
              {shop.category}
            </p>

            <p className="text-gray-600 mb-5">
              {shop.description}
            </p>

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
  );
};

export default Shops;
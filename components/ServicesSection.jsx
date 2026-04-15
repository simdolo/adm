"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Metrologické laboratórium",
    description:
      "Služby akreditovaného laboratória pre oblasť teploty a vlhkosti. Kalibrácie a merania na vysokej úrovni.",
    image: "/lab1.png",
    href: "",
    external: false,
  },
  {
    title: "e-shop – CELZIUS.sk",
    description:
      "Špecializovaný internetový obchod pre meracie prístroje. Vlhkomery, teplomery, barometre a meteostanice.",
    image: "/celzius1.png",
    href: "https://www.celzius.sk",
    external: true,
  },
  {
    title: "e-shop – ADMshop.sk",
    description:
      "Široký sortiment meracej techniky pre interiér aj exteriér – chladničky, bazény, sklady a viac.",
    image: "/admshop1.png",
    href: "https://www.admshop.sk",
    external: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="pt-30 pb-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* NADPIS */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-sky-900">
            Naše služby nájdete v
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Profesionálne merania aj kvalitné produkty – všetko na jednom
            mieste.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const CardContent = (
              <div className="group rounded-xl border bg-linear-to-br from-sky-50 to-white hover:shadow-xl hover:-translate-y-2 transition duration-300 overflow-hidden cursor-pointer">
                {/* IMAGE */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center bottom" }}
                  />

                  {/* overlay jemný efekt */}
                  <div className="absolute inset-0 bg-sky-900/0 group-hover:bg-sky-900/10 transition"></div>
                </div>

                {/* TEXT */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-sky-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );

            return item.external ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardContent}
              </a>
            ) : (
              <Link key={i} href={item.href}>
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

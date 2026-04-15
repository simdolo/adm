"use client";

import Image from "next/image";

const clients = [
  { name: "Karl KOCH", category: "Nemecký výrobca", logo: "/partners/Koch.png" },
  { name: "TFA Dostmann", category: "Kvalitné prístroje", logo: "/partners/Tfa.png" },
  { name: "Greisinger", category: "Meracia technika", logo: "/partners/Greisinger.png" },
  { name: "HACCP", category: "Certifikované", logo: "/partners/Haccp.png" },
];

const Partners = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pt-30">
      <h2 className="text-4xl font-extrabold text-sky-900 text-center mb-12">
        Partneri
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {clients.map((c, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl text-center hover:shadow-xl hover:-translate-y-2 transition flex flex-col items-center"
          >
            {/* LOGO BOX */}
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={80}
                className="object-contain max-h-20 w-auto"
              />
            </div>

            <h3 className="font-bold text-sky-900">{c.name}</h3>
            <p className="text-sky-500 text-sm">{c.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
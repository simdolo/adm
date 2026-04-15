"use client";

const milestones = [
  { year: "1995", title: "Založenie ADM", desc: "Začiatok predaja elektronických súčiastok" },
  { year: "2000", title: "Rozšírenie portfólia", desc: "Partnerstvo s nemeckými výrobcami" },
  { year: "2008", title: "Kalibračné laboratórium", desc: "Vybudovanie laboratória pre teplotu a vlhkosť" },
  { year: "2020", title: "ISO/IEC Akreditácia", desc: "Osvedčenie č. K-138 podľa normy ISO/IEC 17025:2017" },
];

const History = () => {
  return (
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
  );
};

export default History;
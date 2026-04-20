"use client";

import { useState, useEffect } from "react";
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

  return (
    <section id="about" className="max-w-5xl mx-auto px-4 pt-24 scroll-mt-6">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-sky-900">O spoločnosti</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Tradícia, presnosť a moderné technológie v jednom mieste
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg">
            <span className="font-bold text-sky-900">ADM s.r.o.</span> pôsobí na
            trhu viac ako{" "}
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

          <div className="pt-4">
            <div className="inline-flex items-center gap-4 bg-sky-50 border border-sky-200 rounded-xl px-5 py-4">
              {/* PNG BADGE */}
              <div className="w-24 h-24 relative">
                <Image
                  src="/iso.png"
                  alt="ISO certifikát"
                  fill
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <p className="font-bold text-sky-800">ISO/IEC 17025:2017</p>
                <p className="text-sm text-gray-500">
                  Certifikované laboratórium
                </p>
              </div>
            </div>
          </div>
          <div >
            <div className="inline-flex items-center gap-4 bg-sky-50 border border-sky-200 rounded-xl px-5 py-3">
              {/* PNG BADGE */}
              <div className="w-24 h-24 relative">
                <Image
                  src="/partners/Haccp.png"
                  alt="HACCP certifikát"
                  fill
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <p className="font-bold text-sky-800">HACCP</p>
                <p className="text-sm text-gray-500">
                  Certifikované laboratórium
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGES */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/pic1.webp"
              alt="laboratory"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="hidden md:block absolute -bottom-10 -left-10 w-48 rounded-xl overflow-hidden shadow-xl border">
            <Image
              src="/pic2.jpg"
              alt="measurement"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

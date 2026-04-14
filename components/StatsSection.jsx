"use client";

import { useEffect, useState, useRef } from "react";

export default function StatsSection() {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0,
  });

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const targetValues = {
    years: 30,
    clients: 1200,
    projects: 500,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 1500;
    const steps = 60;

    let frame = 0;

    const interval = setInterval(() => {
      frame++;

      const progress = frame / steps;

      setCounters({
        years: Math.floor(targetValues.years * progress),
        clients: Math.floor(targetValues.clients * progress),
        projects: Math.floor(targetValues.projects * progress),
      });

      if (frame === steps) clearInterval(interval);
    }, duration / steps);
  };

  const items = [
    { value: counters.years, label: "Rokov skúseností" },
    { value: counters.clients, label: "Klientov" },
    { value: counters.projects, label: "Projektov" },
  ];

  return (
    <div className="w-full bg-white">
      <section
        ref={sectionRef}
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 pt-10"
      >
        {items.map((item, i) => (
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
}

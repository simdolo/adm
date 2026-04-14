"use client";
import React from "react";

const Hero = () => {
  return (
    <div>
      <hero className="h-screen flex items-center justify-center relative overflow-hidden" id="home">
        {/* BG IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: "url('/Hero.webp')" }}
        />

        {/* Overlay pre lepšiu čitateľnosť */}
        <div className="absolute inset-0 backdrop-blur-xs"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Kalibrácie a metrológia
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8">
            ... s láskou k meracím prístrojom.
          </p>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 font-semibold">
            Kontakt
          </button>
        </div>
      </hero>
    </div>
  );
};

export default Hero;

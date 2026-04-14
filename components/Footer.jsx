"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-300">
          © {new Date().getFullYear()} ADM s.r.o. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
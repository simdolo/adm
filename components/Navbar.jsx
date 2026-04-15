"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll helper
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

  const navLinks = [
    { label: "Domov", type: "scroll", target: "home" },
    { label: "Služby", type: "scroll", target: "services" },
    { label: "O nás", type: "scroll", target: "about" },
    { label: "Kontakt", type: "scroll", target: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    > {/*max-w-8xl pl-30 pr-20 mx-auto md:max-w-5xl md:px-4 sm:max-w-7xl sm:px-4*/}
      <div className=" max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* LOGO LEFT */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Logo.webp"
                alt="admLogo"
                width={200}
                height={70}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* DESKTOP NAV RIGHT */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) =>
              link.type === "page" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 text-xl hover:text-slate-900"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-slate-700 text-xl hover:text-slate-900"
                >
                  {link.label}
                </button>
              ),
            )}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden text-gray-700">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-white border-t text-gray-700">
            {navLinks.map((link) =>
              link.type === "page" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.target}
                  onClick={() => {
                    scrollToSection(link.target);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left p-4"
                >
                  {link.label}
                </button>
              ),
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

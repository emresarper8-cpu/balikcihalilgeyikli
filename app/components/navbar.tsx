"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Balıkçı <span className="text-cyan-400">Halil</span>
          </h1>

          <p className="text-yellow-300 text-[10px] md:text-xs tracking-[3px]">
            SINCE 1999
          </p>
        </div>

        {/* MASAÜSTÜ MENÜ */}
        <div className="hidden md:flex gap-10 text-white font-medium">
          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            Anasayfa
          </a>

          <a
            href="#menu"
            className="hover:text-cyan-400 transition"
          >
            Menü
          </a>

          <a
            href="#galeri"
            className="hover:text-cyan-400 transition"
          >
            Galeri
          </a>

          <a
            href="#iletisim"
            className="hover:text-cyan-400 transition"
          >
            İletişim
          </a>
        </div>

        {/* MASAÜSTÜ ARA */}
        <a
          href="tel:+905551112233"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-full font-semibold text-white shadow-lg"
        >
          📞 Ara
        </a>

        {/* MOBİL BUTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Menüyü aç"
        >
          ☰
        </button>

      </div>

      {/* MOBİL MENÜ */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 py-5">
          <div className="flex flex-col gap-5 text-white font-medium">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Anasayfa
            </a>

            <a
              href="#menu"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Menü
            </a>

            <a
              href="#galeri"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Galeri
            </a>

            <a
              href="#iletisim"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              İletişim
            </a>

            <a
              href="tel:+905551112233"
              className="bg-cyan-500 text-center py-3 rounded-full font-semibold"
            >
              📞 Ara
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
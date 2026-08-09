"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#061a2e]/95 via-[#0b3552]/95 to-[#061a2e]/95 backdrop-blur-md border-b border-cyan-400/30 z-50 shadow-xl">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="shrink-0">
          <div className="bg-white/95 rounded-xl px-2 py-1 shadow-lg shadow-cyan-500/10">
            <img
              src="/logo.jpg"
              alt="Balıkçı Halil Geyikli"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
        </a>


        {/* MASAÜSTÜ MENÜ */}
        <div className="hidden md:flex items-center gap-10 text-white font-semibold">

          <a
            href="/"
            className="text-cyan-300 hover:text-cyan-200 transition"
          >
            Anasayfa
          </a>

          <a
            href="/menu"
            className="hover:text-cyan-300 transition"
          >
            Menü
          </a>

          <a
            href="/#galeri"
            className="hover:text-cyan-300 transition"
          >
            Galeri
          </a>

          <a
            href="/#iletisim"
            className="hover:text-cyan-300 transition"
          >
            İletişim
          </a>

        </div>


        {/* MASAÜSTÜ ARA */}
        <a
          href="tel:+905433450017"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-400 transition px-7 py-3 rounded-full font-bold text-white shadow-lg shadow-cyan-500/20"
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
        <div className="md:hidden bg-[#061a2e] border-t border-cyan-400/20 px-6 py-5">

          <div className="flex flex-col gap-5 text-white font-semibold">

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-cyan-300 hover:text-cyan-200 transition"
            >
              Anasayfa
            </a>

            <a
              href="/menu"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-300 transition"
            >
              Menü
            </a>

            <a
              href="/#galeri"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-300 transition"
            >
              Galeri
            </a>

            <a
              href="/#iletisim"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-300 transition"
            >
              İletişim
            </a>

            <a
              href="tel:+905433450017"
              className="bg-cyan-500 hover:bg-cyan-400 text-center py-3 rounded-full font-bold transition"
            >
              📞 Ara
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}
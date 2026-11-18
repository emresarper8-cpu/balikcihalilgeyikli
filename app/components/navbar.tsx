
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#061a2e]/95 via-[#0b3552]/95 to-[#061a2e]/95 backdrop-blur-md border-b border-cyan-400/30 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="shrink-0">
          <div className="bg-white/95 rounded-xl px-2 py-1 shadow-lg">
            <img
              src="/logo.jpg"
              alt="Balıkçı Halil Geyikli"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>
        </a>

        {/* MASAÜSTÜ MENÜ */}
        <div className="hidden md:flex items-center gap-3 text-white font-semibold">
          <a
            href="/"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500 transition"
          >
            Anasayfa
          </a>

          <a
            href="/menu"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500 transition"
          >
            Menü
          </a>

          <a
            href="/#galeri"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500 transition"
          >
            Galeri
          </a>

          <a
            href="/#iletisim"
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-cyan-500 transition"
          >
            İletişim
          </a>
        </div>

        {/* SAĞ TARAF */}
        <div className="hidden md:flex items-center gap-3">

          {/* DİL SEÇİMİ */}
          <div className="flex items-center bg-white/10 rounded-full border border-white/20 p-1">
            <a
              href="/"
              className="px-3 py-2 rounded-full bg-cyan-500 text-white text-sm font-bold"
              aria-label="Türkçe"
            >
              TR
            </a>

            <a
              href="/en"
              className="px-3 py-2 rounded-full text-white text-sm font-bold hover:bg-white/10 transition"
              aria-label="English"
            >
              EN
            </a>
          </div>

          {/* ARA */}
          <a
            href="tel:+905433450017"
            className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-full font-bold text-white shadow-lg"
          >
            Ara
          </a>
        </div>

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
          <div className="flex flex-col gap-4 text-white font-semibold">

            <a href="/" onClick={() => setMenuOpen(false)}>
              Anasayfa
            </a>

            <a href="/menu" onClick={() => setMenuOpen(false)}>
              Menü
            </a>

            <a href="/#galeri" onClick={() => setMenuOpen(false)}>
              Galeri
            </a>

            <a href="/#iletisim" onClick={() => setMenuOpen(false)}>
              İletişim
            </a>

            {/* DİL SEÇİMİ */}
            <div className="flex gap-2 pt-3 border-t border-white/10">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex-1 bg-cyan-500 text-center py-3 rounded-full font-bold"
              >
                Türkçe
              </a>

              <a
                href="/en"
                onClick={() => setMenuOpen(false)}
                className="flex-1 bg-white/10 text-center py-3 rounded-full font-bold"
              >
                English
              </a>
            </div>

            {/* ARA */}
            <a
              href="tel:+905433450017"
              className="bg-cyan-500 hover:bg-cyan-400 text-center py-3 rounded-full font-bold transition"
            >
              Ara
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

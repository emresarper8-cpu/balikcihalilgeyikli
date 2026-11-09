
"use client";

import { useState } from "react";

export default function EnglishNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#061a2e]/95 via-[#0b3552]/95 to-[#061a2e]/95 backdrop-blur-md border-b border-cyan-400/30 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">

        {/* LOGO */}
        <a href="/en" className="shrink-0">
          <div className="bg-white/95 rounded-xl px-2 py-1 shadow-lg shadow-cyan-500/10">
            <img
              src="/logo.jpg"
              alt="Balıkçı Halil Geyikli"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-white font-semibold">

          <a
            href="/en"
            className="group flex flex-col items-center gap-1 text-cyan-300 hover:text-cyan-200 transition"
          >
            <span className="text-xl">⌂</span>
            <span>Home</span>
          </a>

          <a
            href="/en/menu"
            className="group flex flex-col items-center gap-1 hover:text-cyan-300 transition"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-cyan-400 transition shadow-md">
              <img
                src="/balık.jpg"
                alt="Fish menu"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <span>Menu</span>
          </a>

          <a
            href="/en#gallery"
            className="group flex flex-col items-center gap-1 hover:text-cyan-300 transition"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-cyan-400 transition shadow-md">
              <img
                src="/bahce.jpg"
                alt="Balıkçı Halil garden"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <span>Gallery</span>
          </a>

          <a
            href="/en/explore"
            className="group flex flex-col items-center gap-1 hover:text-cyan-300 transition"
          >
            <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/30 group-hover:border-cyan-400 transition shadow-md text-2xl">
              🌊
            </span>
            <span>Discover</span>
          </a>

          <a
            href="/en#contact"
            className="group flex flex-col items-center gap-1 hover:text-cyan-300 transition"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-cyan-400 transition shadow-md">
              <img
                src="/kapı.jpg"
                alt="Balıkçı Halil"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <span>Contact</span>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">

          {/* LANGUAGE */}
          <div className="flex items-center bg-white/10 rounded-full border border-white/20 p-1">
            <a
              href="/"
              className="px-3 py-2 rounded-full text-white text-sm font-bold hover:bg-white/10 transition"
              aria-label="Turkish"
            >
              🇹🇷 TR
            </a>

            <a
              href="/en"
              className="px-3 py-2 rounded-full bg-cyan-500 text-white text-sm font-bold"
              aria-label="English"
            >
              🇬🇧 EN
            </a>
          </div>

          <a
            href="tel:+905433450017"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-7 py-3 rounded-full font-bold text-white shadow-lg shadow-cyan-500/20"
          >
            📞 Call
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#061a2e] border-t border-cyan-400/20 px-6 py-5">
          <div className="flex flex-col gap-4 text-white font-semibold">

            <a
              href="/en"
              onClick={() => setMenuOpen(false)}
              className="text-cyan-300 hover:text-cyan-200 transition"
            >
              🏠 Home
            </a>

            <a
              href="/en/menu"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-cyan-300 transition"
            >
              <img
                src="/balık.jpg"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              Menu
            </a>

            <a
              href="/en#gallery"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-cyan-300 transition"
            >
              <img
                src="/bahce.jpg"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              Gallery
            </a>

            <a
              href="/en/explore"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-cyan-300 transition"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-xl">
                🌊
              </span>
              Discover Geyikli
            </a>

            <a
              href="/en#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-cyan-300 transition"
            >
              <img
                src="/kapı.jpg"
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              Contact
            </a>

            {/* LANGUAGE */}
            <div className="flex gap-2 pt-2 border-t border-white/10">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex-1 bg-white/10 text-center py-3 rounded-full font-bold"
              >
                🇹🇷 Türkçe
              </a>

              <a
                href="/en"
                onClick={() => setMenuOpen(false)}
                className="flex-1 bg-cyan-500 text-center py-3 rounded-full font-bold"
              >
                🇬🇧 English
              </a>
            </div>

            <a
              href="tel:+905433450017"
              className="bg-cyan-500 hover:bg-cyan-400 text-center py-3 rounded-full font-bold transition"
            >
              📞 Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

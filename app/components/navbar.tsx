export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-extrabold text-white">
            Balıkçı <span className="text-cyan-400">Halil</span>
          </h1>

          <p className="text-yellow-300 text-xs tracking-[4px]">
            SINCE 1999
          </p>
        </div>

        <div className="hidden md:flex gap-10 text-white font-medium">
          <a href="#" className="hover:text-cyan-400 transition">
            Anasayfa
          </a>

          <a href="#menu" className="hover:text-cyan-400 transition">
            Menü
          </a>

          <a href="#galeri" className="hover:text-cyan-400 transition">
            Galeri
          </a>

          <a href="#iletisim" className="hover:text-cyan-400 transition">
            İletişim
          </a>
        </div>

        <a
          href="tel:+905551112233"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-full font-semibold text-white shadow-lg"
        >
          📞 Ara
        </a>

      </div>
    </nav>
  );
}
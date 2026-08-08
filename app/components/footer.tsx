export default function Footer() {
  return (
    <footer className="bg-[#04192d] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* MARKA */}
          <div>
            <h2 className="text-3xl font-bold">
              Balıkçı <span className="text-cyan-400">Halil</span>
            </h2>

            <p className="text-yellow-300 text-xs tracking-[4px] mt-2">
              SINCE 1999
            </p>

            <p className="text-gray-400 mt-5 leading-7">
              Denizin Bereketi, Geyikli'nin Lezzeti.
            </p>

            <p className="text-gray-500 mt-3 leading-6">
              1999'dan beri Geyikli'de taze balıklar,
              Ege mezeleri ve samimi bir sofra.
            </p>
          </div>


          {/* HIZLI MENÜ */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Hızlı Menü
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="/"
                  className="hover:text-cyan-400 transition"
                >
                  Anasayfa
                </a>
              </li>

              <li>
                <a
                  href="/menu"
                  className="hover:text-cyan-400 transition"
                >
                  Dijital Menü
                </a>
              </li>

              <li>
                <a
                  href="/#galeri"
                  className="hover:text-cyan-400 transition"
                >
                  Galeri
                </a>
              </li>

              <li>
                <a
                  href="/#iletisim"
                  className="hover:text-cyan-400 transition"
                >
                  İletişim
                </a>
              </li>

            </ul>
          </div>


          {/* İLETİŞİM */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              İletişim
            </h3>

            <p className="text-gray-400">
              📍 Geyikli / Ezine / Çanakkale
            </p>

            <a
              href="tel:+905433450017"
              className="block text-gray-400 mt-3 hover:text-cyan-400 transition"
            >
              📞 +90 543 345 00 17
            </a>

            <a
              href="https://wa.me/905433450017"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 mt-3 hover:text-green-400 transition"
            >
              💬 WhatsApp'tan Yaz
            </a>

            <p className="text-gray-400 mt-3">
              🕒 Her Gün 11:00 - 23:00
            </p>
          </div>

        </div>


        {/* ALT */}
        <div className="text-center text-gray-500 mt-12 border-t border-cyan-900 pt-8">
          © 2026 Balıkçı Halil Geyikli • Tüm Hakları Saklıdır.
        </div>

      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#02111d] text-white py-16 border-t border-cyan-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold">
            Balıkçı <span className="text-cyan-400">Halil</span>
          </h2>

          <p className="text-gray-400 mt-4">
            1999'dan beri Geyikli'de taze balık ve Ege mezeleriyle
            misafirlerimizi ağırlıyoruz.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Hızlı Menü
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#">Anasayfa</a></li>
            <li><a href="#menu">Menü</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            İletişim
          </h3>

          <p className="text-gray-400">
            📍 Geyikli / Ezine / Çanakkale
          </p>

          <p className="text-gray-400 mt-2">
            📞 Telefon Numaran
          </p>

          <p className="text-gray-400 mt-2">
            ✉️ info@balikcihalil.com
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-12 border-t border-cyan-900 pt-8">
        © 2026 Balıkçı Halil Geyikli • Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}
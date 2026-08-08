export default function Contact() {
  return (
    <section className="bg-[#08253f] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-cyan-400 text-center font-semibold tracking-[4px] text-sm">
          BİZE ULAŞIN
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mt-4 mb-16">
          Balıkçı Halil Geyikli
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* İLETİŞİM KARTI */}
          <div className="bg-[#10304f] rounded-3xl p-8 md:p-10 shadow-xl">

            <h3 className="text-2xl font-bold text-white mb-8">
              Geyikli'de Bir Balık Sofrası
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4 items-start">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="text-gray-400 text-sm">Adres</p>
                  <p className="text-white mt-1">
                    Geyikli / Ezine / Çanakkale
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="text-gray-400 text-sm">Telefon</p>
                  <a
                    href="tel:+905433450017"
                    className="text-white mt-1 block hover:text-cyan-400 transition"
                  >
                    +90 543 345 00 17
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-2xl">🕒</div>
                <div>
                  <p className="text-gray-400 text-sm">Çalışma Saatleri</p>
                  <p className="text-white mt-1">
                    Her Gün
                    <br />
                    11:00 - 23:00
                  </p>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">

              <a
                href="tel:+905433450017"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-7 py-4 rounded-full font-bold text-center"
              >
                📞 Hemen Ara
              </a>

              <a
                href="https://wa.me/905433450017"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 transition px-7 py-4 rounded-full font-bold text-center"
              >
                💬 WhatsApp'tan Yaz
              </a>

            </div>

          </div>


          {/* HARİTA */}
          <div className="bg-[#10304f] rounded-3xl p-4 shadow-xl">

            <iframe
              className="rounded-2xl w-full h-[400px]"
              src="https://www.google.com/maps?q=Balıkçı%20Halil%20Geyikli&output=embed"
              loading="lazy"
            />

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Balıkçı%20Halil%20Geyikli"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-cyan-500 hover:bg-cyan-600 transition px-7 py-4 rounded-full font-bold text-center"
            >
              📍 Yol Tarifi Al
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}